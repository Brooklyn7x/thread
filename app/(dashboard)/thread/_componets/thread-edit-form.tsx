"use client";

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
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { memo } from "react";

const formSchema = z.object({
  threads: z.string(),
  image: z.string(),
});

interface Props {
  thread: any;
  handleClose: () => void;
}

const ThreadEditForm = ({ thread, handleClose }: Props) => {
  const threadId = thread._id;
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.thread.updateThread);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      threads: thread.content,
      image: thread.imageUrl,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate({
      id: threadId,
      content: values.threads,
      image: values.image,
    })
      .then(() => {
        toast.success("Edited.");
        handleClose();
        router.push(`/thread/${threadId}`);
      })
      .catch(() => toast.error("Something went wrong."));
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="w-full sm:max-w-xl">
          <div className="flex w-full px-6 py-4">
            <div className="pr-2 mt-1">
              <Avatar>
                <AvatarImage src="/as.jpeg" />
              </Avatar>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full pb-5">
                <span className="text-sm">{"Shubham"}</span>
                <span className="text-sm text-muted-foreground">
                  shubhamjaiswalx
                </span>
              </div>

              <FormField
                control={form.control}
                name="threads"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Input placeholder="thread" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="image" />
                    </FormControl>
                    <FormDescription>Attach File.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Button type="submit" disabled={pending}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default memo(ThreadEditForm);
