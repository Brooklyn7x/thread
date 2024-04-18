import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Thread } from "@/lib/types/type";
import { ThreadCommentForm } from "../thread/thread-comment-form";
export const ThreadCommentModal = ({ thread }: { thread: Thread }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="w-full" onClick={handleClick}>
        <MessageCircle className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent>
        <ThreadCommentForm thread={thread} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};
