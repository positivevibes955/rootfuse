"use client";

import React, { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Mail, ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function WaitlistSuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [phone, setPhone] = useState("");
  const [textAlertsEnabled, setTextAlertsEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError("Phone number is required");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/text-alert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
          textAlertsEnabled,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save phone number");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("Error saving phone number. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-dashboard-bg p-4">
      <Card className="w-full max-w-md bg-dashboard-bg border-dashboard-border">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-dashboard-text rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-dashboard-bg" />
          </div>
          <CardTitle className="text-2xl font-bold text-dashboard-text font-digital">
            Welcome to the Waitlist!
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="bg-dashboard-border/10 rounded-lg p-4 text-center w-full">
            <Mail className="w-6 h-6 text-dashboard-text mx-auto mb-2" />
            <p className="text-dashboard-text font-mono mb-2">
              Thanks for joining our waitlist!
            </p>
            <p className="text-dashboard-text/70 font-mono text-sm">
              We'll notify you as soon as Rootfuse Command Center is ready to
              launch.
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-dashboard-border/5 rounded-lg p-4 w-full">
              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <Phone className="w-6 h-6 text-dashboard-text mx-auto mb-2" />
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Get notified by text or call when ready:
                  </p>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-dashboard-text font-mono"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    className="bg-dashboard-bg border-dashboard-border text-dashboard-text font-mono"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="textAlerts"
                    checked={textAlertsEnabled}
                    onCheckedChange={(checked) =>
                      setTextAlertsEnabled(checked as boolean)
                    }
                    className="border-dashboard-border data-[state=checked]:bg-dashboard-text data-[state=checked]:text-dashboard-bg"
                  />
                  <Label
                    htmlFor="textAlerts"
                    className="text-dashboard-text/80 font-mono text-sm"
                  >
                    Enable text/call notifications
                  </Label>
                </div>

                {error && (
                  <p className="text-red-400 font-mono text-sm text-center">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital"
                >
                  {isSubmitting ? "Saving..." : "Save Phone Number"}
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-dashboard-border/10 rounded-lg p-4 text-center w-full">
              <Check className="w-6 h-6 text-dashboard-text mx-auto mb-2" />
              <p className="text-dashboard-text font-mono mb-2">
                Phone number saved successfully!
              </p>
              <p className="text-dashboard-text/70 font-mono text-sm">
                We'll contact you when Rootfuse is ready.
              </p>
            </div>
          )}

          <div className="flex gap-4 mt-4">
            <Button
              asChild
              className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default function WaitlistSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen flex-col items-center justify-center bg-dashboard-bg p-4">
          <Card className="w-full max-w-md bg-dashboard-bg border-dashboard-border">
            <CardContent className="flex items-center justify-center p-8">
              <div className="text-dashboard-text font-mono">Loading...</div>
            </CardContent>
          </Card>
        </main>
      }
    >
      <WaitlistSuccessContent />
    </Suspense>
  );
}
