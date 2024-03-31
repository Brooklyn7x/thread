"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "convex/react";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const SearchPop = ({ searchData }: any) => {
  if (!searchData) return null;
  return (
    <div className="w-full relative">
      {searchData && (
        <div className="absolute bg-background z-10 h-auto w-full mt-2 rounded-b-2xl shadow-sm border">
          {searchData.map((data: any) => (
            <>
              <div key={data} className="flex items-center justify-between p-2">
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src={"/as.jpeg"} />
                  </Avatar>
                  <div className="flex items-center">
                    <h1 className="text-lg">{data.name}</h1>
                  </div>
                </div>
                <div> </div>
              </div>
              <Separator />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchInput = () => {
  const [input, setInput] = useState("");
  const [debounce, setDebounce] = useState("");
  const name = debounce;
  const searchData = useQuery(api.threads.getSearch, { name });

  useEffect(() => {
    const debounceValue = setTimeout(() => {
      setDebounce(input);
    }, 500);
    return () => clearTimeout(debounceValue);
  }, [input]);

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute w-5 top-1/2 left-5 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        onChange={(event) => {
          setInput(event.target.value);
        }}
        className="w-full h-20 pl-12 text-lg rounded-3xl"
        placeholder="Search"
      />
      <SearchPop searchData={searchData} />
    </div>
  );
};

export default SearchInput;
