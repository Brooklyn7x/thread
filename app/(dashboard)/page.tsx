"use client";
import { CreateThreadDailogx } from "./_components/create-post-dialog";
import { Speator } from "@/components/speator";
import Avatar from "./_components/avatar";
import ThreadCard from "./_components/thread-card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";

const DashboarPage = () => {
  const data = useQuery(api.threads.getAll);

  if (!data)
    return (
      <div className="flex items-center justify-center animate-spin h-screen ">
        <Loader />
      </div>
    );
  return (
    <div className="h-auto">
      <div className="flex items-center py-4">
        <Avatar />
        <CreateThreadDailogx />
      </div>
      <Speator />
      <div className="w-full">
        <div className="w-full">
          {data?.map((post) => (
            <ThreadCard
              key={post._id}
              id={post._id}
              userId={post.userId}
              content={post.content}
              imageUrl={post.imageUrl}
              createdAt={post._creationTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboarPage;
