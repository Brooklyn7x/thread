"use client";

import { useApiMutation } from "@/hooks/use-api-mutation";

import PostItems from "../../_components/post-item";
import { api } from "@/convex/_generated/api";
import ThreadComment from "../_componets/thread-comment-card";
import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import ThreadCommentsCard from "../_componets/thread-comment-card";
import ThreadCommentsItems from "../_componets/thread-comment-list";
import { useParams } from "next/navigation";
import ThreadCard from "../_componets/thread-page-card";

const PostIdPage = () => {
  const params = useParams<{ threadId: Id<"threads"> }>();
  const threadId = params.threadId;
  const data = useQuery(api.threads.getThread, { threadId });

  return (
    <div className="w-full">
      <ThreadCard
        id={data?.id}
        authorName={data?.authorName ?? ""}
        createdAt={data?._creationTime!}
        content={data?.content ?? ""}
        imageUrl={data?.imageUrl}
      />

      <ThreadCommentsItems />
    </div>
  );
};

export default PostIdPage;
