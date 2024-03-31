"use client";
import { ProfileHeader } from "../_components/profile-header";
import { FollowerCount } from "../_components/profile-follower";
import { EditProfile } from "../_components/profile-edit";
import { Button } from "@/components/ui/button";
import { ProfileTabs } from "../_components/profile-tabs";
// import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@clerk/nextjs";

type Props = {
  params: {
    id: string;
  };
};

const ProfileIdPage = ({ params }: Props) => {
  const { userId: currentUser } = useAuth();
  const userId = params.id;
  const userData = useQuery(api.threadUser.getByuser, { userId });
  if (!userData || !userData[0]) return null;
  const { name, image, username } = userData[0];

  const isCurrentUser = userId === currentUser;
  return (
    <div>
      <div className="flex flex-col w-full">
        <ProfileHeader
          displayName={name ?? ""}
          imageUrl={image ?? ""}
          username={username ?? ""}
          bio="✈️🚀☑️"
        />

        <FollowerCount followerCount={120} />
      </div>
      <div className="w-full py-3">
        {currentUser ? (
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

      <ProfileTabs userId={userId} />
    </div>
  );
};

export default ProfileIdPage;
