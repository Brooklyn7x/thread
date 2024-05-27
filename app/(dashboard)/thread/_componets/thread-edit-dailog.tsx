import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ThreadEditForm from "./thread-edit-form";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useState } from "react";
interface ThreadProps {
  id: Id<"threads">;
}
const ThreadEditDailog = ({ threadId }: { threadId: Id<"threads"> }) => {
  const [open, setOpen] = useState(false);
  
  const threadData = useQuery(api.threads.getThread, { threadId });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="w-full justify-start">
        <Button variant={"ghost"} size={"sm"}>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <ThreadEditForm thread={threadData} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ThreadEditDailog;
