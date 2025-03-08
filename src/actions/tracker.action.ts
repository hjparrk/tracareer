"use server";

import { createClient } from "@/utils/supabase/server";

export async function createTracker(title: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("trackers")
    .insert({ title })
    .select("id, user_id, title");

  return data;
}

export async function getAllTrackers() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("trackers")
    .select("id, title, created_at");

  return data;
}
