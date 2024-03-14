import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";

interface PostActionButtonProps {
  id: Id<"threads">;
}

const PostActionButton = ({ id }: PostActionButtonProps) => {
  return (
    <div className="w-full flex">
      <button className="hover:text-gray-500 p-2">
        <Heart className="h-6 w-6 fill-red-500" />
      </button>
      <button className="p-2">
        <MessageCircle className="h-6 w-6" />
      </button>
      <button className="p-2">
        <Repeat2 className="h-6 w-6" />
      </button>
      <button className="p-2">
        <Send className="h-6 w-6" />
      </button>
    </div>
  );
};

export default PostActionButton;
