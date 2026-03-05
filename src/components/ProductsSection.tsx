import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/productCategories";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            Nasze produkty
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Asortyment klejów KLEIBERIT®
          </h2>
          <p className="text-muted-foreground text-lg">
            Pełne portfolio produktów KLEIBERIT® do profesjonalnych zastosowań przemysłowych
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/products/${cat.slug}`}
                className="group block bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-6">
                  <cat.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{cat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cat.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
