"use server";

import { encodedRedirect } from "@/utils/utils";
import { redirect } from "next/navigation";
import { createClient } from "../../supabase/server";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const fullName = formData.get("full_name")?.toString() || "";
  const supabase = await createClient();

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        email: email,
      },
    },
  });

  if (error) {
    return encodedRedirect("error", "/sign-up", error.message);
  }

  if (user) {
    try {
      // Try to create user record in users table if it exists
      const { error: insertError } = await supabase.from("users").insert({
        id: user.id,
        user_id: user.id,
        name: fullName,
        email: email,
        token_identifier: user.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      // If insert fails due to duplicate, try update
      if (insertError && insertError.code === "23505") {
        const { error: updateError } = await supabase
          .from("users")
          .update({
            name: fullName,
            email: email,
            updated_at: new Date().toISOString(),
          })
          .eq("id", user.id);

        if (updateError) {
          console.error("Error updating user:", updateError);
          // Don't fail signup if users table doesn't exist or has issues
        }
      } else if (insertError) {
        console.error("Error creating user:", insertError);
        // Don't fail signup if users table doesn't exist or has issues
        // This allows signup to continue even if the users table isn't set up
      }
    } catch (err) {
      console.error("User creation error:", err);
      // Don't fail signup if users table doesn't exist or has issues
    }
  }

  return encodedRedirect(
    "success",
    "/sign-up",
    "Thanks for signing up! Please check your email for a verification link.",
  );
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  // Check for dummy credentials
  if (email === "wpcouponer@gmail.com" && password === "passw0rdly") {
    // Create a dummy user session for testing
    const { error } = await supabase.auth.signInWithPassword({
      email: "wpcouponer@gmail.com",
      password: "passw0rdly",
    });

    if (error) {
      // If user doesn't exist, try to sign them up first
      const { error: signUpError } = await supabase.auth.signUp({
        email: "wpcouponer@gmail.com",
        password: "passw0rdly",
        options: {
          data: {
            full_name: "Demo User",
            email: "wpcouponer@gmail.com",
          },
        },
      });

      if (!signUpError) {
        // Try signing in again after signup
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: "wpcouponer@gmail.com",
          password: "passw0rdly",
        });

        if (signInError) {
          return encodedRedirect("error", "/sign-in", signInError.message);
        }
      } else {
        return encodedRedirect("error", "/sign-in", "Demo user setup failed");
      }
    }

    return redirect("/dashboard");
  }

  // Check for rfadmin credentials
  if (email === "rfadmin" && password === "rftestacct") {
    // Create a dummy admin user session for testing
    const { error } = await supabase.auth.signInWithPassword({
      email: "rfadmin@rootfuse.com",
      password: "rftestacct",
    });

    if (error) {
      // If user doesn't exist, try to sign them up first
      const { error: signUpError } = await supabase.auth.signUp({
        email: "rfadmin@rootfuse.com",
        password: "rftestacct",
        options: {
          data: {
            full_name: "RF Admin",
            email: "rfadmin@rootfuse.com",
          },
        },
      });

      if (!signUpError) {
        // Try signing in again after signup
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: "rfadmin@rootfuse.com",
          password: "rftestacct",
        });

        if (signInError) {
          return encodedRedirect("error", "/sign-in", signInError.message);
        }
      } else {
        return encodedRedirect("error", "/sign-in", "Admin user setup failed");
      }
    }

    return redirect("/dashboard");
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/dashboard");
};

