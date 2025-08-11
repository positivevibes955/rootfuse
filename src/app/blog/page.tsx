import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Rootfuse Command Center",
  description:
    "Latest insights, updates, and best practices for cannabis operations management.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Hidden Cost of Cannabis Operation Chaos",
      excerpt:
        "How disconnected systems are costing operators thousands in lost efficiency and compliance risks.",
      date: "2024-01-15",
      author: "Rootfuse Team",
      category: "Operations",
      readTime: "5 min read",
    },
    {
      title: "METRC Integration Best Practices for Multi-License Operators",
      excerpt:
        "Essential strategies for maintaining compliance across cultivation, processing, and dispensary operations.",
      date: "2024-01-10",
      author: "Compliance Team",
      category: "Compliance",
      readTime: "8 min read",
    },
    {
      title: "Scaling Cannabis Operations: From Single License to Multi-State",
      excerpt:
        "Key considerations and technology requirements for expanding cannabis operations across state lines.",
      date: "2024-01-05",
      author: "Operations Team",
      category: "Growth",
      readTime: "6 min read",
    },
    {
      title: "Real-Time Inventory Management: Why It Matters",
      excerpt:
        "How real-time inventory tracking prevents stockouts, reduces waste, and improves profitability.",
      date: "2023-12-28",
      author: "Product Team",
      category: "Technology",
      readTime: "4 min read",
    },
    {
      title: "Cannabis Analytics: KPIs Every Operator Should Track",
      excerpt:
        "Essential metrics for measuring and improving cannabis operation performance across all license types.",
      date: "2023-12-20",
      author: "Analytics Team",
      category: "Analytics",
      readTime: "7 min read",
    },
    {
      title: "The Future of Cannabis Operations Management",
      excerpt:
        "Emerging trends and technologies shaping the next generation of cannabis business operations.",
      date: "2023-12-15",
      author: "Rootfuse Team",
      category: "Industry",
      readTime: "6 min read",
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
            Rootfuse Blog
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Insights, best practices, and industry updates for cannabis
            operations management.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          <section className="mb-12">
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-dashboard-text/20 text-dashboard-text rounded-full text-sm font-mono">
                  Featured
                </span>
                <span className="px-3 py-1 bg-dashboard-border/20 text-dashboard-text rounded-full text-sm font-mono">
                  Operations
                </span>
              </div>
              <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
                The Hidden Cost of Cannabis Operation Chaos
              </h2>
              <p className="text-dashboard-text/80 font-mono text-lg mb-6">
                How disconnected systems are costing operators thousands in lost
                efficiency and compliance risks. Learn how unified operations
                management can transform your business.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-dashboard-text/60 font-mono text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>January 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Rootfuse Team</span>
                  </div>
                  <span>5 min read</span>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section>
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-8">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 hover:border-dashboard-text/50 transition-colors"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-dashboard-border/20 text-dashboard-text rounded text-xs font-mono">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-digital text-dashboard-text mb-3">
                    {post.title}
                  </h3>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-dashboard-text/60 font-mono text-xs mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-dashboard-text hover:text-dashboard-border font-mono text-sm">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16">
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Stay Updated
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6 max-w-2xl mx-auto">
                Get the latest insights on cannabis operations management,
                compliance updates, and industry best practices delivered to
                your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-dashboard-bg border border-dashboard-border rounded-lg text-dashboard-text font-mono focus:outline-none focus:border-dashboard-text"
                />
                <button className="px-6 py-2 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
