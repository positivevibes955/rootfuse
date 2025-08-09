import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";

export async function POST() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "linkedin_oidc",
    options: {
      redirectTo: `https://222b917f-6777-4dfa-9071-1dfc7094efaa.tempo.build/auth/callback`,
    },
  });

  if (error) {
    console.error("LinkedIn OAuth error:", error);
    return redirect(
      "/sign-in?message=Could not authenticate with LinkedIn. Please try again.",
    );
  }

  return redirect(data.url);
}
