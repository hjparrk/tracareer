import Image from "next/image";
import Link from "next/link";

import logoImg from "../../../../public/logo.svg";
import googleImg from "../../../../public/google-mark.svg";
import githubImg from "../../../../public/github-mark.svg";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default function SignInPage() {
  async function signInWithGithub() {
    "use server";

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo:
          "https://tracareer-git-auth-hjparrks-projects.vercel.app/auth/callback",
      },
    });

    if (error) {
      redirect("/error");
    }

    if (data.url) {
      redirect(data.url);
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <header className="sticky top-0 left-0 px-4 sm:px-16 py-5 border-b bg-white z-1 border-black/10 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex space-x-2 items-center text-lg font-extrabold tracking-tighter hover:cursor-pointer"
        >
          <div className="h-8 w-8">
            <Image src={logoImg} alt="logo" />
          </div>
          <span>TRACAREER</span>
        </Link>
      </header>

      <div className="h-full flex flex-col items-center gap-10">
        <h1 className="text-2xl font-bold tracking-tighter">
          Welcome back! Please sign in.
        </h1>

        <div className="flex flex-col gap-4">
          <button className="flex gap-2 items-center border border-gray-800/20 bg-white rounded-3xl p-2 hover:cursor-pointer">
            <Image src={googleImg} alt="google" className="h-xw8 w-8" />
            <span className="text-lg font-medium">Sign in with Google</span>
          </button>
          <button
            onClick={signInWithGithub}
            className="flex gap-2 items-center border border-gray-800 bg-gray-800 text-white rounded-3xl p-2 hover:cursor-pointer"
          >
            <Image src={githubImg} alt="github" className="h-8 w-8" />
            <span className="text-lg font-medium">Sign in with Github</span>
          </button>
        </div>
      </div>

      <div className="py-2 bg-gray-50 text-center mt-10">
        <h1>Copyright © 2025 Harry Park</h1>
      </div>
    </div>
  );
}
