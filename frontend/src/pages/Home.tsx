import { FeaturesSection } from "../components/HomePage/FeaturesSection";
import { HeroSection } from "../components/HomePage/HeroSection";
import { PopularPlaces } from "../components/HomePage/PopularPlaces";
import { Navbar } from "../components/Navbar";

export function Home() {

    return (
        <div className='grid place-items-center items-center'>
            <div className='max-w-[100rem]'>
                <Navbar />
                <HeroSection />
                <FeaturesSection />
                <PopularPlaces />
            </div>
        </div>
    )
}