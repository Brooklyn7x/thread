"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Heart, MessageCircle, Repeat, Send } from "lucide-react";
import { toast } from "sonner";
import CommentModal from "@/components/modal/comment-modal";
import { Thread } from "@/lib/types/type";
import { Id } from "@/convex/_generated/dataModel";
import { threadId } from "worker_threads";
import { ThreadCommentModal } from "../modal/thread-modal";
import LikeButton from "./buttons/like-button";
import { useCallback } from "react";
import CommentButon from "./buttons/comment-button";
import CommentButton from "../comments/comment-button";
import useCommentModal from "@/hooks/use-comment-modal";

interface ThreadActionButtonProps {
  thread: Thread;
  id: Id<"threads">;
}

const ThreadButton = ({ thread, id }: ThreadActionButtonProps) => {
  const { openModal } = useCommentModal();
  const threadId = id;
  const { userId } = useAuth();
  const { mutate: like } = useApiMutation(api.like.createlike);
  const { mutate: unlike } = useApiMutation(api.like.removeLike);

  const Liked = useQuery(api.like.getLike, { threadId }) || [];
  const isLiked = !!Liked[0]?._id;

  const handleComment = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    openModal(thread);
  };

  const handleLikeThread = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      if (!isLiked) {
        like({ threadId, userId })
          .then(() => toast.success("Liked the thread"))
          .catch(() => toast.error("Try again."));
      } else {
        unlike({ threadId, userId })
          .then(() => toast.success("Unliked the thread"))
          .catch(() => toast.error("Try again."));
      }
    },
    [isLiked, like, unlike, threadId, userId]
  );
  if (!Liked) return null;

  return (
    <div className="flex w-full">
      <LikeButton isLiked={isLiked} onClick={handleLikeThread} />

      {/* <CommentButton thread={thread} /> */}

      <button className="p-2" onClick={handleComment}>
        <MessageCircle className="w-5 h-5" />
      </button>

      <button className="p-2">
        <Repeat className="w-5 h-5" />
      </button>

      <button className="p-2">
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ThreadButton;
