"use client";

import Modal from "./modal";
import ThreadEditForm from "@/app/(dashboard)/thread/_componets/thread-edit-form";
import useCommentModal from "@/hooks/use-comment-modal";
import useEditModal from "@/hooks/use-edit-modal";
import { CommentForm } from "../comments/comment-form";
import { ThreadCommentForm } from "../thread/thread-comment-form";

const CommentModal = () => {
  const { isOpen, thread, closeModal } = useCommentModal();
  if (!thread) {
    // Return null or some fallback UI if thread is null
    return null;
  }

  const body = <ThreadCommentForm handleClose={closeModal} thread={thread} />;

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="Edit Post" body={body} />
  );
};

export default CommentModal;
