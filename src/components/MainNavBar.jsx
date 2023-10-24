import { useState } from "react"

export default function MainNavBar() {
    const [showMenu, setShowMenu] = useState("hidden")

    function handleMenuClick() {
        if (showMenu === "hidden") {
            setShowMenu("absolute")
        } else {
            setShowMenu("hidden")
        }
    }

    return (
        <header className="xs:py-0 py-6 lg:py-12 text-mov-grey uppercase">
            <div className="container flex items-center justify-between space-x-8 lg:space-x-16 xs:h-20">
                {/* LOGO */}
                <a href="#" className="text-4xl lg:text-6xl font-bold ms-4 text-transparent bg-gradient-to-r bg-clip-text from-mov-melon to-mov-grey">MOV</a>

                {/* MOBILE MENU */}
                <div className="md:hidden xs:right-0 xs:relative end-0">
                    <div className="space-y-1 cursor-pointer me-4 bg-black" onClick={handleMenuClick}>
                        <div className="bg-mov-melon w-8 h-1 rounded-full"></div>
                        <div className="bg-mov-melon w-8 h-1 rounded-full"></div>
                        <div className="bg-mov-melon w-8 h-1 rounded"></div>
                    </div>
                </div>

                {/* NAVIGATION */}
                <nav className={`${showMenu} md:flex justify-between lg:flex-1 md:translate-y-0 md:bg-transparent md:pt-0 md:mt-0  xs:bg-black xs:h-100 xs:translate-y-36 xs:py-5 xs:overflow-hidden xs:end-0 z-50`} onClick={handleMenuClick}>
                    {/* MENU */}
                    <div className="xs:flex-col md:flex-row flex items-center lg:text-2xl xs:space-x-0 md:space-x-4 lg:space-x-8 ">
                        <a href="#" className="hover:text-mov-melon transition duration-500">movies</a>
                        <a href="#" className="hover:text-mov-melon transition duration-500">celebrities</a>
                        <a href="#" className="hover:text-mov-melon transition duration-500">blog</a>
                        <a href="#" className="hover:text-mov-melon transition duration-500">news</a>
                        <a href="#" className="hover:text-mov-melon transition duration-500">about</a>
                    </div>

                    {/* LOGIN AREA */}
                    <div className="xs:flex-col md:flex-row flex items-center">
                        {/* SEARCH BAR */}
                        <form className="group border-r px-4 mx-4 py-1 border-mov-melon flex">
                            <input type="search" className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-mov-melon focus:outline-none w-24 lg:w-44 transition duration-500 cursor-pointer" />
                            <button className="me-4 "><i className="fa-solid fa-magnifying-glass group-hover:text-mov-melon transition duration-500"></i></button>
                        </form>
                        <div className="xs:flex-col md:flex-row flex lg:text-xl space-x-4 items-center me-4">
                            <a href="#" className="hover:text-mov-melon transition duration-500 xs:ms-3 xs:mb-1">LOGIN</a>
                            <button className="bg-mov-grey text-black rounded px-3 py-1 hover:bg-mov-melon transition duration-500 whitespace-nowrap font-gemunu">SIGN UP</button>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    )
}