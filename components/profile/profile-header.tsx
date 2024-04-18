import { User } from "@/lib/types/type";
import Image from "next/image";

interface ProfileHeaderProps {
  user: User[] | undefined;
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  if (!user) return null;
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-col w-full">
          <h2 className="pt-1 text-xl font-semibold">{user[0]?.name}</h2>
          <span className="text-sm pl-1">{user[0].username}</span>
        </div>
        <div>
          <Image
            src={user[0].image ?? ""}
            height={84}
            width={84}
            alt="profile-image"
          />
        </div>
      </div>
      <span className="w-full">{"😓"}</span>
    </div>
  );
};
