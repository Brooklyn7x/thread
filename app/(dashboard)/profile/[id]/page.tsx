"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import dynamic from "next/dynamic";
import { ProfileTabs } from "@/components/profile/profile-tabs";

const ProfileHeader = dynamic(
  () =>
    import("@/components/profile/profile-header").then((mod) => mod.default),
  { ssr: false }
);
const ProfileFollower = dynamic(
  () =>
    import("@/components/profile/profile-follower").then((mod) => mod.default),
  { ssr: false }
);
const ProfileFollowingButton = dynamic(
  () =>
    import("@/components/profile/profile-following-button").then(
      (mod) => mod.default
    ),
  { ssr: false }
);

type Props = {
  params: {
    id: string;
  };
};

const ProfileIdPage = ({ params }: Props) => {
  const userId = params.id;
  const user = useQuery(api.threadUser.getByuser, { userId });

  if (!user) return <div>Loading...</div>;

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
