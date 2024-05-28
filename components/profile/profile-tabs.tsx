"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const ThreadList = dynamic(
  () => import("../thread/thread-list").then((mod) => mod.default),
  { ssr: false }
);
const CommentsItemsList = dynamic(
  () => import("../comments/comment-list").then((mod) => mod.default),
  { ssr: false }
);

interface Props {
  userId: string;
}

export function ProfileTabs({ userId }: Props) {
  const [activeTab, setActiveTab] = useState("threads");

  const threadQuery = useQuery(api.threads.getThreadByUser, { userId });
  const commentQuery = useQuery(api.comments.getCommentsByUser, { userId });
  const [threads, setThreads] = useState<any>();
  const [comments, setComments] = useState<any>();

  useEffect(() => {
    if (activeTab === "threads" && !threads) {
      setThreads(threadQuery);
    }
    if (activeTab === "replies" && !comments) {
      setComments(commentQuery);
    }
  }, [activeTab, threadQuery, commentQuery, threads, comments]);

  return (
    <Tabs
      defaultValue="threads"
      className="w-full"
      onValueChange={setActiveTab}
    >
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="threads">Threads</TabsTrigger>
        <TabsTrigger value="replies">Replies</TabsTrigger>
        <TabsTrigger value="reposts">Reposts</TabsTrigger>
      </TabsList>
      <TabsContent value="threads">
        {threads ? <ThreadList threads={threads} /> : <div>Loading...</div>}
      </TabsContent>
      <TabsContent value="replies">
        {comments ? (
          <CommentsItemsList comments={comments} />
        ) : (
          <div>Loading...</div>
        )}
      </TabsContent>
      <TabsContent value="reposts">
        {/* Add content for reposts when implemented */}
      </TabsContent>
    </Tabs>
  );
}
