"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import CartItem from "@/components/cart-item";
import { ShoppingCart, ArrowRight, Tag } from "lucide-react";
import { createClient } from "../../../supabase/client";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";

interface CartItemType {
  id: string;
  tier_name: string;
  base_price: number;
  extra_licenses: number;
  extra_users: number;
  upsells: Array<{ name: string; price: number }>;
  total_price: number;
}

interface UpsellType {
  name: string;
  price: number;
  unit: string;
  alternative?: string;
  note?: string;
  link: string;
}

const availableUpsells: UpsellType[] = [
  {
    name: "METRC Sync",
    price: 79.5,
    unit: "per license per month",
    link: "/metrc-sync-info",
  },
  {
    name: "Product Photography",
    price: 199.5,
    unit: "per month (20 images)",
    alternative: "$15 each",
    link: "/product-photography-info",
  },
  {
    name: "Video Creation",
    price: 569,
    unit: "per month (10 videos)",
    alternative: "$99 each",
    link: "/video-generation-info",
  },
  {
    name: "Custom Branded Setup",
    price: 1500,
    unit: "one-time",
    link: "/custom-branding-info",
  },
  {
    name: "Custom Dashboard per Role/Team",
    price: 3500,
    unit: "one-time",
    link: "/custom-analytics-info",
  },
  {
    name: "Done With You Setup (video)",
    price: 1200,
    unit: "4 hrs at $300/h",
    link: "/done-with-you-info",
  },
  {
    name: "Done For You Setup (in person)",
    price: 1500,
    unit: "4 hrs (<200 mi from OKC)",
    note: "$1200 + Travel/Lodge >200mi",
    link: "/done-for-you-info",
  },
  {
    name: "Environment Sync",
    price: 89,
    unit: "per month",
    link: "/environment-sync-info",
  },
  {
    name: "Text Marketing",
    price: 149,
    unit: "per month (1000 messages)",
    link: "/text-marketing-info",
  },
  {
    name: "Social Media Scheduler",
    price: 99,
    unit: "per month",
    link: "/social-media-scheduler-info",
  },
  {
    name: "AI Automation Services",
    price: 299,
    unit: "per month",
    link: "/ai-automation-services-info",
  },
  {
    name: "Custom AI",
    price: 499,
    unit: "per month",
    link: "/custom-ai-info",
  },
  {
    name: "Auto Accountant",
    price: 199,
    unit: "per month",
    link: "/auto-accountant-info",
  },
  {
    name: "Website Creation",
    price: 2500,
    unit: "one-time + $99/month hosting",
    link: "/website-creation-info",
  },
  {
    name: "Ecommerce Website",
    price: 3500,
    unit: "one-time + $149/month hosting",
    link: "/ecommerce-website-info",
  },
  {
    name: "White Label",
    price: 5000,
    unit: "one-time setup + 30% revenue share",
    link: "/white-label-info",
  },
  {
    name: "Marketplace Access",
    price: 299,
    unit: "per month",
    link: "/marketplace-info",
  },
  {
    name: "Custom Database Setup",
    price: 2000,
    unit: "one-time",
    link: "/custom-database-setup-info",
  },
  {
    name: "API Integration (Not Listed)",
    price: 500,
    unit: "per integration",
    link: "/api-not-listed-info",
  },
  {
    name: "Additional License Types",
    price: 200,
    unit: "per additional type per month",
    link: "/additional-license-types-info",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [applyingCoupon, setApplyingCoupon] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.error("Error getting user:", error);
          setUser(null);
          setLoading(false);
          return;
        }

        setUser(user);

        if (user) {
          await fetchCartItems(user.id);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error in getUser:", error);
        setUser(null);
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

  const subtotalAmount = cartItems.reduce(
    (sum, item) => sum + item.total_price,
    0,
  );

  const totalAmount = subtotalAmount - couponDiscount;

  const applyCoupon = async () => {
    if (!couponCode.trim()) {
      setCouponMessage("Please enter a coupon code");
      return;
    }

    setApplyingCoupon(true);
    setCouponMessage("");

    try {
      // Check for hardcoded RFRF5050 coupon first
      if (couponCode.toUpperCase() === "RFRF5050") {
        const discount = (subtotalAmount * 50) / 100;
        setCouponDiscount(Math.min(discount, subtotalAmount));
        setCouponMessage(
          `Coupon applied! You saved ${Math.min(discount, subtotalAmount).toFixed(2)} (50% off)`,
        );
        setApplyingCoupon(false);
        return;
      }

      const { data, error } = await supabase
        .from("coupon_codes")
        .select("*")
        .eq("code", couponCode.toUpperCase())
        .eq("active", true)
        .single();

      if (error || !data) {
        setCouponMessage("Invalid or expired coupon code");
        setCouponDiscount(0);
        return;
      }

      // Check if coupon has usage limit
      if (data.max_uses && data.current_uses >= data.max_uses) {
        setCouponMessage("This coupon has reached its usage limit");
        setCouponDiscount(0);
        return;
      }

      // Check expiration date
      if (data.expires_at && new Date(data.expires_at) < new Date()) {
        setCouponMessage("This coupon has expired");
        setCouponDiscount(0);
        return;
      }

      // Calculate discount
      let discount = 0;
      if (data.discount_type === "percentage") {
        discount = (subtotalAmount * data.discount_value) / 100;
      } else if (data.discount_type === "fixed") {
        discount = data.discount_value;
      }

      setCouponDiscount(Math.min(discount, subtotalAmount));
      setCouponMessage(
        `Coupon applied! You saved $${Math.min(discount, subtotalAmount).toFixed(2)}`,
      );
    } catch (error) {
      console.error("Error applying coupon:", error);
      setCouponMessage("Error applying coupon. Please try again.");
      setCouponDiscount(0);
    } finally {
      setApplyingCoupon(false);
    }
  };

  const removeCoupon = () => {
    setCouponCode("");
    setCouponDiscount(0);
    setCouponMessage("");
  };

  const getRelevantUpsells = (tierName: string) => {
    // Define what's included in each tier
    const tierIncludes = {
      "Starter Command": ["Basic METRC Sync"],
      "Growth Command": [
        "Basic METRC Sync",
        "Advanced METRC alerts",
        "Integration Hub",
      ],
      "Pro Command": [
        "Basic METRC Sync",
        "Advanced METRC alerts",
        "Integration Hub",
        "Full marketplace access",
      ],
      "Enterprise Command": [
        "Basic METRC Sync",
        "Advanced METRC alerts",
        "Integration Hub",
        "Full marketplace access",
        "White Label",
        "Custom workflows",
      ],
    };

    const included = tierIncludes[tierName as keyof typeof tierIncludes] || [];

    // Filter out upsells that are already included in the tier
    return availableUpsells.filter((upsell) => {
      // Check if this upsell is already included in the tier
      const isIncluded = included.some(
        (includedItem) =>
          upsell.name.toLowerCase().includes(includedItem.toLowerCase()) ||
          includedItem.toLowerCase().includes(upsell.name.toLowerCase()),
      );
      return !isIncluded;
    });
  };

  const addUpsellToCart = async (upsell: UpsellType, cartItemId: string) => {
    try {
      const cartItem = cartItems.find((item) => item.id === cartItemId);
      if (!cartItem) return;

      const updatedUpsells = [
        ...(cartItem.upsells || []),
        { name: upsell.name, price: upsell.price },
      ];
      const newTotalPrice =
        cartItem.base_price +
        cartItem.extra_licenses * getTierLicensePrice(cartItem.tier_name) +
        cartItem.extra_users * getTierUserPrice(cartItem.tier_name) +
        updatedUpsells.reduce((sum, u) => sum + u.price, 0);

      const { error } = await supabase
        .from("cart_items")
        .update({
          upsells: updatedUpsells,
          total_price: newTotalPrice,
          updated_at: new Date().toISOString(),
        })
        .eq("id", cartItemId);

      if (error) throw error;

      // Update local state
      setCartItems(
        cartItems.map((item) =>
          item.id === cartItemId
            ? { ...item, upsells: updatedUpsells, total_price: newTotalPrice }
            : item,
        ),
      );
    } catch (error) {
      console.error("Error adding upsell:", error);
    }
  };

  const getTierLicensePrice = (tierName: string) => {
    const pricing = {
      "Growth Command": 299,
      "Pro Command": 399,
      "Enterprise Command": 499,
    };
    return pricing[tierName as keyof typeof pricing] || 0;
  };

  const getTierUserPrice = (tierName: string) => {
    const pricing = {
      "Starter Command": 29,
      "Growth Command": 39,
      "Pro Command": 49,
      "Enterprise Command": 59,
    };
    return pricing[tierName as keyof typeof pricing] || 0;
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
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="space-y-4">
                  <CartItem
                    item={item}
                    onUpdateQuantity={updateCartItem}
                    onRemove={removeCartItem}
                  />

                  {/* Relevant Upsells for this tier */}
                  <Card className="bg-dashboard-bg border-dashboard-border">
                    <CardHeader>
                      <CardTitle className="text-dashboard-text font-digital text-lg">
                        Available Upgrades for {item.tier_name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getRelevantUpsells(item.tier_name).map(
                          (upsell, index) => {
                            const isAlreadyAdded = item.upsells?.some(
                              (u) => u.name === upsell.name,
                            );
                            return (
                              <div
                                key={index}
                                className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4 hover:border-dashboard-text/50 transition-colors"
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h4 className="font-semibold font-digital text-dashboard-text text-sm">
                                      {upsell.name}
                                    </h4>
                                    <p className="text-dashboard-text/70 font-mono text-xs">
                                      {upsell.unit}
                                    </p>
                                    {upsell.alternative && (
                                      <p className="text-dashboard-text/60 font-mono text-xs">
                                        or {upsell.alternative}
                                      </p>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <div className="text-lg font-bold font-digital text-dashboard-text">
                                      ${upsell.price}
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  onClick={() =>
                                    addUpsellToCart(upsell, item.id)
                                  }
                                  disabled={isAlreadyAdded}
                                  className="w-full bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg font-mono text-xs py-2"
                                >
                                  {isAlreadyAdded ? "Added" : "Add to Cart"}
                                </Button>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
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

                  {/* Coupon Code Section */}
                  <div className="border-t border-dashboard-border pt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-dashboard-text" />
                        <span className="text-sm font-digital text-dashboard-text">
                          Coupon Code
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) =>
                            setCouponCode(e.target.value.toUpperCase())
                          }
                          className="bg-dashboard-bg border-dashboard-border text-dashboard-text placeholder:text-dashboard-text/50 font-mono"
                          disabled={applyingCoupon}
                        />
                        <Button
                          onClick={applyCoupon}
                          disabled={applyingCoupon || !couponCode.trim()}
                          className="bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg font-mono"
                        >
                          {applyingCoupon ? "Applying..." : "Apply"}
                        </Button>
                      </div>
                      {couponMessage && (
                        <p
                          className={`text-sm font-mono ${
                            couponDiscount > 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {couponMessage}
                        </p>
                      )}
                      {couponDiscount > 0 && (
                        <Button
                          onClick={removeCoupon}
                          variant="ghost"
                          className="text-dashboard-text/70 hover:text-dashboard-text font-mono text-sm p-0 h-auto"
                        >
                          Remove coupon
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-dashboard-border pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-dashboard-text/70 font-mono">
                          Subtotal
                        </span>
                        <span className="text-dashboard-text font-mono">
                          ${subtotalAmount.toFixed(2)}/month
                        </span>
                      </div>
                      {couponDiscount > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-green-400 font-mono">
                            Coupon Discount
                          </span>
                          <span className="text-green-400 font-mono">
                            -${couponDiscount.toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center border-t border-dashboard-border pt-2">
                        <span className="text-lg font-bold font-digital text-dashboard-text">
                          Total
                        </span>
                        <span className="text-2xl font-bold font-digital text-dashboard-text">
                          ${totalAmount.toFixed(2)}/month
                        </span>
                      </div>
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

