import { FaHeart } from "react-icons/fa6";
function Footer () {
return(
    <>
    <div className="bg-black text-amber-50 p-4 flex items-center justify-center">
    <p className="flex gap-1.5 items-center font-medium">Made with
    <FaHeart className="text-red-600"/>
    by Yash Vardhan Nautiyal.
    </p>
    </div>
    
    </>
)
}

export default Footer;