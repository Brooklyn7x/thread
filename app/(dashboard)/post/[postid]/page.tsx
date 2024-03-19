"use client";

import { useApiMutation } from "@/hooks/use-api-mutation";
import PostCard from "../../_components/thread-card";
import PostItems from "../../_components/post-item";
import { api } from "@/convex/_generated/api";
import ThreadComment from "../_componets/thread-comment-card";
import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import ThreadCommentsCard from "../_componets/thread-comment-card";
import ThreadCommentsItems from "../_componets/thread-comment-list";

interface PostIdPage {
  params: {
    id: Id<"threads">;
  };
}

const PostIdPage = ({ params: { id } }: PostIdPage) => {
  // const data = useQuery(api.threads.get_thread_by_id, { id });
  // console.log(data);

  return (
    <div className="w-full">
      <PostCard
        id={id}
        authorName={"shubhamjaiswalx"}
        createdAt={1}
        content={"New Day"}
        imageUrl={"/as.jpeg"}
      />
      <ThreadCommentsItems />
    </div>
  );
};

export default PostIdPage;
