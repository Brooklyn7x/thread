import ThreadCard from "@/components/thread/thread-card";
import { Thread } from "@/lib/types/type";
import { memo } from "react";

interface ThreadsProps {
  threads: Thread[];
}

const ThreadList = ({ threads }: ThreadsProps) => {
  return (
    <div className="w-full px-2">
      {threads.length > 0 ? (
        <div className="w-full">
          {threads.map((threads: Thread) => (
            <ThreadCard key={threads?._id} threads={threads} />
          ))}
        </div>
      ) : (
        <p>No thread Found</p>
      )}
    </div>
  );
};

export default memo(ThreadList);
