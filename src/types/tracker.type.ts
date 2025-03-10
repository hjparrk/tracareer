import { Database } from "./database.types";

export type TrackerData = Pick<
  Database["public"]["Tables"]["trackers"]["Row"],
  "id" | "created_at" | "title"
>;
