"use client";
import Image from "next/image";
import PostList from "./_components/post-list";
import { Button } from "@/components/ui/button";
import PostCard from "./_components/thread-card";
import { currentUser, useAuth, useUser } from "@clerk/nextjs";
import CreatePost from "./_components/create-post";
import { db } from "@/lib/db";
import { fakeData } from "@/constant/fakedata";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostItems from "./_components/post-item";

const DashboarPage = () => {
  const currentUser = useUser();

  return (
    <div className="h-auto">
      <div className="flex items-center py-4">
        <Avatar>
          <AvatarImage src={currentUser.user?.imageUrl} />
          <AvatarFallback>Cn</AvatarFallback>
        </Avatar>
        <CreatePost>
          <div className="flex-1 mx-3 inset-x-2">
            <div className="flex items-center justify-between">
              <p className="px-2 text-sm text-muted-foreground">
                Start a thread...
              </p>
              <Button className="rounded-3xl">Post</Button>
            </div>
          </div>
        </CreatePost>
      </div>
      <div className="border-[0.1px] border-[#333638]" />
      <div className="w-full">
        <PostItems />
      </div>
    </div>
  );
};

export default DashboarPage;
