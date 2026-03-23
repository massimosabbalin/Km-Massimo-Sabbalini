import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ResultsCarousel from "@/components/ResultsCarousel";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <ResultsCarousel />
      <LocationsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
