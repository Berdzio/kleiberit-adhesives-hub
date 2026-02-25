import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <IndustriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
