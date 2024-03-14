import Image from "next/image";
import PostActionButton from "../../_components/navbar/thread-buttoon";
import ActionButton from "../../_components/action-button";

interface ThreadCommentProps {
  id: String;
  author: string;
  createdAt: string;
  content: string;
  imageUrl: string;
}

const ThreadComment = ({
  id,
  author,
  content,
  createdAt,
  imageUrl,
}: ThreadCommentProps) => {
  return (
    <div>
      <div className="w-full h-auto flex py-3">
        <div className="pt-2 px-2">
          <Image
            src="/as.jpeg"
            alt="User_image"
            width={36}
            height={36}
            className="rounded-full border "
          />
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
          {/* <Image
            src={imageUrl || "/as.jpeg"}
            alt="User_image"
            height={400}
            width={300}
            className="rounded-md my-2"
          /> */}
          <PostActionButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default ThreadComment;
