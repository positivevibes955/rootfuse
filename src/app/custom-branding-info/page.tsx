import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Palette, Upload, Eye, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Branding - Rootfuse Command Center",
  description:
    "Customize your Rootfuse platform with your own branding and visual identity.",
};

export default function CustomBrandingInfoPage() {
  const features = [
    {
      icon: Palette,
      title: "Custom Color Scheme",
      description:
        "Replace our colors with your brand colors throughout the entire platform",
    },
    {
      icon: Upload,
      title: "Logo Integration",
      description:
        "Upload your logo to appear in the header, reports, and customer-facing materials",
    },
    {
      icon: Eye,
      title: "White Label Option",
      description:
        "Remove all Rootfuse branding and present the platform as your own solution",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Brand Assets Collection",
      description:
        "Provide your logo files, brand colors, and style preferences",
    },
    {
      step: "2",
      title: "Design Implementation",
      description:
        "Our team applies your branding across all platform elements",
    },
    {
      step: "3",
      title: "Review & Approval",
      description:
        "Preview your customized platform and request any adjustments",
    },
    {
      step: "4",
      title: "Go Live",
      description: "Your branded platform is deployed and ready for your team",
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
            Custom Branding
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Make Rootfuse truly yours with custom branding that reflects your
            company's identity.
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
                $300 One-Time Setup
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6">
                Professional branding implementation with unlimited revisions
                during setup
              </p>
              <button className="px-8 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital text-lg">
                Get Custom Branding
              </button>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-6 h-6 text-dashboard-text mr-3" />
                    <h3 className="text-xl font-bold font-digital text-dashboard-text">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-dashboard-text/80 font-mono">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Implementation Process
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
                    <div>
                      <h3 className="text-xl font-bold font-digital text-dashboard-text mb-2">
                        {item.title}
                      </h3>
                      <p className="text-dashboard-text/80 font-mono">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              What We Need From You
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <ul className="space-y-3">
                {[
                  "High-resolution logo files (PNG, SVG preferred)",
                  "Brand color codes (HEX, RGB, or Pantone)",
                  "Any specific font preferences (if applicable)",
                  "Style guide or brand guidelines (if available)",
                  "Examples of preferred visual style",
                ].map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-dashboard-text" />
                    <span className="text-dashboard-text/80 font-mono">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Timeline
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                    1-2 Days
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Asset Collection
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                    3-5 Days
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Implementation
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-digital text-dashboard-text mb-2">
                    1-2 Days
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Review & Deploy
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Ready to Brand Your Platform?
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6">
                Contact our team to get started with your custom branding
                implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Start Custom Branding
                </button>
                <a
                  href="mailto:branding@rootfuse.com"
                  className="px-6 py-3 border border-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-border/20 transition-colors font-mono"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
