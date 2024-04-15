import { currentUser, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { EditProfile } from "./profile-edit";

const ProfileFollowButton = () => {
  const { user } = useUser();
  return (
    <div className="w-full py-3">
      {user ? (
        <EditProfile bio="✈️🚀☑️" name="shubhamjaiswalx">
          <Button
            className="w-full px-4 dark:text-white h-34 bg-background rounded-xl"
            variant={"outline"}
          >
            Edit Profile
          </Button>
        </EditProfile>
      ) : (
        <Button
          className="w-full px-4 dark:text-white h-34 bg-background rounded-xl"
          variant={"outline"}
        >
          Follow
        </Button>
      )}
    </div>
  );
};

export default ProfileFollowButton;
