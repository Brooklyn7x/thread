"use client";

import { ProfileTabs } from "../../../../components/profile/profile-tabs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ProfileHeader from "@/components/profile/profile-header";

type Props = {
  params: {
    id: string;
  };
};

const ProfileIdPage = ({ params }: Props) => {
  const userId = params.id;
  // const [user, setUser] = useState<User>();
  const user = useQuery(api.threadUser.getByuser, { userId });

  return (
    <div className="p-2">
      <div className="flex flex-col w-full">
        <ProfileHeader user={user} />
        {/* <Follower followerCount={1} /> */}
      </div>

      <ProfileTabs userId={userId} />
    </div>
  );
};

export default ProfileIdPage;