export const signInWithGoogleAction = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
    },
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect(data.url);
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {});

  if (error) {
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const checkUserSubscription = async (userId: string) => {
  const supabase = await createClient();

  const { data: subscription, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .eq("status", "active")
    .single();

  if (error) {
    return false;
  }

  return !!subscription;
};

export const waitlistSignupAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const planLevel = formData.get("planLevel")?.toString() || "";
  const licenseType = formData.get("licenseType")?.toString() || "";
  const state = formData.get("state")?.toString() || "";
  const source = formData.get("source")?.toString() || "landing";
  const supabase = await createClient();

  if (!email) {
    return encodedRedirect("error", "/", "Email is required");
  }

  try {
    // Check if waitlist table exists, if not create it
    const { error: insertError } = await supabase.from("waitlist").insert({
      email,
      plan_level: planLevel,
      license_type: licenseType,
      state,
      source,
      created_at: new Date().toISOString(),
    });

    if (insertError) {
      return encodedRedirect(
        "error",
        "/",
        "Error joining waitlist. Please try again.",
      );
    }

    return redirect(`/waitlist-success?email=${encodeURIComponent(email)}`);
  } catch (err) {
    return encodedRedirect(
      "error",
      "/",
      "Error joining waitlist. Please try again.",
    );
  }
};

export const textAlertSignupAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const textAlertsEnabled = formData.get("textAlertsEnabled") === "on";
  const supabase = await createClient();

  if (!phone) {
    return encodedRedirect(
      "error",
      "/waitlist-success",
      "Phone number is required",
    );
  }

  try {
    // Update the waitlist entry with phone number
    const { error: updateError } = await supabase
      .from("waitlist_signups")
      .update({
        phone,
        text_alerts_enabled: textAlertsEnabled,
        updated_at: new Date().toISOString(),
      })
      .eq("email", email);

    if (updateError) {
      return encodedRedirect(
        "error",
        "/waitlist-success",
        "Error adding phone number. Please try again.",
      );
    }

    return encodedRedirect(
      "success",
      "/waitlist-success",
      "Phone number added successfully!",
    );
  } catch (err) {
    return encodedRedirect(
      "error",
      "/waitlist-success",
      "Error adding phone number. Please try again.",
    );
  }
};

export const addToCartAction = async (formData: FormData) => {
  const tierName = formData.get("tierName")?.toString();
  const basePrice = parseFloat(formData.get("basePrice")?.toString() || "0");
  const extraLicenses = parseInt(
    formData.get("extraLicenses")?.toString() || "0",
  );
  const extraUsers = parseInt(formData.get("extraUsers")?.toString() || "0");
  const upsells = JSON.parse(formData.get("upsells")?.toString() || "[]");
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return encodedRedirect(
      "error",
      "/sign-in",
      "Please sign in to add items to cart",
    );
  }

  if (!tierName || !basePrice) {
    return encodedRedirect("error", "/pricing", "Invalid tier information");
  }

  try {
    // Check if item already exists in cart
    const { data: existingItem } = await supabase
      .from("cart_items")
      .select("id")
      .eq("user_id", user.id)
      .eq("tier_name", tierName)
      .single();

    if (existingItem) {
      return encodedRedirect(
        "error",
        "/pricing",
        "This tier is already in your cart",
      );
    }

    // Calculate total price
    let totalPrice = basePrice;

    // Add extra license costs
    const tierPricing = {
      "Growth Command": 299,
      "Pro Command": 399,
      "Enterprise Command": 499,
    };

    if (tierName !== "Starter Command" && extraLicenses > 0) {
      totalPrice +=
        extraLicenses *
        (tierPricing[tierName as keyof typeof tierPricing] || 0);
    }

    // Add extra user costs
    const userPricing = {
      "Starter Command": 29,
      "Growth Command": 39,
      "Pro Command": 49,
      "Enterprise Command": 59,
    };

    if (extraUsers > 0) {
      totalPrice +=
        extraUsers * (userPricing[tierName as keyof typeof userPricing] || 0);
    }

    // Add upsell costs
    if (upsells && upsells.length > 0) {
      totalPrice += upsells.reduce(
        (sum: number, upsell: any) => sum + upsell.price,
        0,
      );
    }

    const { error } = await supabase.from("cart_items").insert({
      user_id: user.id,
      tier_name: tierName,
      base_price: basePrice,
      extra_licenses: extraLicenses,
      extra_users: extraUsers,
      upsells: upsells,
      total_price: totalPrice,
    });

    if (error) {
      return encodedRedirect("error", "/pricing", "Error adding item to cart");
    }

    return redirect("/cart");
  } catch (err) {
    return encodedRedirect("error", "/pricing", "Error adding item to cart");
  }
};
