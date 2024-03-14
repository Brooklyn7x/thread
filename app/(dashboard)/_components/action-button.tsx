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
import { toast } from "sonner";

interface ActionButtonProps {
  id: Id<"threads">;
}

const ThreadActionButton = ({ id }: ActionButtonProps) => {
  // const { mutate } = useApiMutation(api.thread.update);

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
        <DropdownMenuItem className="cursor-pointer">
          <Button className="w-full" variant={"ghost"}>
            Edit
          </Button>
        </DropdownMenuItem>
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

export default ThreadActionButton;
