"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import ThreadCard from "../../../../components/thread/thread-card";

interface Props {
  userId: string;
}

const PostItems = ({ userId }: Props) => {
  const data = useQuery(api.threads.getThreadByUser, { userId });

  return (
    <div className="w-full">
      {data?.map((post) => (
        <ThreadCard
          key={post._id}
          id={post._id}
          userId={post.userId}
          content={post.content}
          imageUrl={post.imageUrl}
          createdAt={post._creationTime}
        />
      ))}
    </div>
  );
};

export default PostItems;
