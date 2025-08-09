import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  Calculator,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Done-For-You Setup - Rootfuse Command Center",
  description:
    "Complete in-person setup service for your Rootfuse platform with on-site support.",
};

export default function DoneForYouInfoPage() {
  const included = [
    "Complete on-site platform setup",
    "Data migration from existing systems",
    "METRC integration configuration",
    "Team training and onboarding",
    "Custom workflow implementation",
    "Hardware setup and configuration",
    "Go-live support and testing",
    "30-day post-implementation support",
    "Documentation and training materials",
    "Follow-up optimization session",
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Remote assessment of your current systems and requirements",
      duration: "1-2 hours",
    },
    {
      step: "2",
      title: "Pre-Visit Planning",
      description: "Detailed implementation plan and resource preparation",
      duration: "2-3 days",
    },
    {
      step: "3",
      title: "On-Site Implementation",
      description: "Complete setup, configuration, and team training",
      duration: "5-8 hours",
    },
    {
      step: "4",
      title: "Go-Live Support",
      description: "Ensure everything works perfectly before we leave",
      duration: "1-2 hours",
    },
  ];

  const pricingTiers = [
    {
      distance: "Within 50 miles of 73034",
      basePrice: 600,
      travelFee: 150,
      totalPrice: 750,
      description: "Local Oklahoma City metro area",
    },
    {
      distance: "Within 100 miles of 73034",
      basePrice: 600,
      travelFee: 250,
      totalPrice: 850,
      description: "Extended Oklahoma region",
    },
    {
      distance: "Within 200 miles of 73034",
      basePrice: 600,
      travelFee: 500,
      totalPrice: 1100,
      description: "Regional coverage area",
    },
    {
      distance: "Over 250 miles from 73034",
      basePrice: 600,
      travelFee: "Contact us",
      totalPrice: "Custom quote",
      description: "National coverage available",
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
            Done-For-You Setup
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Complete in-person setup service with our expert team coming to your
            location for hands-on implementation.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Pricing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Pricing by Distance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-dashboard-bg border rounded-lg p-6 text-center ${
                    index === 0
                      ? "border-dashboard-text shadow-lg"
                      : "border-dashboard-border hover:border-dashboard-text/50"
                  } transition-colors`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-dashboard-text mr-2" />
                    <span className="text-dashboard-text font-mono text-sm">
                      {tier.distance}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                    {typeof tier.totalPrice === "string"
                      ? tier.totalPrice
                      : `$${tier.totalPrice}`}
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="text-dashboard-text/60 font-mono text-xs space-y-1">
                    <div>Base: ${tier.basePrice}</div>
                    <div>
                      Travel:{" "}
                      {typeof tier.travelFee === "string"
                        ? tier.travelFee
                        : `$${tier.travelFee}`}
                    </div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-text hover:text-dashboard-bg transition-colors font-digital">
                    Book Service
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-dashboard-text/70 font-mono text-sm">
                All pricing includes 5-hour on-site visit plus travel time and
                expenses
              </p>
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

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Why Choose Done-For-You?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <Users className="w-8 h-8 text-dashboard-text mx-auto mb-3" />
                <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                  Expert Implementation
                </h3>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  Our certified specialists handle every detail of your setup
                </p>
              </div>
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <Clock className="w-8 h-8 text-dashboard-text mx-auto mb-3" />
                <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                  Minimal Downtime
                </h3>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  Get up and running quickly with minimal disruption
                </p>
              </div>
              <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center">
                <Truck className="w-8 h-8 text-dashboard-text mx-auto mb-3" />
                <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                  Complete Service
                </h3>
                <p className="text-dashboard-text/70 font-mono text-sm">
                  From setup to training, we handle everything on-site
                </p>
              </div>
            </div>
          </section>

          {/* Distance Calculator */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Calculate Your Distance
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calculator className="w-6 h-6 text-dashboard-text mr-3" />
                <h3 className="text-xl font-bold font-digital text-dashboard-text">
                  Distance from Edmond, OK (73034)
                </h3>
              </div>
              <p className="text-dashboard-text/80 font-mono mb-4">
                Enter your zip code or city to calculate travel costs and
                scheduling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter your zip code or city"
                  className="flex-1 px-4 py-2 bg-dashboard-bg border border-dashboard-border rounded-lg text-dashboard-text font-mono focus:outline-none focus:border-dashboard-text"
                />
                <button className="px-6 py-2 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Calculate
                </button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Ready for Complete Setup Service?
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6">
                Let our experts handle your entire Rootfuse implementation with
                professional on-site service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Schedule On-Site Setup
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
