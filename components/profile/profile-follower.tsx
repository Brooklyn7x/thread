import { InstagramIcon } from "lucide-react";
interface FollowerCountProps {
  followerCount: number;
}

export const FollowerCount = ({ followerCount }: FollowerCountProps) => (
  <div className="flex items-center justify-between my-3">
    <div>{followerCount} Followers . Hyper.ss</div>
    <div className="pl-3">
      <InstagramIcon className="w-6 h-6" />
    </div>
  </div>
);
