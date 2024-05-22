import { useDebounce } from "@/hooks/use-debounce";
import { useQuery } from "convex/react";
import { useState } from "react";

const SearchBar = () => {
    const [input, setInput] = useState("");
  const name = useDebounce(input, 200);

 

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
      </div>
}

export default SearchBar;