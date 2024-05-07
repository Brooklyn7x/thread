"use client";
import { api } from "@/convex/_generated/api";
import {  useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import ThreadList from "@/components/thread/thread-list";

const SavedPage = () => {
  const { user } = useUser();
  const userId = user?.id || ""
  const thread = useQuery(api.saved.getSavedThreadByUser, { userId });
  if (!thread) return null;

  return (
    <div className="w-full">
      <ThreadList threads={thread} />
    </div>
  );
};

export default SavedPage;
