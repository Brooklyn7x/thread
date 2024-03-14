import { useApiMutation } from "@/hooks/use-api-mutation";
import PostCard from "../../_components/post-card";
import PostItems from "../../_components/post-item";
import { api } from "@/convex/_generated/api";

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
      <div></div>
    </div>
  );
};

export default PostIdPage;
