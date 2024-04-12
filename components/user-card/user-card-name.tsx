import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";

const UserCardName = ({ userId }: { userId: string }) => {
  const userData = useQuery(api.threadUser.getByuser, { userId });
  if (!userData) return null;
  return (
    <div>
      <Link href={`/profile/${userId}`}>
        <p>{userData[0].username}</p>
      </Link>
    </div>
  );
};

export default UserCardName;
