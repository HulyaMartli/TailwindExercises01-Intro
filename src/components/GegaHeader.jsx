export default function GegaHeader() {
    return (
        <header className="bg-black py-12 text-gega-grey font-gemunu uppercase">
            <div className="container flex items-center justify-between space-x-16">
                {/* LOGO */}
                <a href="#" className="text-6xl font-bold">GEGA</a>

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
                    <div className="flex items-center space-x-8">
                        {/* SEARCH BAR */}
                        <form>
                            <div className="group border-r px-4 mx-4 py-1 border-gega-red">
                                <input type="text" className="bg-transparent border-b border-gega-red focus:outline-none w-44"/>
                                <button><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    )
}