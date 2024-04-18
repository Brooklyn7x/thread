import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Comment } from "@/lib/types/type";
import { CommentForm } from "../comments/comment-form";
const CommentModal = ({ comment }: { comment: Comment }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="w-full">
        <MessageCircle className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent>
        <CommentForm comment={comment} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
