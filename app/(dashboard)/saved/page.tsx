"use client";
import Loading from "@/components/auth/loading";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import ThreadCard from "../_components/thread-card";

const SavedPage = () => {
  const { userId } = useAuth();
  const data = useQuery(api.saved.getSavedThreadByUser, { userId });
  

  if (data === undefined)
    return (
      <div>
        <Loading />
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

export default SavedPage;
