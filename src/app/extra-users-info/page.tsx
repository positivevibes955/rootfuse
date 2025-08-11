"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Users, Shield, Settings, Eye, Check } from "lucide-react";

export default function ExtraUsersInfo() {
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
              Additional Users
            </h1>
            <p className="text-xl text-dashboard-text/80 font-mono">
              Scale your team with role-based access control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader>
                <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Role-Based Permissions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-dashboard-text/80 font-mono text-sm space-y-2">
                  <div>
                    <strong>Admin:</strong> Full system access
                  </div>
                  <div>
                    <strong>Manager:</strong> Department oversight
                  </div>
                  <div>
                    <strong>Supervisor:</strong> Team management
                  </div>
                  <div>
                    <strong>Operator:</strong> Daily operations
                  </div>
                  <div>
                    <strong>Viewer:</strong> Read-only access
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader>
                <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                  <Settings className="w-6 h-6" />
                  Granular Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-dashboard-text/80 font-mono text-sm space-y-2">
                  <div>• Module-specific access</div>
                  <div>• Data visibility controls</div>
                  <div>• Action permissions</div>
                  <div>• Time-based restrictions</div>
                  <div>• Location-based access</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-dashboard-bg border-dashboard-border mb-8">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital">
                Pricing Per Tier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border border-dashboard-border rounded">
                  <h3 className="font-digital text-dashboard-text mb-2">
                    Starter
                  </h3>
                  <div className="text-2xl font-bold text-dashboard-text">
                    $15
                  </div>
                  <div className="text-sm text-dashboard-text/70 font-mono">
                    per user/month
                  </div>
                </div>
                <div className="text-center p-4 border border-dashboard-border rounded">
                  <h3 className="font-digital text-dashboard-text mb-2">
                    Growth
                  </h3>
                  <div className="text-2xl font-bold text-dashboard-text">
                    $15
                  </div>
                  <div className="text-sm text-dashboard-text/70 font-mono">
                    per user/month
                  </div>
                </div>
                <div className="text-center p-4 border border-dashboard-border rounded">
                  <h3 className="font-digital text-dashboard-text mb-2">Pro</h3>
                  <div className="text-2xl font-bold text-dashboard-text">
                    $15
                  </div>
                  <div className="text-sm text-dashboard-text/70 font-mono">
                    per user/month
                  </div>
                </div>
                <div className="text-center p-4 border border-dashboard-border rounded">
                  <h3 className="font-digital text-dashboard-text mb-2">
                    Enterprise
                  </h3>
                  <div className="text-2xl font-bold text-dashboard-text">
                    $15
                  </div>
                  <div className="text-sm text-dashboard-text/70 font-mono">
                    per user/month
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dashboard-bg border-dashboard-border mb-8">
            <CardHeader>
              <CardTitle className="text-dashboard-text font-digital flex items-center gap-2">
                <Eye className="w-6 h-6" />
                User Management Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Activity Tracking
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Monitor user actions, login times, and system usage with
                    detailed audit logs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Team Collaboration
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Enable team communication, task assignments, and
                    collaborative workflows.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Security Controls
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Two-factor authentication, session management, and IP
                    restrictions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dashboard-text font-digital mb-2">
                    Training & Onboarding
                  </h3>
                  <p className="text-dashboard-text/80 font-mono text-sm">
                    Built-in training modules and guided onboarding for new team
                    members.
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
