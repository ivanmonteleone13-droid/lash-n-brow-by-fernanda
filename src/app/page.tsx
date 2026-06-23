import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <AboutSection />
      <Gallery />
      <ReviewsCarousel />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
