"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import ThreadCommentsItems from "../_componets/thread-comment-list";
import ThreadCard from "../_componets/thread-page-card";
interface PostIdPage {
  params: {
    threadId: Id<"threads">;
  };
}

const PostIdPage = ({ params }: PostIdPage) => {
  const threadId = params.threadId;
  const data = useQuery(api.thread.getThreads, { threadId });
  console.log(data);

  return (
    <div className="w-full">
      <ThreadCard
        id={data?._id}
        createdAt={data?._creationTime!}
        content={data?.content ?? ""}
        imageUrl={data?.imageUrl}
        userId={data?.userId || undefined}
      />

      <div className="w-full">
        <ThreadCommentsItems />
      </div>
    </div>
  );
};

export default PostIdPage;
