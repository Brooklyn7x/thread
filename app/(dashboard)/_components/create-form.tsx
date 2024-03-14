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
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Gift, Image } from "lucide-react";

const formSchema = z.object({
  threads: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const CreateForm = () => {
  const router = useRouter();

  const { mutate, pending } = useApiMutation(api.thread.create);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      threads: "",
      image: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // try {
    //   await axios.post(`/api/post`, values);
    //   router.refresh();
    // } catch (error) {
    //   console.log(error);
    // }
    mutate({
      title: values.title,
      content: values.threads,
      imageUrl: values.image,
    })
      .then((id) => {
        toast.success("Thread created.");
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong."));
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="sm:max-w-xl w-full">
          <div className="px-6 py-4 flex w-full">
            <div className="mt-1 pr-2">
              <Avatar>
                <AvatarImage src="/as.jpeg" />
              </Avatar>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <span className="text-sm">{"Shubham"}</span>
                <span className="text-sm text-muted-foreground">
                  shubhamjaiswalx
                </span>
              </div>
              <div className="mt-1 flex space-x-2 text-muted-foreground mb-4">
                <span>
                  <Image className="h-5 w-5" />
                </span>
                <span>
                  <Gift className="h-5 w-5" />
                </span>
                <span>
                  <Image className="h-5 w-5" />
                </span>
                <span>
                  <Gift className="h-5 w-5" />
                </span>
              </div>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Start a thread..."
                        {...field}
                        className=""
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="threads"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Input placeholder="Start a threads...." {...field} />
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
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Attach File.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateForm;
