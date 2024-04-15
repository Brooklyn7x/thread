import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";

const UserImage = ({ userId }: { userId: string }) => {
  const userData = useQuery(api.threadUser.getByuser, { userId });
  if (!userData) return null;
  return (
    <>
      <Image
        src={userData[0].image ?? ""}
        alt="user_image"
        width={36}
        height={36}
        className="border rounded-full"
      />
    </>
  );
};

export default UserImage;
