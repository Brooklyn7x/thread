"use client";

import { ProfileTabs } from "../../../../components/profile/profile-tabs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ProfileHeader from "@/components/profile/profile-header";
import ProfileFollower from "@/components/profile/profile-follower";
import ProfileFollowingButton from "@/components/profile/profile-following-button";

type Props = {
  params: {
    id: string;
  };
};

const ProfileIdPage = ({ params }: Props) => {
  const userId = params.id;
  const user = useQuery(api.threadUser.getByuser, { userId });

  return (
    <div className="p-2 mx-2">
      <div className="flex flex-col w-full">
        <ProfileHeader user={user} />
        <ProfileFollower followerCount={1} />
      </div>
      <ProfileFollowingButton userId={userId} />
      <ProfileTabs userId={userId} />
    </div>
  );
};

export default ProfileIdPage;
