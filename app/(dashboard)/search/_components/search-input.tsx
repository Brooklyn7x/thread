"use client";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { SearchIcon, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import SearchPop from "./search-pop";
import { useDebounce } from "@/hooks/use-debounce";
import React from "react";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const name = useDebounce(input, 200);

  const searchData = useQuery(api.threads.getSearchs, { name });

  const onClear = useCallback(() => {
    setInput("");
  }, []);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
    },
    []
  );

  return (
    <div className="relative w-full px-2">
      <SearchIcon className="absolute w-5 top-1/2 left-8 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        className="w-full h-20 pl-12 text-lg rounded-3xl"
        placeholder="Search"
        onChange={handleInputChange}
        value={input}
      />
      {input.length > 0 && (
        <X
          className="absolute w-5 top-1/2 right-10 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
          onClick={onClear}
        />
      )}
      {/* <SearchPop searchData={searchData} /> */}
      <MemoizedSearchPop searchData={searchData} />
    </div>
  );
};
const MemoizedSearchPop = React.memo(SearchPop);
export default SearchInput;
