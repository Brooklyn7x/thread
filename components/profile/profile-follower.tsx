import { memo } from "react";
import { InstagramIcon } from "lucide-react";
import { Button } from "../ui/button";

interface FollowerCountProps {
  followerCount: number;
}

const Follower = ({ followerCount }: FollowerCountProps) => (
  <div className="flex items-center justify-between my-3">
    <div>{followerCount} Followers . Hyper.ss</div>
    <div className="pl-3 flex">
      <InstagramIcon className="w-6 h-6" />
    </div>
  </div>
);

export default memo(Follower);
