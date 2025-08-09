import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "../../../../../supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature")!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;

        // Update checkout session status
        await supabase
          .from("checkout_sessions")
          .update({
            status: "completed",
            payment_intent_id: session.payment_intent as string,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_session_id", session.id);

        // Create order record
        const { data: checkoutData } = await supabase
          .from("checkout_sessions")
          .select("*")
          .eq("stripe_session_id", session.id)
          .single();

        if (checkoutData && checkoutData.cart_items) {
          const cartItems = checkoutData.cart_items as any[];

          for (const item of cartItems) {
            await supabase.from("orders").insert({
              user_id: checkoutData.user_id,
              checkout_session_id: checkoutData.id,
              tier_name: item.tier_name,
              base_price: item.base_price,
              extra_licenses: item.extra_licenses || 0,
              extra_users: item.extra_users || 0,
              upsells: item.upsells || [],
              total_amount: item.total_price,
              status: "active",
              stripe_subscription_id: session.subscription as string,
            });
          }
        }
        break;

      case "checkout.session.expired":
      case "invoice.payment_failed":
        const failedSession = event.data.object as
          | Stripe.Checkout.Session
          | Stripe.Invoice;

        let sessionId: string;
        let customerEmail: string | null = null;

        if (event.type === "checkout.session.expired") {
          sessionId = (failedSession as Stripe.Checkout.Session).id;
          customerEmail = (failedSession as Stripe.Checkout.Session)
            .customer_email;
        } else {
          // For invoice.payment_failed, we need to get the session from the subscription
          const invoice = failedSession as Stripe.Invoice;
          const subscription = await stripe.subscriptions.retrieve(
            invoice.subscription as string,
          );
          sessionId = subscription.metadata?.checkout_session_id || "";
          customerEmail = invoice.customer_email;
        }

        // Update checkout session status
        await supabase
          .from("checkout_sessions")
          .update({
            status: "failed",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_session_id", sessionId);

        // Get checkout session data for failed payment tracking
        const { data: failedCheckoutData } = await supabase
          .from("checkout_sessions")
          .select("*")
          .eq("stripe_session_id", sessionId)
          .single();

        if (failedCheckoutData) {
          // Track failed payment for follow-up
          await supabase.from("failed_payments").insert({
            user_id: failedCheckoutData.user_id,
            email: customerEmail || failedCheckoutData.customer_email,
            checkout_session_id: failedCheckoutData.id,
            stripe_session_id: sessionId,
            cart_items: failedCheckoutData.cart_items,
            total_amount: failedCheckoutData.total_amount,
            failure_reason:
              event.type === "checkout.session.expired"
                ? "Session expired"
                : "Payment failed",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }
}
