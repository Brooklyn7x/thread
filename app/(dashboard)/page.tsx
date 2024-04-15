"use client";
import { CreateThreadDailogx } from "../../components/thread/thread-create-post-dialog";
import { Speator } from "@/components/speator";
import Avatar from "../../components/user-card/user-avatar";
import ThreadCard from "../../components/thread/thread-card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader } from "lucide-react";
import ThreadList from "@/components/thread/thread-list";
import Loading from "@/components/auth/loading";

const DashboarPage = () => {
  const data = useQuery(api.threads.getAll);
  if (!data) return <Loading />;

  return (
    <div className="h-auto">
      <div className="flex items-center py-4 px-1">
        <Avatar />
        <CreateThreadDailogx />
      </div>
      <Speator />
      <ThreadList threads={data} />
    </div>
  );
};

export default DashboarPage;
