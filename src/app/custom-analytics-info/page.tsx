"use client";

import { ArrowLeft, BarChart3, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CustomAnalyticsInfoPage() {
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
              <BarChart3 className="w-8 h-8 text-dashboard-text mr-4" />
              <h1 className="text-3xl font-bold font-digital text-dashboard-text">
                Custom Analytics
              </h1>
            </div>

            <div className="mb-8">
              <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                $199 DFY setup
              </div>
              <p className="text-dashboard-text/80 font-mono">
                Custom analytics dashboard and reporting solutions tailored to
                your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Custom dashboard design and setup
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Business-specific KPI tracking
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Advanced reporting templates
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Data visualization and charts
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Automated report generation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Performance benchmarking
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Analytics Features
                </h3>
                <div className="space-y-4">
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Revenue Analytics
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Track sales, profit margins, and revenue trends
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Operational Metrics
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Monitor efficiency, productivity, and resource utilization
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Compliance Tracking
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Automated compliance reporting and audit trails
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Predictive Insights
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      AI-powered forecasting and trend analysis
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dashboard-border/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold font-digital text-dashboard-text mb-3">
                Done-For-You Analytics Setup
              </h3>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                Our analytics experts will work with you to understand your
                business needs and create custom dashboards, reports, and KPI
                tracking systems. Get insights that matter to your cannabis
                operation with professional setup and configuration.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    Custom
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    dashboard design
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    1-2 weeks
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    setup time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    Ongoing
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    support included
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8 py-3">
                Get Custom Analytics Setup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
