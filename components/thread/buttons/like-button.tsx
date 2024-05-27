import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { memo } from "react";

interface LikeButtonsProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isLiked: boolean;
}

const LikeButton = ({ onClick, isLiked }: LikeButtonsProps) => {
  console.log('Liked Buttn render');
  
  return (
    <div>
      <button className="p-2 hover:text-gray-600" onClick={onClick}>
        <Heart className={cn("h-5 w-5", isLiked && "fill-red-600")} />
      </button>
    </div>
  );
};

export default memo(LikeButton);
