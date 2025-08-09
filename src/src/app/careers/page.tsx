import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Code,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers - Rootfuse Command Center",
  description:
    "Join our team and help revolutionize cannabis operations management.",
};

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / Oklahoma City, OK",
      type: "Full-time",
      salary: "$120k - $160k",
      description:
        "Build and scale our cannabis operations platform using React, Node.js, and modern cloud technologies.",
      requirements: [
        "5+ years full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with cloud platforms (AWS/GCP)",
        "Understanding of compliance and regulatory systems",
      ],
    },
    {
      title: "Cannabis Operations Specialist",
      department: "Product",
      location: "Remote / Oklahoma City, OK",
      type: "Full-time",
      salary: "$80k - $110k",
      description:
        "Work directly with cannabis operators to understand workflows and translate requirements into product features.",
      requirements: [
        "3+ years cannabis industry experience",
        "Knowledge of METRC and state compliance systems",
        "Experience with cultivation, processing, or dispensary operations",
        "Strong analytical and communication skills",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $140k",
      description:
        "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
      requirements: [
        "4+ years DevOps/Infrastructure experience",
        "Expertise in Docker, Kubernetes, Terraform",
        "Experience with monitoring and logging systems",
        "Security-first mindset for compliance requirements",
      ],
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Oklahoma City, OK",
      type: "Full-time",
      salary: "$70k - $95k",
      description:
        "Ensure customer success and drive adoption of our platform across cannabis operations.",
      requirements: [
        "3+ years customer success experience",
        "Cannabis industry knowledge preferred",
        "Strong relationship building skills",
        "Experience with SaaS platforms",
      ],
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description:
        "Market-rate salaries plus equity participation in our growth",
    },
    {
      icon: Users,
      title: "Remote-First Culture",
      description:
        "Work from anywhere with flexible hours and quarterly team meetups",
    },
    {
      icon: Briefcase,
      title: "Professional Development",
      description:
        "Conference attendance, training budget, and career growth opportunities",
    },
    {
      icon: Code,
      title: "Cutting-Edge Tech",
      description:
        "Work with modern technologies and shape the future of cannabis operations",
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
            Join Our Team
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Help us revolutionize cannabis operations management and build the
            future of the industry.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Company Culture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Why Work at Rootfuse?
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 mb-8">
              <p className="text-dashboard-text/80 font-mono text-lg leading-relaxed mb-4">
                At Rootfuse, we're not just building software – we're
                transforming an entire industry. Our team combines deep cannabis
                expertise with cutting-edge technology to solve real problems
                for operators across the country.
              </p>
              <p className="text-dashboard-text/80 font-mono text-lg leading-relaxed">
                We believe in remote-first work, continuous learning, and giving
                everyone the autonomy to do their best work while making a
                meaningful impact on the cannabis industry.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <benefit.icon className="w-6 h-6 text-dashboard-text mr-3" />
                    <h3 className="text-xl font-bold font-digital text-dashboard-text">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-dashboard-text/80 font-mono">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Open Positions
            </h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-bold font-digital text-dashboard-text mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-dashboard-text/70 font-mono text-sm">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{position.salary}</span>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>

                  <p className="text-dashboard-text/80 font-mono mb-4">
                    {position.description}
                  </p>

                  <div>
                    <h4 className="text-dashboard-text font-digital font-semibold mb-2">
                      Requirements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-dashboard-text/70 font-mono text-sm">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Application Process
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-dashboard-text/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-dashboard-text font-digital font-bold">
                      1
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                    Apply
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    Submit your application with resume and cover letter
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-dashboard-text/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-dashboard-text font-digital font-bold">
                      2
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                    Interview
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    Technical and cultural fit interviews with our team
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-dashboard-text/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-dashboard-text font-digital font-bold">
                      3
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-digital text-dashboard-text mb-2">
                    Join Us
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm">
                    Welcome to the team and start making an impact
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Don't See Your Role?
            </h2>
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6">
              <p className="text-dashboard-text/80 font-mono mb-6">
                We're always looking for talented individuals who are passionate
                about cannabis and technology. Send us your resume and tell us
                how you'd like to contribute.
              </p>
              <a
                href="mailto:careers@rootfuse.com"
                className="inline-flex items-center px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital"
              >
                Contact Our Team
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
