import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import { ProfileHeader } from "../_components/profile-header";
import { FollowerCount } from "../_components/profile-follower";
import { EditProfile } from "../_components/profile-edit";
import { Button } from "@/components/ui/button";
import { ProfileTabs } from "../_components/profile-tabs";

type Props = {
  params: {
    id: string;
  };
};

const ProfileIdPage = ({ params }: Props) => {
  const authorId = params.id;
//userData APi

  return (
    <div>
      <div className="flex flex-col w-full">
        <ProfileHeader
          displayName={"shubhamjaiswalx"}
          imageUrl="/1.svg"
          username="shubhamjaiswalx"
          bio="✈️🚀☑️"
        />

        <FollowerCount followerCount={120} />
      </div>
      <div className="w-full py-3">
        <EditProfile bio="✈️🚀☑️" name="shubhamjaiswalx">
          <Button
            className="w-full px-4 dark:text-white h-34 bg-background rounded-xl"
            variant={"outline"}
          >
            Edit Profile
          </Button>
        </EditProfile>
      </div>
      
      <ProfileTabs authorId={authorId} />
    </div>
  );
};

export default ProfileIdPage;
