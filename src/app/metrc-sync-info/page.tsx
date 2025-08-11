"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MetrcSyncInfo() {
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
              METRC Sync
            </h1>
            <p className="text-xl text-dashboard-text/80 font-mono">
              Advanced METRC integration for seamless compliance tracking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader>
                <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                  <RotateCw className="w-6 h-6" />
                  METRC Sync Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-dashboard-text font-digital">
                    $79.50
                  </div>
                  <div className="text-dashboard-text/70 font-mono">
                    per license per month
                  </div>
                </div>
                <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                  <li>• Real-time METRC synchronization</li>
                  <li>• Advanced compliance alerts</li>
                  <li>• Automated reporting</li>
                  <li>• Batch tracking integration</li>
                  <li>• Inventory reconciliation</li>
                  <li>• Compliance dashboard</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-dashboard-bg border-dashboard-border mb-8">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Real-Time Sync
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Automatic synchronization with METRC every 15 minutes for
                    up-to-date compliance data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Compliance Alerts
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Proactive notifications for compliance issues, deadlines,
                    and required actions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Automated Reports
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Generate and submit required METRC reports automatically on
                    schedule.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Audit Trail
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Complete audit trail of all METRC transactions and
                    compliance activities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dashboard-bg border-dashboard-border mb-8">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Compliance Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-dashboard-text mt-1" />
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Reduce Compliance Risk
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Minimize the risk of compliance violations with automated
                      monitoring.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-dashboard-text mt-1" />
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Save Time
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Eliminate manual data entry and reduce administrative
                      overhead.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-dashboard-text mt-1" />
                  <div>
                    <h3 className="font-semibold text-dashboard-text font-digital">
                      Stay Current
                    </h3>
                    <p className="text-dashboard-text/80 font-mono text-sm">
                      Always have the most current compliance data at your
                      fingertips.
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
