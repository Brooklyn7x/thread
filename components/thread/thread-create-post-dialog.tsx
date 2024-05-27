"use client";
import { Button } from "@/components/ui/button";
import CreatePostDialog from "../modal/create-post-modala";
import usePostModal from "@/hooks/use-post-modal";
import { useCallback } from "react";

export const CreateThreadDailogx = () => {
  const createPostModal = usePostModal();
  const toggleCreatePost = useCallback(() => {
    createPostModal.onOpen();
  }, [createPostModal]);

  return (
    <div className="flex-1 inset-x-2" onClick={toggleCreatePost}>
      <div className="flex items-center justify-between">
        <p className="px-2 text-sm text-muted-foreground">Start a thread...</p>
        <Button className="rounded-3xl" disabled={true}>
          Post
        </Button>
      </div>
    </div>
  );
};
