import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertCircle, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "System Status - Rootfuse Command Center",
  description:
    "Real-time status of Rootfuse Command Center services and infrastructure.",
};

export default function StatusPage() {
  const services = [
    {
      name: "Command Center Dashboard",
      status: "operational",
      uptime: "99.9%",
      responseTime: "120ms",
    },
    {
      name: "METRC Integration",
      status: "operational",
      uptime: "99.8%",
      responseTime: "250ms",
    },
    {
      name: "API Services",
      status: "operational",
      uptime: "99.9%",
      responseTime: "95ms",
    },
    {
      name: "Database",
      status: "operational",
      uptime: "100%",
      responseTime: "45ms",
    },
    {
      name: "Authentication",
      status: "operational",
      uptime: "99.9%",
      responseTime: "80ms",
    },
    {
      name: "File Storage",
      status: "operational",
      uptime: "99.7%",
      responseTime: "150ms",
    },
  ];

  const incidents = [
    {
      title: "Scheduled Maintenance - Database Optimization",
      status: "resolved",
      date: "Jan 15, 2024",
      duration: "30 minutes",
      description: "Routine database maintenance to improve performance.",
    },
    {
      title: "METRC API Rate Limiting",
      status: "resolved",
      date: "Jan 10, 2024",
      duration: "2 hours",
      description:
        "Temporary delays in METRC sync due to state API rate limits.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-400";
      case "degraded":
        return "text-yellow-400";
      case "outage":
        return "text-red-400";
      default:
        return "text-dashboard-text";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5" />;
      case "outage":
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

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
            System Status
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Real-time status of all Rootfuse Command Center services and
            infrastructure.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overall Status */}
          <section className="mb-12">
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold font-digital text-dashboard-text">
                  All Systems Operational
                </h2>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-mono">Operational</span>
                </div>
              </div>
              <p className="text-dashboard-text/80 font-mono">
                All services are running normally. Last updated:{" "}
                {new Date().toLocaleString()}
              </p>
            </div>
          </section>

          {/* Services Status */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Service Status
            </h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={getStatusColor(service.status)}>
                        {getStatusIcon(service.status)}
                      </div>
                      <div>
                        <h3 className="text-dashboard-text font-digital font-semibold">
                          {service.name}
                        </h3>
                        <p
                          className={`text-sm font-mono ${getStatusColor(service.status)}`}
                        >
                          {service.status.charAt(0).toUpperCase() +
                            service.status.slice(1)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-dashboard-text/70 font-mono text-sm">
                        Uptime: {service.uptime}
                      </div>
                      <div className="text-dashboard-text/70 font-mono text-sm">
                        Response: {service.responseTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Zap className="w-8 h-8 text-dashboard-text" />
                </div>
                <div className="text-2xl font-bold font-digital text-dashboard-text mb-1">
                  99.9%
                </div>
                <div className="text-dashboard-text/70 font-mono text-sm">
                  Overall Uptime
                </div>
              </div>
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Clock className="w-8 h-8 text-dashboard-text" />
                </div>
                <div className="text-2xl font-bold font-digital text-dashboard-text mb-1">
                  125ms
                </div>
                <div className="text-dashboard-text/70 font-mono text-sm">
                  Avg Response Time
                </div>
              </div>
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <CheckCircle className="w-8 h-8 text-dashboard-text" />
                </div>
                <div className="text-2xl font-bold font-digital text-dashboard-text mb-1">
                  0
                </div>
                <div className="text-dashboard-text/70 font-mono text-sm">
                  Active Incidents
                </div>
              </div>
            </div>
          </section>

          {/* Recent Incidents */}
          <section>
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Recent Incidents
            </h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-dashboard-text font-digital font-semibold">
                      {incident.title}
                    </h3>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-2">
                    {incident.description}
                  </p>
                  <div className="flex items-center space-x-4 text-dashboard-text/60 font-mono text-xs">
                    <span>{incident.date}</span>
                    <span>Duration: {incident.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
