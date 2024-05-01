"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Heart, Repeat, Send } from "lucide-react";
import { toast } from "sonner";
import CommentModal from "@/components/modal/comment-modal";
import { Thread } from "@/lib/types/type";
import { Id } from "@/convex/_generated/dataModel";
import { threadId } from "worker_threads";
import { ThreadCommentModal } from "../modal/thread-modal";

interface ThreadActionButtonProps {
  thread: Thread;
  id: Id<"threads">;
}

const ThreadButton = ({ thread, id }: ThreadActionButtonProps) => {
  const threadId = id;
  const { userId } = useAuth();
  const { mutate: like } = useApiMutation(api.like.createlike);
  const { mutate: unlike } = useApiMutation(api.like.removeLike);
  const Liked = useQuery(api.like.getLike, { threadId });
  if (!Liked) return null;
  const isLiked = !!Liked[0]?._id;

  const handleLikeThread = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isLiked) {
      like({ threadId, userId })
        .then(() => toast.success("Liked the thread"))
        .catch(() => toast.error("try again."));
    } else {
      unlike({ threadId, userId }).then(() => {
        toast.success("UnLiked the thread");
      });
    }
  };

  return (
    <div className="flex w-full">
      <button className="p-2 hover:text-gray-600" onClick={handleLikeThread}>
        <Heart className={cn("h-5 w-5", isLiked && "fill-red-600")} />
      </button>
      <button className="p-2">
        <ThreadCommentModal thread={thread} />
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
