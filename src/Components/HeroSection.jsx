function HeroSection(){
    return(
        <>
        <div className="bg-gray-950 text-amber-50 flex flex-col items-center justify-center flex-grow px-4">
        <p className="text-4xl text-purple-700 font-bold mb-6">Search Github User Id</p>
        <div className="flex">
        <input type="text" className="bg-white h-12 w-4xs rounded-l-sm text-black border-0 text-lg font-bold px-3" placeholder="Search user" />
        <button className="h-12 rounded-r-md bg-purple-700 p-3 px-6 hover:bg-purple-600 hover:cursor-pointer">Search</button>
        </div>
        
        </div>
        </>
    )
}

export default HeroSection;