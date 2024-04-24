"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import ThreadPageCard from "@/components/thread/thread-page-card";
import CommentsItemsList from "@/components/comments/comment-list";
import { Speator } from "@/components/speator";
import dynamic from "next/dynamic";

interface PostIdPage {
  params: {
    threadId: Id<"threads">;
  };
}
const DynamicThreadPageCard = dynamic(() =>
  import("@/components/thread/thread-page-card").then(
    (mod) => mod.ThreadPageCard
  )
);
const DynamicCommentsItemsList = dynamic(() =>
  import("@/components/comments/comment-list").then((mod) => mod.default)
);
const DynamicSpeator = dynamic(() =>
  import("@/components/speator").then((mod) => mod.Speator)
);

const PostIdPage = ({ params }: PostIdPage) => {
  const threadId = params.threadId;
  const thread = useQuery(api.thread.getThreadById, { threadId });
  const comments = useQuery(api.comments.getCommentsByThread, { threadId });
  if (!thread) return null;
  if (!comments) return null;

  return (
    <div className="w-full">
      <DynamicThreadPageCard threads={thread} />
      <DynamicSpeator />
      <DynamicCommentsItemsList comments={comments} />
    </div>
  );
};

export default PostIdPage;
