import dynamic from "next/dynamic";
const SearchInput = dynamic(() => import("./_components/search-input"), {
  ssr: false,
});

const RandomPeople = dynamic(() => import("./_components/random-people"), {
  ssr: false,
});

const SearchPage = () => {
  return (
    <div className="w-full">
      <SearchInput />
      <RandomPeople />
    </div>
  );
};

export default SearchPage;
