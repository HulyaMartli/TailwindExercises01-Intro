import { useState } from "react"

export default function GegaHeader() {
    const [showMenu, setShowMenu] = useState("hidden")

    function handleMenuClick() {
        if (showMenu === "hidden") {
            setShowMenu("block")
        } else {
            setShowMenu("hidden")
        }
    }

    return (
        <header className="bg-black xs:py-0 py-6 lg:py-12 text-gega-grey uppercase">
            <div className="container flex items-center justify-between space-x-8 lg:space-x-16 xs:h-20">
                {/* LOGO */}
                <a href="#" className="text-4xl lg:text-6xl font-bold ms-4 text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">GEGA</a>

                {/* MOBILE MENU */}
                <div className="block md:hidden xs:right-0 xs:fixed">
                    <div className="space-y-1 cursor-pointer me-4" onClick={handleMenuClick}>
                        <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
                        <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
                        <div className="bg-gega-grey w-8 h-1 rounded"></div>
                    </div>
                </div>

                {/* NAVIGATION */}
                <nav className={`${showMenu} md:flex justify-between lg:flex-1 md:translate-y-0 md:bg-transparent md:pt-0 md:mt-0 xs:mt-24 xs:bg-black xs:h-screen xs:translate-y-80 xs:pt-5 xs:overflow-hidden`} onClick={handleMenuClick}>
                    {/* MENU */}
                    <div className="xs:flex-col md:flex-row flex items-center lg:text-2xl space-x-4 lg:space-x-8">
                        <a href="#" className="hover:text-gega-melon transition duration-500">movies</a>
                        <a href="#" className="hover:text-gega-melon transition duration-500">celebrities</a>
                        <a href="#" className="hover:text-gega-melon transition duration-500">blog</a>
                        <a href="#" className="hover:text-gega-melon transition duration-500">news</a>
                        <a href="#" className="hover:text-gega-melon transition duration-500">about</a>
                    </div>

                    {/* LOGIN AREA */}
                    <div className="xs:flex-col md:flex-row flex items-center">
                        {/* SEARCH BAR */}
                        <form className="group border-r px-4 mx-4 py-1 border-gega-red flex">
                            <input type="search" className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500 cursor-pointer" />
                            <button className="me-4 "><i className="fa-solid fa-magnifying-glass group-hover:text-gega-red transition duration-500"></i></button>
                        </form>
                        <div className="xs:flex-col md:flex-row flex lg:text-xl space-x-4 items-center me-4">
                            <a href="#" className="hover:text-gega-melon transition duration-500 xs:ms-3">LOGIN</a>
                            <button className="bg-gega-red rounded px-3 py-1 hover:bg-gega-melon hover:text-black transition duration-500 whitespace-nowrap font-gemunu">SIGN UP</button>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    )
}