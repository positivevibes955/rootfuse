"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import CTAButton from "@/components/cta-button";
import Link from "next/link";
import GetStartedForm from "@/components/waitlist-form";

import { createClient } from "../../supabase/client";
import { getImageUrl } from "@/utils/storage";
import type { User } from "@supabase/supabase-js";
import {
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  Leaf,
  Database,
  BarChart3,
  Bot,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [demoImageUrl, setDemoImageUrl] = useState("");
  const supabase = createClient();

  useEffect(() => {
    // Get user
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    // Get demo image URL from Supabase storage
    const getDemoImage = async () => {
      try {
        const url = await getImageUrl("demo-image.png");
        // Check if the URL is valid (not a sign URL or error URL)
        if (url && !url.includes("sign") && !url.includes("error")) {
          setDemoImageUrl(url);
          console.log("Demo image URL loaded:", url);
        } else {
          console.log("Demo image not found or invalid URL:", url);
        }
      } catch (error) {
        console.error("Error loading demo image:", error);
      }
    };

    getUser();
    getDemoImage();
  }, []);

  return (
    <div className="min-h-screen bg-dashboard-bg" suppressHydrationWarning>
      <Navbar />
      <Hero />

      {/* Demo Section */}
      <section className="py-24 bg-dashboard-bg" id="demo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
              See RootFuse in Action
            </h2>
            <p className="text-dashboard-text/80 font-mono max-w-2xl mx-auto">
              Experience the power of unified cannabis operations management
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-dashboard-bg border-2 border-dashboard-border rounded-xl p-8">
              <div className="mb-6">
                <div className="aspect-[16/10] bg-dashboard-bg rounded-lg border-2 border-dashboard-text shadow-lg overflow-hidden">
                  {demoImageUrl ? (
                    <Image
                      src={demoImageUrl}
                      alt="RootFuse Dashboard Demo"
                      width={1200}
                      height={675}
                      className="w-full h-full object-contain"
                      priority
                      onError={(e) => {
                        console.log("Failed to load demo image:", demoImageUrl);
                        // Hide the image on error by setting display to none
                        e.currentTarget.style.display = "none";
                      }}
                      onLoad={() => {
                        console.log(
                          "Demo image loaded successfully:",
                          demoImageUrl,
                        );
                      }}
                    />
                  ) : (
                    <div className="text-center p-8">
                      <BarChart3 className="w-16 h-16 text-dashboard-text mx-auto mb-4" />
                      <h3 className="text-xl font-digital text-dashboard-text mb-2">
                        Interactive Dashboard Demo
                      </h3>
                      <p className="text-dashboard-text/70 font-mono">
                        Complete cannabis operations in one view
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold font-digital text-dashboard-text mb-2">
                  Complete Cannabis Operations Dashboard
                </h3>
                <p className="text-dashboard-text/70 font-mono mb-6">
                  See how RootFuse consolidates your entire operation into one
                  powerful interface
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
                  <div className="text-dashboard-text font-digital mb-2">
                    Live Dashboard
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-dashboard-text-dark">
                    Real-time KPIs and metrics
                  </div>
                </div>
                <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
                  <div className="text-dashboard-text font-digital mb-2">
                    METRC Integration
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-dashboard-text-dark">
                    Seamless compliance sync
                  </div>
                </div>
                <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
                  <div className="text-dashboard-text font-digital mb-2">
                    AI Assistant
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-dashboard-text-dark">
                    Smart automation tools
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-24 bg-dashboard-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
              Watch RootFuse Transform Your Operations
            </h2>
            <p className="text-dashboard-text/80 font-mono max-w-2xl mx-auto">
              See how cannabis businesses are streamlining their operations with
              our unified platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-dashboard-bg border-2 border-dashboard-border rounded-xl p-8">
              <div className="aspect-video bg-dashboard-bg rounded-lg border border-dashboard-border overflow-hidden relative">
                <video
                  id="demo-video"
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture={true}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-dashboard-bg/80 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-4">
                    <button
                      id="play-pause-btn"
                      className="text-dashboard-text hover:text-dashboard-border transition-colors"
                      onClick={() => {
                        const video = document.getElementById(
                          "demo-video",
                        ) as HTMLVideoElement;
                        const btn = document.getElementById("play-pause-btn");
                        if (video.paused) {
                          video.play();
                          if (btn)
                            btn.innerHTML =
                              '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
                        } else {
                          video.pause();
                          if (btn)
                            btn.innerHTML =
                              '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
                        }
                      }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>

                    <button
                      id="volume-btn"
                      className="text-dashboard-text hover:text-dashboard-border transition-colors"
                      onClick={() => {
                        const video = document.getElementById(
                          "demo-video",
                        ) as HTMLVideoElement;
                        const btn = document.getElementById("volume-btn");
                        if (video.muted) {
                          video.muted = false;
                          if (btn)
                            btn.innerHTML =
                              '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6 10H4a2 2 0 00-2 2v0a2 2 0 002 2h2l4 4V6l-4 4z"></path></svg>';
                        } else {
                          video.muted = true;
                          if (btn)
                            btn.innerHTML =
                              '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a2 2 0 00-2 2v0a2 2 0 002 2h2l4 4V6l-4 4z" clip-rule="evenodd"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>';
                        }
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6 10H4a2 2 0 00-2 2v0a2 2 0 002 2h2l4 4V6l-4 4z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Cannabis Operations Demo
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-dashboard-text/70 font-mono text-sm">
                  Watch how RootFuse eliminates the need for multiple tools and
                  streamlines your entire cannabis operation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-dashboard-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
              Command & Control Cannabis Operations
            </h2>
            <p className="text-dashboard-text/80 font-mono max-w-2xl mx-auto">
              Streamline cultivation, processing, and dispensary operations with
              our comprehensive command center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-6 h-6" />,
                title: "Multi-License Support",
                description:
                  "Cultivation, Processing & Dispensary in one platform",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Compliance Ready",
                description: "METRC integration and audit trails built-in",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Real-Time Data",
                description: "Live inventory, sales, and operational metrics",
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "AI Assistant",
                description: "Smart automation and predictive insights",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-dashboard-bg border border-dashboard-border rounded-xl hover:border-dashboard-text/50 transition-all"
              >
                <div className="text-dashboard-text mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dashboard-border text-dashboard-text">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-digital mb-2">47</div>
              <div className="text-white font-mono">Tabs Eliminated</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-digital mb-2">15</div>
              <div className="text-white font-mono">Logins Replaced</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-digital mb-2">100%</div>
              <div className="text-white font-mono">Connected Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Table */}
      <section className="py-24 bg-dashboard-bg" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
              Why Choose Rootfuse?
            </h2>
            <p className="text-dashboard-text/80 font-mono max-w-2xl mx-auto">
              Compare features across leading cannabis software platforms
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-dashboard-border rounded-lg">
              <thead>
                <tr className="bg-dashboard-border/20">
                  <th className="text-left p-4 text-dashboard-text font-digital">
                    Feature
                  </th>
                  <th className="text-center p-4 text-dashboard-text font-digital bg-dashboard-text/10">
                    Rootfuse
                    <br />
                    $480/mo
                  </th>
                  <th className="text-center p-4 text-dashboard-text font-digital">
                    Canix
                    <br />
                    ~$499/mo
                  </th>
                  <th className="text-center p-4 text-dashboard-text font-digital">
                    Cultivera
                    <br />
                    $275/mo
                  </th>
                  <th className="text-center p-4 text-dashboard-text font-digital">
                    Blaze/Flowhub
                    <br />
                    ~$500-800/mo
                  </th>
                  <th className="text-center p-4 text-dashboard-text font-digital">
                    Flourish/BioTrack
                    <br />
                    ~$600/mo
                  </th>
                  <th className="text-center p-4 text-dashboard-text font-digital">
                    GrowFlow
                    <br />
                    ~$500/mo
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["METRC Sync", "✅", "✅", "✅", "✅", "✅", "✅"],
                  [
                    "Seed-to-Sale Traceability",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                  ],
                  [
                    "Audit Trail + Compliance Logs",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                  ],
                  [
                    "Real-Time Inventory Tracking",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                  ],
                  [
                    "Batch & Harvest Management",
                    "✅",
                    "✅",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "✅",
                    "✅",
                  ],
                  [
                    "Grow Forecasting & Yield Analytics",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "",
                    "",
                    "",
                    "",
                  ],
                  [
                    "Environmental / Sensor Data Sync",
                    "✅",
                    "",
                    "",
                    "",
                    "",
                    "",
                  ],
                  [
                    "Harvest Scheduling",
                    "✅",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                  ],
                  [
                    "ROI Metrics + Nutrient Logs",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "",
                    "",
                    "",
                    "",
                  ],
                  ["SOP Database (Notion-style)", "✅", "", "", "", "", ""],
                  [
                    "Task Automation & Scheduling",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "",
                    "",
                    "",
                    "",
                  ],
                  ["Internal Chat / Forum", "✅", "", "", "", "", ""],
                  ["HR & Shift Management", "✅", "Limited", "", "", "", ""],
                  [
                    "File Storage & Document Management",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "",
                    "",
                    "",
                    "",
                  ],
                  [
                    "CRM / Lead Pipeline",
                    "✅",
                    "",
                    "",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                  ],
                  [
                    "POS Orders & Wholesale Portal",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "✅",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "✅",
                  ],
                  [
                    "KPI Dashboards & Alerts",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                  ],
                  ["Email / SMS Campaign Tools", "✅", "", "", "", "", ""],
                  ["Form Builder & Checkout", "✅", "", "", "", "", ""],
                  ["Social Media Scheduler", "✅", "", "", "", "", ""],
                  ["Website / Landing Page Builder", "✅", "", "", "", "", ""],
                  ["Image & Video Creation Tools", "✅", "", "", "", "", ""],
                  ["AI Copywriting Assistant", "✅", "", "", "", "", ""],
                  [
                    "Marketing Automation / Drip Tools",
                    "✅",
                    "",
                    "",
                    "",
                    "",
                    "",
                  ],
                  ["Unified AI Assistant (FuseBot)", "✅", "", "", "", "", ""],
                  [
                    "Custom Searchable Database + Wiki",
                    "✅",
                    "",
                    "",
                    "",
                    "",
                    "",
                  ],
                  [
                    "Analytics & Reporting Dashboards",
                    "✅",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                  ],
                  ["Live Activity Feed", "✅", "", "", "", "", ""],
                  ["Industry News Feed", "✅", "", "", "", "", ""],
                  [
                    "API / Webhooks",
                    "✅",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                    "<span class='text-dashboard-text-dark'>Limited</span>",
                  ],
                  ["Modular Feature Enablement", "✅", "", "", "", "", ""],
                  [
                    "Multi-License / Multi-Facility Support",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                    "✅",
                  ],
                  ["Add-On Marketplace Module", "✅", "", "", "", "", ""],
                  ["Controller / IoT Device Sync", "✅", "", "", "", "", ""],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-dashboard-bg"
                        : "bg-dashboard-border/5"
                    }
                  >
                    <td className="p-3 text-dashboard-text font-mono border-r border-dashboard-border">
                      {row[0]}
                    </td>
                    <td className="p-3 text-center text-dashboard-text bg-dashboard-text/5 border-r border-dashboard-border">
                      {row[1]}
                    </td>
                    <td
                      className="p-3 text-center text-dashboard-text/70 border-r border-dashboard-border"
                      dangerouslySetInnerHTML={{ __html: row[2] }}
                    ></td>
                    <td
                      className="p-3 text-center text-dashboard-text/70 border-r border-dashboard-border"
                      dangerouslySetInnerHTML={{ __html: row[3] }}
                    ></td>
                    <td
                      className="p-3 text-center text-dashboard-text/70 border-r border-dashboard-border"
                      dangerouslySetInnerHTML={{ __html: row[4] }}
                    ></td>
                    <td
                      className="p-3 text-center text-dashboard-text/70 border-r border-dashboard-border"
                      dangerouslySetInnerHTML={{ __html: row[5] }}
                    ></td>
                    <td
                      className="p-3 text-center text-dashboard-text/70"
                      dangerouslySetInnerHTML={{ __html: row[6] }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-dashboard-border/10 rounded-lg p-6 text-center">
              <p className="text-dashboard-text font-mono mb-4">
                <strong>
                  To match what Rootfuse offers, you'd need to stack 8–12 tools
                  at a total cost of $2200+ per month
                </strong>{" "}
                — and you'd still be switching between tabs, files, and
                disconnected data. Rootfuse replaces them all with one secure,
                scalable dashboard.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="text-dashboard-text font-digital mb-2">
                    Tools Replaced:
                  </h4>
                  <ul className="text-sm text-dashboard-text/80 font-mono space-y-1 text-dashboard-text-dark">
                    <li>METRC Dashboard: $275–$800</li>
                    <li>Slack/Chat Tools: $20–$100</li>
                    <li>CRM (HubSpot, Keap): $100–$300</li>
                    <li>Notion/SOP Database: $20–$50</li>
                    <li>Asana/ClickUp: $50–$150</li>
                    <li>QuickBooks/Xero: $30–$200</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-dashboard-text font-digital mb-2">
                    More Tools Replaced:
                  </h4>
                  <ul className="text-sm text-dashboard-text/80 font-mono space-y-1 text-dashboard-text-dark">
                    <li>Dropbox/Google Drive: $10–$50</li>
                    <li>Email/Text Marketing: $50–$300</li>
                    <li>Website Builders: $29–$79</li>
                    <li>Jasper/Canva/Content: $50–$200</li>
                    <li>
                      <strong>Total Replacement: $900–$2,200/month</strong>
                    </li>
                    <li>
                      <strong className="text-dashboard-text">
                        Rootfuse Base Plan: Just $260
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-dashboard-bg" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
              Command Center Pricing - No Hidden Fees
            </h2>
            <p className="text-dashboard-text/80 font-mono max-w-2xl mx-auto">
              Transparent pricing for cannabis operations management.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                name: "Core Command",
                price: 260,
                originalPrice: null,
                description: "Perfect for single-license operations",
                features: [
                  "1 License Type (Cultivation, Processing, or Dispensary)",
                  "Up to 5 Users ($15/user after 2)",
                  "Core METRC Integration",
                  "Seed-to-Sale Traceability",
                  "Audit Trail + Compliance Logs",
                  "Real-Time Inventory Tracking",
                  "Batch & Harvest Management",
                  "CRM + Sales Dashboards",
                  "Compliance Core",
                  "Industry News Feed",
                  "5GB Storage",
                  "File and Database Management",
                  "Core Dashboard Modules",
                  "Core AI Assistant",
                  "Standard Support",
                  "Email & Calendar Sync",
                  "Core Reporting",
                  "Basic Analytics",
                  "Task Management",
                  "Document Storage",
                ],
                popular: false,
              },
              {
                name: "Growth Command",
                price: 480,
                originalPrice: null,
                description: "Advanced features for growing operations",
                features: [
                  "Everything in Core Command plus...",
                  "1 License Type + $200/month per additional type",
                  "Up to 10 Users ($15/user after 5)",
                  "Advanced METRC Integration",
                  "Grow Forecasting & Yield Analytics",
                  "Environmental / Sensor Data Sync",
                  "Harvest Scheduling",
                  "ROI Metrics + Nutrient Logs",
                  "SOP Database (Notion-style)",
                  "Task Automation & Scheduling",
                  "Internal Chat / Forum",
                  "HR & Shift Management",
                  "File Storage & Document Management",
                  "CRM / Lead Pipeline",
                  "Full Dashboard Suite",
                  "Advanced AI Assistant",
                  "Priority Support",
                  "Custom Workflows",
                  "Advanced Analytics",
                  "Inventory Management",
                  "KPI Dashboards & Alerts",
                ],
                popular: true,
              },
              {
                name: "Pro Command",
                price: 880,
                originalPrice: null,
                description: "Enterprise-grade solution",
                features: [
                  "Everything in Growth Command plus...",
                  "Unlimited License Types ($200/month per additional type)",
                  "Unlimited Users ($15/user after 15)",
                  "Full METRC Integration",
                  "POS Orders & Wholesale Portal",
                  "Email / SMS Campaign Tools",
                  "Form Builder & Checkout",
                  "Social Media Scheduler",
                  "Website / Landing Page Builder",
                  "Image & Video Creation Tools",
                  "AI Copywriting Assistant",
                  "Marketing Automation / Drip Tools",
                  "Unified AI Assistant (FuseBot)",
                  "Custom Searchable Database + Wiki",
                  "Analytics & Reporting Dashboards",
                  "Live Activity Feed",
                  "API / Webhooks",
                  "Modular Feature Enablement",
                  "Multi-License / Multi-Facility Support",
                  "Add-On Marketplace Module",
                  "Controller / IoT Device Sync",
                  "Complete Dashboard Suite",
                  "Premium AI Assistant",
                  "24/7 Support",
                  "White Label Options",
                  "API Access",
                  "Custom Integrations",
                  "Dedicated Account Manager",
                ],
                popular: false,
              },
            ].map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-dashboard-bg border-dashboard-border rounded-xl p-6 ${
                  tier.popular
                    ? "border-2 border-dashboard-text shadow-xl scale-105"
                    : "border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-dashboard-text text-dashboard-bg px-4 py-1 rounded-full text-sm font-digital">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold font-digital text-dashboard-text mb-2">
                    ${tier.price}
                    <span className="text-sm font-mono text-dashboard-text/70">
                      /month
                    </span>
                    {tier.originalPrice && (
                      <div className="text-lg line-through text-dashboard-text/50">
                        ${tier.originalPrice}/month
                      </div>
                    )}
                  </div>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    {tier.description}
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                      <span className="text-dashboard-text/80 font-mono text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={user ? "/dashboard" : "/sign-up"}
                  className="block w-full bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg font-digital text-center py-3 rounded-lg transition-colors"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Enterprise Tier */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-dashboard-bg border-2 border-dashboard-text rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Enterprise Command
              </h3>
              <p className="text-dashboard-text/70 font-mono mb-6">
                Custom solutions for large-scale operations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="text-left">
                  <h4 className="font-semibold font-digital text-dashboard-text mb-2">
                    Everything in Pro Command plus:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-3 w-3 text-dashboard-text mt-1 flex-shrink-0" />
                      <span className="text-dashboard-text/80 font-mono">
                        Multi-location management
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-3 w-3 text-dashboard-text mt-1 flex-shrink-0" />
                      <span className="text-dashboard-text/80 font-mono">
                        Advanced compliance reporting
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-3 w-3 text-dashboard-text mt-1 flex-shrink-0" />
                      <span className="text-dashboard-text/80 font-mono">
                        Custom dashboard development
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold font-digital text-dashboard-text mb-2">
                    Additional Features:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-3 w-3 text-dashboard-text mt-1 flex-shrink-0" />
                      <span className="text-dashboard-text/80 font-mono">
                        On-premise deployment options
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-3 w-3 text-dashboard-text mt-1 flex-shrink-0" />
                      <span className="text-dashboard-text/80 font-mono">
                        SLA guarantees
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-3 w-3 text-dashboard-text mt-1 flex-shrink-0" />
                      <span className="text-dashboard-text/80 font-mono">
                        Training & onboarding
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="mailto:sales@cannadash.com"
                className="inline-block bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8 py-3 rounded-lg transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* Upgrades */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold font-digital text-dashboard-text mb-8 text-center">
              Upgrades - Any Tier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Marketplace Access",
                  price: "$159/month + 2% sales",
                  desc: "Post products, find suppliers, sell or source directly within Rootfuse",
                  link: "/marketplace-info",
                },

                {
                  name: "Additional License Types",
                  price: "$200/month each",
                  desc: "Add Cultivation, Processing, or Dispensary licenses to any plan",
                  link: "/additional-license-types-info",
                },
                {
                  name: "Extra Users",
                  price: "$15/user/month",
                  desc: "Add team members beyond your plan's included users",
                  link: "/extra-users-info",
                },
                {
                  name: "White Label Options",
                  price: "$500/month",
                  desc: "Customize the platform with your branding and colors",
                  link: "/white-label-info",
                },
                {
                  name: "Social Media Scheduler",
                  price: "$49/month",
                  desc: "Schedule and manage your cannabis business social media presence",
                  link: "/social-media-scheduler-info",
                },
                {
                  name: "AI Automation Services",
                  price: "$199/month + setup",
                  desc: "Custom AI automation solutions for your cannabis operations",
                  link: "/ai-automation-services-info",
                },
                {
                  name: "API Integration (Not Listed)",
                  price: "$299 setup + $99/month",
                  desc: "Custom API integrations for tools not in our standard library",
                  link: "/api-not-listed-info",
                },
                {
                  name: "Custom Database Setup",
                  price: "$799 setup + $149/month",
                  desc: "Custom database architecture and data migration services",
                  link: "/custom-database-setup-info",
                },
                {
                  name: "Custom AI Assistant",
                  price: "$39/month + $149–$499 setup",
                  desc: "Train AI on your SOPs, team, forms, compliance docs, and more. Personalized insights and recall",
                  link: "/custom-ai-info",
                },
                {
                  name: "Environment Sync",
                  price: "$49–$199/month",
                  desc: "Real-time controller data (Growlink, Aranet, TrolMaster, etc) synced with compliance, tasks, and alerts",
                  link: "/environment-sync-info",
                },
                {
                  name: "TrolMaster Sync Module Kit",
                  price: "$159/zone + $199 setup consult",
                  desc: "Custom Module Kit - Only available with Rootfuse",
                  link: "/environment-sync-info",
                },
                {
                  name: "Image/Video Generation",
                  price:
                    "Free images + 1 free video, then $39/month + $39 per video",
                  desc: "AI-powered content creation for marketing and documentation. Professional video generation service with 24-hour turnaround.",
                  link: "/video-generation-info",
                },
                {
                  name: "Text Marketing",
                  price: "$39/month + usage",
                  desc: "SMS campaigns and automated customer communications",
                  link: "/text-marketing-info",
                },
                {
                  name: "Auto Accountant Report",
                  price: "$79/year",
                  desc: "Take this to your accountant and you're done",
                  link: "/auto-accountant-info",
                },
                {
                  name: "Product Photography",
                  price: "$30/month",
                  desc: "Up to 150 images",
                  link: "/product-photography-info",
                },

                {
                  name: "Custom Branding",
                  price: "$300",
                  desc: "One-time setup fee",
                  link: "/custom-branding-info",
                },
                {
                  name: "Done-With-You Setup",
                  price: "$350",
                  desc: "1-on-1 video session",
                  link: "/done-with-you-info",
                },
                {
                  name: "Done-For-You Setup",
                  price: "$600+",
                  desc: "In-person setup (varies by distance)",
                  link: "/done-for-you-info",
                },
                {
                  name: "Website Creation",
                  price: "$500 - $1,500",
                  desc: "Professional websites from 7 pages ($500) to full eCommerce with 15 products ($1,500) + hosting included",
                  link: "/website-creation-info",
                },
                {
                  name: "Custom Analytics",
                  price: "$199 DFY setup",
                  desc: "Custom analytics dashboard and reporting solutions tailored to your business needs",
                  link: "/custom-analytics-info",
                },
              ].map((upsell, index) => (
                <Link
                  key={index}
                  href={upsell.link}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4 hover:border-dashboard-text/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer block h-full"
                >
                  <div className="flex flex-col h-full min-h-[140px]">
                    <h4 className="font-semibold font-digital text-dashboard-text mb-2">
                      {upsell.name}
                    </h4>
                    <p className="text-dashboard-text/70 font-mono text-sm mb-3 flex-grow">
                      {upsell.desc}
                    </p>
                    <div className="text-dashboard-text font-digital font-bold text-sm mt-auto">
                      {upsell.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-dashboard-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
              What Our Customers Say
            </h2>
            <p className="text-dashboard-text/80 font-mono max-w-2xl mx-auto">
              Real feedback from cannabis operators using RootFuse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-dashboard-text">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-dashboard-text/70 font-mono text-sm">
                  Growth Command
                </span>
              </div>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                "Honestly, I was skeptical at first - another software promising
                to fix everything? But man, this actually delivered. We had
                spreadsheets everywhere, sticky notes on monitors, and I was
                losing my mind trying to keep track of compliance deadlines. Now
                it's all right there when I need it. My stress levels dropped
                big time."
              </p>
              <div className="text-dashboard-text font-digital text-sm">
                - Jake Martinez, Cultivation Manager
              </div>
            </div>

            <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-dashboard-text">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-dashboard-text/70 font-mono text-sm">
                  Pro Command
                </span>
              </div>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                "Look, I've been in this industry for 8 years and tried every
                platform out there. Most are clunky or missing key features.
                RootFuse actually gets it - the AI assistant knows our SOPs
                better than some of my employees! The environmental monitoring
                integration saved us from a major crop loss last month."
              </p>
              <div className="text-dashboard-text font-digital text-sm">
                - Dr. Patricia Chen, Head of Operations
              </div>
            </div>

            <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-dashboard-text">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-dashboard-text/70 font-mono text-sm">
                  Core Command
                </span>
              </div>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                "Y'all, this thing is wild! We went from having three different
                systems that never talked to each other to one dashboard that
                shows everything. My budtenders can actually find product info
                without calling me every five minutes. The POS integration is
                smooth as butter."
              </p>
              <div className="text-dashboard-text font-digital text-sm">
                - Tommy "Big T" Johnson, Dispensary Owner
              </div>
            </div>

            <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-dashboard-text">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-dashboard-text/70 font-mono text-sm">
                  Growth Command
                </span>
              </div>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                "The batch tracking feature alone pays for itself. We used to
                lose track of which nutrients went where, harvest dates were all
                over the place. Now everything's automated and our yields are up
                23% because we can actually see patterns in our data. Plus the
                compliance reports generate themselves!"
              </p>
              <div className="text-dashboard-text font-digital text-sm">
                - Maria Santos, Processing Facility Manager
              </div>
            </div>

            <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-dashboard-text">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-dashboard-text/70 font-mono text-sm">
                  Pro Command
                </span>
              </div>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                "Been running multi-state operations for years and this is the
                first platform that actually handles the complexity. The
                inter-license data flow is brilliant - I can see inventory
                levels across all facilities in real-time. My accountant loves
                the automated financial reporting too."
              </p>
              <div className="text-dashboard-text font-digital text-sm">
                - Robert Kim, Multi-State Operator
              </div>
            </div>

            <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-dashboard-text">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-dashboard-text/70 font-mono text-sm">
                  Core Command
                </span>
              </div>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                "Mate, this software is absolutely mental in the best way! We're
                a small craft operation and couldn't afford multiple expensive
                systems. RootFuse gives us enterprise-level features at a price
                that doesn't break the bank. The customer support team actually
                knows cannabis too, which is refreshing."
              </p>
              <div className="text-dashboard-text font-digital text-sm">
                - Connor O'Brien, Craft Cannabis Co-op
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="py-24 bg-dashboard-bg" id="referral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
              Refer & Earn Program
            </h2>
            <p className="text-dashboard-text/80 font-mono max-w-2xl mx-auto">
              Help grow the cannabis community and earn rewards for successful
              referrals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-6">
              <h3 className="text-xl font-bold font-digital text-dashboard-text mb-3">
                Earn Commission
              </h3>
              <p className="text-dashboard-text/70 font-mono mb-4">
                Receive 15% commission on the first year subscription for every
                successful referral that signs up for any paid plan.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                  <span className="text-dashboard-text/80 font-mono text-dashboard-text-dark">
                    Core Command: $260 → You earn $39.00
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                  <span className="text-dashboard-text/80 font-mono text-dashboard-text-dark">
                    Growth Command: $480 → You earn $72.00
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                  <span className="text-dashboard-text/80 font-mono text-dashboard-text-dark">
                    Pro Command: $880 → You earn $132.00
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-6">
              <h3 className="text-xl font-bold font-digital text-dashboard-text mb-3">
                Referral Rewards
              </h3>
              <p className="text-dashboard-text/70 font-mono mb-4">
                Both you and your referral get exclusive benefits when they join
                RootFuse.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                  <span className="text-dashboard-text/80 font-mono text-dashboard-text-dark">
                    Your referral gets 1 month free
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                  <span className="text-dashboard-text/80 font-mono text-dashboard-text-dark">
                    Priority onboarding support
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                  <span className="text-dashboard-text/80 font-mono text-dashboard-text-dark">
                    Exclusive referrer dashboard access
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-dashboard-text mt-0.5 flex-shrink-0" />
                  <span className="text-dashboard-text/80 font-mono text-dashboard-text-dark">
                    Monthly payout via PayPal or direct deposit
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-dashboard-border/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-dashboard-text text-dashboard-bg rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-digital font-bold">
                  1
                </div>
                <h4 className="font-semibold font-digital text-dashboard-text mb-2">
                  Share Your Link
                </h4>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  Get your unique referral link and share it with cannabis
                  businesses
                </p>
              </div>
              <div className="text-center">
                <div className="bg-dashboard-text text-dashboard-bg rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-digital font-bold">
                  2
                </div>
                <h4 className="font-semibold font-digital text-dashboard-text mb-2">
                  They Sign Up
                </h4>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  Your referral creates an account and subscribes to any paid
                  plan
                </p>
              </div>
              <div className="text-center">
                <div className="bg-dashboard-text text-dashboard-bg rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-digital font-bold">
                  3
                </div>
                <h4 className="font-semibold font-digital text-dashboard-text mb-2">
                  You Get Paid
                </h4>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  Receive 15% commission monthly for their first year
                  subscription
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="mailto:referrals@rootfuse.com?subject=Referral Program Interest"
                className="inline-flex items-center px-6 py-3 text-dashboard-bg bg-dashboard-text rounded-lg hover:bg-dashboard-border transition-colors font-digital"
              >
                Join Referral Program
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dashboard-bg border-t border-dashboard-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
            Ready to Command Your Operations?
          </h2>
          <p className="text-dashboard-text/80 font-mono mb-8 max-w-2xl mx-auto">
            Join thousands of cannabis businesses streamlining their operations
            with RootFuse. Get started today and see the difference unified
            management makes.
          </p>
          <CTAButton />
        </div>
      </section>

      <Footer />
    </div>
  );
}
