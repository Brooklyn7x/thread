"use client";

import ConfirmModal from "@/components/modal/comform-modal";
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
import ThreadEditDailog from "../../app/(dashboard)/thread/_componets/thread-edit-dailog";
import { useQuery } from "convex/react";

interface ActionButtonProps {
  id: Id<"threads">;
}

const ThreadPostActionButton = ({ id }: ActionButtonProps) => {
  const threadId = id;
  const { mutate, pending } = useApiMutation(api.thread.removeThread);
  const threadData = useQuery(api.threads.getThread, { threadId });

  const handleDelete = () => {
    mutate({ id })
      .then(() => toast.success("Thread Deleted"))
      .catch(() => toast.error("Threads failed to delete"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="" size={"sm"}>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" onClick={(e) => e.stopPropagation()}>
        <ThreadEditDailog threadId={id} />

        <ConfirmModal
          header="Delete Thread ? "
          description="Are you sure ?"
          disabled={pending}
          onConfirm={handleDelete}
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
