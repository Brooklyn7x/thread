import { useMutation, useQuery } from "convex/react";
import { Button } from "../ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { memo } from "react";

const ProfileFollowingButton = ({ userId }: { userId: string }) => {
  const { mutate, pending } = useApiMutation(api.follower.follow);
  const handleFollow = () => {
    mutate({ userId })
      .then(() => toast.success("Following"))
      .catch(() => toast.error("something went wrong"));
  };
  return (
    <div className="flex w-full gap-2 my-2">
      <Button
        className="w-full"
        size={"sm"}
        variant={"secondary"}
        onClick={handleFollow}
        disabled={pending}
      >
        Follow
      </Button>
      <Button className="w-full" size={"sm"} variant={"secondary"}>
        Mention
      </Button>
    </div>
  );
};

export default memo(ProfileFollowingButton);
