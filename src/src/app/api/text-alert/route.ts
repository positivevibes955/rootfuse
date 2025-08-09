import { NextRequest, NextResponse } from "next/server";
import { createClient } from "../../../../supabase/server";

export async function POST(request: NextRequest) {
  try {
    const { email, phone, textAlertsEnabled } = await request.json();

    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 },
      );
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check environment variables
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        { error: "Database configuration error" },
        { status: 500 },
      );
    }

    const supabase = await createClient();

    const { error: updateError } = await supabase
      .from("waitlist_signups")
      .update({
        phone,
        text_alerts_enabled: textAlertsEnabled || false,
        updated_at: new Date().toISOString(),
      })
      .eq("email", email);

    if (updateError) {
      console.error("Error updating phone number:", updateError);
      return NextResponse.json(
        { error: "Error adding phone number. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Text alert API error:", error);
    return NextResponse.json(
      { error: "Error adding phone number. Please try again." },
      { status: 500 },
    );
  }
}
