"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import CheckoutForm from "@/components/checkout-form";
import { createClient } from "../../../supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CartItemType {
  id: string;
  tier_name: string;
  base_price: number;
  extra_licenses: number;
  extra_users: number;
  upsells: Array<{ name: string; price: number }>;
  total_price: number;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        fetchCartItems(user.id);
      } else {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  const fetchCartItems = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCartItems(data || []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.total_price,
    0,
  );

  const handleCheckout = async (paymentData: any) => {
    // This will be handled by the CheckoutForm component
    console.log("Processing checkout:", paymentData);
  };

  const clearCart = async () => {
    if (user) {
      try {
        const { error } = await supabase
          .from("cart_items")
          .delete()
          .eq("user_id", user.id);

        if (!error) {
          setCartItems([]);
        }
      } catch (error) {
        console.error("Error clearing cart:", error);
      }
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-dashboard-bg">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
            Please Sign In
          </h1>
          <p className="text-dashboard-text/70 font-mono mb-8">
            You need to be signed in to checkout.
          </p>
          <Link href="/sign-in?redirect=checkout">
            <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dashboard-bg">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-dashboard-text font-mono">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-dashboard-bg">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
            Your cart is empty
          </h1>
          <p className="text-dashboard-text/70 font-mono mb-8">
            Add some items to your cart before checking out.
          </p>
          <Link href="/pricing">
            <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/cart">
            <Button
              variant="ghost"
              className="text-dashboard-text hover:bg-dashboard-border/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <h1 className="text-3xl font-bold font-digital text-dashboard-text">
            Checkout
          </h1>
        </div>

        <CheckoutForm
          cartItems={cartItems}
          totalAmount={totalAmount}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}
