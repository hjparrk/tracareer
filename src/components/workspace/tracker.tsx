"use client";

import { TrackerData } from "@/types/tracker.type";
import { useRouter } from "next/navigation";

export default function Tracker({ tracker }: { tracker: TrackerData }) {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/tracker/${tracker.id}`);
  };

  return (
    <div
      key={`tracker-${tracker.id}`}
      onClick={onClickHandler}
      className="border py-2 px-6 rounded-xl"
    >
      <h1>{tracker.title}</h1>
      <h3 className="text-sm">{tracker.created_at}</h3>
    </div>
  );
}
