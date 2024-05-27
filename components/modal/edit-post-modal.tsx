"use client";

import Modal from "./modal";
import ThreadEditForm from "@/app/(dashboard)/thread/_componets/thread-edit-form";
import useEditModal from "@/hooks/use-edit-modal";

const EditPostModal = () => {
  const { isOpen, thread, closeModal } = useEditModal();

  const body = <ThreadEditForm thread={thread} handleClose={closeModal} />;

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="Edit Post" body={body} />
  );
};

export default EditPostModal;
