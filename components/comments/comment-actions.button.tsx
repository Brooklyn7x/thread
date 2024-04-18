import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { Ellipsis } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { useState } from "react";

interface CommentActionButtonProps {
  threadId: Id<"threads">;
}

const CommentActionButton = ({ threadId: id }: CommentActionButtonProps) => {
  const threadId = id;
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const userId = user?.id || "";
  const { mutate: saveThread } = useApiMutation(api.saved.savedThreads);
  const { mutate: unsaveThread } = useApiMutation(api.saved.unSavedThreads);
  const saved = useQuery(api.saved.getSaved, { userId, threadId });
  if (!saved) return null;
  const issaved = !!saved?._id;
  //change the save logic
  const handleClose = () => {
    setOpen(false);
  };
  const handdleSave = () => {
    if (!issaved) {
      saveThread({ threadId, userId })
        .then(() => {
          toast.success("Saved");
          handleClose();
        })
        .catch((error) => {
          toast.error("unable to Saved");
          handleClose();
        });
    } else {
      unsaveThread({ threadId, userId })
        .then(() => toast.success("Unsaved"))
        .catch(() => toast.error("unable to Unsaved"));
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Ellipsis className="h-4 w-4" />
      </DrawerTrigger>
      <DrawerContent className="p-5 border-gray-500 cursor-pointer ">
        <div className="flex flex-col text-muted-foreground ">
          <div className="rounded-t-2xl border shadow-md p-2 mt-4 border-gray-500 ">
            <p className="pl-3" onClick={handdleSave}>
              Save
            </p>
          </div>
          <div className="rounded-b-2xl border p-2 border-gray-500 ">
            <p className="pl-3">Hide</p>
          </div>
        </div>
        <div className="flex flex-col mt-4 border-gray-500 text-muted-foreground ">
          <div className="flex flex-col">
            <div className="rounded-t-2xl border p-2 border-gray-500 ">
              <p className="pl-3">Mute</p>
            </div>
            <div className="border p-2 border-gray-500 ">
              <p className="pl-3">Block</p>
            </div>
            <div className="rounded-b-2xl border p-2 border-gray-500 ">
              <p className="pl-3">Report</p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CommentActionButton;
