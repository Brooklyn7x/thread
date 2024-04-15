"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateForm from "../thread/thread-create-form";
import { useState } from "react";

interface CreatePostProps {
  children: React.ReactNode;
}

const CreatePostDialog = ({ children }: CreatePostProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <CreateForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
