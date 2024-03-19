"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import ThreadCommentCard from "./thread-comment-card";

const ThreadCommentsItems = () => {
  const data = useQuery(api.threads.get);
  return (
    <div className="w-full">
      {data?.map((post) => (
        <ThreadCommentCard
          key={post._id}
          id={post._id}
          authorName={post.authorName}
          content={post.content}
          imageUrl={post.imageUrl}
          createdAt={post._creationTime}
        />
      ))}
    </div>
  );
};

export default ThreadCommentsItems;
