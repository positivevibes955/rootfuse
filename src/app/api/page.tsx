<<<<<<< HEAD
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function APIPage() {
  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/cultivation/plants",
      description: "Retrieve all plants in cultivation",
      auth: "Required",
    },
    {
      method: "POST",
      endpoint: "/api/v1/cultivation/plants",
      description: "Create a new plant record",
      auth: "Required",
    },
    {
      method: "GET",
      endpoint: "/api/v1/inventory/items",
      description: "Get inventory items",
      auth: "Required",
    },
    {
      method: "PUT",
      endpoint: "/api/v1/inventory/items/{id}",
      description: "Update inventory item",
      auth: "Required",
    },
    {
      method: "GET",
      endpoint: "/api/v1/compliance/reports",
      description: "Retrieve compliance reports",
      auth: "Required",
    },
    {
      method: "POST",
      endpoint: "/api/v1/integrations/metrc/sync",
      description: "Trigger METRC data synchronization",
      auth: "Required",
    },
  ];

  const sdks = [
    {
      language: "JavaScript/Node.js",
      package: "@rootfuse/sdk-js",
      install: "npm install @rootfuse/sdk-js",
      docs: "#js-docs",
    },
    {
      language: "Python",
      package: "rootfuse-python",
      install: "pip install rootfuse-python",
      docs: "#python-docs",
    },
    {
      language: "PHP",
      package: "rootfuse/php-sdk",
      install: "composer require rootfuse/php-sdk",
      docs: "#php-docs",
    },
    {
      language: "Ruby",
      package: "rootfuse-ruby",
      install: "gem install rootfuse-ruby",
      docs: "#ruby-docs",
    },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-500/20 text-green-400";
      case "POST":
        return "bg-blue-500/20 text-blue-400";
      case "PUT":
        return "bg-yellow-500/20 text-yellow-400";
      case "DELETE":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-dashboard-border/20 text-dashboard-text";
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-dashboard-text mb-8 font-digital">
            Rootfuse API
          </h1>
          <p className="text-xl text-dashboard-text/80 mb-12 font-mono">
            Integrate Rootfuse Command Center with your applications and
            workflows
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-dashboard-text mb-6 font-digital">
              Getting Started
            </h2>
            <div className="bg-dashboard-border/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-dashboard-text mb-4 font-digital">
                Authentication
              </h3>
              <p className="text-dashboard-text/70 mb-4 font-mono">
                All API requests require authentication using API keys. You can
                generate API keys from your dashboard settings.
              </p>
              <div className="bg-dashboard-bg p-4 rounded border border-dashboard-border">
                <code className="text-dashboard-text font-mono text-sm">
                  curl -H "Authorization: Bearer YOUR_API_KEY" \
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  https://api.rootfuse.com/v1/cultivation/plants
=======
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Code, Database, Zap, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "API Documentation - Rootfuse Command Center",
  description:
    "Comprehensive API documentation for Rootfuse Command Center integration.",
};

