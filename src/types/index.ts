export type Status = "todo" | "complete";

export interface Todo {
  id: string;
  text: string;
  status: Status;
}
