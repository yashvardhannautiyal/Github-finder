function SearchBox({ userName, setUserName, fetchData }) {
  return (
    <>
      <div className="flex">
        <input
          type="text"
          className="bg-white h-12 w-4xs rounded-l-sm text-black border-0 text-lg font-bold px-3"
          placeholder="Search user"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="h-12 rounded-r-md bg-purple-700 p-3 px-6 hover:bg-purple-600 hover:cursor-pointer"
          onClick={fetchData}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBox;
