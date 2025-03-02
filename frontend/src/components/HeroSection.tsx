import { Button } from "./ui/button"
import { MdOutlineAccessTime, MdOutlineCalendarToday } from "react-icons/md";
import { LuPartyPopper, LuReceipt } from "react-icons/lu";

import Image from '../assets/photo-1539635278303-d4002c07eae3.avif'

export const HeroSection = () => {

    return (
        <div className="grid place-items-center items-center gap-4 py-4 px-[1rem]">
            <div className="">
                <img 
                    src={Image}
                    className="rounded-3xl"
                />
            </div>
            <div className="text-start">
                <h1 className="text-3xl font-semibold">
                    Your Next Adventure <strong className="text-[#00AF87]">
                                            Awaits!
                                        </strong>       
                </h1>
                <p className="text-lg text-gray-800 break-words">
                    Explore breathtaking destinations and create unforgettable memories.
                </p>
            </div>
            <div className="w-full items-left">
                <Button
                    size={"xl"}
                    className="text-base "
                >
                    Learn more
                </Button>
            </div>
            <div className="w-full grid place-items-center items-center grid-cols-2 gap-3">
                <div className="card-layout">
                    <MdOutlineCalendarToday className="size-12 my-2"/>
                    <p className="text-center p-1">                    
                        Centralize travel details to craft itineraries tailored to your interests.
                    </p>
                </div>
                <div className="card-layout">
                    <MdOutlineAccessTime className="size-12 my-2"/>
                    <p className="text-center p-1">
                        Keep all details in one place to streamline planning and save time.                    
                    </p>
                </div>
                <div className="card-layout">
                    <LuReceipt className="size-12 my-2"/>
                    <p className="text-center p-1">
                        Compare prices and discover deals to maximize your travel budget.                    
                    </p>
                </div>
                <div className="card-layout">
                    <LuPartyPopper className="size-12 my-2"/>
                    <p className="text-center p-1">
                        Travel stress-free with a planned itinerary that reduces surprises.                    
                    </p>
                </div>
            </div>
        </div>
    )
} /*MdOutlineCalendarToday */