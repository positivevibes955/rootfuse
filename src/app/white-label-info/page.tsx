"use client";

import { ArrowLeft, Palette, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhiteLabelInfoPage() {
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
              <Palette className="w-8 h-8 text-dashboard-text mr-4" />
              <h1 className="text-3xl font-bold font-digital text-dashboard-text">
                White Label Options
              </h1>
            </div>

            <div className="mb-8">
              <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                $500/month
              </div>
              <p className="text-dashboard-text/80 font-mono">
                Customize the platform with your branding and colors
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Branding Customization
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Custom logo integration
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Brand color scheme customization
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Custom domain setup
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Personalized email templates
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Custom login page design
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Platform Customization
                </h3>
                <div className="space-y-4">
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Interface Theming
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Complete UI customization to match your brand
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Custom Terminology
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Rename features and sections to match your business
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Branded Reports
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      All reports and exports include your branding
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dashboard-border/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold font-digital text-dashboard-text mb-3">
                Make Rootfuse Your Own
              </h3>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                Transform Rootfuse into your own branded platform. Perfect for
                consultants, franchise operations, or businesses that want to
                maintain their brand identity throughout their operations
                management system.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    100%
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    brand consistency
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    Custom
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    domain included
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    Full
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    customization
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8 py-3">
                Add White Label Options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
