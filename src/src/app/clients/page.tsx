"use client";

import DashboardNavbar from "@/components/dashboard-navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Search,
  Plus,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Filter,
} from "lucide-react";
import { useState } from "react";

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const clients = [
    {
      id: 1,
      name: "Green Valley Dispensary",
      type: "Dispensary",
      status: "Active",
      email: "contact@greenvalley.com",
      phone: "(555) 123-4567",
      location: "Denver, CO",
      lastOrder: "2024-01-15",
      totalValue: "$45,230",
      orders: 23,
    },
    {
      id: 2,
      name: "Mountain High Cultivation",
      type: "Cultivation",
      status: "Active",
      email: "info@mountainhigh.com",
      phone: "(555) 987-6543",
      location: "Boulder, CO",
      lastOrder: "2024-01-12",
      totalValue: "$78,450",
      orders: 45,
    },
    {
      id: 3,
      name: "Pure Extract Labs",
      type: "Processor",
      status: "Pending",
      email: "lab@pureextract.com",
      phone: "(555) 456-7890",
      location: "Fort Collins, CO",
      lastOrder: "2024-01-08",
      totalValue: "$32,100",
      orders: 12,
    },
  ];

  const filteredClients = clients.filter((client) => {
    const matchesSearch = client.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      client.type.toLowerCase() === selectedFilter ||
      client.status.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-dashboard-bg font-mono">
      <DashboardNavbar />

      <main className="p-4 lg:p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold font-digital text-dashboard-text mb-2">
              Client Management
            </h1>
            <p className="text-dashboard-text/70 font-mono">
              Manage your cannabis business relationships
            </p>
          </div>
          <Button className="bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg">
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-dashboard-text/50" />
            <Input
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-dashboard-bg border-dashboard-border text-dashboard-text"
            />
          </div>
          <div className="flex gap-2">
            {[
              "all",
              "active",
              "pending",
              "cultivation",
              "processor",
              "dispensary",
            ].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className="capitalize border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">
                    Total Clients
                  </p>
                  <p className="text-2xl font-bold text-dashboard-text">156</p>
                </div>
                <Users className="h-8 w-8 text-dashboard-text/50" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">
                    Active Clients
                  </p>
                  <p className="text-2xl font-bold text-dashboard-text">142</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">
                    Total Revenue
                  </p>
                  <p className="text-2xl font-bold text-dashboard-text">
                    $2.4M
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-dashboard-text/70 text-sm">
                    Avg Order Value
                  </p>
                  <p className="text-2xl font-bold text-dashboard-text">
                    $15.4K
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-dashboard-text/50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Client List */}
        <Card className="bg-dashboard-bg border-dashboard-border">
          <CardHeader>
            <CardTitle className="text-dashboard-text flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Client Directory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  className="border border-dashboard-border rounded-lg p-4 hover:border-dashboard-text/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-dashboard-text">
                          {client.name}
                        </h3>
                        <Badge
                          variant={
                            client.status === "Active" ? "default" : "outline"
                          }
                          className="text-xs"
                        >
                          {client.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {client.type}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-dashboard-text/70">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {client.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {client.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {client.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-dashboard-text/70">
                          Total Value
                        </p>
                        <p className="text-lg font-semibold text-dashboard-text">
                          {client.totalValue}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-dashboard-text/70">Orders</p>
                        <p className="text-lg font-semibold text-dashboard-text">
                          {client.orders}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg"
                        >
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
