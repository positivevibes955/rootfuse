"use client";

import DashboardNavbar from "@/components/dashboard-navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Search,
  Plus,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Calendar,
  Users,
  TrendingUp,
  AlertCircle,
  Download,
  Upload,
} from "lucide-react";
import { useState } from "react";

export default function CompliancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const complianceItems = [
    {
      id: 1,
      title: "METRC Inventory Sync",
      status: "Compliant",
      dueDate: "2024-01-20",
      priority: "High",
      description: "Daily inventory synchronization with state tracking system",
      progress: 100,
    },
    {
      id: 2,
      title: "Monthly Tax Filing",
      status: "Due Soon",
      dueDate: "2024-01-31",
      priority: "Critical",
      description: "State cannabis tax return submission",
      progress: 75,
    },
    {
      id: 3,
      title: "Security Audit",
      status: "In Progress",
      dueDate: "2024-02-15",
      priority: "Medium",
      description: "Quarterly security compliance review",
      progress: 45,
    },
    {
      id: 4,
      title: "Lab Testing Reports",
      status: "Overdue",
      dueDate: "2024-01-10",
      priority: "Critical",
      description: "Submit batch testing results to regulatory body",
      progress: 25,
    },
  ];

  const auditTrail = [
    {
      id: 1,
      action: "Inventory Transfer",
      user: "John Smith",
      timestamp: "2024-01-15 14:30:00",
      details: "Transferred 50 units from Cultivation to Processing",
    },
    {
      id: 2,
      action: "Batch Creation",
      user: "Sarah Johnson",
      timestamp: "2024-01-15 13:15:00",
      details: "Created new batch B-2024-001 with 100 plants",
    },
    {
      id: 3,
      action: "Quality Test",
      user: "Mike Davis",
      timestamp: "2024-01-15 11:45:00",
      details: "Completed potency testing for batch B-2024-001",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Compliant":
        return "text-green-400";
      case "Due Soon":
        return "text-yellow-400";
      case "In Progress":
        return "text-blue-400";
      case "Overdue":
        return "text-red-400";
      default:
        return "text-dashboard-text";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500";
      case "High":
        return "bg-orange-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-bg font-mono">
      <DashboardNavbar />

      <main className="p-4 lg:p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold font-digital text-dashboard-text mb-2">
              Compliance Management
            </h1>
            <p className="text-dashboard-text/70 font-mono">
              Track regulatory requirements and maintain audit trails
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg">
              <Plus className="h-4 w-4 mr-2" />
              New Requirement
            </Button>
            <Button
              variant="outline"
              className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">
                    Total Requirements
                  </p>
                  <p className="text-2xl font-bold text-dashboard-text">24</p>
                </div>
                <Shield className="h-8 w-8 text-dashboard-text/50" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">Compliant</p>
                  <p className="text-2xl font-bold text-green-400">18</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">Due Soon</p>
                  <p className="text-2xl font-bold text-yellow-400">4</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">Overdue</p>
                  <p className="text-2xl font-bold text-red-400">2</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-dashboard-text/50" />
            <Input
              placeholder="Search compliance items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-dashboard-bg border-dashboard-border text-dashboard-text"
            />
          </div>
        </div>

        {/* Main Content */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="bg-dashboard-bg border border-dashboard-border">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-dashboard-border data-[state=active]:text-dashboard-text text-dashboard-text/70"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="requirements"
              className="data-[state=active]:bg-dashboard-border data-[state=active]:text-dashboard-text text-dashboard-text/70"
            >
              Requirements
            </TabsTrigger>
            <TabsTrigger
              value="audit-trail"
              className="data-[state=active]:bg-dashboard-border data-[state=active]:text-dashboard-text text-dashboard-text/70"
            >
              Audit Trail
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-dashboard-border data-[state=active]:text-dashboard-text text-dashboard-text/70"
            >
              Reports
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-dashboard-bg border-dashboard-border">
                <CardHeader>
                  <CardTitle className="text-dashboard-text">
                    Compliance Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-dashboard-text/70">
                        Overall Score
                      </span>
                      <span className="text-dashboard-text font-bold text-xl">
                        85%
                      </span>
                    </div>
                    <Progress value={85} className="h-3" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-green-400 font-bold">18</div>
                        <div className="text-dashboard-text/70">Compliant</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-bold">6</div>
                        <div className="text-dashboard-text/70">Issues</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dashboard-bg border-dashboard-border">
                <CardHeader>
                  <CardTitle className="text-dashboard-text">
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {complianceItems
                      .filter((item) => item.status === "Due Soon")
                      .map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center p-2 border border-dashboard-border rounded"
                        >
                          <div>
                            <div className="text-dashboard-text font-medium text-sm">
                              {item.title}
                            </div>
                            <div className="text-dashboard-text/70 text-xs">
                              Due: {item.dueDate}
                            </div>
                          </div>
                          <Badge
                            className={`${getPriorityColor(item.priority)} text-white`}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Requirements Tab */}
          <TabsContent value="requirements" className="space-y-6">
            <div className="space-y-4">
              {complianceItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-dashboard-bg border-dashboard-border"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-dashboard-text">
                            {item.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className={`${getStatusColor(item.status)} border-current`}
                          >
                            {item.status}
                          </Badge>
                          <Badge
                            className={`${getPriorityColor(item.priority)} text-white`}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-dashboard-text/70 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-dashboard-text/70">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Due: {item.dueDate}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-dashboard-text font-bold mb-2">
                          {item.progress}%
                        </div>
                        <Progress value={item.progress} className="w-24 h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Audit Trail Tab */}
          <TabsContent value="audit-trail" className="space-y-6">
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader>
                <CardTitle className="text-dashboard-text flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {auditTrail.map((entry) => (
                    <div
                      key={entry.id}
                      className="border-l-2 border-dashboard-border pl-4 pb-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-dashboard-text font-medium">
                          {entry.action}
                        </h4>
                        <span className="text-dashboard-text/70 text-sm">
                          {entry.timestamp}
                        </span>
                      </div>
                      <p className="text-dashboard-text/70 text-sm mb-1">
                        {entry.details}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-dashboard-text/50">
                        <Users className="h-3 w-3" />
                        {entry.user}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Monthly Compliance Report",
                  description: "Comprehensive compliance status overview",
                  lastGenerated: "2024-01-15",
                },
                {
                  title: "Audit Trail Export",
                  description: "Complete activity log for regulatory review",
                  lastGenerated: "2024-01-14",
                },
                {
                  title: "Tax Filing Summary",
                  description: "Summary of tax-related compliance items",
                  lastGenerated: "2024-01-10",
                },
              ].map((report, index) => (
                <Card
                  key={index}
                  className="bg-dashboard-bg border-dashboard-border"
                >
                  <CardContent className="p-6">
                    <h3 className="text-dashboard-text font-semibold mb-2">
                      {report.title}
                    </h3>
                    <p className="text-dashboard-text/70 text-sm mb-4">
                      {report.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-dashboard-text/50 text-xs">
                        Last: {report.lastGenerated}
                      </span>
                      <Button
                        size="sm"
                        className="bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Generate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
