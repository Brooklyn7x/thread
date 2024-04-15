"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const RandromPeoplCard = () => {
  return (
    <div className="w-full">
      <div className="flex pt-5">
        <div className="pt-1 pb-2 pr-4">
          <Avatar>
            <AvatarImage src="/as.jpeg" />
          </Avatar>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between pb-2">
            <div className="flex flex-col">
              <span className="text-sm">{"Shubham"}</span>
              <span className="text-sm text-muted-foreground">
                {"shubhamjaiswalx"}
              </span>
            </div>

            <div className="flex items-center">
              <Button
                className="text-white bg-background rounded-2xl"
                size={"sm"}
                variant={"outline"}
              >
                Follow
              </Button>
            </div>
          </div>

          <div className="pb-4">
            <span className="">350k Followers</span>
          </div>

          <div className="border-[0.1px] border-[#333638]" />
        </div>
      </div>
    </div>
  );
};

const RandomPeople = () => {
  const data = useQuery(api.threads.getAll);
  return (
    <div>
      {data?.map(() => (
        <RandromPeoplCard key={data.length} />
      ))}
    </div>
  );
};

export default RandomPeople;
