"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Video, Play, Clock, Star } from "lucide-react";

export default function VideoGenerationInfo() {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-dashboard-text hover:text-dashboard-text/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-digital text-dashboard-text mb-4">
              Video Generation
            </h1>
            <p className="text-xl text-dashboard-text/80 font-mono">
              Professional video content creation for your cannabis business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader>
                <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                  <Video className="w-6 h-6" />
                  Monthly Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-dashboard-text font-digital">
                    $100
                  </div>
                  <div className="text-dashboard-text/70 font-mono">
                    per month (35 videos)
                  </div>
                </div>
                <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                  <li>• 35 professional videos</li>
                  <li>• HD quality (1080p)</li>
                  <li>• Custom branding</li>
                  <li>• Multiple formats</li>
                  <li>• 24-hour turnaround</li>
                  <li>• Commercial usage rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader>
                <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                  <Play className="w-6 h-6" />
                  Per Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-dashboard-text font-digital">
                    $5
                  </div>
                  <div className="text-dashboard-text/70 font-mono">
                    per video
                  </div>
                </div>
                <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                  <li>• Perfect for one-off projects</li>
                  <li>• Same professional quality</li>
                  <li>• Flexible ordering</li>
                  <li>• No monthly commitment</li>
                  <li>• Pay as you need</li>
                  <li>• Bulk discounts available</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-dashboard-bg border-dashboard-border mb-8">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                <Star className="w-6 h-6" />
                What's Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Professional Production
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    High-quality video production with professional editing and
                    post-production.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Custom Branding
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Videos branded with your company colors, logo, and
                    messaging.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Multiple Formats
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Optimized for social media, websites, and marketing
                    campaigns.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    24-hour turnaround with digital delivery and cloud storage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dashboard-bg border-dashboard-border mb-8">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-dashboard-border text-dashboard-bg rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Brief Submission
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Submit your video requirements and content brief.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-dashboard-border text-dashboard-bg rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Production
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Our team creates your video with professional editing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-dashboard-border text-dashboard-bg rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Review & Revisions
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Review the video and request any necessary changes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-dashboard-border text-dashboard-bg rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Final Delivery
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Receive your finished video in multiple formats.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/pricing">
              <Button className="bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg font-digital">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