export default function APIPage() {
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
            API Documentation
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Integrate Rootfuse Command Center with your existing systems using
            our comprehensive REST API.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              API Overview
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 mb-8">
              <p className="text-dashboard-text/80 font-mono mb-4">
                The Rootfuse API provides programmatic access to all core
                functionality of the Command Center platform. Built on REST
                principles, our API uses standard HTTP methods and returns JSON
                responses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-dashboard-text" />
                  <span className="text-dashboard-text font-mono">
                    OAuth 2.0 Authentication
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-dashboard-text" />
                  <span className="text-dashboard-text font-mono">
                    Rate Limited (1000/hour)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-dashboard-text" />
                  <span className="text-dashboard-text font-mono">
                    JSON Response Format
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-dashboard-text" />
                  <span className="text-dashboard-text font-mono">
                    RESTful Architecture
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Base URL */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Base URL
            </h2>
            <div className="bg-dashboard-border/20 border border-dashboard-border rounded-lg p-4">
              <code className="text-dashboard-text font-mono">
                https://api.rootfuse.com/v1
              </code>
            </div>
          </section>

          {/* Authentication */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Authentication
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <p className="text-dashboard-text/80 font-mono mb-4">
                All API requests require authentication using Bearer tokens.
                Include your API key in the Authorization header:
              </p>
              <div className="bg-dashboard-border/20 border border-dashboard-border rounded-lg p-4">
                <code className="text-dashboard-text font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
>>>>>>> a0bb835 (Landing Page Design Update)
                </code>
              </div>
            </div>
          </section>

<<<<<<< HEAD
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-dashboard-text mb-6 font-digital">
              API Endpoints
            </h2>
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="bg-dashboard-border/20 p-6 rounded-lg hover:bg-dashboard-border/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-mono ${getMethodColor(endpoint.method)}`}
                        >
                          {endpoint.method}
                        </span>
                        <code className="text-dashboard-text font-mono">
                          {endpoint.endpoint}
                        </code>
                      </div>
                      <p className="text-dashboard-text/70 font-mono">
                        {endpoint.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 text-sm text-dashboard-text/60 font-mono">
                      Auth: {endpoint.auth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-dashboard-text mb-6 font-digital">
              SDKs & Libraries
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sdks.map((sdk, index) => (
                <div
                  key={index}
                  className="bg-dashboard-border/20 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-dashboard-text mb-2 font-digital">
                    {sdk.language}
                  </h3>
                  <p className="text-dashboard-text/70 mb-4 font-mono text-sm">
                    Package: {sdk.package}
                  </p>
                  <div className="bg-dashboard-bg p-3 rounded border border-dashboard-border mb-4">
                    <code className="text-dashboard-text font-mono text-sm">
                      {sdk.install}
                    </code>
                  </div>
                  <button className="w-full px-4 py-2 bg-dashboard-text text-dashboard-bg font-mono rounded-lg hover:bg-dashboard-text/90 transition-colors">
                    View Documentation
                  </button>
=======
          {/* Endpoints */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Core Endpoints
            </h2>
            <div className="space-y-6">
              {[
                {
                  method: "GET",
                  endpoint: "/inventory",
                  description:
                    "Retrieve all inventory items with real-time quantities",
                },
                {
                  method: "POST",
                  endpoint: "/inventory",
                  description:
                    "Create new inventory item with METRC compliance",
                },
                {
                  method: "GET",
                  endpoint: "/batches",
                  description:
                    "List all cultivation batches with growth stages",
                },
                {
                  method: "POST",
                  endpoint: "/batches",
                  description: "Create new cultivation batch with tracking",
                },
                {
                  method: "GET",
                  endpoint: "/compliance/reports",
                  description:
                    "Generate compliance reports for regulatory submission",
                },
                {
                  method: "GET",
                  endpoint: "/analytics/kpis",
                  description:
                    "Retrieve key performance indicators and metrics",
                },
              ].map((endpoint, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4"
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-mono ${
                        endpoint.method === "GET"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-dashboard-text font-mono">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    {endpoint.description}
                  </p>
>>>>>>> a0bb835 (Landing Page Design Update)
                </div>
              ))}
            </div>
          </section>

<<<<<<< HEAD
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-dashboard-text mb-6 font-digital">
              Rate Limits
            </h2>
            <div className="bg-dashboard-border/20 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-dashboard-text mb-2 font-digital">
                    1,000
                  </div>
                  <div className="text-dashboard-text/70 font-mono">
                    Requests per hour
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dashboard-text mb-2 font-digital">
                    100
                  </div>
                  <div className="text-dashboard-text/70 font-mono">
                    Requests per minute
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dashboard-text mb-2 font-digital">
                    10MB
                  </div>
                  <div className="text-dashboard-text/70 font-mono">
                    Max payload size
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-dashboard-text mb-6 font-digital">
              Webhooks
            </h2>
            <div className="bg-dashboard-border/20 p-6 rounded-lg">
              <p className="text-dashboard-text/70 mb-4 font-mono">
                Receive real-time notifications when events occur in your
                Rootfuse account.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-dashboard-text mb-2 font-digital">
                    Available Events
                  </h4>
                  <ul className="space-y-1 text-dashboard-text/70 font-mono text-sm">
                    <li>• plant.created</li>
                    <li>• plant.updated</li>
                    <li>• inventory.changed</li>
                    <li>• compliance.alert</li>
                    <li>• harvest.completed</li>
                    <li>• batch.processed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dashboard-text mb-2 font-digital">
                    Setup
                  </h4>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-4">
                    Configure webhook endpoints in your dashboard settings to
                    receive event notifications.
                  </p>
                  <button className="px-4 py-2 bg-dashboard-text text-dashboard-bg font-mono rounded-lg hover:bg-dashboard-text/90 transition-colors">
                    Configure Webhooks
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center bg-dashboard-border/20 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-dashboard-text mb-4 font-digital">
              Need Help?
            </h2>
            <p className="text-dashboard-text/70 mb-6 font-mono">
              Our developer support team is here to help you integrate with
              Rootfuse.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-dashboard-text text-dashboard-bg font-mono rounded-lg hover:bg-dashboard-text/90 transition-colors">
                View Full Documentation
              </button>
              <a
                href="mailto:developers@rootfuse.com"
                className="inline-block px-8 py-3 border border-dashboard-text text-dashboard-text font-mono rounded-lg hover:bg-dashboard-text hover:text-dashboard-bg transition-colors"
              >
                Contact Developers
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
=======
          {/* SDKs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              SDKs & Libraries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "JavaScript/Node.js", status: "Available" },
                { name: "Python", status: "Available" },
                { name: "PHP", status: "Coming Soon" },
                { name: "Ruby", status: "Coming Soon" },
              ].map((sdk, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-dashboard-text font-mono font-semibold">
                      {sdk.name}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-mono ${
                        sdk.status === "Available"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {sdk.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Support */}
          <section>
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              API Support
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <p className="text-dashboard-text/80 font-mono mb-4">
                Need help with API integration? Our developer support team is
                here to assist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:api-support@rootfuse.com"
                  className="inline-flex items-center px-4 py-2 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital"
                >
                  Contact API Support
                </a>
                <a
                  href="/documentation"
                  className="inline-flex items-center px-4 py-2 border border-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-border/20 transition-colors font-mono"
                >
                  View Full Documentation
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
>>>>>>> a0bb835 (Landing Page Design Update)
    </div>
  );
}
