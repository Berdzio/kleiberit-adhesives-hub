import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Industrial adhesive application" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-2xl">
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
            Authorized KLEIBERIT Distributor
          </p>
          <h1 className="text-primary-foreground font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Industrial Adhesive Solutions That Bond
          </h1>
          <p className="text-primary-foreground/75 text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Premium KLEIBERIT adhesives for woodworking, packaging, automotive, and construction industries. Trusted performance, delivered with expertise.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#products"
              className="gradient-accent text-accent-foreground font-semibold px-8 py-4 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity text-lg"
            >
              Explore Products <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-md hover:bg-primary-foreground/10 transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
