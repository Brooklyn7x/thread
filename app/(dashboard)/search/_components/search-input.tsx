"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchPop = () => {
  return <div className="w-full">

    
  </div>;
};

const SearchInput = () => {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute w-5 top-1/2 left-5 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        className="w-full h-20 pl-12 text-lg rounded-3xl"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
