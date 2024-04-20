import { Comment } from "@/lib/types/type";
import CommentCard from "./comment-card";
import { Speator } from "../speator";
import { memo } from "react";

interface ComeentsListProps {
  comments: Comment[];
}

const CommentsItemsList = ({ comments }: ComeentsListProps) => {
  return (
    <div className="w-full h-full">
      {comments.length > 0 ? (
        comments.map((comments) => (
          <CommentCard key={comments._id} comment={comments} />
        ))
      ) : (
        <p>No Comment</p>
      )}
    </div>
  );
};

export default memo(CommentsItemsList);
