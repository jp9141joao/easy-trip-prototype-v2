import { Button } from "./ui/button"
import Image from '../assets/photo-1539635278303-d4002c07eae3.avif'

export const HeroSection = () => {

    return (
        <div className="grid place-items-center items-center gap-4 py-4 px-[1rem]">
            <div className="">
                <img 
                    src={Image}
                    className="rounded-4xl"
                />
            </div>
            <div className="text-start">
                <h1 className="text-3xl font-semibold leading-">
                    Your Next Adventure <strong className="text-[#00AF87]">
                                            Awaits!
                                        </strong>       
                </h1>
                <p className="text-lg break-words">
                    Explore breathtaking destinations and create unforgettable memories.
                </p>
            </div>
            <div className="w-full items-left">
                <Button
                    size={"xl"}
                    className="text-base"
                >
                    Learn more
                </Button>
            </div>
        </div>
    )
}