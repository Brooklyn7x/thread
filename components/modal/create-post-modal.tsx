"use client";

import usePostModal from "@/hooks/use-post-modal";
import Modal from "./modal";
import CreateForm from "../thread/thread-create-form";

const CreatePostModal = () => {
  const post = usePostModal();

  const body = <CreateForm handleClose={post.onClose} />;

  return (
    <Modal
      isOpen={post.isOpen}
      onClose={post.onClose}
      title="Create Post"
      body={body}
    />
  );
};

export default CreatePostModal;
