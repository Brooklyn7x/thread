"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const formSchema = z.object({
  //fix form zod
  threads: z.string(),
  title: z.string(),
  image: z.string(),
});

interface CreateFormProps {
  handleClose: () => void;
}

const CreateForm = ({ handleClose }: CreateFormProps) => {
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
    mutate({
      title: values.title,
      content: values.threads,
      imageUrl: values.image,
    })
      .then(() => {
        toast.success("Thread created.");
        router.push("/");
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
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Title" {...field} className="" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="threads"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Content" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Image" />
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
