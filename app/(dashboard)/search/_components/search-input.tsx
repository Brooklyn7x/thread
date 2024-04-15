"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "convex/react";
import { SearchIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchPop = ({ searchData }: any) => {
  if (!searchData) return null;
  return (
    <div className="w-full relative">
      {searchData && (
        <div className="absolute bg-background z-10 h-auto w-full mt-2 rounded-b-2xl shadow-sm border cursor-pointer">
          {searchData.map((data: any) => (
            <>
              <div key={data} className="flex items-center justify-between p-2">
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src={"/as.jpeg"} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Link
                    href={`/profile/${data.userId}`}
                    className="flex items-center"
                  >
                    <div>
                      <h1 className="text-md">{data.name}</h1>
                    </div>
                  </Link>
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
  const searchData = useQuery(api.threads.getSearchs, { name });

  useEffect(() => {
    const debounceValue = setTimeout(() => {
      setDebounce(input);
    }, 500);
    return () => clearTimeout(debounceValue);
  }, [input]);

  const onClear = () => {
    setInput("");
  };

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
      {input && (
        <X
          className="absolute w-5 top-1/2 right-5 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
          onClick={onClear}
        />
      )}
      <SearchPop searchData={searchData} />
    </div>
  );
};

export default SearchInput;
