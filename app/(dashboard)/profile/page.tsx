import { Button } from "@/components/ui/button";
import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import { ProfileTabs } from "./_components/profile-tab";
import { useUser } from "@clerk/nextjs";
import { ProfileHeader } from "./_components/profile-header";
import { FollowerCount } from "./_components/profile-follower";
import { EditProfile } from "./_components/profile-edit";

const ProfilePage = () => {
  // const currentUser = useUser();
  return (
    <div>
      <div className="flex flex-col w-full">
        <ProfileHeader
          displayName="Shubham"
          imageUrl="/1.svg"
          username="shubhamjaiswalx"
          bio="✈️🚀☑️"
        />

        <FollowerCount followerCount={120} />
      </div>
      <div className="w-full py-3">
        <EditProfile bio="✈️🚀☑️" name="shubhamjaiswalx">
          <Button
            className="w-full px-4 text-white h-34 bg-background rounded-xl"
            variant={"outline"}
          >
            Edit Profile
          </Button>
        </EditProfile>
      </div>
      <ProfileTabs />
    </div>
  );
};

export default ProfilePage;
