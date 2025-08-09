"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  DollarSign,
  TrendingUp,
  Users,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Edit,
  Trash2,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  value: number;
  stage: string;
  probability: number;
  lastContact: string;
  source: string;
}

interface Deal {
  id: string;
  title: string;
  client: string;
  value: number;
  stage: string;
  probability: number;
  closeDate: string;
  owner: string;
}

const mockLeads: Lead[] = [
  {
    id: "1",
    name: "John Smith",
    company: "Green Valley Dispensary",
    email: "john@greenvalley.com",
    phone: "(555) 123-4567",
    value: 15000,
    stage: "Qualified",
    probability: 75,
    lastContact: "2024-01-15",
    source: "Website",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    company: "Mountain High Cultivation",
    email: "sarah@mountainhigh.com",
    phone: "(555) 987-6543",
    value: 25000,
    stage: "Proposal",
    probability: 60,
    lastContact: "2024-01-14",
    source: "Referral",
  },
  {
    id: "3",
    name: "Mike Davis",
    company: "Pure Extract Labs",
    email: "mike@pureextract.com",
    phone: "(555) 456-7890",
    value: 35000,
    stage: "Negotiation",
    probability: 85,
    lastContact: "2024-01-13",
    source: "Trade Show",
  },
];

const mockDeals: Deal[] = [
  {
    id: "1",
    title: "Cultivation Management System",
    client: "Green Valley Dispensary",
    value: 15000,
    stage: "Qualified",
    probability: 75,
    closeDate: "2024-02-15",
    owner: "Alex Thompson",
  },
  {
    id: "2",
    title: "Processing Equipment Integration",
    client: "Mountain High Cultivation",
    value: 25000,
    stage: "Proposal",
    probability: 60,
    closeDate: "2024-02-28",
    owner: "Sarah Wilson",
  },
  {
    id: "3",
    title: "Compliance Tracking Solution",
    client: "Pure Extract Labs",
    value: 35000,
    stage: "Negotiation",
    probability: 85,
    closeDate: "2024-02-10",
    owner: "Mike Johnson",
  },
];

const pipelineStages = [
  { name: "Lead", count: 12, value: 180000 },
  { name: "Qualified", count: 8, value: 120000 },
  { name: "Proposal", count: 5, value: 75000 },
  { name: "Negotiation", count: 3, value: 45000 },
  { name: "Closed Won", count: 2, value: 30000 },
];

