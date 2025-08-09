import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Book,
  Code,
  Settings,
  Users,
  Shield,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation - Rootfuse Command Center",
  description:
    "Comprehensive documentation for Rootfuse Command Center platform.",
};

export default function DocumentationPage() {
  const docSections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Quick start guide and initial setup instructions",
      articles: [
        "Platform Overview",
        "Account Setup",
        "First Login",
        "Dashboard Navigation",
        "User Roles & Permissions",
      ],
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "System configuration and customization options",
      articles: [
        "License Configuration",
        "METRC Integration Setup",
        "User Management",
        "Notification Settings",
        "Custom Fields",
      ],
    },
    {
      icon: Users,
      title: "Operations Management",
      description:
        "Managing cultivation, processing, and dispensary operations",
      articles: [
        "Inventory Management",
        "Batch Tracking",
        "Harvest Management",
        "Processing Workflows",
        "Sales & Dispensing",
      ],
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Regulatory compliance and reporting features",
      articles: [
        "METRC Compliance",
        "State Reporting",
        "Audit Trails",
        "Lab Testing Integration",
        "Compliance Alerts",
      ],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Developer documentation and API integration guides",
      articles: [
        "Authentication",
        "REST API Endpoints",
        "Webhooks",
        "SDKs & Libraries",
        "Rate Limits",
      ],
    },
    {
      icon: Zap,
      title: "Integrations",
      description: "Third-party integrations and data connections",
      articles: [
        "POS Systems",
        "Accounting Software",
        "Lab Partners",
        "E-commerce Platforms",
        "Custom Integrations",
      ],
    },
  ];

  const popularArticles = [
    "How to Set Up METRC Integration",
    "Managing Multi-License Operations",
    "Inventory Tracking Best Practices",
    "Compliance Reporting Guide",
    "API Authentication Setup",
    "User Role Configuration",
  ];

  return (
    <div className="min-h-screen bg-dashboard-bg">
      {/* Header */}
      <div className="border-b border-dashboard-border bg-dashboard-bg py-8">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-dashboard-text hover:text-dashboard-border mb-6 font-mono"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold font-digital text-dashboard-text mb-4">
            Documentation
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Everything you need to know about using Rootfuse Command Center
            effectively.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Search */}
          <section className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-4 py-3 bg-dashboard-bg border border-dashboard-border rounded-lg text-dashboard-text font-mono focus:outline-none focus:border-dashboard-text pl-12"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-dashboard-text/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Popular Articles
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {popularArticles.map((article, index) => (
                  <button
                    key={index}
                    className="text-left p-3 rounded-lg hover:bg-dashboard-border/20 transition-colors"
                  >
                    <span className="text-dashboard-text hover:text-dashboard-border font-mono">
                      {article}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Documentation Sections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Documentation Sections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docSections.map((section, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 hover:border-dashboard-text/50 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <section.icon className="w-6 h-6 text-dashboard-text mr-3" />
                    <h3 className="text-xl font-bold font-digital text-dashboard-text">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-4">
                    {section.description}
                  </p>
                  <ul className="space-y-2">
                    {section.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <button className="text-dashboard-text/80 hover:text-dashboard-text font-mono text-sm text-left">
                          {article}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: "API Reference", link: "/api" },
                { title: "Video Tutorials", link: "#" },
                { title: "Community Forum", link: "/community" },
                { title: "Contact Support", link: "/help-center" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="block p-4 bg-dashboard-bg border border-dashboard-border rounded-lg hover:border-dashboard-text/50 transition-colors text-center"
                >
                  <span className="text-dashboard-text font-mono font-semibold">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Help */}
          <section>
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Need More Help?
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <p className="text-dashboard-text/80 font-mono mb-6">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/help-center"
                  className="inline-flex items-center px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital"
                >
                  Contact Support
                </Link>
                <Link
                  href="/community"
                  className="inline-flex items-center px-6 py-3 border border-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-border/20 transition-colors font-mono"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
