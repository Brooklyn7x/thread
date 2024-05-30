"use client";
import { useMutation, useQuery } from "convex/react";
import { Button } from "../ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { memo, useCallback } from "react";
import { useAuth, useSession, useUser } from "@clerk/nextjs";

interface ButtonProps {
  id: string;
}

const ProfileFollowingButton = ({ id }: ButtonProps) => {
  const { userId } = useAuth();
  const followerId = userId!;
  const followingList = useQuery(api.follow.getFollowing, {
    userId: followerId,
  });
  console.log(followingList);
  const isFollowing = followingList?.some(
    (follow) => follow.followingId === id
  );
  const { mutate: toggleFollow } = useApiMutation(api.follow.toggleFollow);
  const handleFollow = useCallback(() => {
    toggleFollow({ followerId: userId, followingId: id }).then(() =>
      toast.success(
        isFollowing ? "Unfollowed successfully" : "Followed successfully"
      )
    );
  }, [toggleFollow, userId, id, isFollowing]);
  return (
    <div className="flex w-full gap-2 my-2">
      <Button
        className="w-full"
        size={"sm"}
        variant={"secondary"}
        onClick={handleFollow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button className="w-full" size={"sm"} variant={"secondary"}>
        Mention
      </Button>
    </div>
  );
};

export default memo(ProfileFollowingButton);
