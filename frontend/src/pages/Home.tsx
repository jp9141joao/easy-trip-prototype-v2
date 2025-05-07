import { useState } from "react";
import { Footer } from "../components/Footer";
import { FeaturesSection } from "../components/HomePage/FeaturesSection";
import { HeroSection } from "../components/HomePage/HeroSection";
import { PopularPlaces } from "../components/HomePage/PopularPlaces";
import { Navbar } from "../components/Navbar";
import LayoutPage from "../components/ui/LayoutPage";

export function Home() {

    const [ w, setW ] = useState<number>(window.innerWidth);
    const [ h, setH ] = useState<number>(window.innerHeight);

    return (
        <LayoutPage>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <PopularPlaces />
            <Footer />
        </LayoutPage>
    )
}