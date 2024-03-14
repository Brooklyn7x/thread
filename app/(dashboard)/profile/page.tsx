import { Button } from "@/components/ui/button";
import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import { ProfileTabs } from "./_components/profile-tab";

const ProfilePage = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex py-5 items-center justify-between">
          <div className="flex flex-col w-full">
            <h2 className="pt-1 font-bold text-xl">{"Shubham"}</h2>
            <span className="text-sm">{"Shubhamjaiswalx"}</span>
          </div>
          <div>
            <Image src="/as.jpeg" height={84} width={84} alt="profile-image" />
          </div>
        </div>
        <span className="w-full">{"🚀"}</span>
        <div className="flex items-center justify-between mt-5">
          <div>12 Followers . Hyper.ss</div>
          <div className="pl-3">
            <InstagramIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="py-3 w-full">
        <Button
          className="w-full px-4 h-34 bg-background text-white rounded-xl"
          variant={"outline"}
        >
          Edit Profile
        </Button>
      </div>
      <ProfileTabs />
    </div>
  );
};

export default ProfilePage;
