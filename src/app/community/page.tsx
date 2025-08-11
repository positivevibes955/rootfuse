import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Calendar,
  Award,
  TrendingUp,
  Star,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community - Rootfuse Command Center",
  description:
    "Connect with cannabis operators, share knowledge, and grow together.",
};

export default function CommunityPage() {
  const communityStats = [
    { label: "Active Members", value: "2,500+", icon: Users },
    { label: "Monthly Posts", value: "850+", icon: MessageSquare },
    { label: "Expert Contributors", value: "150+", icon: Award },
    { label: "Success Stories", value: "200+", icon: TrendingUp },
  ];

  const forumCategories = [
    {
      title: "Cultivation Operations",
      description:
        "Growing techniques, facility management, and harvest optimization",
      posts: 1250,
      members: 850,
      color: "bg-green-500/20 text-green-400",
    },
    {
      title: "Processing & Manufacturing",
      description:
        "Extraction methods, product development, and quality control",
      posts: 680,
      members: 420,
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      title: "Dispensary Management",
      description:
        "Retail operations, customer service, and inventory management",
      posts: 920,
      members: 650,
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      title: "Compliance & Regulations",
      description:
        "State requirements, METRC integration, and audit preparation",
      posts: 540,
      members: 380,
      color: "bg-yellow-500/20 text-yellow-400",
    },
    {
      title: "Technology & Integrations",
      description: "Platform features, API usage, and third-party connections",
      posts: 320,
      members: 280,
      color: "bg-red-500/20 text-red-400",
    },
    {
      title: "Business Strategy",
      description:
        "Scaling operations, market expansion, and financial planning",
      posts: 410,
      members: 320,
      color: "bg-indigo-500/20 text-indigo-400",
    },
  ];

  const recentPosts = [
    {
      title: "Best practices for multi-state METRC compliance?",
      author: "Sarah M.",
      category: "Compliance",
      replies: 23,
      time: "2 hours ago",
      featured: true,
    },
    {
      title: "Optimizing harvest schedules across multiple facilities",
      author: "Mike R.",
      category: "Cultivation",
      replies: 15,
      time: "4 hours ago",
      featured: false,
    },
    {
      title: "Integration success story: Rootfuse + QuickBooks",
      author: "Jennifer L.",
      category: "Technology",
      replies: 8,
      time: "6 hours ago",
      featured: false,
    },
    {
      title: "Dispensary POS integration recommendations?",
      author: "David K.",
      category: "Dispensary",
      replies: 31,
      time: "8 hours ago",
      featured: false,
    },
    {
      title: "Scaling from single to multi-license operations",
      author: "Amanda T.",
      category: "Business",
      replies: 19,
      time: "12 hours ago",
      featured: false,
    },
  ];

  const upcomingEvents = [
    {
      title: "Monthly Community Call",
      date: "Jan 25, 2024",
      time: "2:00 PM CT",
      type: "Virtual Meetup",
    },
    {
      title: "Compliance Workshop: Q1 2024 Updates",
      date: "Feb 1, 2024",
      time: "1:00 PM CT",
      type: "Educational",
    },
    {
      title: "Cultivation Best Practices Roundtable",
      date: "Feb 8, 2024",
      time: "3:00 PM CT",
      type: "Discussion",
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
            Rootfuse Community
          </h1>
          <p className="text-xl text-dashboard-text/80 font-mono max-w-3xl">
            Connect with cannabis operators, share knowledge, and grow your
            business together.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Community Stats */}
          <section className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-dashboard-text" />
                  </div>
                  <div className="text-2xl font-bold font-digital text-dashboard-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-dashboard-text/70 font-mono text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Join CTA */}
          <section className="mb-12">
            <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Join the Conversation
              </h2>
              <p className="text-dashboard-text/80 font-mono mb-6 max-w-2xl mx-auto">
                Connect with thousands of cannabis operators sharing insights,
                solving problems, and building successful businesses together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-dashboard-text text-dashboard-bg rounded-lg hover:bg-dashboard-border transition-colors font-digital">
                  Join Community
                </button>
                <button className="px-6 py-3 border border-dashboard-border text-dashboard-text rounded-lg hover:bg-dashboard-border/20 transition-colors font-mono">
                  Browse Forums
                </button>
              </div>
            </div>
          </section>

          {/* Forum Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
              Discussion Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forumCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-dashboard-bg border border-dashboard-border rounded-lg p-6 hover:border-dashboard-text/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-3 h-3 rounded-full ${category.color} mr-3`}
                    ></div>
                    <h3 className="text-lg font-bold font-digital text-dashboard-text">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-dashboard-text/70 font-mono text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex justify-between text-dashboard-text/60 font-mono text-xs">
                    <span>{category.posts} posts</span>
                    <span>{category.members} members</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-6">
                Recent Discussions
              </h2>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div
                    key={index}
                    className={`bg-dashboard-bg border rounded-lg p-4 hover:border-dashboard-text/50 transition-colors cursor-pointer ${
                      post.featured
                        ? "border-dashboard-text"
                        : "border-dashboard-border"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          {post.featured && (
                            <Star className="w-4 h-4 text-dashboard-text" />
                          )}
                          <span
                            className={`px-2 py-1 rounded text-xs font-mono ${
                              post.category === "Compliance"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : post.category === "Cultivation"
                                  ? "bg-green-500/20 text-green-400"
                                  : post.category === "Technology"
                                    ? "bg-red-500/20 text-red-400"
                                    : post.category === "Dispensary"
                                      ? "bg-purple-500/20 text-purple-400"
                                      : "bg-indigo-500/20 text-indigo-400"
                            }`}
                          >
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-dashboard-text font-digital font-semibold mb-1">
                          {post.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-dashboard-text/60 font-mono text-sm">
                          <span>by {post.author}</span>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-3 h-3" />
                            <span>{post.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div>
                <h3 className="text-xl font-bold font-digital text-dashboard-text mb-4">
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-dashboard-text" />
                        <span className="px-2 py-1 bg-dashboard-text/20 text-dashboard-text rounded text-xs font-mono">
                          {event.type}
                        </span>
                      </div>
                      <h4 className="text-dashboard-text font-digital font-semibold mb-2">
                        {event.title}
                      </h4>
                      <div className="text-dashboard-text/70 font-mono text-sm space-y-1">
                        <div>{event.date}</div>
                        <div>{event.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Guidelines */}
              <div>
                <h3 className="text-xl font-bold font-digital text-dashboard-text mb-4">
                  Community Guidelines
                </h3>
                <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
                  <ul className="space-y-2 text-dashboard-text/80 font-mono text-sm">
                    <li>• Be respectful and professional</li>
                    <li>• Share knowledge and experiences</li>
                    <li>• Stay on topic and relevant</li>
                    <li>• No spam or self-promotion</li>
                    <li>• Follow all applicable laws</li>
                  </ul>
                  <button className="mt-4 text-dashboard-text hover:text-dashboard-border font-mono text-sm">
                    Read Full Guidelines →
                  </button>
                </div>
              </div>

              {/* Top Contributors */}
              <div>
                <h3 className="text-xl font-bold font-digital text-dashboard-text mb-4">
                  Top Contributors
                </h3>
                <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
                  <div className="space-y-3">
                    {[
                      { name: "Sarah M.", posts: 156, badge: "Expert" },
                      { name: "Mike R.", posts: 142, badge: "Mentor" },
                      { name: "Jennifer L.", posts: 128, badge: "Helper" },
                      { name: "David K.", posts: 98, badge: "Active" },
                    ].map((contributor, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <div className="text-dashboard-text font-mono font-semibold">
                            {contributor.name}
                          </div>
                          <div className="text-dashboard-text/60 font-mono text-xs">
                            {contributor.posts} posts
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-dashboard-text/20 text-dashboard-text rounded text-xs font-mono">
                          {contributor.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
