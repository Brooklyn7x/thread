import Image from "next/image";
import Link from "next/link";
import ThreadButton from "./thread-button";
import { formatTime } from "@/lib/utils";
import { Thread } from "@/lib/types/type";
import UserThreadCard from "../user-card/user-image";
import UserCardName from "../user-card/user-card-name";
import { memo, Suspense } from "react";
import ThreadCardButton from "./threads-card-button";
import ThreadCardSection from "./thread-card-section";

interface PostCardProps {
  thread: Thread;
  useLink?: boolean;
}

const ThreadCard = ({ thread, useLink = true }: PostCardProps) => {
  const createdAtLabel = formatTime(thread._creationTime);

  const content = (
    <div className="flex w-full h-auto py-3">
      <div className="pt-1 pr-2">
        <UserThreadCard userId={thread.userId} />
      </div>

      <div className="flex flex-col flex-1 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCardName userId={thread.userId} />
            <p className="pr-1 text-sm text-muted-foreground">
              {createdAtLabel}
            </p>
          </div>
          <Suspense>
            <ThreadCardButton thread={thread} />
          </Suspense>
        </div>
        <p className="pb-2 text-sm">{thread.content}</p>

        {thread.url && (
          <Image
            src={thread.url}
            alt="user_image"
            height={200}
            width={400}
            className="my-2 rounded-md max-h-[480px] w-[320px] h-auto object-cover"
          />
        )}

        <ThreadButton thread={thread} id={thread._id} />

        <ThreadCardSection threadId={thread._id} />
      </div>
    </div>
  );

  if (useLink) {
    return (
      <Link href={`/thread/${thread._id}`}>
        <> {content}</>
      </Link>
    );
  }

  return content;
};

export default memo(ThreadCard);
