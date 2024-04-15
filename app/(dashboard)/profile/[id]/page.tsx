"use client";
import { ProfileHeader } from "../../../../components/profile/profile-header";
import { FollowerCount } from "../../../../components/profile/profile-follower";
import { EditProfile } from "../../../../components/profile/profile-edit";
import { Button } from "@/components/ui/button";
import { ProfileTabs } from "../../../../components/profile/profile-tabs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@clerk/nextjs";
import ProfileFollowButton from "@/components/profile/profile-follow";

type Props = {
  params: {
    id: string;
  };
};

const ProfileIdPage = ({ params }: Props) => {
  const { userId: currentUser } = useAuth();
  const userId = params.id;
  const user = useQuery(api.threadUser.getByuser, { userId });
  if (!user) return null;

  return (
    <div className="p-2">
      <div className="flex flex-col w-full">
        <ProfileHeader user={user} />
        <FollowerCount followerCount={1} />
      </div>
      <ProfileFollowButton />
      <ProfileTabs userId={userId} />
    </div>
  );
};

export default ProfileIdPage;
