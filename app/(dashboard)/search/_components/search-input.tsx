"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "convex/react";
import { SearchIcon, X } from "lucide-react";
import Link from "next/link";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import SearchPop from "./search-pop";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const searchData = useQuery(api.threads.getSearchs, { name });

  useEffect(() => {
    const debounceValue = setTimeout(() => {
      setName(input);
    }, 500);
    return () => clearTimeout(debounceValue);
  }, [input]);

  const onClear = useCallback(() => {
    setInput(" ");
  }, []);
  const handleInputChange = useCallback((event: any) => {
    setInput(event.target.value);
  }, []);

  return (
    <div className="relative w-full px-2">
      <SearchIcon className="absolute w-5 top-1/2 left-5 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        className="w-full h-20 pl-12 text-lg rounded-3xl"
        placeholder="Search"
        onChange={handleInputChange}
        value={input}
      />
      {name.length > 0 && (
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
