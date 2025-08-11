import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Thermometer,
  Droplets,
  Wind,
  Zap,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Environment Sync - Rootfuse Command Center",
  description:
    "Real-time environmental monitoring and controller integration for cannabis operations.",
};

export default function EnvironmentSyncInfoPage() {
  const controllers = [
    {
      name: "Growlink",
      price: "$49/month",
      features: ["Temperature", "Humidity", "CO2", "Lighting"],
    },
    {
      name: "Aranet",
      price: "$79/month",
      features: ["Wireless Sensors", "Multi-zone", "Historical Data"],
    },
    {
      name: "TrolMaster Custom Module Kit",
      price: "$159/zone + $199 setup consult",
      features: [
        "Exclusive to Rootfuse Users",
        "Direct Hardware Integration",
        "Real-time Environmental Data",
        "Custom API Access",
      ],
    },
    {
      name: "Titan Controls",
      price: "$129/month",
      features: ["Industrial Grade", "Multi-room", "Advanced Analytics"],
    },
    {
      name: "Custom Integration",
      price: "$199/month",
      features: ["Any Controller", "Custom API", "Full Support"],
    },
  ];

  const metrics = [
    {
      icon: Thermometer,
      title: "Temperature Monitoring",
      description:
        "Real-time temperature tracking with automated alerts for out-of-range conditions",
    },
    {
      icon: Droplets,
      title: "Humidity Control",
      description:
        "Precise humidity monitoring with VPD calculations and mold prevention alerts",
    },
    {
      icon: Wind,
      title: "Airflow Management",
      description:
        "Fan speed monitoring and automated ventilation control based on conditions",
    },
    {
      icon: Zap,
      title: "Lighting Integration",
      description:
        "Light schedule tracking, PPFD monitoring, and energy consumption analytics",
    },
  ];

  const benefits = [
    "Automated compliance logging for state inspections",
    "Real-time alerts sent to your team via SMS/email",
    "Historical data analysis and trend reporting",
    "Integration with batch tracking and harvest planning",
    "Energy consumption monitoring and optimization",
    "Predictive analytics for environmental issues",
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
            Environment Sync
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Connect your environmental controllers to Rootfuse for real-time
            monitoring, automated compliance, and predictive analytics.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Pricing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Supported Controllers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {controllers.map((controller, index) => (
                <div
                  key={index}
                  className={`bg-dashboard-bg border rounded-lg p-6 ${
                    controller.name === "TrolMaster Custom Module Kit" ||
                    controller.name === "Custom Integration"
                      ? "border-dashboard-text shadow-lg"
                      : "border-dashboard-border hover:border-dashboard-text/50"
                  } transition-colors`}
                >
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-2">
                    {controller.name}
                  </h3>
                  <div className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                    {controller.price}
                  </div>
                  <ul className="space-y-2">
                    {controller.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-dashboard-text rounded-full"></div>
                        <span className="text-dashboard-text/80 font-mono text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 px-4 py-2 bg-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-text hover:text-dashboard-bg transition-colors font-digital">
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Environmental Monitoring
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <metric.icon className="w-6 h-6 text-dashboard-text mr-3" />
                    <h3 className="text-xl font-bold font-digital text-dashboard-text">
                      {metric.title}
                    </h3>
                  </div>
                  <p className="text-dashboard-text/80 font-mono">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Key Benefits
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <BarChart3 className="w-5 h-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TrolMaster Special Section */}
          <section className="mb-12">
            <div className="bg-dashboard-bg border-2 border-dashboard-text rounded-xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
                  TrolMaster Custom Module Kit
                </h2>
                <p className="text-xl text-dashboard-text/80 font-mono">
                  Exclusive Hardware Integration - Only Available with Rootfuse
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-4">
                    What Makes This Special?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-dashboard-text rounded-full mt-2"></div>
                      <span className="text-dashboard-text/80 font-mono">
                        Direct hardware integration bypasses TrolMaster's API
                        limitations and provides unrestricted access to your
                        environmental data
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-dashboard-text rounded-full mt-2"></div>
                      <span className="text-dashboard-text/80 font-mono">
                        Real-time data streaming with zero delays - get instant
                        alerts and monitoring without API rate limits
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-dashboard-text rounded-full mt-2"></div>
                      <span className="text-dashboard-text/80 font-mono">
                        Custom module engineered specifically for cannabis
                        compliance requirements and state regulations
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-dashboard-text rounded-full mt-2"></div>
                      <span className="text-dashboard-text/80 font-mono">
                        Exclusive partnership - this level of TrolMaster
                        integration is only available through Rootfuse
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-4">
                    Pricing & Setup
                  </h3>
                  <div className="bg-dashboard-border/20 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold font-digital text-dashboard-text">
                        $159
                      </div>
                      <div className="text-dashboard-text/70 font-mono text-sm">
                        per zone/room
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-xl font-bold font-digital text-dashboard-text">
                        + $199
                      </div>
                      <div className="text-dashboard-text/70 font-mono text-sm">
                        one-time setup consultation
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="w-full px-4 py-2 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                        Request Custom Kit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Integration Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Controller Assessment",
                  description:
                    "We evaluate your existing environmental control setup",
                },
                {
                  step: "2",
                  title: "API Connection",
                  description:
                    "Secure connection established between your controller and Rootfuse",
                },
                {
                  step: "3",
                  title: "Data Mapping",
                  description:
                    "Environmental data is mapped to your cultivation batches and rooms",
                },
                {
                  step: "4",
                  title: "Go Live",
                  description:
                    "Real-time monitoring and alerts are activated for your operation",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4 text-center"
                >
                  <div className="w-8 h-8 bg-dashboard-text text-dashboard-bg rounded-full flex items-center justify-center mx-auto mb-3 font-digital font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Alert System */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Smart Alert System
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="flex items-start space-x-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-dashboard-text mt-1" />
                <div>
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-2">
                    Proactive Monitoring
                  </h3>
                  <p className="text-dashboard-text/80 font-mono mb-4">
                    Our intelligent alert system monitors your environmental
                    conditions 24/7 and notifies your team of any issues before
                    they become problems.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold font-digital text-dashboard-text mb-1">
                    Instant Alerts
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    SMS & Email notifications
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold font-digital text-dashboard-text mb-1">
                    Custom Thresholds
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Set your own alert parameters
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold font-digital text-dashboard-text mb-1">
                    Escalation Rules
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Automatic team notifications
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Ready to Connect Your Controllers?
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6">
                Get started with environment sync and take control of your
                cultivation environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Start Environment Sync
                </button>
                <a
                  href="mailto:integrations@rootfuse.com"
                  className="px-6 py-3 border border-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-border/20 transition-colors font-mono"
                >
                  Contact Integration Team
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
