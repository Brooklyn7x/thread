import { useApiMutation } from "@/hooks/use-api-mutation";
import PostCard from "../../_components/thread-card";
import PostItems from "../../_components/post-item";
import { api } from "@/convex/_generated/api";
import ThreadComment from "../_componets/comment";

interface PostIdPage {
  params: string;
}

const PostIdPage = ({ params }: PostIdPage) => {
  //   const { mutate, pending } = useApiMutation(api.thread.get, {});

  return (
    <div className="">
      <PostCard
        id={undefined}
        author={""}
        createdAt={undefined}
        content={""}
        imageUrl={undefined}
      />
      <ThreadComment
        id={undefined}
        author={""}
        createdAt={""}
        content={""}
        imageUrl={""}
      />
    </div>
  );
};

export default PostIdPage;
