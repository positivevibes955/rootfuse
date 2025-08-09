import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Video,
  Users,
  CheckCircle,
  Clock,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Done-With-You Setup - Rootfuse Command Center",
  description:
    "Personalized 1-on-1 video setup session to get your Rootfuse platform configured perfectly.",
};

export default function DoneWithYouInfoPage() {
  const included = [
    "1-on-1 video consultation session",
    "Complete platform walkthrough",
    "Custom configuration for your operation",
    "METRC integration setup",
    "User role and permission configuration",
    "Initial data import assistance",
    "Best practices training",
    "Q&A session for your specific needs",
    "Follow-up email with session summary",
    "30-day email support included",
  ];

  const process = [
    {
      step: "1",
      title: "Schedule Your Session",
      description: "Book a convenient time for your 1-on-1 video consultation",
      duration: "5 minutes",
    },
    {
      step: "2",
      title: "Pre-Session Preparation",
      description:
        "We'll send you a brief questionnaire to understand your needs",
      duration: "10 minutes",
    },
    {
      step: "3",
      title: "Live Setup Session",
      description: "Work directly with our expert to configure your platform",
      duration: "90 minutes",
    },
    {
      step: "4",
      title: "Follow-Up Support",
      description: "Receive session notes and 30 days of email support",
      duration: "Ongoing",
    },
  ];

  const topics = [
    {
      title: "Platform Configuration",
      items: [
        "License type setup",
        "Facility configuration",
        "User management",
        "Permission settings",
      ],
    },
    {
      title: "Integration Setup",
      items: [
        "METRC connection",
        "POS system integration",
        "Accounting software sync",
        "Third-party APIs",
      ],
    },
    {
      title: "Data Management",
      items: [
        "Initial inventory import",
        "Batch creation",
        "Product catalog setup",
        "Historical data migration",
      ],
    },
    {
      title: "Training & Best Practices",
      items: [
        "Daily workflow optimization",
        "Compliance procedures",
        "Reporting setup",
        "Team training guidelines",
      ],
    },
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
            Done-With-You Setup
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Get personalized, hands-on help setting up your Rootfuse platform
            with a 1-on-1 video session.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Pricing */}
          <section className="mb-12">
            <div className="bg-dashboard-bg border-2 border-dashboard-text rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
                $350 One-Time
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6">
                90-minute personalized setup session with ongoing support
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text mb-1">
                    90 min
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Live video session
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text mb-1">
                    1-on-1
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Personal attention
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text mb-1">
                    30 days
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Follow-up support
                  </div>
                </div>
              </div>
              <button className="px-8 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital text-lg">
                Schedule Your Session
              </button>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              What's Included
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              How It Works
            </h2>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-dashboard-text text-dashboard-bg rounded-full flex items-center justify-center font-digital font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold font-digital text-dashboard-text">
                          {item.title}
                        </h3>
                        <span className="px-2 py-1 bg-dashboard-text/20 text-dashboard-text rounded text-xs font-mono">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-dashboard-text/80 font-mono">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Session Topics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Session Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-4">
                    {topic.title}
                  </h3>
                  <ul className="space-y-2">
                    {topic.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-dashboard-text rounded-full"></div>
                        <span className="text-dashboard-text/80 font-mono text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Why Choose Done-With-You?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <Video className="w-8 h-8 text-dashboard-text mx-auto mb-3" />
                <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                  Personal Attention
                </h3>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  One-on-one guidance tailored to your specific operation
                </p>
              </div>
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <Clock className="w-8 h-8 text-dashboard-text mx-auto mb-3" />
                <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                  Faster Setup
                </h3>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  Get up and running in hours instead of weeks
                </p>
              </div>
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <Headphones className="w-8 h-8 text-dashboard-text mx-auto mb-3" />
                <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                  Ongoing Support
                </h3>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  30 days of follow-up support via email
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Ready for Your Personal Setup Session?
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6">
                Book your 1-on-1 video session and get your Rootfuse platform
                configured perfectly for your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Schedule Your Session
                </button>
                <a
                  href="mailto:setup@rootfuse.com"
                  className="px-6 py-3 border border-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-border/20 transition-colors font-mono"
                >
                  Contact Setup Team
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
