import { Footer } from "../components/Footer";
import { FeaturesSection } from "../components/HomePage/FeaturesSection";
import { HeroSection } from "../components/HomePage/HeroSection";
import { PopularPlaces } from "../components/HomePage/PopularPlaces";
import { Navbar } from "../components/Navbar";
import LayoutPage from "../components/ui/LayoutPage";

export function Home() {

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