import Image from "next/image";
import Link from "next/link";

import { ThreadOtherAction } from "./thread-other-button";
import ThreadButton from "../../_components/navbar/thread-buttoon";
import { formatTime } from "@/lib/utils";
import { useSession } from "@clerk/nextjs";

interface PostCardProps {
  id: string;
  authorName: string;
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
}: PostCardProps) => {
  const createdAtLabel = formatTime(createdAt);
  const user = useSession();
  return (
    <div>
      <div className="flex w-full h-auto py-3">
        <div className="px-2 pt-2">
          <Image
            //change Image Url here
            src={"/t1.jpeg"}
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
              <span>{authorName}</span>
            </Link>
            <div className="flex items-center">
              <p className="pr-1 text-sm text-muted-foreground">
                {createdAtLabel}
              </p>
              {/* <ThreadActionButton id={id} /> */}
              <ThreadOtherAction />
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
