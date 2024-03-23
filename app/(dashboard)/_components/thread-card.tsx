"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Id } from "@/convex/_generated/dataModel";
import ThreadActionButton from "./action-button";
import ThreadButton from "./navbar/thread-buttoon";
import { ThreadOtherAction } from "../thread/_componets/thread-other-button";
import { formatTime } from "@/lib/utils";
import { useSession } from "@clerk/nextjs";

interface PostCardProps {
  id: string;
  authorName: string;
  authorId: string;
  // tags: string[];
  createdAt: number;
  content: string;
  imageUrl?: string | undefined;
}

export const ThreadCard = ({
  id,
  createdAt,
  authorName,
  content,
  imageUrl,
  authorId,
}: PostCardProps) => {
  const createdAtLabel = formatTime(createdAt);
  const user = useSession();
  return (
    <Link href={`/thread/${id}`}>
      <div className="flex w-full h-auto py-3">
        <div className="px-2 pt-2">
          <Image
            src="/t2.jpeg"
            alt="User_image"
            width={36}
            height={36}
            className="border rounded-full"
          />
          {/* <div className="flex items-start justify-center h-full py-2">
            <div className="border-[1px] border-[#333638]" />
          </div> */}
        </div>

        <div className="flex flex-col flex-1 w-full px-2">
          <div className="flex items-center justify-between">
            <Link href={`/profile/${id}`}>
              <span>{authorName}</span>
            </Link>
            <div className="flex items-center">
              <p className="pr-1 text-sm text-muted-foreground">
                {createdAtLabel}
              </p>

              {user.session?.id === authorId ? (
                <ThreadActionButton id={id} />
              ) : (
                <ThreadOtherAction />
              )}

              {/* <ThreadActionButton id={id} /> */}

              {/* <ThreadOtherAction /> */}
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
    </Link>
  );
};

export default ThreadCard;
