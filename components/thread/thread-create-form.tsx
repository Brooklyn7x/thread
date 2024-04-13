"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldName, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import UserAvater from "@/components/user-card/user-avatar";
import { useMutation } from "convex/react";
import { ChangeEvent, useState } from "react";
import { Doc } from "@/convex/_generated/dataModel";
import { createThread } from "@/convex/thread";

const formSchema = z.object({
  content: z.string(),
  file: z
    .custom<FileList>((val) => val instanceof FileList, "Required")
    .refine((files) => files.length > 0, `Required`),
});

interface CreateFormProps {
  handleClose: () => void;
}

const CreateForm = ({ handleClose }: CreateFormProps) => {
  const { user } = useUser();
  const router = useRouter();
  const generateUploadUrl = useMutation(api.thread.generateUploadUrl);
  const { mutate, pending } = useApiMutation(api.thread.createThread);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      file: undefined,
    },
  });
  const fileRef = form.register("file");
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const postUrl = await generateUploadUrl();

    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": values.file[0].type },
      body: values.file[0],
    });

    const { storageId } = await result.json();

    await mutate({
      content: values.content,
      imageUrl: storageId,
      userId: user?.id,
    })
      .then(() => {
        toast.success("Thread created.");
        handleClose();
      })
      .catch(() => toast.error("Something went wrong."));
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:max-w-xl">
          <div className="flex w-full px-6 py-4">
            <div className="pr-2 mt-1">
              <UserAvater />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <span className="text-sm mb-2"> {user?.username}</span>
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="start a thread" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* <div className="flex mt-1 mb-4 space-x-2 text-muted-foreground">
                <span>
                  <Image className="w-5 h-5" />
                </span>
                <span>
                  <Gift className="w-5 h-5" />
                </span>
                <span>
                  <Image className="w-5 h-5" />
                </span>
                <span>
                  <Gift className="w-5 h-5" />
                </span>
              </div> */}

              <div className="flex flex-col gap-y-2 mt-5">
                {/* <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Title" {...field} className="" />
                      </FormControl>
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="file"
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <Input type="file" {...fileRef} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" variant={"secondary"}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* <FormField
                control={form.control}
                name="caption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Captions</FormLabel>
                    <FormControl>
                      <Input placeholder="caption" {...field} />
                    </FormControl>
                    <FormDescription>#</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
      </form>
    </Form>
  );
};

export default CreateForm;