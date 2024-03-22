import { Button } from "@/components/ui/button";
import CreatePostDialog from "./create-post-dailog";

export const CreateThreadDailogx = () => {
  return (
    <CreatePostDialog>
      <div className="flex-1 mx-3 inset-x-2">
        <div className="flex items-center justify-between">
          <p className="px-2 text-sm text-muted-foreground">
            Start a thread...
          </p>
          <Button className="rounded-3xl">Post</Button>
        </div>
      </div>
    </CreatePostDialog>
  );
};
