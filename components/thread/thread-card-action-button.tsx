"use client";

import ConfirmModal from "@/components/modal/comform-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Ellipsis } from "lucide-react";
import { toast } from "sonner";
import ThreadEditDailog from "../../app/(dashboard)/thread/_componets/thread-edit-dailog";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
  id: Id<"threads">;
}

const ThreadActionButton = ({ id }: ActionButtonProps) => {
  const { mutate, pending } = useApiMutation(api.thread.removeThread);
  const router = useRouter();

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
        <ThreadEditDailog threadId={id} />
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
