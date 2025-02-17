import { IoIosArrowDown } from "react-icons/io";
function Navbar (){
    return (
        <div className="flex bg-gray-950 p-4 items-center justify-between text-2xl font-bold w-full">
        <a href="https://github.com/yashvardhannautiyal/Github-finder" target="_blank">
        <img src="./github-logo.png" alt="github-logo" className="h-8"/>
        </a>
        <p className="text-amber-50 text-3xl">Github Finder</p>
        <button className="hover:cursor-pointer text-purple-700 flex items-center text-lg">Themes<IoIosArrowDown /></button>
        </div>
    )
}

export default Navbar;