import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Users, Target, Zap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Rootfuse Command Center",
  description:
    "Learn about Rootfuse's mission to revolutionize cannabis operations management.",
};

export default function AboutPage() {
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
            About Rootfuse
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Revolutionizing cannabis operations through unified command and
            control systems.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Our Mission
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <p className="text-dashboard-text/80 font-mono text-lg leading-relaxed mb-4">
                At Rootfuse, we believe cannabis operators shouldn't have to
                juggle 47 browser tabs, 15 different logins, and countless
                disconnected systems just to run their business.
              </p>
              <p className="text-dashboard-text/80 font-mono text-lg leading-relaxed">
                We're building the unified command center that brings every
                aspect of cannabis operations into one intelligent, compliant,
                and powerful platform.
              </p>
            </div>
          </section>

          {/* Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Our Story
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <p className="text-dashboard-text/80 font-mono leading-relaxed mb-4">
                Founded by cannabis industry veterans who experienced firsthand
                the chaos of managing multi-license operations across
                cultivation, processing, and dispensary channels, Rootfuse was
                born from necessity.
              </p>
              <p className="text-dashboard-text/80 font-mono leading-relaxed mb-4">
                After years of switching between dozens of platforms, losing
                data in transitions, and struggling with compliance across
                disconnected systems, we knew there had to be a better way.
              </p>
              <p className="text-dashboard-text/80 font-mono leading-relaxed">
                Today, Rootfuse serves cannabis operators across multiple
                states, helping them streamline operations, maintain compliance,
                and scale their businesses with confidence.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Compliance First",
                  description:
                    "Every feature is built with regulatory compliance at its core, ensuring operators stay audit-ready.",
                },
                {
                  icon: Zap,
                  title: "Operational Excellence",
                  description:
                    "We eliminate inefficiencies and streamline workflows to maximize productivity and profitability.",
                },
                {
                  icon: Users,
                  title: "Industry Partnership",
                  description:
                    "We work closely with operators to understand real challenges and build solutions that matter.",
                },
                {
                  icon: Award,
                  title: "Innovation",
                  description:
                    "We leverage cutting-edge technology to solve complex problems in the cannabis industry.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <value.icon className="w-6 h-6 text-dashboard-text mr-3" />
                    <h3 className="text-xl font-bold font-digital text-dashboard-text">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-dashboard-text/80 font-mono">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Leadership Team
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <p className="text-dashboard-text/80 font-mono leading-relaxed mb-4">
                Our leadership team combines decades of cannabis industry
                experience with deep technical expertise in enterprise software
                development, compliance systems, and operational management.
              </p>
              <p className="text-dashboard-text/80 font-mono leading-relaxed">
                From seed-to-sale operations to regulatory affairs, our team has
                lived the challenges that Rootfuse solves every day.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Get in Touch
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <p className="text-dashboard-text/80 font-mono mb-6">
                Ready to transform your cannabis operations? We'd love to hear
                from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@rootfuse.com"
                  className="inline-flex items-center px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital"
                >
                  Contact Us
                </a>
                <a
                  href="/sign-up"
                  className="inline-flex items-center px-6 py-3 border border-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-border/20 transition-colors font-mono"
                >
                  Start Your Command Center
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
