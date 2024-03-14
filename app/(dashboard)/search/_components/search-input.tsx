"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchPop = () => {
  return <div className="w-full">

    
  </div>;
};

const SearchInput = () => {
  return (
    <div className="w-full relative">
      <SearchIcon className="absolute w-5 top-1/2 left-5 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        className="w-full pl-12 h-20 rounded-3xl text-lg"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
