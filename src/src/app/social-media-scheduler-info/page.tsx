"use client";

import { ArrowLeft, Calendar, Share2, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SocialMediaSchedulerInfoPage() {
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
              <Calendar className="w-8 h-8 text-dashboard-text mr-4" />
              <h1 className="text-3xl font-bold font-digital text-dashboard-text">
                Social Media Scheduler
              </h1>
            </div>

            <div className="mb-8">
              <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                $49/month
              </div>
              <p className="text-dashboard-text/80 font-mono">
                Schedule and manage your cannabis business social media presence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Platform Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Schedule posts across Instagram, Facebook, Twitter, and
                      LinkedIn
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Cannabis-compliant content templates and guidelines
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Automated posting with optimal timing suggestions
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Content calendar with team collaboration
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Analytics and engagement tracking
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Cannabis-Specific Benefits
                </h3>
                <div className="space-y-4">
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Compliance-First Approach
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Built-in compliance checks for cannabis advertising
                      regulations
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Educational Content Library
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Pre-approved educational posts about cannabis benefits and
                      usage
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Brand Safety Tools
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Automated content review to ensure platform compliance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dashboard-border/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold font-digital text-dashboard-text mb-3">
                Streamline Your Cannabis Marketing
              </h3>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                Save hours each week with automated social media management
                designed specifically for cannabis businesses. Our scheduler
                understands the unique compliance requirements and helps you
                maintain a consistent, professional online presence.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    4+
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    social platforms
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    100+
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    content templates
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    24/7
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    automated posting
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8 py-3">
                Add Social Media Scheduler
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