export default function SalesPage() {
  const [activeTab, setActiveTab] = useState("pipeline");
  const [searchTerm, setSearchTerm] = useState("");

  const totalPipelineValue = pipelineStages.reduce(
    (sum, stage) => sum + stage.value,
    0,
  );
  const totalDeals = pipelineStages.reduce(
    (sum, stage) => sum + stage.count,
    0,
  );
  const avgDealSize = totalPipelineValue / totalDeals;
  const conversionRate =
    (pipelineStages[4].count / pipelineStages[0].count) * 100;

  return (
    <div className="min-h-screen bg-[#021612] text-[#35f6ae] font-mono p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#35f6ae] mb-2">
              Sales Pipeline
            </h1>
            <p className="text-[#35f6ae]/70">
              Manage leads, deals, and sales performance
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-[#008347] hover:bg-[#008347]/80 text-[#35f6ae] border border-[#008347]">
              <Plus className="w-4 h-4 mr-2" />
              New Lead
            </Button>
            <Button className="bg-[#008347] hover:bg-[#008347]/80 text-[#35f6ae] border border-[#008347]">
              <Plus className="w-4 h-4 mr-2" />
              New Deal
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#021612] border-[#008347] text-[#35f6ae]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#35f6ae]/70">Total Pipeline</p>
                  <p className="text-2xl font-bold">
                    ${totalPipelineValue.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-[#35f6ae]/50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#021612] border-[#008347] text-[#35f6ae]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#35f6ae]/70">Active Deals</p>
                  <p className="text-2xl font-bold">{totalDeals}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-[#35f6ae]/50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#021612] border-[#008347] text-[#35f6ae]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#35f6ae]/70">Avg Deal Size</p>
                  <p className="text-2xl font-bold">
                    ${avgDealSize.toLocaleString()}
                  </p>
                </div>
                <Users className="w-8 h-8 text-[#35f6ae]/50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#021612] border-[#008347] text-[#35f6ae]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#35f6ae]/70">Conversion Rate</p>
                  <p className="text-2xl font-bold">
                    {conversionRate.toFixed(1)}%
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-[#35f6ae]/50" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#35f6ae]/50" />
          <Input
            placeholder="Search leads and deals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#021612] border-[#008347] text-[#35f6ae] placeholder:text-[#35f6ae]/50"
          />
        </div>
        <Button
          variant="outline"
          className="border-[#008347] text-[#35f6ae] hover:bg-[#008347]/20"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Main Content */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="bg-[#021612] border border-[#008347]">
          <TabsTrigger
            value="pipeline"
            className="data-[state=active]:bg-[#008347] data-[state=active]:text-[#35f6ae] text-[#35f6ae]/70"
          >
            Pipeline View
          </TabsTrigger>
          <TabsTrigger
            value="leads"
            className="data-[state=active]:bg-[#008347] data-[state=active]:text-[#35f6ae] text-[#35f6ae]/70"
          >
            Leads
          </TabsTrigger>
          <TabsTrigger
            value="deals"
            className="data-[state=active]:bg-[#008347] data-[state=active]:text-[#35f6ae] text-[#35f6ae]/70"
          >
            Deals
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-[#008347] data-[state=active]:text-[#35f6ae] text-[#35f6ae]/70"
          >
            Analytics
          </TabsTrigger>
        </TabsList>

        {/* Pipeline View */}
        <TabsContent value="pipeline" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {pipelineStages.map((stage, index) => (
              <Card key={stage.name} className="bg-[#021612] border-[#008347]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-[#35f6ae] text-sm font-medium">
                    {stage.name}
                  </CardTitle>
                  <div className="flex items-center justify-between text-xs text-[#35f6ae]/70">
                    <span>{stage.count} deals</span>
                    <span>${stage.value.toLocaleString()}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {mockDeals
                    .filter((deal) => deal.stage === stage.name)
                    .map((deal) => (
                      <div
                        key={deal.id}
                        className="p-3 bg-[#021612] border border-[#008347]/50 rounded-lg hover:border-[#008347] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-[#35f6ae] text-sm font-medium truncate">
                            {deal.title}
                          </h4>
                          <MoreHorizontal className="w-4 h-4 text-[#35f6ae]/50" />
                        </div>
                        <p className="text-xs text-[#35f6ae]/70 mb-2">
                          {deal.client}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#35f6ae] font-medium text-sm">
                            ${deal.value.toLocaleString()}
                          </span>
                          <Badge
                            variant="outline"
                            className="border-[#008347] text-[#35f6ae] text-xs"
                          >
                            {deal.probability}%
                          </Badge>
                        </div>
                        <div className="mt-2">
                          <Progress
                            value={deal.probability}
                            className="h-1 bg-[#008347]/20"
                          />
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Leads Tab */}
        <TabsContent value="leads" className="space-y-6">
          <div className="grid gap-4">
            {mockLeads.map((lead) => (
              <Card key={lead.id} className="bg-[#021612] border-[#008347]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-[#35f6ae] font-medium text-lg">
                          {lead.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-[#008347] text-[#35f6ae]"
                        >
                          {lead.stage}
                        </Badge>
                      </div>
                      <p className="text-[#35f6ae]/70 mb-2">{lead.company}</p>
                      <div className="flex items-center gap-6 text-sm text-[#35f6ae]/70">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {lead.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {lead.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Last contact: {lead.lastContact}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#35f6ae] font-bold text-xl mb-2">
                        ${lead.value.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#008347] text-[#35f6ae] hover:bg-[#008347]/20"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#008347] text-[#35f6ae] hover:bg-[#008347]/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Deals Tab */}
        <TabsContent value="deals" className="space-y-6">
          <div className="grid gap-4">
            {mockDeals.map((deal) => (
              <Card key={deal.id} className="bg-[#021612] border-[#008347]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-[#35f6ae] font-medium text-lg">
                          {deal.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-[#008347] text-[#35f6ae]"
                        >
                          {deal.stage}
                        </Badge>
                      </div>
                      <p className="text-[#35f6ae]/70 mb-2">{deal.client}</p>
                      <div className="flex items-center gap-6 text-sm text-[#35f6ae]/70">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Close Date: {deal.closeDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Owner: {deal.owner}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#35f6ae] font-bold text-xl mb-2">
                        ${deal.value.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-[#35f6ae]/70">
                          Probability:
                        </span>
                        <Badge
                          variant="outline"
                          className="border-[#008347] text-[#35f6ae]"
                        >
                          {deal.probability}%
                        </Badge>
                      </div>
                      <Progress
                        value={deal.probability}
                        className="h-2 bg-[#008347]/20 w-24"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#021612] border-[#008347]">
              <CardHeader>
                <CardTitle className="text-[#35f6ae]">
                  Sales Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#35f6ae]/70">This Month</span>
                    <span className="text-[#35f6ae] font-bold">$45,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#35f6ae]/70">Last Month</span>
                    <span className="text-[#35f6ae] font-bold">$38,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#35f6ae]/70">Growth</span>
                    <span className="text-green-400 font-bold">+18.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#021612] border-[#008347]">
              <CardHeader>
                <CardTitle className="text-[#35f6ae]">Lead Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#35f6ae]/70">Website</span>
                    <span className="text-[#35f6ae] font-bold">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#35f6ae]/70">Referrals</span>
                    <span className="text-[#35f6ae] font-bold">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#35f6ae]/70">Trade Shows</span>
                    <span className="text-[#35f6ae] font-bold">25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
