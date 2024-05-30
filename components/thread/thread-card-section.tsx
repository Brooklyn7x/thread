"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { memo } from "react";

interface ThreadCardProps {
  threadId: Id<"threads">;
}

const ThreadCardSection = ({ threadId }: ThreadCardProps) => {
  const likes = useQuery(api.like.getLike, { threadId }) || [];
  const comments =
    useQuery(api.comments.getCommentsByThread, { threadId }) || [];
  if (!likes || !comments) {
    return <h1>Loading..</h1>;
  }
  return (
    <div className="flex gap-2 items-center">
      <h1 className="text-muted-foreground text-md">
        {comments.length || 0} replies
      </h1>

      <h1 className="text-muted-foreground text-md">
        {likes.length || 0} likes
      </h1>
    </div>
  );
};

export default memo(ThreadCardSection);
