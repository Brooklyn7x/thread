import Image from "next/image";
import ThreadActionButton from "./thread-card-action-button";
import ThreadButton from "./thread-button";
import { ThreadOtherAction } from "./thread-pop-button";
import { formatTime } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Thread } from "@/lib/types/type";
import UserThreadCard from "../user-card/user-image";
import UserCardName from "../user-card/user-card-name";
import { Suspense } from "react";
import ThreadCardButton from "./threads-card-button";
import ThreadTime from "./thread-time";
import ThreadContent from "./thread-content";

interface PostCardProps {
  threads: Thread;
}

export const ThreadPageCard = ({ threads }: PostCardProps) => {
  return (
    <div className="flex flex-col w-full h-auto p-1">
      <div className="flex flex-col flex-1 w-full px-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <UserThreadCard userId={threads.userId} />
            <UserCardName userId={threads.userId} />
            <ThreadTime createdAt={threads._creationTime} />
          </div>
          <Suspense>
            <ThreadCardButton thread={threads} />
          </Suspense>
        </div>
        <ThreadContent content={threads.content} url={threads.url} />

        <ThreadButton id={threads._id} thread={threads} />

        <p className="text-muted-foreground text-sm my-2">
          5 replies · 5 likes
        </p>
      </div>
    </div>
  );
};

export default ThreadPageCard;
