import Image from "next/image";
import Link from "next/link";
import ThreadActionButton from "./thread-card-action-button";
import ThreadButton from "./thread-button";
import { ThreadOtherAction } from "./thread-pop-button";
import { formatTime } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Thread } from "@/lib/types/type";
import UserThreadCard from "../user-card/user-image";
import UserCardName from "../user-card/user-card-name";
import { memo, Suspense } from "react";
import ThreadCardButton from "./threads-card-button";

interface PostCardProps {
  threads: Thread;
}

export const ThreadCard = ({ threads }: PostCardProps) => {
  const userId = threads.userId;
  const createdAtLabel = formatTime(threads._creationTime);
  const { user } = useUser();

  return (
    <Link href={`/thread/${threads._id}`}>
      <div className="flex w-full h-auto py-3">
        <div className="pt-1 pr-2">
          <UserThreadCard userId={threads.userId} />
        </div>

        <div className="flex flex-col flex-1 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCardName userId={threads.userId} />
              <p className="pr-1 text-sm text-muted-foreground">
                {createdAtLabel}
              </p>
            </div>
            <Suspense>
              <ThreadCardButton thread={threads} />
            </Suspense>
          </div>
          <p className="pb-2 text-sm">{threads.content}</p>

          {threads.url && (
            <Image
              src={threads.url}
              alt="user_image"
              height={400}
              width={400}
              className="my-2 rounded-md max-h-[380px] w-[320px] "
            />
          )}
          <ThreadButton thread={threads} id={threads._id} />

          <p className="text-muted-foreground text-md">5 replies · 5 likes</p>
        </div>
      </div>
      <div className="border-[0.1px] border-[#333638]" />
    </Link>
  );
};

export default memo(ThreadCard);
