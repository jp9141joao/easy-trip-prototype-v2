import { useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Button } from "./ui/button";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {

    const [ changeTheme, setChangeTheme ] = useState<string>("light");
    const navItems = [
        {
            name: 'Discover',
            href: '/discover',
        },
        {
            name: 'Trips',
            href: '/trips',
        },
        {
            name: 'About us',
            href: '/about-us',
        }
    ]

    return (
        <header className="w-full grid my-2 font-semibold px-[0.7em]">
            <nav className="w-full flex justify-between center">
                <div className="flex gap-1 items-center">
                    <span 
                        className="block bg-green-theme h-[1.7em] xs:h-[1.9em] lg:h-[2em] w-1"
                    />
                    <h1 className="text-2xl sm:text-xl lg:text-2xl"> 
                        Easy Trip
                    </h1>
                </div>
                <div className="flex items-center gap-1 lg:gap-5">
                    <div 
                        className="hidden sm:flex sm:gap-5 lg:gap-7 items-center"
                    >
                        {
                            navItems.map((item: any, index: number) => (
                                <div
                                    className="sm:text-sm lg:text-base hover:border-b-3 hover:border-green-theme cursor-pointer duration-100" 
                                    key={index}
                                >
                                    <p>
                                        {
                                            item.name
                                        }
                                    </p>
                                </div>
                            ))
                            
                        }        
                        <div>
                            <Button
                                className="font-semibold sm:text-sm lg:text-base hover:scale-105"
                                size={"lg"}
                            >
                                Sign In
                            </Button>
                        </div>
                    </div>
                    <div 
                        className="select-none cursor-pointer"
                        onClick={() => setChangeTheme(changeTheme == "light" ? "dark" : "light")}
                    >
                        {
                            changeTheme == "light" ?
                            <MdDarkMode className="icon-responsive"/> :
                            <MdLightMode className="icon-responsive"/>
                        }
                    </div>
                    <div className="sm:hidden">
                        <Sidebar />
                    </div>
                </div>
            </nav>
        </header>
    )
}