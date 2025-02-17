import { PiTwitterLogoThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
function DataCard({userData}){
    return(
        <>
        <div className="text-amber-50 flex flex-col items-start justify-center mt-5 px-10 py-3
        inset-0 card-background rounded-lg">
        <div className="flex items-center justify-center gap-4">
        <img src={userData.avatar_url} alt="user-profile-picture"
        className="h-14 rounded-full" />
        <div className="font-bold">
        <h2 className="text-4xl">{userData.name || "No name"}</h2>
        <p>@{userData.login}</p>
        </div>
        </div>
        <div className="px-5 mt-3 text-lg">
        <p className="mt-2">Bio : {userData.bio || "No bio available"}</p>
        <div className="my-3 flex gap-14">
        <p className="flex items-center gap-2"><PiTwitterLogoThin />{userData.twitter_username || "No twitter username"}</p>
        <p className="flex items-center gap-2"><CiLocationOn />{userData.location || "No location available"}</p>
        </div>
        <div className="my-3 flex gap-14">
        <p>{userData.followers || "No followers"} Followers</p>
        <p>{userData.following || "No following"} Following</p>
        <p>{userData.public_repos || "No public repos"} Repos</p>
        </div>
        </div>

        
        <a href={userData.html_url} target="_blank" className="underline text-purple-600 hover:cursor-pointer hover:text-purple-500 flex items-center font-medium">Visit user<IoIosArrowForward /></a>
        </div>
        </>
    )
}

export default DataCard;