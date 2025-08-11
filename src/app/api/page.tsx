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
                </code>
              </div>
            </div>
          </section>

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
                </div>
              ))}
            </div>
          </section>

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
    </div>
  );
}
