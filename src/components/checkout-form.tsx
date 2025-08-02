"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Lock } from "lucide-react";
import { createClient } from "../../supabase/client";

interface CheckoutFormProps {
  cartItems: Array<{
    id: string;
    tier_name: string;
    base_price: number;
    extra_licenses: number;
    extra_users: number;
    upsells: Array<{ name: string; price: number }>;
    total_price: number;
  }>;
  totalAmount: number;
  onCheckout: (paymentData: any) => void;
}

export default function CheckoutForm({
  cartItems,
  totalAmount,
  onCheckout,
}: CheckoutFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/sign-in?redirect=checkout";
        return;
      }

      // Validate form data
      if (
        !formData.email ||
        !formData.name ||
        !formData.cardNumber ||
        !formData.expiryDate ||
        !formData.cvv
      ) {
        alert("Please fill in all required fields.");
        setIsProcessing(false);
        return;
      }

      // Create checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          customerInfo: formData,
          userId: user.id,
        }),
      });

      const result = await response.json();

      if (result.url) {
        // Clear cart items after successful checkout session creation
        await supabase.from("cart_items").delete().eq("user_id", user.id);

        // Redirect to Stripe checkout
        window.location.href = result.url;
      } else {
        throw new Error(result.error || "Failed to create checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error processing your payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Order Summary */}
      <Card className="bg-dashboard-bg border-dashboard-border">
        <CardHeader>
          <CardTitle className="text-dashboard-text font-digital">
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold font-digital text-dashboard-text">
                    {item.tier_name}
                  </h4>
                  <p className="text-sm text-dashboard-text/70 font-mono">
                    Base: ${item.base_price}/month
                  </p>
                  {item.extra_licenses > 0 && (
                    <p className="text-sm text-dashboard-text/70 font-mono">
                      Extra Licenses: {item.extra_licenses}
                    </p>
                  )}
                  {item.extra_users > 0 && (
                    <p className="text-sm text-dashboard-text/70 font-mono">
                      Extra Users: {item.extra_users}
                    </p>
                  )}
                </div>
                <span className="font-bold font-digital text-dashboard-text">
                  ${item.total_price}/month
                </span>
              </div>

              {item.upsells && item.upsells.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {item.upsells.map((upsell, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-dashboard-border text-dashboard-text text-xs"
                    >
                      {upsell.name}
                    </Badge>
                  ))}
                </div>
              )}

              <Separator className="bg-dashboard-border" />
            </div>
          ))}

          <div className="flex justify-between items-center pt-4 border-t border-dashboard-border">
            <span className="text-lg font-bold font-digital text-dashboard-text">
              Total
            </span>
            <span className="text-2xl font-bold font-digital text-dashboard-text">
              ${totalAmount}/month
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Payment Form */}
      <Card className="bg-dashboard-bg border-dashboard-border">
        <CardHeader>
          <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-dashboard-text font-mono">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-dashboard-text font-mono">
                Full Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="cardNumber"
                className="text-dashboard-text font-mono"
              >
                Card Number
              </Label>
              <Input
                id="cardNumber"
                value={formData.cardNumber}
                onChange={(e) => {
                  // Format card number with spaces
                  const value = e.target.value
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim();
                  if (value.length <= 19) {
                    handleInputChange("cardNumber", value);
                  }
                }}
                required
                className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                placeholder="4242 4242 4242 4242 (Test Card)"
                maxLength={19}
              />
              <div className="text-xs text-dashboard-text/60 font-mono space-y-1">
                <p>
                  <strong>Test Cards:</strong>
                </p>
                <p>• Success: 4242 4242 4242 4242</p>
                <p>• Declined: 4000 0000 0000 0002</p>
                <p>• Requires Auth: 4000 0025 0000 3155</p>
                <button
                  type="button"
                  onClick={() =>
                    handleInputChange("cardNumber", "4242 4242 4242 4242")
                  }
                  className="text-dashboard-text hover:text-dashboard-border underline"
                >
                  Use Test Card
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="expiryDate"
                  className="text-dashboard-text font-mono"
                >
                  Expiry Date
                </Label>
                <Input
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) => {
                    // Format expiry date as MM/YY
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .replace(/(\d{2})(\d)/, "$1/$2");
                    if (value.length <= 5) {
                      handleInputChange("expiryDate", value);
                    }
                  }}
                  required
                  className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                  placeholder="12/34 (Any future date)"
                  maxLength={5}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-dashboard-text font-mono">
                  CVV
                </Label>
                <Input
                  id="cvv"
                  value={formData.cvv}
                  onChange={(e) => {
                    // Only allow numbers for CVV
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 4) {
                      handleInputChange("cvv", value);
                    }
                  }}
                  required
                  className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                  placeholder="123 (Any 3-4 digits)"
                  maxLength={4}
                />
              </div>
            </div>

            <Separator className="bg-dashboard-border" />

            <div className="space-y-2">
              <Label
                htmlFor="address"
                className="text-dashboard-text font-mono"
              >
                Billing Address
              </Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                required
                className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                placeholder="123 Main St"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-dashboard-text font-mono">
                  City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                  className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                  placeholder="New York"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="zipCode"
                  className="text-dashboard-text font-mono"
                >
                  ZIP Code
                </Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  required
                  className="bg-dashboard-bg border-dashboard-border text-dashboard-text"
                  placeholder="10001"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital text-lg py-6"
            >
              {isProcessing ? (
                "Processing..."
              ) : (
                <>
                  <Lock className="h-5 w-5 mr-2" />
                  Complete Payment - ${totalAmount}/month
                </>
              )}
            </Button>

            <p className="text-xs text-dashboard-text/60 font-mono text-center">
              Your payment information is secure and encrypted.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
