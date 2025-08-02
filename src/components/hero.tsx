"use client";

import { Check, Bot, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import WaitlistForm from "@/components/waitlist-form";
import Image from "next/image";

export default function Hero() {
  const [showFuseBotDialog, setShowFuseBotDialog] = useState(false);

  return (
    <div className="relative overflow-hidden bg-dashboard-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-dashboard-bg via-dashboard-border/10 to-dashboard-bg opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold font-digital text-dashboard-text mb-8 tracking-tight">
              Your Entire Cannabis Operation —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dashboard-text to-dashboard-border">
                In One Dashboard
              </span>
            </h1>

            <p className="text-xl text-dashboard-text/80 mb-12 max-w-2xl mx-auto leading-relaxed font-mono">
              Say Goodbye to 47 tabs, 15 logins, and missed updates. Connect
              every department on one page.
            </p>

            <WaitlistForm />

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-dashboard-text/70 font-mono">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-dashboard-text" />
                <span>METRC Integration Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-dashboard-text" />
                <span>Compliance Built-In</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-dashboard-text" />
                <span>Multi-License Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <div
          className="bg-dashboard-text text-dashboard-bg rounded-full p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer group animate-pulse hover:animate-none"
          onClick={() => setShowFuseBotDialog(true)}
        >
          <div className="flex items-center space-x-2">
            <Bot className="w-6 h-6" />
            <span className="font-digital text-sm hidden group-hover:block whitespace-nowrap">
              FuseBot AI
            </span>
          </div>
        </div>
      </div>

      <Dialog open={showFuseBotDialog} onOpenChange={setShowFuseBotDialog}>
        <DialogContent className="bg-dashboard-bg border-dashboard-border text-dashboard-text">
          <DialogHeader>
            <DialogTitle className="font-digital text-dashboard-text flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <span>FuseBot AI Assistant</span>
            </DialogTitle>
            <DialogDescription className="font-mono text-dashboard-text/80">
              AI Cannabis ERP Assistant is Available only in RootFuse.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="font-mono text-dashboard-text/70 mb-4">
              Get access to our intelligent AI assistant that helps manage your
              cannabis operations, compliance, and workflows when you join
              RootFuse.
            </p>
            <div className="flex justify-end space-x-2">
              <Button
                onClick={() => setShowFuseBotDialog(false)}
                variant="outline"
                className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border font-mono"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setShowFuseBotDialog(false);
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital"
              >
                Learn More
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
