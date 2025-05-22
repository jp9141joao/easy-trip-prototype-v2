import { Button } from "../ui/button"
import { MdOutlineAccessTime, MdOutlineTravelExplore } from "react-icons/md";
import { LuPartyPopper, LuReceipt } from "react-icons/lu";
import Image from '../../assets/home/hero.avif'
import { useEffect } from "react";
import { preload } from "react-dom";

export const HeroSection = ({ targetRef }: { targetRef: React.RefObject<HTMLDivElement | null> }) => {

    useEffect(() => {
        preload(Image, { as: 'image' });
    }, []);

    return (
        <div className="grid place-items-center items-center gap-4 py-5 lg:py-14 margin-x-page">
            <div className="lg:flex gap-6">
                <div className="lg:hidden">
                    <img 
                        src={ Image }
                        alt='hero-image'
                        loading='lazy'
                        className="rounded-3xl"
                    />
                </div>
                <div className="mt-5">
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
                    <div className="w-full items-left mt-3 lg:mt-5">
                        <Button
                            size={"xl"}
                            className="text-base sm:text-xl font-semibold"
                            onClick={() => {
                                
                                if (targetRef.current) {
                                    targetRef.current.scrollIntoView({ behavior: "smooth" });
                                }

                            }}
                        >
                            Learn more
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img 
                        src={ Image }
                        alt='hero-image'
                        loading='lazy'
                        className="lg:w-[70vw] rounded-3xl"
                    />
                </div>
            </div>
            <div className="w-full grid lg:flex place-items-center items-center grid-cols-2 gap-3 xs:gap-4 lg:gap-6 pt-3 lg:pt-10">
                <div className="card-layout">
                    <MdOutlineTravelExplore className="size-12 sm:size-16 my-2"/>
                    <p className="sm:text-xl text-center p-1 sm:p-4 lg:p-1">                    
                        Centralize travel details efficiently to build trips tailored to your interests.
                    </p>
                </div>
                <div className="card-layout">
                    <MdOutlineAccessTime className="size-12 sm:size-16 my-2"/>
                    <p className="sm:text-xl text-center p-1 sm:p-4 lg:p-1">
                        Keep all details in one place to streamline planning and save time.                    
                    </p>
                </div>
                <div className="card-layout">
                    <LuReceipt className="size-12 sm:size-16 my-2"/>
                    <p className="sm:text-xl text-center p-1 sm:p-4 lg:p-1">
                        Compare prices and discover deals to maximize your travel budget.                    
                    </p>
                </div>
                <div className="card-layout">
                    <LuPartyPopper className="size-12 sm:size-16 my-2"/>
                    <p className="sm:text-xl text-center p-1 sm:p-4 lg:p-1">
                        Travel stress-free with a well-organized plan that reduces surprises.                    
                    </p>
                </div>
            </div>
        </div>
    )
} 