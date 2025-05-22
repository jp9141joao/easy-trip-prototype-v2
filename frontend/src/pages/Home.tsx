import React from "react";
import { Footer } from "../components/Footer";
import { FeaturesSection } from "../components/HomePage/FeaturesSection";
import { HeroSection } from "../components/HomePage/HeroSection";
import { PopularPlaces } from "../components/HomePage/PopularPlaces";
import { Navbar } from "../components/Navbar";
import LayoutPage from "../components/ui/LayoutPage";

export function Home() {

    const targetRef = React.useRef<HTMLDivElement>(null);

    return (
        <LayoutPage>
            <Navbar />
            <HeroSection targetRef={ targetRef } />
            <FeaturesSection />
            <PopularPlaces />
            <Footer targetRef={ targetRef } />
        </LayoutPage>
    )
}