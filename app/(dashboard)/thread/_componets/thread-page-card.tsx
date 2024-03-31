import Image from "next/image";
import Link from "next/link";

import { ThreadOtherAction } from "./thread-other-button";
import ThreadButton from "../../_components/thread-buttoon";
import { formatTime } from "@/lib/utils";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@clerk/nextjs";
import ThreadActionButton from "../../_components/action-button";

interface PostCardProps {
  id: string;
  createdAt: number;
  content: string;
  imageUrl?: string | undefined;
  userId: string;
}

export const ThreadCard = ({
  id,
  createdAt,
  content,
  imageUrl,
  userId,
}: PostCardProps) => {
  const { userId: currentUser } = useAuth();
  const createdAtLabel = formatTime(createdAt);
  const userData = useQuery(api.threadUser.getByuser, { userId });
  if (!userData) return null;

  return (
    <div>
      <div className="flex w-full h-auto py-3">
        <div className="px-2 pt-2">
          <Image
            src={userData[0].image ?? ""}
            alt="User_image"
            width={36}
            height={36}
            className="border rounded-full shadow-sm"
          />
          <div className="flex items-start justify-center h-full py-2">
            <div className="border-[1px] border-[#333638] h-[90%]" />
          </div>
        </div>

        <div className="flex flex-col flex-1 w-full px-2">
          <div className="flex items-center justify-between">
            <Link href={`/profile/${id}`}>
              <span>{userData[0].username}</span>
            </Link>
            <div className="flex items-center">
              <p className="pr-1 text-sm text-muted-foreground">
                {createdAtLabel}
              </p>

              {userId === currentUser ? (
                <ThreadActionButton id={id} />
              ) : (
                <ThreadOtherAction />
              )}
              {/* <ThreadActionButton id={id} /> */}
            </div>
          </div>
          <p className="pb-2 text-sm">{content}</p>

          {imageUrl && (
            <Image
              src={imageUrl}
              alt="User_image"
              height={400}
              width={300}
              className="my-2 rounded-md"
            />
          )}
          <ThreadButton id={id} />

          <p className="text-muted-foreground text-md">5 replies · 5 likes</p>
        </div>
      </div>
      <div className="border-[0.1px] border-[#333638]" />
    </div>
  );
};

export default ThreadCard;
