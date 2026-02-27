import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Industrial adhesive application" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Autoryzowany dystrybutor KLEIBERIT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-primary-foreground font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Profesjonalne technologie klejenia dla wymagających zastosowań
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-primary-foreground/75 text-lg md:text-xl leading-relaxed mb-10"
          >
            Sprawdzone kleje KLEIBERIT dla stolarki wewnętrznej i zewnętrzenej oraz branży budowlanej. Niezawodność potwierdzona doświadczeniem.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="gradient-accent text-accent-foreground font-semibold px-8 py-4 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity text-lg"
            >
              Produkty <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-md hover:bg-primary-foreground/10 transition-colors text-lg"
            >
              Napisz do nas
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
