import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "../../../../supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cartItems, totalAmount, customerInfo, userId } = body;

    if (!cartItems || !totalAmount || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    // Create line items for Stripe
    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: `Rootfuse ${item.tier_name}`,
          description: `Monthly subscription for ${item.tier_name} tier`,
        },
        unit_amount: Math.round(item.total_price * 100), // Convert to cents
        recurring: {
          interval: "month",
        },
      },
      quantity: 1,
    }));

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "subscription",
      success_url: `https://www.rootfuse.com/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://www.rootfuse.com/checkout?canceled=true`,
      customer_email: customerInfo.email,
      metadata: {
        userId,
        totalAmount: totalAmount.toString(),
        itemCount: cartItems.length.toString(),
      },
    });

    // Store checkout session in database
    const { error: sessionError } = await supabase
      .from("checkout_sessions")
      .insert({
        user_id: userId,
        stripe_session_id: session.id,
        cart_items: cartItems,
        total_amount: totalAmount,
        status: "pending",
        customer_email: customerInfo.email,
      });

    if (sessionError) {
      console.error("Error storing checkout session:", sessionError);
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout API error:", error);

    // Track failed payment attempt
    try {
      const supabase = await createClient();
      await supabase.from("failed_payments").insert({
        user_id: body.userId,
        email: body.customerInfo?.email,
        cart_items: body.cartItems,
        total_amount: body.totalAmount,
        failure_reason:
          error instanceof Error ? error.message : "Unknown checkout error",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    } catch (trackingError) {
      console.error("Error tracking failed payment:", trackingError);
    }

    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
