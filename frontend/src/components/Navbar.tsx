import { useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Button } from "./ui/button";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const [ changeTheme, setChangeTheme ] = useState<string>("light");
    const navigate = useNavigate();
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
    ];

    return (
        <header className="w-full grid my-2 xs:mt-3 font-semibold px-[0.7em] sm:px-[1.1em]">
            <nav className="w-full flex justify-between center">
                <div className="flex gap-1 items-center">
                    <span 
                        className="block bg-green-theme h-[1.7em] sm:h-[1.9em] lg:h-[2em] w-1"
                    />
                    <h1 className="text-2xl lg:text-2xl"> 
                        Easy Trip
                    </h1>
                </div>
                <div className="flex items-center gap-1 md:gap-5">
                    <div 
                        className="hidden sm:flex sm:gap-4 md:gap-5 lg:gap-7 items-center"
                    >
                        {
                            navItems.map((item: any, index: number) => (
                                <div
                                    className="sm:text-sm md:text-base lg:text-base hover:border-b-3 hover:border-green-theme cursor-pointer duration-100" 
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
                                size={"lg"}
                                onClick={(() => navigate("/signIn"))}
                                className="font-semibold sm:text-sm md:text-base lg:text-base hover:scale-105"
                            >
                                Sign In
                            </Button>
                        </div>
                    </div>
                    <div 
                        className="select-none cursor-pointer"
                        onClick={() => {
                            setChangeTheme(changeTheme == "light" ? "dark" : "light");
                            document.documentElement.classList.toggle('dark');
                        }}
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