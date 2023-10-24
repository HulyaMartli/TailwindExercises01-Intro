export default function GegaHeader() {
    return (
        <header className="bg-black py-12 text-gega-grey font-gemunu uppercase">
            <div className="container flex items-center justify-between space-x-16">
                {/* LOGO */}
                <a href="#" className="text-6xl font-bold ms-4 text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">GEGA</a>

                {/* NAVIGATION */}
                <nav className="flex justify-between flex-1">
                    {/* MENU */}
                    <div className="flex items-center text-lg space-x-8">
                        <a href="#" className="hover:text-gega-melon transition duration-500">movies</a>
                        <a href="#" className="hover:text-gega-melon transition duration-500">celebrities</a>
                        <a href="#" className="hover:text-gega-melon transition duration-500">blog</a>
                        <a href="#" className="hover:text-gega-melon transition duration-500">news</a>
                        <a href="#" className="hover:text-gega-melon transition duration-500">about</a>
                    </div>

                    {/* LOGIN AREA */}
                    <div className="flex items-center">
                        {/* SEARCH BAR */}
                        <form className="group border-r px-4 mx-4 py-1 border-gega-red">
                            <input type="search" className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none  w-44 transition duration-500 cursor-pointer" />
                            <button className="-ml-4 me-4"><i className="fa-solid fa-magnifying-glass group-hover:text-gega-red transition duration-500"></i></button>
                        </form>
                        <div className="text-lg mx-4 space-x-4 ">
                            <a href="#" className="hover:text-gega-melon transition duration-500">SIGN UP</a>
                            <button className="bg-gega-red rounded px-3 py-1 hover:bg-gega-melon hover:text-black transition duration-500">LOGIN</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}