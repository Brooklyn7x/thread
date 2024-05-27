"use client";

import Modal from "./modal";
import ThreadEditForm from "@/app/(dashboard)/thread/_componets/thread-edit-form";
import useCommentModal from "@/hooks/use-comment-modal";
import useEditModal from "@/hooks/use-edit-modal";
import { CommentForm } from "../comments/comment-form";

const CommentModal = () => {
  const { isOpen, thread, closeModal } = useCommentModal();

  const body = <CommentForm handleClose={closeModal} comment={thread}/>;

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="Edit Post" body={body} />
  );
};

export default CommentModal;
