"use client";

import Navbar from "@/components/navbar";
import { createClient } from "../../../supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Leaf, Zap, Shield, Users } from "lucide-react";
import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";

const pricingTiers = [
  {
    name: "Starter Command",
    price: 275,
    description: "Perfect for single-license operations getting started",
    features: [
      "Dashboard engine (rootUI)",
      "2 users included",
      "1 license type (Grow, Process, or Retail)",
      "Basic METRC Sync",
      "Core tiles: Financial, Sales, Inventory, HR, Client, Facility, Calendar, Compliance",
      "Lite KPIs",
      "Weather integration",
      "Shift tracking",
      "Facility status monitoring",
      "Trial marketplace access (1 free listing for 6 months)",
      "Lite AI assistant",
    ],
    extraLicense: "Not available",
    extraUser: 29,
    popular: false,
  },
  {
    name: "Growth Command",
    price: 499,
    description: "Advanced features for growing operations",
    features: [
      "Everything in Starter Command",
      "Advanced METRC alerts",
      "Interactive dashboards",
      "Pro analytics",
      "5 role permissions",
      "Advanced AI Assist",
      "Integration Hub",
      "Report Builder",
      "Limited Wholesale marketplace access",
      "3 free listings (for 6 months)",
      "Product Dev & Tracking",
    ],
    extraLicense: 299,
    extraUser: 39,
    maxUsers: 10,
    popular: true,
  },
  {
    name: "Pro Command",
    price: 999,
    description: "Full-featured solution for established operations",
    features: [
      "Everything in Growth Command",
      "Advanced analytics",
      "Full role permissions",
      "Unlimited license types",
      "Audit trail",
      "Full marketplace access",
      "5 free listings (for 6 months)",
    ],
    extraLicense: 399,
    extraUser: 49,
    maxUsers: 20,
    popular: false,
  },
  {
    name: "Enterprise Command",
    price: 1799,
    description: "Enterprise-grade solution with premium support",
    features: [
      "Everything in Pro Command",
      "SLA support",
      "User groups",
      "Inter-license data flow",
      "White label capabilities",
      "Priority support",
      "Custom workflows",
    ],
    extraLicense: 499,
    extraUser: 59,
    maxUsers: "Unlimited",
    popular: false,
  },
];

const upsells = [
  { name: "METRC Sync", price: 79.5, unit: "per license" },
  {
    name: "Product Photography",
    price: 199.5,
    unit: "per month (20 images)",
    alternative: "$15 each",
  },
  {
    name: "Video Creation",
    price: 569,
    unit: "per month (10 videos)",
    alternative: "$99 each",
  },
  { name: "Custom Branded Setup", price: 1500, unit: "one-time" },
  { name: "Custom Dashboard per Role/Team", price: 3500, unit: "one-time" },
  { name: "Done With You Setup (video)", price: 1200, unit: "4 hrs at $300/h" },
  {
    name: "Done For You Setup (in person)",
    price: 1500,
    unit: "4 hrs (<200 mi from OKC)",
    note: "$1200 + Travel/Lodge >200mi",
  },
];

export default function Pricing() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const addToCart = async (tier: any) => {
    if (!user) {
      window.location.href = "/sign-in?redirect=pricing";
      return;
    }

    try {
      const { error } = await supabase.from("cart_items").insert({
        user_id: user.id,
        tier_name: tier.name,
        base_price: tier.price,
        extra_licenses: 0,
        extra_users: 0,
        upsells: [],
        total_price: tier.price,
      });

      if (error) throw error;

      // Redirect to cart
      window.location.href = "/cart";
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Error adding item to cart. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-digital text-dashboard-text mb-4">
            Command Tier Pricing
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono">
            Choose your command level. Scale as you grow.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`relative bg-dashboard-bg border-dashboard-border ${
                tier.popular
                  ? "border-2 border-dashboard-text shadow-xl scale-105"
                  : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-dashboard-text text-dashboard-bg font-digital">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-dashboard-text font-digital">
                  {tier.name}
                </CardTitle>
                <div className="text-3xl font-bold font-digital text-dashboard-text">
                  ${tier.price}
                  <span className="text-sm font-mono text-dashboard-text/70">
                    /month
                  </span>
                </div>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                      <span className="text-dashboard-text/80 font-mono text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-dashboard-border">
                  <div className="text-sm font-mono text-dashboard-text/70 space-y-1">
                    <div>
                      Extra License:{" "}
                      {tier.extraLicense === "Not available"
                        ? tier.extraLicense
                        : `${tier.extraLicense}/month`}
                    </div>
                    <div>
                      Extra User: ${tier.extraUser}/month
                      {tier.maxUsers && ` (up to ${tier.maxUsers})`}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => addToCart(tier)}
                  className="w-full bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg font-digital"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upsells Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-8 text-center">
            Available Upsells (Any Tier)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upsells.map((upsell, index) => (
              <Card
                key={index}
                className="bg-dashboard-bg border-dashboard-border"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold font-digital text-dashboard-text">
                        {upsell.name}
                      </h3>
                      <p className="text-dashboard-text/70 font-mono text-sm">
                        {upsell.unit}
                      </p>
                      {upsell.alternative && (
                        <p className="text-dashboard-text/60 font-mono text-xs">
                          or {upsell.alternative}
                        </p>
                      )}
                      {upsell.note && (
                        <p className="text-dashboard-text/60 font-mono text-xs mt-1">
                          {upsell.note}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold font-digital text-dashboard-text">
                        ${upsell.price}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
