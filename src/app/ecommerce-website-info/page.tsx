// This file has been consolidated into website-creation-info/page.tsx
// Redirect users to the main website creation page
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EcommerceWebsiteRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/website-creation-info");
  }, [router]);

  return (
    <div className="min-h-screen bg-dashboard-bg flex items-center justify-center">
      <div className="text-dashboard-text font-mono">
        Redirecting to Website Creation...
      </div>
    </div>
  );
}
