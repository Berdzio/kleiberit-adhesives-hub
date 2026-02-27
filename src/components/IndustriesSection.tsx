import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { sectors } from "@/data/sectors";

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            Sektory przemysłu, w których działamy
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-12">
            Technologie klejenia dla wielu sektorów przemysłu
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/sector/${sector.slug}`}
                className="block bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/10"
              >
                <img src={sector.icon} alt={sector.name} className="w-10 h-10 mb-3 mx-auto object-contain" />
                <p className="text-primary-foreground font-heading font-semibold text-sm">{sector.name}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
