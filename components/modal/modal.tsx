"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSumbit?: () => void;
  title: string;
  body?: React.ReactElement;
  disabled?: boolean;
}

const Modal = ({
  onClose,
  onSumbit,
  title,
  body,
  disabled,
  isOpen,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return null;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  // const handelSubmit = useCallback(() => {
  //   if (disabled) return null;

  //   onSumbit();
  // }, [disabled, onSumbit]);

  return (
    <Dialog open={showModal} onOpenChange={handleClose}>
      <DialogContent className="px-4">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="p-3"> {body}</div>
        <DialogFooter>
          {/* <Button onClick={handelSubmit} disabled={disabled}>
            Post
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
