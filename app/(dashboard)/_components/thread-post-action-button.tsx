"use client";

import ConfirmModal from "@/components/comform-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import ThreadEditDailog from "../thread/_componets/thread-edit-dailog";

interface ActionButtonProps {
  id: Id<"threads">;
}

const ThreadPostActionButton = ({ id }: ActionButtonProps) => {
  const { mutate, pending } = useApiMutation(api.thread.remove);

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Thread Deleted"))
      .catch(() => toast.error("Threads failed to delete"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"ghost"} className="" size={"sm"}>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" onClick={(e) => e.stopPropagation()}>
        <ThreadEditDailog>
          <Button>Edit</Button>
        </ThreadEditDailog>
        <ConfirmModal
          header="Delete Thread ? "
          description="Are you sure ?"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button variant={"ghost"} className="w-full">
            Delete{" "}
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThreadPostActionButton;
