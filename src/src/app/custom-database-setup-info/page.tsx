"use client";

import {
  ArrowLeft,
  Database,
  Settings,
  CheckCircle2,
  Server,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CustomDatabaseSetupInfoPage() {
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
              <Database className="w-8 h-8 text-dashboard-text mr-4" />
              <h1 className="text-3xl font-bold font-digital text-dashboard-text">
                Custom Database Setup
              </h1>
            </div>

            <div className="mb-8">
              <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                $799 setup + $149/month
              </div>
              <p className="text-dashboard-text/80 font-mono">
                Custom database architecture and data migration services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Database Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Custom database schema design for your specific needs
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Data migration from existing systems (Cultivera, Canix,
                      etc.)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Custom fields and data structures
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Advanced reporting and analytics setup
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Automated backup and disaster recovery
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Specialized Solutions
                </h3>
                <div className="space-y-4">
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Multi-Location Architecture
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Complex database structures for multi-facility operations
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Historical Data Preservation
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Maintain years of historical data with optimized
                      performance
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibent font-digital text-dashboard-text mb-1">
                      Custom Compliance Tracking
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      State-specific compliance data structures and workflows
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dashboard-border/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold font-digital text-dashboard-text mb-3">
                Enterprise-Grade Database Solutions
              </h3>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                Our database experts will design and implement a custom database
                architecture tailored to your cannabis operation's unique
                requirements. We handle everything from initial design to data
                migration and ongoing optimization.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    99.99%
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    uptime guarantee
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    1-2
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    weeks setup
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    24/7
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    monitoring
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8 py-3">
                Get Custom Database Setup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
