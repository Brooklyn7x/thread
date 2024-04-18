import { Id } from "@/convex/_generated/dataModel";

export type Thread = {
  url?: string | null;
  _id: Id<"threads">;
  _creationTime: number;
  imageUrl?: string | undefined;
  userId: string;
  content: string;
};

export type Threads = {
  id: Id<"threads">;
  _creationTime: number;
  imageUrl?: string | undefined;
  userId: string;
  content: string;
  url?: string | null;
}[];

export type Comment = {
  _id: Id<"comments">;
  _creationTime: number;
  comments: string;
  userId: string;
  threadId: Id<"threads">;
};

export type User = {
  _id: Id<"users">;
  _creationTime: number;
  name?: string | undefined;
  image?: string | undefined;
  username?: string | undefined;
  tokenIdentifier: string;
  userId: string;
};
