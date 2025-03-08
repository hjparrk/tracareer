import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default function MyWorkspacePage() {
  async function signOut() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();

    redirect("/signin");
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>WORKSPACE PAGE</h1>
      <button
        onClick={signOut}
        className="border py-2 px-6 rounded-xl bg-black text-white"
      >
        Sign Out
      </button>
    </div>
  );
}
