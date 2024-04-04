"use client";

import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { query } from "@/convex/_generated/server";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Heart, MessageCircle, Repeat, Repeat2, Send } from "lucide-react";
import { toast } from "sonner";

interface ThreadActionButtonProps {
  id: Id<"threads">;
}

const ThreadButton = ({ id }: ThreadActionButtonProps) => {
  const { userId } = useAuth();
  const { mutate: like } = useApiMutation(api.like.createlike);
  const { mutate: unlike } = useApiMutation(api.like.removeLike);
  const Liked = useQuery(api.like.getLike, { id });
  if (!Liked) return null;
  const isLiked = !!Liked[0]?._id;

  const handleLikeThread = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isLiked) {
      like({ id, userId })
        .then(() => toast.success("Liked the thread"))
        .catch(() => toast.error("try again."));
    } else {
      unlike({ id, userId }).then(() => {
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
