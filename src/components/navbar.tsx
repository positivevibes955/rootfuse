"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import {
  User,
  UserCircle,
  Command,
  Sun,
  Moon,
  Play,
  Pause,
  Volume2,
} from "lucide-react";
import UserProfile from "./user-profile";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { getImageUrl } from "@/utils/storage";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsClient(true);
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Apply theme to document and all pages including header, body, and footer
    const applyTheme = (dark: boolean) => {
      const root = document.documentElement;
      const body = document.body;
      const html = document.documentElement;

      if (dark) {
        // Apply dark theme classes and styles
        root.classList.add("dark");
        html.classList.add("dark");
        body.classList.add("dark");

        // Set CSS custom properties for dark theme
        root.style.setProperty("--dashboard-bg", "#021612");
        root.style.setProperty("--dashboard-text", "#35f6ae");
        root.style.setProperty("--dashboard-border", "#008347");
        root.style.setProperty("--background", "2 22% 6%");
        root.style.setProperty("--foreground", "174 100% 59%");

        // Apply to body and html
        body.style.backgroundColor = "#021612";
        body.style.color = "#35f6ae";
        html.style.backgroundColor = "#021612";
        html.style.color = "#35f6ae";

        // Apply to all elements with specific classes
        const elements = document.querySelectorAll("*");
        elements.forEach((el) => {
          if (el.classList.contains("bg-white")) {
            el.classList.remove("bg-white");
            el.classList.add("bg-dashboard-bg");
          }
          if (
            el.classList.contains("text-gray-900") ||
            el.classList.contains("text-black")
          ) {
            el.classList.remove("text-gray-900", "text-black");
            el.classList.add("text-dashboard-text");
          }
        });

        localStorage.setItem("theme", "dark");
      } else {
        // Apply light theme classes and styles
        root.classList.remove("dark");
        html.classList.remove("dark");
        body.classList.remove("dark");

        // Set CSS custom properties for light theme
        root.style.setProperty("--dashboard-bg", "#ffffff");
        root.style.setProperty("--dashboard-text", "#1f2937");
        root.style.setProperty("--dashboard-border", "#d1d5db");
        root.style.setProperty("--background", "0 0% 100%");
        root.style.setProperty("--foreground", "222.2 84% 4.9%");

        // Apply to body and html
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#1f2937";
        html.style.backgroundColor = "#ffffff";
        html.style.color = "#1f2937";

        // Apply to all elements with specific classes
        const elements = document.querySelectorAll("*");
        elements.forEach((el) => {
          if (el.classList.contains("bg-dashboard-bg")) {
            el.classList.remove("bg-dashboard-bg");
            el.classList.add("bg-white");
          }
          if (el.classList.contains("text-dashboard-text")) {
            el.classList.remove("text-dashboard-text");
            el.classList.add("text-gray-900");
          }
        });

        localStorage.setItem("theme", "light");
      }
    };

    applyTheme(isDarkMode);

    // Apply theme on route changes and DOM updates
    const observer = new MutationObserver(() => {
      applyTheme(isDarkMode);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    // Also apply theme when page loads
    const handleLoad = () => applyTheme(isDarkMode);
    window.addEventListener("load", handleLoad);
    document.addEventListener("DOMContentLoaded", handleLoad);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("DOMContentLoaded", handleLoad);
    };
  }, [isDarkMode, isClient]);

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
        // Try to get the high quality logo from Supabase storage
        const url = await getImageUrl("rootfuse.logo.name.horizontal.png");
        if (url && !url.includes("sign")) {
          setLogoUrl(url);
        } else {
          console.log("High quality logo not found in storage, using fallback");
        }
      } catch (error) {
        console.log("Error fetching high quality logo from storage:", error);
      }
    };
    fetchLogo();
  }, []);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        // Fetch the audio file from Supabase media bucket
        const url = await getImageUrl("rootfuse.background.music.wav");
        if (url && !url.includes("sign")) {
          setAudioUrl(url);
          console.log("Audio file loaded from Supabase storage:", url);
        } else {
          console.log("Audio file not found in storage, using fallback");
          setAudioUrl("https://www.topmediai.com/app/ai-music/shared/6846474");
        }
      } catch (error) {
        console.log("Error fetching audio file from storage:", error);
        // Fallback to external URL if Supabase fails
        setAudioUrl("https://www.topmediai.com/app/ai-music/shared/6846474");
      }
    };
    fetchAudio();
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current && audioUrl) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.75; // Set volume to 75%

      // Auto-play music when component mounts and audio URL is available
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Auto-play was prevented by browser:", error);
          // Auto-play failed, user will need to manually start
        }
      };

      // Small delay to ensure audio is loaded
      setTimeout(playAudio, 1000);
    }
  }, [audioUrl]);

  return (
    <nav
      className={`w-full border-b py-2 sticky top-0 z-50 ${isDarkMode ? "border-dashboard-border bg-dashboard-bg" : "border-gray-200 bg-white"}`}
    >
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
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
              quality={100}
              onError={() => {
                console.log("Failed to load high quality logo image");
                setLogoUrl("");
              }}
            />
          ) : (
            <div
              className={`flex items-center gap-2 text-xl font-bold font-digital ${isDarkMode ? "text-dashboard-text" : "text-gray-900"}`}
            >
              <Command className="w-6 h-6" />
              Rootfuse
            </div>
          )}
        </Link>
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button
                  className={`font-digital ${isDarkMode ? "bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg" : "bg-gray-900 text-white hover:bg-gray-700"}`}
                >
                  Command Center
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="#demo"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("demo")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-4 py-2 text-sm font-medium font-mono ${isDarkMode ? "text-dashboard-text hover:text-dashboard-text/80" : "text-gray-700 hover:text-gray-900"}`}
              >
                Demo
              </Link>
              <Link
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-4 py-2 text-sm font-medium font-mono ${isDarkMode ? "text-dashboard-text hover:text-dashboard-text/80" : "text-gray-700 hover:text-gray-900"}`}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-4 py-2 text-sm font-medium font-mono ${isDarkMode ? "text-dashboard-text hover:text-dashboard-text/80" : "text-gray-700 hover:text-gray-900"}`}
              >
                Pricing
              </Link>
              <Link
                href="#referral"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("referral")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-4 py-2 text-sm font-medium font-mono ${isDarkMode ? "text-dashboard-text hover:text-dashboard-text/80" : "text-gray-700 hover:text-gray-900"}`}
              >
                Referral
              </Link>
              <Link
                href="/sign-in"
                className={`px-4 py-2 text-sm font-medium font-mono ${isDarkMode ? "text-dashboard-text hover:text-dashboard-text/80" : "text-gray-700 hover:text-gray-900"}`}
              >
                Sign In
              </Link>
              <Link href="/sign-up">
                <Button
                  className={`font-digital ${isDarkMode ? "bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border hover:text-dashboard-text" : "bg-gray-900 text-white hover:bg-gray-700"}`}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          <button
            onClick={toggleMusic}
            className={`p-2 rounded-md transition-colors ${isDarkMode ? "text-dashboard-text hover:bg-dashboard-border/20" : "text-gray-700 hover:bg-gray-100"}`}
            title={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => {
              const newMode = !isDarkMode;
              setIsDarkMode(newMode);
              if (isClient) {
                localStorage.setItem("theme", newMode ? "dark" : "light");
              }
            }}
            className={`p-2 rounded-md transition-colors ${isDarkMode ? "text-dashboard-text hover:bg-dashboard-border/20" : "text-gray-700 hover:bg-gray-100"}`}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          console.log("Error loading audio file from:", audioUrl);
          setIsPlaying(false);
        }}
      />
    </nav>
  );
}
