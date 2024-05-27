import { Button } from "@/components/ui/button";
import CreatePostDialog from "../modal/create-post-modala";

export const CreateThreadDailogx = () => {
  return (
    <CreatePostDialog>
      <div className="flex-1 inset-x-2">
        <div className="flex items-center justify-between">
          <p className="px-2 text-sm text-muted-foreground">
            Start a thread...
          </p>
          <Button className="rounded-3xl" disabled={true}>
            Post
          </Button>
        </div>
      </div>
    </CreatePostDialog>
  );
};
