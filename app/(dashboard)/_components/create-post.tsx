"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateForm from "./create-form";

interface CreatePostProps {
  children: React.ReactNode;
}

const CreatePost = ({ children }: CreatePostProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="rounded-2xl">
          <CreateForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;
