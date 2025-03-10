import SignOutButton from "@/components/auth/sign-out-button";
import { Suspense } from "react";
import Trackers from "@/components/workspace/trackers";

export default function MyWorkspacePage() {
  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center space-x-5">
        <h1>WORKSPACE PAGE</h1>
        <div className="border py-2 px-6 rounded-xl bg-black text-white">
          <SignOutButton />
        </div>
      </div>

      <Suspense
        fallback={
          <div className="text-xl font-extrabold">Trackers Skeleton</div>
        }
      >
        <Trackers />
      </Suspense>
    </div>
  );
}
