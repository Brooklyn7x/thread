"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Comment, Thread } from "@/lib/utlis/type";
import { useUser } from "@clerk/nextjs";
import UserImage from "../user-card/user-image";
import UserCardName from "../user-card/user-card-name";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";

interface CommentFormProps {
  thread: Thread;
  handleClose: () => void;
}

const formSchema = z.object({
  comment: z.string().min(2).max(50),
});

export function ThreadCommentForm({ thread, handleClose }: CommentFormProps) {
  const { user } = useUser();
  const { mutate, pending } = useApiMutation(api.comments.createComments);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      id: thread._id,
      userId: user?.id,
      comments: values.comment,
    })
      .then(() => {
        toast.success("commented.");
        handleClose();
      })
      .catch(() => toast.error("Something went wrong."));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-2">
        <div className="flex w-full h-auto py-3 px-1">
          <div className="px-2">
            <UserImage userId={thread.userId} />
            <div className="flex items-start justify-center h-full py-2">
              <div className="border-2 border-[#333638] h-full" />
            </div>
          </div>

          <div className="flex flex-col flex-1 w-full px-2">
            <div className="flex flex-col gap-1">
              <UserCardName userId={thread.userId} />
              <p className="pb-2 text-sm">{thread.content}</p>
            </div>
            {thread?.url && (
              <Image
                src={thread.url}
                alt="User_image"
                height={150}
                width={150}
                className="my-2 rounded-md "
              />
            )}
          </div>
        </div>

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Reply..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
