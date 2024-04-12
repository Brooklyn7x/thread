import { Id } from "@/convex/_generated/dataModel";

export type Thread = {
  _id: Id<"threads">;
  _creationTime: number;
  imageUrl?: string | undefined;
  userId: string;
  content: string;
};

export type Comment = {
  _id: Id<"comments">;
  _creationTime: number;
  comments: string;
  userId: string;
  threadId: Id<"threads">;
};
