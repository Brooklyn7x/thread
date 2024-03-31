import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostItems from "../../_components/post-item";
import ProfilePost from "./profile-post";

interface Props {
  userId: string;
}

export function ProfileTabs({ userId }: Props) {
  return (
    <Tabs defaultValue="threads" className="w-full">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="threads">Threads</TabsTrigger>
        <TabsTrigger value="replies">Replies</TabsTrigger>
        <TabsTrigger value="reposts">Reposts</TabsTrigger>
      </TabsList>
      <TabsContent value="threads">
        <ProfilePost userId={userId} />
      </TabsContent>
      <TabsContent value="replies">
        {/* <PostItems /> */}
      </TabsContent>
      <TabsContent value="reposts">{/* <PostItems /> */}</TabsContent>
    </Tabs>
  );
}
