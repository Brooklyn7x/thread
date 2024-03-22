"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ThreadEditForm from "./thread-edit-form";

interface CreatePostProps {
  children: React.ReactNode;
}

const ThreadEditDailog = ({ children }: CreatePostProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <ThreadEditForm />
      </DialogContent>
    </Dialog>
  );
};

export default ThreadEditDailog;
