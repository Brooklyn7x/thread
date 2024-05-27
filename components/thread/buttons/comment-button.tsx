import { ThreadCommentModal } from "@/components/modal/thread-modal";

const CommentButon = ({ thread }: any) => {
  return (
    <div>
      <button className="p-2">
        <ThreadCommentModal thread={thread} />
      </button>
    </div>
  );
};

export default CommentButon;
