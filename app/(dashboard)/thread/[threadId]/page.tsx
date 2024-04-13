"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import ThreadPageCard from "@/components/thread/thread-page-card";
import CommentsItemsList from "@/components/comments/comment-list";
import { Speator } from "@/components/speator";

interface PostIdPage {
  params: {
    threadId: Id<"threads">;
  };
}

const PostIdPage = ({ params }: PostIdPage) => {
  const threadId = params.threadId;
  const thread = useQuery(api.thread.getThreadById, { threadId });
  const comments = useQuery(api.comments.getCommentsByThread, { threadId });
  if (!thread) return null;
  if (!comments) return null;

  

  return (
    <div className="w-full">
      <ThreadPageCard threads={thread} />
      <Speator />
      <CommentsItemsList comments={comments} />
    </div>
  );
};

export default PostIdPage;
