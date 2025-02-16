function Navbar (){
    return (
        <div className="flex bg-amber-500 p-2 items-center justify-between text-2xl font-bold">
        <a href="" target="_blank">
        <img src="./github-logo.png" alt="github-logo" className="h-8"/>
        </a>
        <p>Github Finder</p>
        <button className="hover:cursor-pointer">Themes</button>
        </div>
    )
}

export default Navbar;