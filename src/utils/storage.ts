import { createClient } from "../../supabase/client";

export async function uploadImage(
  file: File,
  path?: string,
): Promise<{ data: any; error: any }> {
  const supabase = createClient();

  const fileName = path || `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("images")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  return { data, error };
}

export async function getImageUrl(path: string): Promise<string> {
  const supabase = createClient();

  const { data } = supabase.storage.from("images").getPublicUrl(path);

  return data.publicUrl;
}

export async function deleteImage(
  path: string,
): Promise<{ data: any; error: any }> {
  const supabase = createClient();

  const { data, error } = await supabase.storage.from("images").remove([path]);

  return { data, error };
}

export async function listImages(
  folder?: string,
): Promise<{ data: any; error: any }> {
  const supabase = createClient();

  const { data, error } = await supabase.storage
    .from("images")
    .list(folder || "", {
      limit: 100,
      offset: 0,
    });

  return { data, error };
}

// Function to verify bucket exists
export async function verifyBucket(): Promise<boolean> {
  const supabase = createClient();

  try {
    // Try to list files in the images bucket - this will fail if bucket doesn't exist
    const { data, error } = await supabase.storage.from("images").list("", {
      limit: 1,
      offset: 0,
    });

    if (error) {
      console.error("Error accessing images bucket:", error);
      // Check if it's a bucket not found error
      if (
        error.message?.includes("not found") ||
        error.message?.includes("does not exist")
      ) {
        return false;
      }
      // For other errors, assume bucket exists but there's a permission issue
      return true;
    }

    console.log("Images bucket verified - can list contents");
    return true;
  } catch (error) {
    console.error("Error verifying bucket:", error);
    return false;
  }
}
