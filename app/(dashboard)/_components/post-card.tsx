"use client";

import Image from "next/image";
import Link from "next/link";
import ActionButton from "./action-button";
import PostActionButton from "./navbar/post-action-buttoon";
import { Id } from "@/convex/_generated/dataModel";

interface PostCardProps {
  id: Id<"threads">;
  author: string;
  // tags: string[];
  createdAt: Number;
  content: string;
  imageUrl: string | undefined;
}

export const PostCard = ({
  id,
  createdAt,
  author,
  content,
  imageUrl,
}: PostCardProps) => {
  return (
    <Link href={`/post/${id}`}>
      <div className="w-full h-auto flex py-3">
        <div className="pt-2 px-2">
          <Image
            src="/as.jpeg"
            alt="User_image"
            width={36}
            height={36}
            className="rounded-full border "
          />
          <div className="flex items-start justify-center py-2 h-full">
            <div className="border-[1px] border-[#333638] h-[90%]" />
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full">
          <div className="flex justify-between items-center">
            <span>{author}</span>
            <div className="flex items-center">
              <p className="text-sm">{createdAt}</p>
              <ActionButton id={id} />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{content}</p>
          <Image
            src={imageUrl || "/as.jpeg"}
            alt="User_image"
            height={400}
            width={300}
            className="rounded-md my-2"
          />
          <PostActionButton id={id} />

          <p className="text-muted-foreground text-md">5 replies · 5 likes</p>
        </div>
      </div>
      <div className="border-[0.1px] border-[#333638]" />
    </Link>
  );
};

export default PostCard;
