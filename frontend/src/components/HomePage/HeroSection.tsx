import { Button } from "../ui/button"
import { MdOutlineAccessTime, MdOutlineTravelExplore } from "react-icons/md";
import { LuPartyPopper, LuReceipt } from "react-icons/lu";
import Image from '../../assets/home/hero.avif'
import { useEffect } from "react";
import { preload } from "react-dom";

export const HeroSection = () => {

    useEffect(() => {
        preload(Image, { as: 'image' });
    }, []);

    return (
        <div className="grid place-items-center items-center gap-4 py-5 margin-x-page">
            <div className="">
                <img 
                    src={ Image }
                    alt='hero-image'
                    loading='eager'
                    className="rounded-3xl"
                />
            </div>
            <div className="text-start">
                <h1 className="text-3xl sm:text-5xl font-semibold">
                    Your Next Adventure <strong className="text-green-theme">
                                            Awaits!
                                        </strong>       
                </h1>
                <p className="text-lg sm:text-2xl text-gray-800 dark:text-gray-200 break-words sm:mt-3">
                    Explore breathtaking destinations and create unforgettable memories.
                </p>
            </div>
            <div className="w-full items-left">
                <Button
                    size={"xl"}
                    className="text-base sm:text-xl px-14 py-6 font-semibold"
                    onClick={() => {
                        window.scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: 'smooth'
                        });
                    }}
                >
                    Learn more
                </Button>
            </div>
            <div className="w-full grid place-items-center items-center grid-cols-2 gap-3 xs:gap-4 pt-3">
                <div className="card-layout">
                    <MdOutlineTravelExplore className="size-12 sm:size-14 my-2"/>
                    <p className="sm:text-xl text-center p-1">                    
                        Centralize travel details efficiently to build trips tailored to your interests.
                    </p>
                </div>
                <div className="card-layout">
                    <MdOutlineAccessTime className="size-12 sm:size-14 my-2"/>
                    <p className="sm:text-xl text-center p-1">
                        Keep all details in one place to streamline planning and save time.                    
                    </p>
                </div>
                <div className="card-layout">
                    <LuReceipt className="size-12 sm:size-14 my-2"/>
                    <p className="sm:text-xl text-center p-1">
                        Compare prices and discover deals to maximize your travel budget.                    
                    </p>
                </div>
                <div className="card-layout">
                    <LuPartyPopper className="size-12 sm:size-14 my-2"/>
                    <p className="sm:text-xl text-center p-1">
                        Travel stress-free with a well-organized plan that reduces surprises.                    
                    </p>
                </div>
            </div>
        </div>
    )
} 