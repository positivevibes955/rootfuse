"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { createClient } from "../../../supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Leaf, Zap, Shield, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";

const pricingTiers = [
  {
    name: "Starter Command",
    price: 260,
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
    price: 480,
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
    price: 880,
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
    isContactUs: true,
  },
];

const upsells = [
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
                  {tier.isContactUs ? (
                    <span className="text-2xl">Contact Us</span>
                  ) : (
                    <>
                      ${tier.price}
                      <span className="text-sm font-mono text-dashboard-text/70">
                        /month
                      </span>
                    </>
                  )}
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
                      <Link
                        href="/additional-license-types-info"
                        className="hover:text-dashboard-text"
                      >
                        Extra License:{" "}
                        {tier.extraLicense === "Not available"
                          ? tier.extraLicense
                          : `${tier.extraLicense}/month`}
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/extra-users-info"
                        className="hover:text-dashboard-text"
                      >
                        Extra User: ${tier.extraUser}/month
                        {tier.maxUsers && ` (up to ${tier.maxUsers})`}
                      </Link>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() =>
                    tier.isContactUs
                      ? (window.location.href = "/help-center")
                      : addToCart(tier)
                  }
                  className="w-full bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg font-digital"
                >
                  {tier.isContactUs ? "Contact Us" : "Add to Cart"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upsells Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-8 text-center">
            Upgrades at Any Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upsells.map((upsell, index) => (
              <Card
                key={index}
                className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer"
                onClick={() => (window.location.href = upsell.link)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold font-digital text-dashboard-text hover:text-dashboard-text/80">
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
                      <p className="text-dashboard-text/50 font-mono text-xs mt-2">
                        Click for details →
                      </p>
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
      <Footer />
    </div>
  );
}
