import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";

export async function POST() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `https://www.rootfuse.com/auth/callback`,
    },
  });

  if (error) {
    return redirect(
      "https://www.rootfuse.com/sign-in?message=Could not authenticate with Google",
    );
  }

  return redirect(data.url);
}
