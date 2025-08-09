"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GetStartedForm() {
  const [email, setEmail] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [state, setState] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [customSource, setCustomSource] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Fix hydration by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.trim()) {
      setMessage("Please enter your email address");
      return;
    }

    if (!licenseType) {
      setMessage("Please select a license type");
      return;
    }

    if (!state) {
      setMessage("Please select your state");
      return;
    }

    if (!hearAboutUs) {
      setMessage("Please tell us how you heard about us");
      return;
    }

    if (
      (hearAboutUs === "event" || hearAboutUs === "referral") &&
      !customSource
    ) {
      setMessage(`Please specify the ${hearAboutUs} details`);
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

      const sourceDetail =
        hearAboutUs === "event" || hearAboutUs === "referral"
          ? customSource
          : null;

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          license_type: licenseType,
          state: state,
          source: hearAboutUs,
          source_detail: sourceDetail,
          action: "get_started",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const responseData = await response.json();

      if (!response.ok) {
        setMessage(responseData.error || `Server error (${response.status})`);
        return;
      }

      // Redirect to pricing page after successful form submission
      router.push("/pricing");
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

  if (!isClient) {
    return (
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="text-center text-dashboard-text font-mono">
          Loading form...
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="text-dashboard-text font-mono"
              >
                Cultivation
              </SelectItem>
              <SelectItem
                value="processor"
                className="text-dashboard-text font-mono"
              >
                Processor
              </SelectItem>
              <SelectItem
                value="dispensary"
                className="text-dashboard-text font-mono"
              >
                Dispensary
              </SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={state}
            onValueChange={setState}
            disabled={isSubmitting}
          >
            <SelectTrigger className="bg-dashboard-bg border-dashboard-border text-dashboard-text font-mono">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent className="bg-dashboard-bg border-dashboard-border">
              <SelectItem value="OK" className="text-dashboard-text font-mono">
                Oklahoma
              </SelectItem>
              <SelectItem value="MI" className="text-dashboard-text font-mono">
                Michigan
              </SelectItem>
              <SelectItem value="CA" className="text-dashboard-text font-mono">
                California
              </SelectItem>
              <SelectItem value="OR" className="text-dashboard-text font-mono">
                Oregon
              </SelectItem>
              <SelectItem value="CO" className="text-dashboard-text font-mono">
                Colorado
              </SelectItem>
              <SelectItem value="MS" className="text-dashboard-text font-mono">
                Mississippi
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Select
            value={hearAboutUs}
            onValueChange={setHearAboutUs}
            disabled={isSubmitting}
          >
            <SelectTrigger className="bg-dashboard-bg border-dashboard-border text-dashboard-text font-mono">
              <SelectValue placeholder="How did you hear about us?" />
            </SelectTrigger>
            <SelectContent className="bg-dashboard-bg border-dashboard-border">
              <SelectItem
                value="web search"
                className="text-dashboard-text font-mono"
              >
                Web Search
              </SelectItem>
              <SelectItem
                value="event"
                className="text-dashboard-text font-mono"
              >
                Event
              </SelectItem>
              <SelectItem
                value="referral"
                className="text-dashboard-text font-mono"
              >
                Referral
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {(hearAboutUs === "event" || hearAboutUs === "referral") && (
          <Input
            type="text"
            placeholder={
              hearAboutUs === "event" ? "Which event?" : "Who referred you?"
            }
            value={customSource}
            onChange={(e) => setCustomSource(e.target.value)}
            required
            disabled={isSubmitting}
            className="bg-dashboard-bg border-dashboard-border text-dashboard-text placeholder:text-dashboard-text/50 font-mono"
          />
        )}

        <Button
          type="submit"
          disabled={
            isSubmitting || !email || !licenseType || !state || !hearAboutUs
          }
          className="w-full bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-6 py-3"
        >
          {isSubmitting ? "Getting Rootfuse..." : "Get Rootfuse"}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>

        {message && (
          <p className="mt-4 text-sm font-mono text-dashboard-text/80 text-center">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
