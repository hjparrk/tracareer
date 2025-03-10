import { createTracker } from "@/actions/tracker.action";

export function CreateTrackerButton({ title }: { title: string }) {
  const handleClick = async () => {
    const data = await createTracker(title);
    console.log(data); // 생성된 트래커 데이터 출력
  };

  return <button onClick={handleClick}>Create Tracker</button>;
}
