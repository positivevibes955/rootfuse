import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  Book,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Help Center - Rootfuse Command Center",
  description: "Get help and support for Rootfuse Command Center platform.",
};

export default function HelpCenterPage() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 for Pro & Enterprise customers",
      action: "Start Chat",
      primary: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Response within 4 hours",
      action: "Send Email",
      primary: false,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      availability: "Mon-Fri, 8AM-8PM CT",
      action: "Call Now",
      primary: false,
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Browse our comprehensive guides and tutorials",
      availability: "Available 24/7",
      action: "View Docs",
      primary: false,
    },
  ];

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        "How do I set up my first license?",
        "What information do I need for METRC integration?",
        "How do I invite team members?",
        "Can I import existing inventory data?",
      ],
    },
    {
      title: "Compliance",
      questions: [
        "How does METRC sync work?",
        "What reports are available for state compliance?",
        "How do I handle compliance violations?",
        "Can I customize compliance workflows?",
      ],
    },
    {
      title: "Operations",
      questions: [
        "How do I track batches from seed to sale?",
        "Can I manage multiple license types?",
        "How do I set up automated workflows?",
        "What integrations are available?",
      ],
    },
    {
      title: "Billing & Account",
      questions: [
        "How do I upgrade my plan?",
        "Can I add more users to my account?",
        "How do I update my billing information?",
        "What payment methods do you accept?",
      ],
    },
  ];

  const resources = [
    {
      icon: Book,
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      count: "25+ videos",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other cannabis operators",
      count: "500+ members",
    },
    {
      icon: HelpCircle,
      title: "Webinar Series",
      description: "Monthly training sessions and Q&A",
      count: "Weekly sessions",
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
            Help Center
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Get the support you need to succeed with Rootfuse Command Center.
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
                  placeholder="Search for help articles..."
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

          {/* Support Options */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Get Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <div
                  key={index}
                  className={`bg-dashboard-bg border rounded-lg p-6 text-center ${
                    option.primary
                      ? "border-dashboard-text shadow-lg"
                      : "border-dashboard-border hover:border-dashboard-text/50"
                  } transition-colors`}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        option.primary
                          ? "bg-dashboard-text text-dashboard-bg"
                          : "bg-dashboard-text/20 text-dashboard-text"
                      }`}
                    >
                      <option.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                    {option.title}
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-3">
                    {option.description}
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-4 h-4 text-dashboard-text/60 mr-1" />
                    <span className="text-dashboard-text/60 font-mono text-xs">
                      {option.availability}
                    </span>
                  </div>
                  <button
                    className={`w-full py-2 rounded-lg font-digital transition-colors ${
                      option.primary
                        ? "bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border"
                        : "border border-dashboard-border text-dashboard-text hover:bg-dashboard-border/20"
                    }`}
                  >
                    {option.action}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.questions.map((question, qIndex) => (
                      <li key={qIndex}>
                        <button className="text-left text-dashboard-text/80 hover:text-dashboard-text font-mono text-sm">
                          {question}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 hover:border-dashboard-text/50 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <resource.icon className="w-6 h-6 text-dashboard-text mr-3" />
                    <h3 className="text-lg font-bold font-digital text-dashboard-text">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-dashboard-text/60 font-mono text-xs">
                      {resource.count}
                    </span>
                    <button className="text-dashboard-text hover:text-dashboard-border font-mono text-sm">
                      Explore →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Info */}
          <section>
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Contact Information
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-3">
                    General Support
                  </h3>
                  <div className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                    <p>
                      <a
                        href="mailto:support@rootfuse.com"
                        className="text-dashboard-text hover:text-dashboard-border"
                      >
                        support@rootfuse.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+1-555-0123"
                        className="text-dashboard-text hover:text-dashboard-border"
                      >
                        (555) 012-3456
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-3">
                    Technical Support
                  </h3>
                  <div className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                    <p>
                      <a
                        href="mailto:tech@rootfuse.com"
                        className="text-dashboard-text hover:text-dashboard-border"
                      >
                        tech@rootfuse.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+1-555-0124"
                        className="text-dashboard-text hover:text-dashboard-border"
                      >
                        (555) 012-3457
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-3">
                    Sales & Billing
                  </h3>
                  <div className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                    <p>
                      <a
                        href="mailto:sales@rootfuse.com"
                        className="text-dashboard-text hover:text-dashboard-border"
                      >
                        sales@rootfuse.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+1-555-0125"
                        className="text-dashboard-text hover:text-dashboard-border"
                      >
                        (555) 012-3458
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
