import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedWork from "@/components/home/FeaturedWork";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedWork />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
