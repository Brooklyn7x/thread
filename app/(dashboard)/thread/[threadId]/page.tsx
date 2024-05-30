"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import dynamic from "next/dynamic";
import Loading from "@/components/auth/loading";
import ThreadCard from "@/components/thread/thread-card";

interface PostIdPage {
  params: {
    threadId: Id<"threads">;
  };
}
const DynamicThreadCard = dynamic(
  () => import("@/components/thread/thread-card").then((mod) => mod.default),
  {
    loading: () => <Loading />,
  }
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
  if (!thread) return <Loading />;
  if (!comments) return <Loading />;

  return (
    <div className="w-full">
      <DynamicThreadCard thread={thread} useLink={false} />
      <DynamicSpeator />
      <DynamicCommentsItemsList comments={comments} />
    </div>
  );
};

export default PostIdPage;
