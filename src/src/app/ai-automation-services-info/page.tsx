"use client";

import { ArrowLeft, Bot, Zap, CheckCircle2, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AIAutomationServicesInfoPage() {
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
              <Bot className="w-8 h-8 text-dashboard-text mr-4" />
              <h1 className="text-3xl font-bold font-digital text-dashboard-text">
                AI Automation Services
              </h1>
            </div>

            <div className="mb-8">
              <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                $199/month + setup
              </div>
              <p className="text-dashboard-text/80 font-mono">
                Custom AI automation solutions for your cannabis operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Automation Capabilities
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Automated inventory reordering based on usage patterns
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Smart task scheduling and assignment
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Predictive maintenance alerts for equipment
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Automated compliance reporting and submissions
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      Customer communication automation
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-digital text-dashboard-text mb-4">
                  Custom AI Solutions
                </h3>
                <div className="space-y-4">
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Yield Optimization AI
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Machine learning models to optimize growing conditions and
                      maximize yields
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Demand Forecasting
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      AI-powered sales predictions and inventory planning
                    </div>
                  </div>
                  <div className="bg-dashboard-border/10 rounded-lg p-4">
                    <div className="font-semibold font-digital text-dashboard-text mb-1">
                      Quality Control AI
                    </div>
                    <div className="text-dashboard-text/70 font-mono text-sm">
                      Automated quality assessment and batch optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dashboard-border/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold font-digital text-dashboard-text mb-3">
                Transform Your Operations with AI
              </h3>
              <p className="text-dashboard-text/80 font-mono text-sm mb-4">
                Our AI automation services are designed specifically for
                cannabis operations. We analyze your workflows, identify
                automation opportunities, and implement custom AI solutions that
                save time, reduce errors, and increase profitability.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    40%
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    time savings
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    25%
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    error reduction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text">
                    15%
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    yield increase
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border font-digital px-8 py-3">
                Get AI Automation Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
