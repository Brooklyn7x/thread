"use client";

import PostItems from "./_components/post-item";
import { CreateThreadDailogx } from "./_components/create-post-dialog";
import { Speator } from "@/components/speator";
import Avatar from "./_components/avatar";

const DashboarPage = () => {
  return (
    <div className="h-auto">
      <div className="flex items-center py-4">
        <Avatar />
        <CreateThreadDailogx />
      </div>
      <Speator />
      <div className="w-full">
        <PostItems />
      </div>
    </div>
  );
};

export default DashboarPage;
