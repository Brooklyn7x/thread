"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import ThreadCard from "../../_components/thread-card";

interface Props {
  authorId: string;
}

const PostItems = ({ authorId }: Props) => {
  const data = useQuery(api.threads.getThreadByUser, { authorId });

  return (
    <div className="w-full">
      {data?.map((post) => (
        <ThreadCard
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

export default PostItems;
