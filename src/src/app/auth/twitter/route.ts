import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";

export async function POST() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitter",
    options: {
      redirectTo: `https://222b917f-6777-4dfa-9071-1dfc7094efaa.tempo.build/auth/callback`,
    },
  });

  if (error) {
    console.error("Twitter OAuth error:", error);
    return redirect(
      "/sign-in?message=Could not authenticate with Twitter. Please try again.",
    );
  }

  return redirect(data.url);
}
