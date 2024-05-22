import RandomPeople from "./_components/random-people";
import SearchBar from "./_components/search-bar";
import SearchInput from "./_components/search-input";

const SearchPage = () => {
  return (
    <div className="w-full">
      {/* <SearchBar /> */}
      <SearchInput />
      <RandomPeople />
    </div>
  );
};

export default SearchPage;
