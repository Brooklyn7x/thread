import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ThreadList from "../thread/thread-list";
import CommentsItemsList from "../comments/comment-list";

interface Props {
  userId: string;
}

export function ProfileTabs({ userId }: Props) {
  const thread = useQuery(api.threads.getThreadByUser, { userId });
  const comment = useQuery(api.comments.getCommentsByUser, { userId });
  if (!thread) return null;
  if (!comment) return null;

  return (
    <Tabs defaultValue="threads" className="w-full">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="threads">Threads</TabsTrigger>
        <TabsTrigger value="replies">Replies</TabsTrigger>
        <TabsTrigger value="reposts">Reposts</TabsTrigger>
      </TabsList>
      <TabsContent value="threads">
        <ThreadList threads={thread} />
      </TabsContent>
      <TabsContent value="replies">
        <CommentsItemsList comments={comment} />
      </TabsContent>
      <TabsContent value="reposts">{/* <PostItems /> */}</TabsContent>
    </Tabs>
  );
}
