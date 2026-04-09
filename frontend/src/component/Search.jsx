const Search = () => {
  return (
    <div className="flex items-center justify-start w-full max-w-xs bg-gray-100 rounded gap-7 sm:max-w-sm lg:max-w-md">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-10 px-3 text-black rounded-l rounded-r outline-none sm:h-10"
      />
      {/* <i className="fa-solid fa-magnifying-glass"></i> */}
    </div>
  );
};

export default Search;
