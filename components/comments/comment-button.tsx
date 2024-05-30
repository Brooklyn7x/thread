"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Heart, Repeat, Send } from "lucide-react";
import { toast } from "sonner";
import CommentModal from "@/components/modal/comment-modal";
import { Comment } from "@/lib/types/type";
import { Id } from "@/convex/_generated/dataModel";
import { useCallback } from "react";
import LikeButton from "../thread/buttons/like-button";

interface ThreadActionButtonProps {
  comment: Comment;
  threadId: Id<"threads">;
}

const CommentButton = ({ comment, threadId }: ThreadActionButtonProps) => {
  const { userId } = useAuth();
  const { mutate: toggleLike } = useApiMutation(api.like.toogleLike);
  const likes = useQuery(api.like.getLike, { threadId }) || [];
  const isLiked = !!likes.find((like) => like.userId === userId);

  const handleLikeThread = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      toggleLike({ threadId, userId })
        .then(() =>
          toast.success(isLiked ? "Unliked the comment" : "Liked the comment")
        )
        .catch(() => toast.error("Try again."));
    },
    [isLiked, toggleLike, threadId, userId]
  );

  return (
    <div className="flex w-full">
      <LikeButton isLiked={isLiked} onClick={() => {}} />

      <button className="p-2">
        <CommentModal comment={comment} />
      </button>
      <button className="p-2">
        <Repeat className="w-4 h-4" />
      </button>
      <button className="p-2">
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CommentButton;
