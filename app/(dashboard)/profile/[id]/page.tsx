import { InstagramIcon } from "lucide-react";
import Image from "next/image";

const ProfileIdPage = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex py-5 items-center justify-between">
          <div className="flex flex-col w-full">
            <h2 className="pt-1">{"Shubham"}</h2>
            <span>{"Shubhamjaiswalx"}</span>
          </div>
          <div>
            <Image src="/as.jepg" height={50} width={50} alt="profile-image" />
          </div>
        </div>
        <span className="w-full">{"🚀"}</span>
        <div className="flex items-center justify-between">
          <div>12 Followers</div>
          <div className="pl-3">
            <InstagramIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIdPage;
