import RandomPeople from "./_components/random-people";
import SearchInput from "./_components/search-input";

const SearchPage = () => {
  return (
    <div className="w-full">
      <SearchInput />
      <RandomPeople />
    </div>
  );
};

export default SearchPage;
