"use client";

import { ArrowUpRight } from "lucide-react";

export default function CTAButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-6 py-3 text-dashboard-bg bg-dashboard-text rounded-lg hover:bg-dashboard-border transition-colors font-digital"
    >
      Get Rootfuse
      <ArrowUpRight className="ml-2 w-4 h-4" />
    </button>
  );
}
