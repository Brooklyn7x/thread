"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import ThreadCard from "./thread-card";
import { Loader } from "lucide-react";

const PostItems = () => {
  const data = useQuery(api.threads.getAll);

  if (!data)
    return (
      <div className="flex items-center justify-center animate-spin h-screen ">
        <Loader />
      </div>
    );

  return (
    <div className="w-full">
      {data?.map((post) => (
        <ThreadCard
          key={post._id}
          id={post._id}
          content={post.content}
          imageUrl={post.imageUrl}
          createdAt={post._creationTime}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default PostItems;
