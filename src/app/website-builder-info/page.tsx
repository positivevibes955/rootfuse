"use client";

import { ArrowLeft, Layout, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WebsiteBuilderInfoPage() {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-dashboard-text hover:text-dashboard-text/80 mb-8 font-mono"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="bg-dashboard-bg border border-dashboard-border rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Layout className="w-8 h-8 text-dashboard-text mr-4" />
              <h1 className="text-3xl font-bold font-digital text-dashboard-text">
                Website / Landing Page Builder
              </h1>
            </div>

            <div className="mb-8">
              <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                $79/month
              </div>
              <p className="text-dashboard-text/80 font-mono">
                Build and customize your cannabis business website
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Builder Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Drag-and-drop website builder
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Cannabis-specific templates
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Mobile-responsive designs
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Custom domain support
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      SEO optimization tools
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Analytics integration
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Compliance & Integration
                </h3>
                <div className="space-y-4">
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Compliance Ready
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Built-in cannabis compliance features
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Rootfuse Integration
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Direct integration with your Rootfuse dashboard
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Lead Capture
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Automatic lead sync to your CRM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dashboard-border/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold font-digital text-dashboard-text mb-3">
                Build Your Cannabis Brand Online
              </h3>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                Create professional websites and landing pages that represent
                your cannabis business. Our builder includes compliance
                features, cannabis-specific templates, and direct integration
                with your Rootfuse operations.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    50+
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    templates
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    100%
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    mobile responsive
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    24/7
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    hosting uptime
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    SSL
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    security included
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8 py-3">
                Add Website Builder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
