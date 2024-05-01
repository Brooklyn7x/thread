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
import { useAuth, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ActionButtonProps {
  threadId: Id<"threads">;
}
export const ThreadOtherAction = ({ threadId }: ActionButtonProps) => {
  const { user } = useUser();
  const userId = user?.id || "";
  const { mutate: saveThread } = useApiMutation(api.saved.savedThreads);
  const { mutate: unsaveThread } = useApiMutation(api.saved.unSavedThreads);
  const saved = useQuery(api.saved.getSaved, { userId, threadId });
  const isSaved = !!saved?._id;
  const router = useRouter();

  const toggleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isSaved) {
      saveThread({ threadId, userId })
        .then(() => {
          toast.success("Saved");
          router.push("/");
        })
        .catch(() => toast.error("unable to Saved"));
    } else {
      unsaveThread({ threadId, userId })
        .then(() => toast.success("Unsaved"))
        .catch(() => toast.error("unable to Unsaved"));
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis className="w-5 h-5 mr-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem asChild>
          <Button
            onClick={toggleSave}
            variant={"ghost"}
            size={"sm"}
            className="w-full justify-start"
          >
            {isSaved ? "Unsaved" : "Save"}
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Hide</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Mute</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Unfollow</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Report</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
