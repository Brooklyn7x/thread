"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import PostCard from "./post-card";
const PostItems = () => {
  const data = useQuery(api.threads.get);
  return (
    <div className="w-full">
      {data?.map((post) => (
        <PostCard
          key={post._id}
          id={post._id}
          author={post.authorName}
          content={post.content}
          imageUrl={post.imageUrl}
          createdAt={post._creationTime}
        />
      ))}
    </div>
  );
};

export default PostItems;
