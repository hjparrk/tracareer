import { getAllTrackers } from "@/actions/tracker.action";
import Tracker from "./tracker";

export default async function Trackers() {
  const trackers = await getAllTrackers();

  return (
    <div className="flex flex-col gap-5">
      {trackers?.map((tracker) => (
        <Tracker key={`tracker-${tracker.id}`} tracker={tracker} />
      ))}
    </div>
  );
}
