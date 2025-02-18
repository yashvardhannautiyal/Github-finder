import { useState } from "react";
import SearchBox from "./SearchBox";
import DataCard from "./DataCard";
function HeroSection() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setError(""); //reset error
    setUserData(null); //reset previous user data

    //checks for the entered username
    if (!userName) {
      setError("Please enter a Github username");
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      //checks for the username if it exists
      if (!response.ok) {
        throw new Error("User not found");
      }

      //stores data in setUserData
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      //catches error if username not found
      setError("User not found. Enter valid username.");
    }
  };

  return (
    <>
      <div className="bg-gray-950 text-amber-50 flex flex-col items-center justify-center flex-grow px-4">
        <p className="text-2xl sm:text-6xl text-purple-700 font-bold mb-2 sm:mb-6">
          Search Github User Id
        </p>
        <SearchBox
          userName={userName}
          setUserName={setUserName}
          fetchData={fetchData}
        />

        {error && <p className="text-red-600 mt-2 sm:mt-4 text-sm sm:text-lg sm:font-medium">{error}</p>}
        {userData && <DataCard userData={userData} />}
      </div>
    </>
  );
}

export default HeroSection;
