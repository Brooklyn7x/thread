import Image from "next/image";
import PostActionButton from "../../_components/thread-buttoon";
import ActionButton from "../../_components/action-button";
import Link from "next/link";
import ThreadPostActionButton from "../../_components/thread-post-action-button";

interface ThreadCommentProps {
  id: String;
  author: string;
  createdAt: string;
  content: string;
  imageUrl: string;
}

const ThreadCommentsCard = ({
  id,
  author,
  content,
  createdAt,
  imageUrl,
}: ThreadCommentProps) => {
  return (
    <div>
      <div className="flex w-full h-auto py-3">
        <Link href={`/comment/${id}`}>
          <div className="px-2 pt-2">
            <Image
              src="/as.jpeg"
              alt="User_image"
              width={36}
              height={36}
              className="border rounded-full "
            />
          </div>
          <div className="flex flex-col flex-1 w-full">
            <div className="flex items-center justify-between">
              <span>{author}</span>
              <div className="flex items-center">
                <p className="text-sm">{createdAt}</p>
                <ThreadPostActionButton id={id} />
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{content}</p>
            {/* <Image
            src={imageUrl || "/as.jpeg"}
            alt="User_image"
            height={400}
            width={300}
            className="my-2 rounded-md"
          /> */}
            <PostActionButton id={id} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThreadCommentsCard;
