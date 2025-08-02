"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  UserCircle,
  ChevronDown,
  Brain,
  BookOpen,
  Truck,
  MessageSquare,
  BarChart3,
  Settings,
  User,
  Menu,
  HelpCircle,
  Vault,
  RefreshCw,
  Search,
  Clock,
  Thermometer,
  Wifi,
  Moon,
  Sun,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as React from "react";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";

import { Separator } from "./ui/separator";

interface DashboardNavbarProps {
  currentDashboardType?: "cultivation" | "processor" | "dispensary";
  onDashboardTypeChange?: (
    type: "cultivation" | "processor" | "dispensary",
  ) => void;
}

export default function DashboardNavbar({
  currentDashboardType = "cultivation",
  onDashboardTypeChange,
}: DashboardNavbarProps) {
  const supabase = createClient();
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");

  React.useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDashboardTypeChange = (
    type: "cultivation" | "processor" | "dispensary",
  ) => {
    if (onDashboardTypeChange) {
      onDashboardTypeChange(type);
    }
  };

  return (
    <div className="w-full bg-dashboard-bg border-b border-dashboard-border">
      {/* Main Header */}
      <nav className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-dashboard-text hover:opacity-80 transition-opacity"
            >
              CannaDash
            </Link>
          </div>

          {/* Center Section - Main Menu */}
          <div className="flex items-center space-x-6">
            {/* Dashboard Type Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-dashboard-text hover:bg-dashboard-border/20 capitalize"
                >
                  {currentDashboardType}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dashboard-bg border-dashboard-border">
                <DropdownMenuItem
                  onClick={() => handleDashboardTypeChange("cultivation")}
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  Cultivation
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleDashboardTypeChange("processor")}
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  Processor
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleDashboardTypeChange("dispensary")}
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  Dispensary
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Knowledge Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Knowledge
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dashboard-bg border-dashboard-border">
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/knowledge/grower-tips" className="w-full">
                    Grower Tips
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/knowledge/guidelines" className="w-full">
                    Guidelines
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/knowledge/canna-laws" className="w-full">
                    Canna Laws
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Operation Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  <Truck className="mr-2 h-4 w-4" />
                  Operation
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dashboard-bg border-dashboard-border">
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/operations/logistics" className="w-full">
                    Logistics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/marketplace" className="w-full">
                    Marketplace
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/operations/community" className="w-full">
                    Community
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/operations/overview" className="w-full">
                    Overview
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* AI Assist Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  AI Assist
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dashboard-bg border-dashboard-border">
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  Chat Bot
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  SOPs
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  Product Photography
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  Custom Videos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Analytics Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dashboard-bg border-dashboard-border">
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  In House
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  External
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  Deep Dive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dashboard-bg border-dashboard-border">
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/settings/admin" className="w-full">
                    Admin Panel
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/settings/databases" className="w-full">
                    Databases
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/settings/connections" className="w-full">
                    Connections
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  <Link href="/settings/faq" className="w-full">
                    FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Account Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  <User className="mr-2 h-4 w-4" />
                  Account
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dashboard-bg border-dashboard-border">
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  Change User
                </DropdownMenuItem>
                <DropdownMenuItem className="text-dashboard-text hover:bg-dashboard-border/20">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-dashboard-border" />
                <DropdownMenuItem
                  onClick={async () => {
                    await supabase.auth.signOut();
                    router.push("/");
                  }}
                  className="text-dashboard-text hover:bg-dashboard-border/20"
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Section - User Info */}
          <div className="flex items-center space-x-4">
            <div className="text-dashboard-text text-sm">
              <div className="font-semibold">Demo User</div>
              <div className="text-xs opacity-75">Admin Access</div>
            </div>
            <UserCircle className="h-8 w-8 text-dashboard-text" />
          </div>
        </div>
      </nav>

      {/* Secondary Header */}
      <div className="px-6 py-3 border-t border-dashboard-border">
        <div className="flex justify-between items-center">
          {/* Left Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-dashboard-text hover:bg-dashboard-border/20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              {isMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-dashboard-bg border border-dashboard-border rounded-lg shadow-lg z-50">
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-dashboard-text mb-3">
                      Quick Navigation
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/clients"
                        className="block px-3 py-2 text-dashboard-text hover:bg-dashboard-border/20 rounded transition-colors"
                      >
                        Clients
                      </Link>
                      <Link
                        href="/marketplace"
                        className="block px-3 py-2 text-dashboard-text hover:bg-dashboard-border/20 rounded transition-colors"
                      >
                        Marketplace
                      </Link>
                      <Link
                        href="/sales"
                        className="block px-3 py-2 text-dashboard-text hover:bg-dashboard-border/20 rounded transition-colors"
                      >
                        Sales Pipeline
                      </Link>
                      <Link
                        href="/compliance"
                        className="block px-3 py-2 text-dashboard-text hover:bg-dashboard-border/20 rounded transition-colors"
                      >
                        Compliance
                      </Link>
                      <Separator className="my-2" />
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 text-dashboard-text hover:bg-dashboard-border/20 rounded transition-colors"
                      >
                        Dashboard Home
                      </Link>
                      <Link
                        href="/"
                        className="block px-3 py-2 text-dashboard-text hover:bg-dashboard-border/20 rounded transition-colors"
                      >
                        Landing Page
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-dashboard-text hover:bg-dashboard-border/20"
            >
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-dashboard-text hover:bg-dashboard-border/20"
            >
              <Vault className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-dashboard-text hover:bg-dashboard-border/20"
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-dashboard-text" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 bg-dashboard-bg border-dashboard-border text-dashboard-text placeholder:text-dashboard-text/50"
              />
            </div>
          </div>

          {/* Right Recall Section */}
          <div className="flex items-center space-x-6 text-dashboard-text text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{currentTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Thermometer className="h-4 w-4" />
              <span id="temp-humidity">72°F / 45%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Shift: Day</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="h-4 w-4" />
              <span>Online</span>
            </div>
            <div className="flex items-center space-x-2">
              <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              {isDarkMode ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
