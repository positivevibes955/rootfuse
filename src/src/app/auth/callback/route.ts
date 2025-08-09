import { NextRequest, NextResponse } from "next/server";
import { createClient } from "../../../../supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalhost = forwardedHost && forwardedHost.includes("localhost");

      if (isLocalhost) {
        return NextResponse.redirect(`${origin}${next}`);
      } else {
        return NextResponse.redirect(
          `https://222b917f-6777-4dfa-9071-1dfc7094efaa.tempo.build${next}`,
        );
      }
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(
    `${origin}/sign-in?message=Authentication failed. Please try again.`,
  );
}
