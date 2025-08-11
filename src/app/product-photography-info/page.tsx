"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Camera, Image, Zap, Star } from "lucide-react";

export default function ProductPhotographyInfo() {
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
              Product Photography
            </h1>
            <p className="text-xl text-dashboard-text/80 font-mono">
              Professional cannabis product photography service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader>
                <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                  <Camera className="w-6 h-6" />
                  Monthly Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-dashboard-text font-digital">
                    $30
                  </div>
                  <div className="text-dashboard-text/70 font-mono">
                    per month (up to 150 images)
                  </div>
                </div>
                <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                  <li>• Up to 150 professional photos</li>
                  <li>• High-resolution images</li>
                  <li>• Multiple angles per product</li>
                  <li>• Professional lighting setup</li>
                  <li>• Quick turnaround (3-5 days)</li>
                  <li>• Commercial usage rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader>
                <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                  <Image className="w-6 h-6" />
                  Per Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-dashboard-text font-digital">
                    $5
                  </div>
                  <div className="text-dashboard-text/70 font-mono">
                    per image
                  </div>
                </div>
                <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                  <li>• Perfect for small batches</li>
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
                    Professional Setup
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Studio-quality lighting, backgrounds, and equipment for
                    consistent, professional results.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Multiple Angles
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Front, back, side, and detail shots to showcase your
                    products from every angle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    High Resolution
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    4K resolution images perfect for websites, marketing
                    materials, and print media.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Quick Delivery
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Fast 3-5 day turnaround with digital delivery and cloud
                    storage integration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Brand Consistency
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Consistent styling and branding across all product images
                    for professional presentation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Usage Rights
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Full commercial usage rights for marketing, e-commerce, and
                    promotional materials.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dashboard-bg border-dashboard-border mb-8">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                <Zap className="w-6 h-6" />
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
                      Product Submission
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Send us your products or schedule a pickup from your
                      facility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-dashboard-border text-dashboard-bg rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Professional Photography
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Our team captures high-quality images in our professional
                      studio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-dashboard-border text-dashboard-bg rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Editing & Enhancement
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Professional editing and color correction for optimal
                      presentation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-dashboard-border text-dashboard-bg rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Digital Delivery
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Images delivered digitally and integrated into your
                      dashboard.
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
