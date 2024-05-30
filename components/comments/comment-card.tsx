"use client";

import { formatTime } from "@/lib/utils";
import { Comment } from "@/lib/types/type";
import UserImage from "../user-card/user-image";
import UserCardName from "../user-card/user-card-name";
import { Separator } from "../ui/separator";
import CommentActionButton from "./comment-actions.button";
import CommentButton from "./comment-button";
import { memo } from "react";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  const createdAtLabel = formatTime(comment._creationTime);

  return (
    <>
      <div className="flex w-full h-auto py-3 px-1">
        <div className="px-2 pt-2">
          <UserImage userId={comment.userId} />
          <div className="flex items-start justify-center h-full py-2">
            <div className="border-[1px] border-[#333638]" />
          </div>
        </div>

        <div className="flex flex-col flex-1 w-full px-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <UserCardName userId={comment.userId} />
              <p className="pr-1 text-sm text-muted-foreground">
                {createdAtLabel}
              </p>
            </div>
            <div className="sm:hidden">
              <CommentActionButton threadId={comment.threadId} />
            </div>
          </div>
          <p className="pb-2 text-sm">{comment.comments}</p>
        </div>
      </div>

      <div className="px-2 pt-2 flex">
        <div>
          {/* <Image
            src={session?.user.imageUrl ?? ""}
            alt="User_image"
            width={36}
            height={36}
            className="border rounded-full"
          /> */}
        </div>
        <CommentButton comment={comment} threadId={comment.threadId} />
        {/* <div className="flex flex-col justify-start px-4">
          <span>{session?.user.username}</span>
          <CommentForm
            userId={session?.user.id}
            id={id}
            handleClose={handleClose}
          />
        </div> */}
      </div>
      <Separator />
    </>
  );
};

// Adding display name
CommentCard.displayName = 'CommentCard';

export default memo(CommentCard);