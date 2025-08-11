import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Press - Rootfuse Command Center",
  description: "Latest news, press releases, and media resources for Rootfuse.",
};

export default function PressPage() {
  const pressReleases = [
    {
      title:
        "Rootfuse Raises $5M Series A to Revolutionize Cannabis Operations Management",
      date: "2024-01-20",
      excerpt:
        "Funding will accelerate product development and expand multi-state compliance capabilities for cannabis operators.",
      link: "#",
    },
    {
      title:
        "Rootfuse Launches Unified Command Center for Multi-License Cannabis Operations",
      date: "2023-12-15",
      excerpt:
        "New platform eliminates operational chaos by connecting cultivation, processing, and dispensary operations in one dashboard.",
      link: "#",
    },
    {
      title:
        "Cannabis Industry Veterans Launch Rootfuse to Solve Operational Fragmentation",
      date: "2023-10-01",
      excerpt:
        "Former operators from leading cannabis companies unite to build the industry's first truly unified operations platform.",
      link: "#",
    },
  ];

  const mediaKit = [
    {
      name: "Company Logo Package",
      description: "High-resolution logos in various formats (PNG, SVG, EPS)",
      size: "2.3 MB",
    },
    {
      name: "Product Screenshots",
      description: "Dashboard screenshots and product interface images",
      size: "8.7 MB",
    },
    {
      name: "Executive Headshots",
      description: "Professional photos of leadership team",
      size: "4.1 MB",
    },
    {
      name: "Company Fact Sheet",
      description: "Key statistics, milestones, and company information",
      size: "156 KB",
    },
  ];

  const awards = [
    {
      title: "Best Cannabis Technology Platform 2024",
      organization: "Cannabis Industry Awards",
      date: "2024",
    },
    {
      title: "Innovation in Compliance Technology",
      organization: "MJBizCon",
      date: "2023",
    },
    {
      title: "Startup to Watch",
      organization: "Cannabis Business Times",
      date: "2023",
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
            Press & Media
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Latest news, press releases, and media resources for Rootfuse
            Command Center.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Press Releases */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Press Releases
            </h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <article
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-dashboard-text/60" />
                    <span className="text-dashboard-text/60 font-mono text-sm">
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-3">
                    {release.title}
                  </h3>
                  <p className="text-dashboard-text/80 font-mono mb-4">
                    {release.excerpt}
                  </p>
                  <button className="inline-flex items-center text-dashboard-text hover:text-dashboard-border font-mono text-sm">
                    Read Full Release
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-dashboard-text/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-digital text-dashboard-text">
                      🏆
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                    {award.title}
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-1">
                    {award.organization}
                  </p>
                  <p className="text-dashboard-text/60 font-mono text-xs">
                    {award.date}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Media Kit */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Media Kit
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 mb-6">
              <p className="text-dashboard-text/80 font-mono mb-6">
                Download our media kit for logos, product images, executive
                photos, and company information.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mediaKit.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-dashboard-border/10 rounded-lg"
                  >
                    <div>
                      <h4 className="font-semibold font-digital text-dashboard-text mb-1">
                        {item.name}
                      </h4>
                      <p className="text-dashboard-text/70 font-mono text-sm mb-1">
                        {item.description}
                      </p>
                      <p className="text-dashboard-text/60 font-mono text-xs">
                        {item.size}
                      </p>
                    </div>
                    <button className="p-2 text-dashboard-text hover:text-dashboard-border">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Company at a Glance
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold font-digital text-dashboard-text mb-2">
                    2023
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Founded
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-digital text-dashboard-text mb-2">
                    500+
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Cannabis Operators
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-digital text-dashboard-text mb-2">
                    15
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    States Supported
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-digital text-dashboard-text mb-2">
                    $5M
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Series A Funding
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Media Contact */}
          <section>
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Media Contact
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-4">
                    Press Inquiries
                  </h3>
                  <div className="space-y-2 text-dashboard-text/80 font-mono">
                    <p>Sarah Johnson</p>
                    <p>Director of Communications</p>
                    <p>
                      <a
                        href="mailto:press@rootfuse.com"
                        className="text-dashboard-text hover:text-dashboard-border"
                      >
                        press@rootfuse.com
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
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-4">
                    Partnership Inquiries
                  </h3>
                  <div className="space-y-2 text-dashboard-text/80 font-mono">
                    <p>Mike Chen</p>
                    <p>Head of Business Development</p>
                    <p>
                      <a
                        href="mailto:partnerships@rootfuse.com"
                        className="text-dashboard-text hover:text-dashboard-border"
                      >
                        partnerships@rootfuse.com
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
