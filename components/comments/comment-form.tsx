"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Id } from "@/convex/_generated/dataModel";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Comment } from "@/lib/types/type";
import { useUser } from "@clerk/nextjs";
import UserImage from "../user-card/user-image";
import UserCardName from "../user-card/user-card-name";

interface CommentFormProps {
  comment: Comment;
  handleClose: () => void;
}

const formSchema = z.object({
  comment: z.string().min(2).max(50),
});

export function CommentForm({ comment, handleClose }: CommentFormProps) {
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
      id: comment.threadId,
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
        <div>
          <div className="flex w-full h-auto py-3 px-1">
            <div className="px-2 pt-2">
              <UserImage userId={comment.userId} />
              <div className="flex items-start justify-center h-full py-2">
                <div className="border-[1px] border-[#333638]" />
              </div>
            </div>

            <div className="flex flex-col flex-1 w-full px-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <UserCardName userId={comment.userId} />
                </div>
              </div>
              <p className="pb-2 text-sm">{comment.comments}</p>
            </div>
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
