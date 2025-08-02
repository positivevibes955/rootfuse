"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import CartItem from "@/components/cart-item";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { createClient } from "../../../supabase/client";
import Link from "next/link";

interface CartItemType {
  id: string;
  tier_name: string;
  base_price: number;
  extra_licenses: number;
  extra_users: number;
  upsells: Array<{ name: string; price: number }>;
  total_price: number;
}

export default function CartPage() {
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

  const calculateItemTotal = (item: CartItemType) => {
    let total = item.base_price;

    // Add extra license costs based on tier
    const tierPricing = {
      "Growth Command": 299,
      "Pro Command": 399,
      "Enterprise Command": 499,
    };

    if (item.tier_name !== "Starter Command" && item.extra_licenses > 0) {
      total +=
        item.extra_licenses *
        (tierPricing[item.tier_name as keyof typeof tierPricing] || 0);
    }

    // Add extra user costs based on tier
    const userPricing = {
      "Starter Command": 29,
      "Growth Command": 39,
      "Pro Command": 49,
      "Enterprise Command": 59,
    };

    if (item.extra_users > 0) {
      total +=
        item.extra_users *
        (userPricing[item.tier_name as keyof typeof userPricing] || 0);
    }

    // Add upsell costs
    if (item.upsells) {
      total += item.upsells.reduce((sum, upsell) => sum + upsell.price, 0);
    }

    return total;
  };

  const updateCartItem = async (id: string, field: string, value: number) => {
    try {
      const updatedItems = cartItems.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          updatedItem.total_price = calculateItemTotal(updatedItem);
          return updatedItem;
        }
        return item;
      });

      setCartItems(updatedItems);

      const itemToUpdate = updatedItems.find((item) => item.id === id);
      if (itemToUpdate) {
        const { error } = await supabase
          .from("cart_items")
          .update({
            [field]: value,
            total_price: itemToUpdate.total_price,
            updated_at: new Date().toISOString(),
          })
          .eq("id", id);

        if (error) throw error;
      }
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const removeCartItem = async (id: string) => {
    try {
      const { error } = await supabase.from("cart_items").delete().eq("id", id);

      if (error) throw error;
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.total_price,
    0,
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-dashboard-bg">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
            Please Sign In
          </h1>
          <p className="text-dashboard-text/70 font-mono mb-8">
            You need to be signed in to view your cart.
          </p>
          <Link href="/sign-in?redirect=cart">
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
          <p className="text-dashboard-text font-mono">Loading cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="h-8 w-8 text-dashboard-text" />
          <h1 className="text-3xl font-bold font-digital text-dashboard-text">
            Your Cart
          </h1>
          {cartItems.length > 0 && (
            <Badge className="bg-dashboard-border text-dashboard-text">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
            </Badge>
          )}
        </div>

        {cartItems.length === 0 ? (
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-16 text-center">
              <ShoppingCart className="h-16 w-16 text-dashboard-text/30 mx-auto mb-4" />
              <h2 className="text-xl font-bold font-digital text-dashboard-text mb-2">
                Your cart is empty
              </h2>
              <p className="text-dashboard-text/70 font-mono mb-6">
                Add some pricing tiers to get started.
              </p>
              <Link href="/pricing">
                <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital">
                  View Pricing
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateCartItem}
                  onRemove={removeCartItem}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-dashboard-bg border-dashboard-border sticky top-4">
                <CardHeader>
                  <CardTitle className="text-dashboard-text font-digital">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-dashboard-text/70 font-mono">
                          {item.tier_name}
                        </span>
                        <span className="text-dashboard-text font-mono">
                          ${item.total_price}/month
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-dashboard-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold font-digital text-dashboard-text">
                        Total
                      </span>
                      <span className="text-2xl font-bold font-digital text-dashboard-text">
                        ${totalAmount.toFixed(2)}/month
                      </span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button className="w-full bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital text-lg py-6">
                      Proceed to Checkout
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>

                  <Link href="/pricing">
                    <Button
                      variant="outline"
                      className="w-full border-dashboard-border text-dashboard-text hover:bg-dashboard-border/20 font-mono"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
