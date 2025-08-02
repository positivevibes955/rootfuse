"use client";

import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { supabase } from "../../supabase/supabase";

export default function PricingCard({
  item,
  user,
}: {
  item: any;
  user: User | null;
}) {
  // Handle checkout process
  const handleCheckout = async (priceId: string) => {
    if (!user) {
      // Redirect to login if user is not authenticated
      window.location.href = "/login?redirect=pricing";
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-create-checkout",
        {
          body: {
            price_id: priceId,
            user_id: user.id,
            return_url: `${window.location.origin}/dashboard`,
          },
          headers: {
            "X-Customer-Email": user.email || "",
          },
        },
      );

      if (error) {
        throw error;
      }

      // Redirect to Stripe checkout
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <Card
      className={`w-full max-w-[350px] relative overflow-hidden bg-dashboard-bg border-dashboard-border ${item.popular ? "border-2 border-dashboard-text shadow-xl scale-105" : ""}`}
    >
      {item.popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-dashboard-border/10 via-dashboard-bg to-dashboard-border/10 opacity-30" />
      )}
      <CardHeader className="relative">
        {item.popular && (
          <div className="px-4 py-1.5 text-sm font-medium font-digital text-dashboard-bg bg-dashboard-text rounded-full w-fit mb-4">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl font-bold font-digital tracking-tight text-dashboard-text">
          {item.name}
        </CardTitle>
        <CardDescription className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-bold font-digital text-dashboard-text">
            ${item?.amount / 100}
          </span>
          <span className="text-dashboard-text/70 font-mono">
            /{item?.interval}
          </span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="relative">
        <Button
          onClick={async () => {
            await handleCheckout(item.id);
          }}
          className="w-full py-6 text-lg font-medium font-digital bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg"
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
