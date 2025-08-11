import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  Users,
  TrendingUp,
  Shield,
  Search,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketplace Access - Rootfuse Command Center",
  description:
    "Connect with suppliers and buyers in the cannabis industry marketplace.",
};

export default function MarketplaceInfoPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Buy & Sell Products",
      description:
        "Post your products for sale or browse inventory from verified suppliers",
    },
    {
      icon: Users,
      title: "Verified Network",
      description:
        "Connect with licensed cannabis businesses across multiple states",
    },
    {
      icon: Shield,
      title: "Compliance Built-In",
      description:
        "All transactions include proper documentation and compliance tracking",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description:
        "Find exactly what you need with detailed filters and specifications",
    },
  ];

  const benefits = [
    "Access to wholesale pricing from verified suppliers",
    "Streamlined procurement process",
    "Built-in compliance documentation",
    "Direct communication with suppliers and buyers",
    "Integration with your existing inventory system",
    "Real-time availability and pricing updates",
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
            Marketplace Access
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Connect with suppliers and buyers in our exclusive cannabis industry
            marketplace.
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
                $159/month + 2% sales
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6">
                Access to the cannabis industry's premier B2B marketplace
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text mb-1">
                    500+
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Verified suppliers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text mb-1">
                    15
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    States covered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold font-digital text-dashboard-text mb-1">
                    2%
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    Transaction fee
                  </div>
                </div>
              </div>
              <button className="px-8 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital text-lg">
                Get Marketplace Access
              </button>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Marketplace Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Key Benefits
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-dashboard-text mt-0.5 flex-shrink-0" />
                    <span className="text-dashboard-text/80 font-mono text-sm">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "List Products",
                  description:
                    "Post your available inventory with pricing and specs",
                },
                {
                  step: "2",
                  title: "Connect",
                  description:
                    "Browse listings and connect with verified businesses",
                },
                {
                  step: "3",
                  title: "Negotiate",
                  description: "Communicate directly and negotiate terms",
                },
                {
                  step: "4",
                  title: "Complete",
                  description: "Finalize transactions with built-in compliance",
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

          {/* CTA */}
          <section>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Ready to Access the Marketplace?
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6">
                Join hundreds of cannabis businesses buying and selling on our
                platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Get Marketplace Access
                </button>
                <a
                  href="mailto:marketplace@rootfuse.com"
                  className="px-6 py-3 border border-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-border/20 transition-colors font-mono"
                >
                  Contact Marketplace Team
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
