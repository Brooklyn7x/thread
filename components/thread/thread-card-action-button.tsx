"use client";

import ConfirmModal from "@/components/modal/comform-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Ellipsis } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useEditModal from "@/hooks/use-edit-modal";
import { Thread } from "@/lib/types/type";

interface ActionButtonProps {
  id: Id<"threads">;
  thread: Thread;
}

const ThreadActionButton = ({ id, thread }: ActionButtonProps) => {
  const { mutate, pending } = useApiMutation(api.thread.removeThread);
  const { openModal } = useEditModal();
  const router = useRouter();

  const handleEdit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    openModal(thread);
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => {
        toast.success("Thread Deleted");
        router.push("/");
      })
      .catch(() => toast.error("Threads failed to delete"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className="h-5 w-5 mr-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        onClick={(e) => e.stopPropagation()}
        align="end"
        alignOffset={10}
      >
        {/* <ThreadEditDailog threadId={id} /> */}
        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <ConfirmModal
          header="Delete Thread ? "
          description="Are you sure ?"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant={"ghost"}
            className="w-full justify-start"
            size={"sm"}
          >
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThreadActionButton;
