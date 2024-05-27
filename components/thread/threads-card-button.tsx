import { Thread } from "@/lib/types/type";
import { useUser } from "@clerk/nextjs";
import ThreadActionButton from "./thread-card-action-button";
import { ThreadOtherAction } from "./thread-pop-button";

const ThreadCardButton = ({ thread }: { thread: Thread }) => {
  const { user } = useUser();
  if (!user) return null;
  const isOwner = user.id === thread.userId;

  if (isOwner) {
    return <ThreadActionButton id={thread._id} thread={thread} />;
  } else return <ThreadOtherAction threadId={thread._id} />;
};

export default ThreadCardButton;
