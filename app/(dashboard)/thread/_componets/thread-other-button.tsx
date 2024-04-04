"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface ActionButtonProps {
  id: Id<"threads">;
}
export const ThreadOtherAction = ({ id }: ActionButtonProps) => {
  const { userId } = useAuth();
  const { mutate: saveThread } = useApiMutation(api.saved.savedThreads);
  const { mutate: unsaveThread } = useApiMutation(api.saved.unSavedThreads);
  const saved = useQuery(api.saved.getSaved, { userId, id });
  const issaved = !!saved?._id;

  const toggleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (!issaved) {
      saveThread({ id, userId })
        .then(() => toast.success("Saved"))
        .catch(() => toast.error("unable to Saved"));
    } else {
      unsaveThread({ id, userId })
        .then(() => toast.success("Unsaved"))
        .catch(() => toast.error("unable to Unsaved"));
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem asChild>
          <Button
            onClick={toggleSave}
            variant={"ghost"}
            size={"sm"}
            className="w-full justify-start"
          >
            {issaved ? "Unsaved" : "Save"}
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>Hide</DropdownMenuItem>
        <DropdownMenuItem>Mute</DropdownMenuItem>
        <DropdownMenuItem>Unfollow</DropdownMenuItem>
        <DropdownMenuItem>Report</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
