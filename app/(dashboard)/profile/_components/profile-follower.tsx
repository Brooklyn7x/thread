import { InstagramIcon } from "lucide-react";
interface FollowerCountProps {
  followerCount: number;
}

export const FollowerCount = ({ followerCount }: FollowerCountProps) => (
  <div className="flex items-center justify-between mt-5">
    <div>{followerCount} Followers . Hyper.ss</div>
    <div className="pl-3">
      <InstagramIcon className="w-5 h-5" />
    </div>
  </div>
);
