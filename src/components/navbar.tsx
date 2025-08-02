"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import { User, UserCircle, Command } from "lucide-react";
import UserProfile from "./user-profile";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageUrl } from "@/utils/storage";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [logoUrl, setLogoUrl] = useState<string>("");

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        // Try to get the logo from Supabase storage
        // Check for the specific logo file name mentioned by user
        const url = await getImageUrl("rootfuse.logo.name.horizontal.png");
        if (url && !url.includes("sign")) {
          setLogoUrl(url);
        } else {
          console.log("Logo not found in storage, using fallback");
        }
      } catch (error) {
        console.log("Error fetching logo from storage:", error);
      }
    };
    fetchLogo();
  }, []);

  return (
    <nav className="w-full border-b border-dashboard-border bg-dashboard-bg py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt="Rootfuse Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
              onError={() => {
                console.log("Failed to load logo image");
                setLogoUrl("");
              }}
            />
          ) : (
            <div className="flex items-center gap-2 text-xl font-bold font-digital text-dashboard-text">
              <Command className="w-6 h-6" />
              Rootfuse
            </div>
          )}
        </Link>
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-dashboard-text hover:text-dashboard-text/80"
              >
                <Button className="bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg font-digital">
                  Command Center
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <button
                onClick={() =>
                  document
                    .getElementById("demo")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-4 py-2 text-sm font-medium font-mono text-dashboard-text hover:text-dashboard-text/80"
              >
                Demo
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-4 py-2 text-sm font-medium font-mono text-dashboard-text hover:text-dashboard-text/80"
              >
                Features
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-4 py-2 text-sm font-medium font-mono text-dashboard-text hover:text-dashboard-text/80"
              >
                Pricing
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("referral")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-4 py-2 text-sm font-medium font-mono text-dashboard-text hover:text-dashboard-text/80"
              >
                Referral
              </button>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium font-digital text-dashboard-bg bg-dashboard-text rounded-md hover:bg-dashboard-border"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
