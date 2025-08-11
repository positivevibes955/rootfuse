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
import { useState, useEffect } from "react";
import WaitlistForm from "@/components/waitlist-form";
import Image from "next/image";
import { getImageUrl } from "@/utils/storage";

export default function Hero() {
  const [showFuseBotDialog, setShowFuseBotDialog] = useState(false);
  const [rootsImageUrl, setRootsImageUrl] = useState<string>("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const fetchRootsImage = async () => {
      try {
        const url = await getImageUrl("rootfuse_roots_overlay.png");
        if (url && !url.includes("sign") && !url.includes("error")) {
          setRootsImageUrl(url);
          console.log("Roots image loaded successfully:", url);
        } else {
          console.log("Roots image not found or invalid URL:", url);
        }
      } catch (error) {
        console.log("Error fetching roots overlay image:", error);
      }
    };
    fetchRootsImage();

    // Check theme on mount and listen for changes
    const checkTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      const isDark = savedTheme !== "light";
      setIsDarkMode(isDark);

      // Also check document class
      const hasDocumentDark =
        document.documentElement.classList.contains("dark");
      if (hasDocumentDark !== isDark) {
        setIsDarkMode(hasDocumentDark);
      }
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative overflow-hidden bg-white dark:bg-dashboard-bg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
    >
      {/* Base background - changes based on theme */}
      <div className="absolute inset-0 bg-white dark:bg-dashboard-bg" />

      {/* Interactive roots reveal with glow effect */}
      {rootsImageUrl && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Glow layer behind the roots */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={
              {
                background:
                  "radial-gradient(circle 80px at var(--mouse-x) var(--mouse-y), rgba(53, 246, 174, 0.8) 0px, rgba(53, 246, 174, 0.4) 35px, rgba(53, 246, 174, 0.2) 60px, transparent 80px)",
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
                opacity: isMouseInside ? 1 : 0,
              } as React.CSSProperties
            }
          />
          {/* Full-size roots image positioned to align with background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${rootsImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(1.6) contrast(1.4) saturate(1.2)",
            }}
          />
          {/* Mask overlay to hide everything except the circular area */}
          <div
            className="absolute inset-0 transition-all duration-300"
            style={
              {
                background: isDarkMode
                  ? isMouseInside
                    ? "radial-gradient(circle 80px at var(--mouse-x) var(--mouse-y), transparent 60px, rgba(2, 22, 18, 0.3) 70px, rgba(2, 22, 18, 0.7) 75px, #021612 80px)"
                    : "#021612"
                  : isMouseInside
                    ? "radial-gradient(circle 80px at var(--mouse-x) var(--mouse-y), transparent 60px, rgba(255, 255, 255, 0.3) 70px, rgba(255, 255, 255, 0.7) 75px, rgba(255, 255, 255, 1) 80px)"
                    : "#ffffff",
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
              } as React.CSSProperties
            }
          />
        </div>
      )}

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
                <span className="text-dashboard-text-darker dark:text-dashboard-text-darker light:text-dashboard-text-darkest">
                  METRC Integration Ready
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-dashboard-text" />
                <span className="text-dashboard-text-darker dark:text-dashboard-text-darker light:text-dashboard-text-darkest">
                  Compliance Built-In
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-dashboard-text" />
                <span className="text-dashboard-text-darker dark:text-dashboard-text-darker light:text-dashboard-text-darkest">
                  Multi-License Support
                </span>
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
