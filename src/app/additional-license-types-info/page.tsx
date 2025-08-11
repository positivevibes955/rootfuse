"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Plus, Building, Leaf, ShoppingCart } from "lucide-react";

export default function AdditionalLicenseTypesInfo() {
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
              Additional License Types
            </h1>
            <p className="text-xl text-dashboard-text/80 font-mono">
              Expand your operations with multiple license types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader className="text-center">
                <Leaf className="w-12 h-12 text-dashboard-text mx-auto mb-4" />
                <CardTitle className="text-dashboard-text font-digital">
                  Cultivation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                  <li>• Grow room management</li>
                  <li>• Environmental monitoring</li>
                  <li>• Harvest tracking</li>
                  <li>• Strain management</li>
                  <li>• Compliance reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader className="text-center">
                <Building className="w-12 h-12 text-dashboard-text mx-auto mb-4" />
                <CardTitle className="text-dashboard-text font-digital">
                  Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                  <li>• Extraction management</li>
                  <li>• Product manufacturing</li>
                  <li>• Quality control</li>
                  <li>• Batch tracking</li>
                  <li>• Lab integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader className="text-center">
                <ShoppingCart className="w-12 h-12 text-dashboard-text mx-auto mb-4" />
                <CardTitle className="text-dashboard-text font-digital">
                  Dispensary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                  <li>• POS integration</li>
                  <li>• Inventory management</li>
                  <li>• Customer management</li>
                  <li>• Sales analytics</li>
                  <li>• Loyalty programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-dashboard-bg border-dashboard-border mb-8">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                <Plus className="w-6 h-6" />
                Multi-License Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Data Integration
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Seamlessly transfer data between license types. Track
                    products from seed to sale across your entire operation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Unified Dashboard
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Switch between license views instantly. Get a complete
                    picture of your vertical integration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Cost Savings
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Additional licenses are discounted. Save money while
                    expanding your operational capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Compliance Sync
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Maintain compliance across all license types with automated
                    reporting and tracking.
                  </p>
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
