import { Layers, Droplets, Flame, Package } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const categories = [
  {
    icon: Layers,
    title: "PUR Hot Melts",
    description: "Reactive polyurethane adhesives for high-performance edge banding and lamination with exceptional heat and moisture resistance.",
  },
  {
    icon: Droplets,
    title: "PVAc Adhesives",
    description: "White glues and D3/D4 adhesives for furniture, joinery, and wood assembly applications. Fast setting, strong bonds.",
  },
  {
    icon: Flame,
    title: "EVA Hot Melts",
    description: "Versatile ethylene vinyl acetate hot melt adhesives for edge banding, flat lamination, and profile wrapping.",
  },
  {
    icon: Package,
    title: "Montage Adhesives",
    description: "High-strength montage adhesives for bonding, fixing, and assembly applications in construction and interior finishing.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            Our Products
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            KLEIBERIT Adhesive Range
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive portfolio of adhesives engineered for demanding industrial applications.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-6">
                <cat.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{cat.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
