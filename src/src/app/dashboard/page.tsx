"use client";

import DashboardNavbar from "@/components/dashboard-navbar";
import { createClient } from "../../../supabase/client";
import {
  TrendingUp,
  Package,
  Leaf,
  DollarSign,
  Activity,
  Beaker,
  Calendar,
  Users,
  ShoppingCart,
  Building,
  UserCheck,
  Shield,
  Newspaper,
  Calculator,
  Megaphone,
  Thermometer,
  Droplets,
  AlertTriangle,
  Bot,
  Hash,
  Upload,
  Download,
  Tag,
  Plus,
  CheckSquare,
  Briefcase,
  FileText,
  CreditCard,
  StickyNote,
  CalendarDays,
  Lightbulb,
  Phone,
  Target,
  Wrench,
  AlertCircle,
  ArrowRightLeft,
  Layers,
  Send,
  Mail,
  Archive,
  BarChart3,
  FileBarChart,
  Ticket,
  ScrollText,
  Cloud,
  HardDrive,
  Clock,
  FlaskConical,
  Dna,
  Package2,
  Truck,
  Store,
  MessageCircle,
  Zap,
  Settings,
  Database,
  Globe,
  Wifi,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DashboardType = "cultivation" | "processor" | "dispensary";

export default function Dashboard() {
  const [currentDashboardType, setCurrentDashboardType] =
    useState<DashboardType>("cultivation");
  const [commandInput, setCommandInput] = useState("");
  const [showCommandSuggestions, setShowCommandSuggestions] = useState(false);
  const [userInputContent, setUserInputContent] = useState("");
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [tempHumidity, setTempHumidity] = useState({ temp: 72, humidity: 45 });
  const [isClient, setIsClient] = useState(false);

  // Fix hydration by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);

  // Update time every second
  useEffect(() => {
    if (isClient) {
      const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isClient]);

  // Simulate webhook data for temperature and humidity
  useEffect(() => {
    const interval = setInterval(() => {
      setTempHumidity({
        temp: Math.floor(Math.random() * 10) + 68, // 68-77°F
        humidity: Math.floor(Math.random() * 20) + 35, // 35-54%
      });
    }, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const handleCommandInput = (value: string) => {
    setCommandInput(value);
    setShowCommandSuggestions(value.startsWith("/"));

    // Handle slash commands
    if (value.startsWith("/")) {
      const command = value.toLowerCase();
      if (command.includes("/plant")) {
        setUserInputContent(
          "Plant Management System - Track growth stages, health metrics, and harvest schedules.",
        );
      } else if (command.includes("/batch")) {
        setUserInputContent(
          "Batch Processing - Monitor processing stages, quality control, and output metrics.",
        );
      } else if (command.includes("/inventory")) {
        setUserInputContent(
          "Inventory Management - Real-time stock levels, automated reorder points, and supply chain tracking.",
        );
      } else if (command.includes("/compliance")) {
        setUserInputContent(
          "Compliance Dashboard - Track regulatory requirements, audit trails, and reporting deadlines.",
        );
      } else if (command.includes("/analytics")) {
        setUserInputContent(
          "Advanced Analytics - Performance metrics, predictive insights, and business intelligence.",
        );
      }
    }
  };

  const handleQuickLinkClick = (linkName: string) => {
    setUserInputContent(
      `${linkName} Database - Access and manage ${linkName.toLowerCase()} records, data entry, and reporting tools.`,
    );
  };

  const kpiData = {
    cultivation: {
      totalPlants: 1247,
      activeStrains: 12,
      harvestReady: 89,
      weeklyYield: 156.7,
    },
    processor: {
      batchesProcessed: 45,
      activeProducts: 23,
      qualityScore: 98.2,
      weeklyOutput: 89.3,
    },
    dispensary: {
      dailySales: 12847,
      activeCustomers: 234,
      inventoryTurnover: 4.2,
      customerSatisfaction: 96.8,
    },
  };

  const quickLinks = [
    { name: "Task", icon: CheckSquare },
    { name: "Project", icon: Briefcase },
    { name: "Create", icon: Plus },
    { name: "Expense", icon: CreditCard },
    { name: "Note", icon: StickyNote },
    { name: "Event", icon: CalendarDays },
    { name: "Meeting", icon: Users },
    { name: "Idea", icon: Lightbulb },
    { name: "Contact", icon: Phone },
    { name: "Lead", icon: Target },
    { name: "SOP", icon: FileText },
    { name: "Issue", icon: AlertCircle },
    { name: "Transfer", icon: ArrowRightLeft },
    { name: "Batch", icon: Layers },
    { name: "Campaign", icon: Megaphone },
    { name: "Email", icon: Mail },
    { name: "Inventory", icon: Package },
    { name: "Record", icon: Archive },
    { name: "Report", icon: FileBarChart },
    { name: "Ticket", icon: Ticket },
    { name: "Log", icon: ScrollText },
    { name: "Cloud", icon: Cloud },
    { name: "Resource", icon: HardDrive },
    { name: "Clocking", icon: Clock },
    { name: "Labs", icon: FlaskConical },
    { name: "Strains", icon: Dna },
    { name: "Items", icon: Package2 },
  ];

  const handleSectionDoubleClick = (sectionName: string) => {
    // Simulate opening full page
    console.log(`Opening ${sectionName} full page`);
    alert(`Opening ${sectionName} full page view`);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-dashboard-bg font-mono">
        <DashboardNavbar
          currentDashboardType={currentDashboardType}
          onDashboardTypeChange={setCurrentDashboardType}
        />
        <main className="p-4 lg:p-6">
          <div className="text-center text-dashboard-text font-mono">
            Loading dashboard...
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dashboard-bg font-mono">
      <DashboardNavbar
        currentDashboardType={currentDashboardType}
        onDashboardTypeChange={setCurrentDashboardType}
      />
      <main className="p-4 lg:p-6 above-fold opacity-100">
        {/* Main Content Grid - Four Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6 flex">
          {/* Column 1 - Left Side (4 sections) */}
          <div className="space-y-4 w-[250]">
            <div className="grid grid-cols-1 gap-3">
              {/* KPIs - Smaller */}
              <Card className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group">
                <CardContent className="p-3 text-center">
                  <TrendingUp className="h-5 w-5 mx-auto mb-1 text-green-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-dashboard-text font-medium">
                    KPIs
                  </p>
                  <div className="text-sm font-bold text-dashboard-text">
                    {currentDashboardType === "cultivation"
                      ? kpiData.cultivation.totalPlants
                      : currentDashboardType === "processor"
                        ? kpiData.processor.batchesProcessed
                        : kpiData.dispensary.dailySales}
                  </div>
                </CardContent>
              </Card>

              {/* Custom Workflows - Moved between KPIs and Inventory */}
              <Card className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group">
                <CardContent className="p-3 text-center">
                  <Settings className="h-5 w-5 mx-auto mb-1 text-green-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-dashboard-text font-medium">
                    Custom Workflows
                  </p>
                  <div className="text-xs text-dashboard-text/70">
                    Automation
                  </div>
                </CardContent>
              </Card>

              {/* Inventory - Smaller */}
              <Card className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group">
                <CardContent className="p-3 text-center">
                  <Package className="h-5 w-5 mx-auto mb-1 text-green-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-dashboard-text font-medium">
                    Inventory
                  </p>
                  <div className="text-xs text-dashboard-text/70">
                    Real-time tracking
                  </div>
                </CardContent>
              </Card>

              {/* Cultivation - Larger */}
              <Card className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <Leaf className="h-8 w-8 mx-auto mb-2 text-green-500 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-dashboard-text font-medium mb-2">
                    {currentDashboardType === "cultivation"
                      ? "Cultivation"
                      : currentDashboardType === "processor"
                        ? "Processing"
                        : "Dispensary"}
                  </p>
                  <div className="space-y-1 text-xs text-dashboard-text/70">
                    <div>Active Operations</div>
                    <div>Quality Control</div>
                    <div>Production Metrics</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Column 2 - Center (Quick Links, Data Entry, Data Recall) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Links - All 27 */}
            <Card className="bg-dashboard-bg border-dashboard-border flex justify-center items-center content-between">
              <CardContent className="pt-6 flex">
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {quickLinks.map((link, index) => (
                    <div
                      key={link.name}
                      className="hexagon-small"
                      onClick={() => handleQuickLinkClick(link.name)}
                    >
                      <div className="hexagon-inner-small">
                        <div className="hexagon-content-small">
                          <link.icon className="h-3 w-3 mb-1" />
                          <span className="text-xs">{link.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Data Entry - Shortened with inline buttons */}
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Input
                        placeholder="Type / for commands..."
                        value={commandInput}
                        onChange={(e) => handleCommandInput(e.target.value)}
                        className="bg-dashboard-bg border-dashboard-border text-dashboard-text placeholder:text-dashboard-text/50"
                      />
                      {showCommandSuggestions && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-dashboard-bg border border-dashboard-border rounded-md shadow-lg z-10">
                          <div className="p-2 space-y-1">
                            <div className="text-dashboard-text/70 text-xs font-medium px-2 py-1">
                              Available Commands:
                            </div>
                            {[
                              "/plant",
                              "/batch",
                              "/inventory",
                              "/compliance",
                              "/analytics",
                            ].map((cmd) => (
                              <div
                                key={cmd}
                                className="px-2 py-1 text-dashboard-text hover:bg-dashboard-border/20 rounded cursor-pointer text-sm"
                                onClick={() => handleCommandInput(cmd)}
                              >
                                {cmd}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border px-2"
                    >
                      <Tag className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border px-2"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border px-2"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border px-2"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Recall/User Input Box - Larger, No Title */}
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardContent className="pt-6">
                {userInputContent ? (
                  <div className="space-y-4">
                    <div className="text-dashboard-text p-6 bg-dashboard-border/10 rounded-lg min-h-[200px]">
                      {userInputContent}
                    </div>
                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
                        onClick={() => setUserInputContent("")}
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-dashboard-text/70 text-center p-6 bg-dashboard-border/5 rounded-lg min-h-[200px] flex items-center justify-center">
                    <div className="text-sm font-mono">
                      Click a Quick Link or use slash commands to display
                      database content here
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Three sections in a row under data recall */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group">
                <CardContent className="p-3 text-center">
                  <DollarSign className="h-6 w-6 mx-auto mb-1 text-green-300 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-dashboard-text font-medium">
                    Financial
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group">
                <CardContent className="p-3 text-center">
                  <Activity className="h-6 w-6 mx-auto mb-1 text-green-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-dashboard-text font-medium">
                    Activity Feed
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group">
                <CardContent className="p-3 text-center">
                  <Beaker className="h-6 w-6 mx-auto mb-1 text-green-500 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-dashboard-text font-medium">
                    Product Dev
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Column 3 - Right Side First Half */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Calendar", color: "text-green-300" },
                { name: "Client", color: "text-green-400" },
                { name: "Sales", color: "text-green-500" },
                { name: "Facility", color: "text-green-300" },
                { name: "News", color: "text-green-400" },
              ].map((section, index) => (
                <Card
                  key={section.name}
                  className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group"
                  onDoubleClick={() => handleSectionDoubleClick(section.name)}
                >
                  <CardContent className="p-3 text-center">
                    <p className={`text-xs ${section.color} font-medium`}>
                      {section.name}
                    </p>
                    <div className="mt-1 flex justify-center space-x-1">
                      <div className="w-1 h-1 bg-dashboard-text/20 rounded-full"></div>
                      <div className="w-1 h-1 bg-dashboard-text rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-dashboard-text/20 rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Column 4 - Right Side Second Half */}
          <div className="space-y-4 flex justify-end items-start">
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "HR", color: "text-green-400" },
                { name: "Compliance", color: "text-green-500" },
                { name: "Calculate", color: "text-green-300" },
                { name: "Marketing", color: "text-green-400" },
              ].map((section, index) => (
                <Card
                  key={section.name}
                  className="bg-dashboard-bg border-dashboard-border hover:border-dashboard-text/50 transition-colors cursor-pointer group"
                  onDoubleClick={() => handleSectionDoubleClick(section.name)}
                >
                  <CardContent className="p-3 text-center">
                    <p className={`text-xs ${section.color} font-medium`}>
                      {section.name}
                    </p>
                    <div className="mt-1 flex justify-center space-x-1">
                      <div className="w-1 h-1 bg-dashboard-text/20 rounded-full"></div>
                      <div className="w-1 h-1 bg-dashboard-text rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-dashboard-text/20 rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Environment, AI Assistant, and Irrigation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Environment Section */}
          <Card className="bg-dashboard-bg border-dashboard-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-dashboard-text flex items-center text-lg">
                <Thermometer className="h-5 w-5 mr-2 text-orange-400" />
                Environment Control
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-dashboard-text">
                      {tempHumidity.temp}°F
                    </div>
                    <div className="text-sm text-dashboard-text/70">
                      Temperature
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-dashboard-text">
                      {tempHumidity.humidity}%
                    </div>
                    <div className="text-sm text-dashboard-text/70">
                      Humidity
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-dashboard-text/70">CO2 Level</span>
                    <span className="text-dashboard-text">1200 ppm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dashboard-text/70">
                      Light Intensity
                    </span>
                    <span className="text-dashboard-text">850 PPFD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dashboard-text/70">Air Flow</span>
                    <span className="text-dashboard-text">Optimal</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg text-sm"
                  onDoubleClick={() => handleSectionDoubleClick("Environment")}
                >
                  View Full Environment Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card className="bg-dashboard-bg border-dashboard-border border-2 border-green-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-dashboard-text flex items-center justify-center text-lg">
                <div className="relative">
                  <Bot className="h-6 w-6 mr-2 text-green-400" />
                  <Zap className="h-3 w-3 absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
                </div>
                CannaBuddy AI
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="bg-dashboard-border/20 rounded-lg p-3">
                  <div className="text-center mb-2">
                    <div className="text-4xl">🌿</div>
                    <div className="text-xs text-dashboard-text/70">
                      Your Cannabis Expert
                    </div>
                  </div>
                  <p className="text-dashboard-text text-sm text-center">
                    Ready to optimize your {currentDashboardType} operations?
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me anything..."
                    className="bg-dashboard-bg border-dashboard-border text-dashboard-text placeholder:text-dashboard-text/50 flex-1 text-sm"
                  />
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-dashboard-bg"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {["SOPs", "Compliance", "Best Practices", "Optimization"].map(
                    (topic) => (
                      <Badge
                        key={topic}
                        variant="outline"
                        className="text-xs border-dashboard-border text-dashboard-text hover:bg-dashboard-border/20 cursor-pointer"
                      >
                        {topic}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Irrigation Section - Only for Cultivation, or Alternative for other types */}
          {currentDashboardType === "cultivation" ? (
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-dashboard-text flex items-center text-lg">
                  <Droplets className="h-5 w-5 mr-2 text-blue-400" />
                  Irrigation System
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl lg:text-2xl font-bold text-dashboard-text">
                        6.2
                      </div>
                      <div className="text-sm text-dashboard-text/70">
                        pH Level
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl lg:text-2xl font-bold text-dashboard-text">
                        1.8
                      </div>
                      <div className="text-sm text-dashboard-text/70">
                        EC (mS/cm)
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-dashboard-text/70">Water Temp</span>
                      <span className="text-dashboard-text">68°F</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-dashboard-text/70">Flow Rate</span>
                      <span className="text-dashboard-text">2.5 L/min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-dashboard-text/70">
                        Next Feeding
                      </span>
                      <span className="text-dashboard-text">2h 15m</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg text-sm"
                    onDoubleClick={() => handleSectionDoubleClick("Irrigation")}
                  >
                    View Full Irrigation Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-dashboard-bg border-dashboard-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-dashboard-text flex items-center text-lg">
                  <Activity className="h-5 w-5 mr-2 text-green-400" />
                  {currentDashboardType === "processor"
                    ? "Production Metrics"
                    : "Store Analytics"}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl lg:text-2xl font-bold text-dashboard-text">
                        {currentDashboardType === "processor" ? "94%" : "87%"}
                      </div>
                      <div className="text-sm text-dashboard-text/70">
                        {currentDashboardType === "processor"
                          ? "Efficiency"
                          : "Customer Retention"}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl lg:text-2xl font-bold text-dashboard-text">
                        {currentDashboardType === "processor" ? "23" : "156"}
                      </div>
                      <div className="text-sm text-dashboard-text/70">
                        {currentDashboardType === "processor"
                          ? "Active Batches"
                          : "Daily Transactions"}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-dashboard-border text-dashboard-text hover:bg-dashboard-text hover:text-dashboard-bg text-sm"
                    onDoubleClick={() =>
                      handleSectionDoubleClick(
                        currentDashboardType === "processor"
                          ? "Production"
                          : "Store Analytics",
                      )
                    }
                  >
                    View Full{" "}
                    {currentDashboardType === "processor"
                      ? "Production"
                      : "Analytics"}{" "}
                    Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
