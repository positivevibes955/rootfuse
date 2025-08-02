"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [interestedPlan, setInterestedPlan] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.trim()) {
      setMessage("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          license_type: licenseType,
          plan_level: interestedPlan,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const responseData = await response.json();

      if (!response.ok) {
        setMessage(responseData.error || `Server error (${response.status})`);
        return;
      }

      router.push("/waitlist-success");
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          setMessage("Request timed out. Please try again.");
        } else {
          setMessage("Network error. Please try again.");
        }
      } else {
        setMessage("Please try again");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 max-w-lg mx-auto space-y-4">
      <div>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          className="bg-dashboard-bg border-dashboard-border text-dashboard-text placeholder:text-dashboard-text/50 font-mono"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Select
            value={licenseType}
            onValueChange={setLicenseType}
            disabled={isSubmitting}
          >
            <SelectTrigger className="bg-dashboard-bg border-dashboard-border text-dashboard-text font-mono">
              <SelectValue placeholder="License Type" />
            </SelectTrigger>
            <SelectContent className="bg-dashboard-bg border-dashboard-border">
              <SelectItem
                value="cultivation"
                className="text-dashboard-text font-mono hover:bg-dashboard-border"
              >
                Cultivation
              </SelectItem>
              <SelectItem
                value="processor"
                className="text-dashboard-text font-mono hover:bg-dashboard-border"
              >
                Processor
              </SelectItem>
              <SelectItem
                value="dispensary"
                className="text-dashboard-text font-mono hover:bg-dashboard-border"
              >
                Dispensary
              </SelectItem>
              <SelectItem
                value="multiple"
                className="text-dashboard-text font-mono hover:bg-dashboard-border"
              >
                Multiple Types
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select
            value={interestedPlan}
            onValueChange={setInterestedPlan}
            disabled={isSubmitting}
          >
            <SelectTrigger className="bg-dashboard-bg border-dashboard-border text-dashboard-text font-mono">
              <SelectValue placeholder="Interested Plan" />
            </SelectTrigger>
            <SelectContent className="bg-dashboard-bg border-dashboard-border">
              <SelectItem
                value="basic"
                className="text-dashboard-text font-mono hover:bg-dashboard-border"
              >
                Basic - $275/month
              </SelectItem>
              <SelectItem
                value="professional"
                className="text-dashboard-text font-mono hover:bg-dashboard-border"
              >
                Professional - $375/month
              </SelectItem>
              <SelectItem
                value="enterprise"
                className="text-dashboard-text font-mono hover:bg-dashboard-border"
              >
                Enterprise - $575/month
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !email}
        className="w-full bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8 py-3"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
        <Mail className="ml-2 w-4 h-4" />
      </Button>

      {message && (
        <p className="mt-4 text-sm font-mono text-dashboard-text/80">
          {message}
        </p>
      )}
    </form>
  );
}
