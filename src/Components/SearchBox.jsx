function SearchBox({ userName, setUserName, fetchData }) {

    //function to search when enter key is pressed
    const handleEnter = (event) =>{
        if(event.key == "Enter"){
            fetchData();
        }
    }
  return (
    <>
      <div className="flex text-sm sm:text-lg font-bold">
        <input
          type="text"
          className="bg-white h-8 sm:h-12 w-52 sm:w-3xs rounded-l-sm text-black border-0 px-3"
          placeholder="Search user"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleEnter} //calling handleEnter function
        />
        <button
          className="h-8 sm:h-12 rounded-r-md bg-purple-700 sm:p-3 px-6 hover:bg-purple-600 hover:cursor-pointer"
          onClick={fetchData} //fetch data when button is clicked
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBox;
