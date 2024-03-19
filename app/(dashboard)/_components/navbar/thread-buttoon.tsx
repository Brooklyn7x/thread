"use client";

import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";
import { toast } from "sonner";
interface ThreadActionButtonProps {
  id: Id<"threads">;
}

const ThreadButton = ({ id }: ThreadActionButtonProps) => {
  const { mutate, pending } = useApiMutation(api.like.createlike);

  const { mutate: onUnliked } = useApiMutation(api.like.remove);

  const handleToggleLike = () => {};

  const handlleLikeThread = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    mutate({ id })
      .then(() => toast.success("Liked the thread"))
      .catch(() => toast.error("Already liked"));
  };

  // const handleUnLikeThread =   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   mutate({ id })
  //     .then(() => toast.success("Liked the thread"))
  //     .catch(() => toast.error("Already liked"));
  // };

  return (
    <div className="flex w-full">
      <button
        className="p-2 hover:text-gray-500"
        onClick={handlleLikeThread}
        disabled={pending}
      >
        <Heart className="w-5 h-5 fill-red-500" />
      </button>
      <button className="p-2">
        <MessageCircle className="w-5 h-5" />
      </button>
      <button className="p-2">
        <Repeat2 className="w-5 h-5" />
      </button>
      <button className="p-2">
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ThreadButton;
