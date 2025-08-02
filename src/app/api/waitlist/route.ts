import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, x-client-info, apikey",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase environment variables:", {
        hasUrl: !!supabaseUrl,
        hasServiceKey: !!supabaseServiceKey,
      });
      return NextResponse.json(
        { error: "Server configuration error - missing environment variables" },
        { status: 500, headers: corsHeaders },
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400, headers: corsHeaders },
      );
    }

    const { email, plan_level, license_type, state, phone } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required and must be a string" },
        { status: 400, headers: corsHeaders },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400, headers: corsHeaders },
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // Create Supabase client with service key for server-side operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    console.log("Attempting to connect to Supabase...");

    // Test connection first
    try {
      const { data: testData, error: testError } = await supabase
        .from("waitlist_signups")
        .select("id")
        .limit(1);

      if (testError) {
        console.error("Database connection test failed:", testError);
        return NextResponse.json(
          { error: `Database connection failed: ${testError.message}` },
          { status: 500, headers: corsHeaders },
        );
      }

      console.log("Database connection successful");
    } catch (connectionError) {
      console.error("Database connection error:", connectionError);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500, headers: corsHeaders },
      );
    }

    // Insert email into database with additional fields
    const insertData = {
      email: cleanEmail,
      source: "landing",
      plan_level: plan_level || null,
      license_type: license_type || null,
      state: state || null,
      phone: phone || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    console.log("Inserting data:", { email: cleanEmail, source: "landing" });

    const { data, error } = await supabase
      .from("waitlist_signups")
      .insert(insertData)
      .select();

    if (error) {
      console.error("Database insert error:", error);

      // Handle duplicate email
      if (error.code === "23505" || error.message?.includes("duplicate")) {
        return NextResponse.json(
          { error: "This email is already on our waitlist" },
          { status: 409, headers: corsHeaders },
        );
      }

      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500, headers: corsHeaders },
      );
    }

    console.log("Successfully added email to waitlist:", cleanEmail);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the Rootfuse waitlist!",
        email: cleanEmail,
        data: data?.[0] || null,
      },
      { status: 201, headers: corsHeaders },
    );
  } catch (error) {
    console.error("Unexpected API error:", error);
    return NextResponse.json(
      {
        error: `Server error: ${error instanceof Error ? error.message : "Unknown error occurred"}`,
      },
      { status: 500, headers: corsHeaders },
    );
  }
}
