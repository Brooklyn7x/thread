"use client";
import Loading from "@/components/auth/loading";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import ThreadCard from "../../../components/thread/thread-card";
import ThreadList from "@/components/thread/thread-list";

const SavedPage = () => {
  const { userId } = useAuth();
  const thread = useQuery(api.saved.getSavedThreadByUser, { userId });
  if (!thread) return null;

  return (
    <div className="w-full">
      <ThreadList threads={thread} />
    </div>
  );
};

export default SavedPage;