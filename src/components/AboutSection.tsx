import { Shield, Truck, Headphones, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const features = [
  { icon: Shield, title: "Certified Distributor", desc: "Official KLEIBERIT authorized partner with full product warranty." },
  { icon: Truck, title: "Fast Delivery", desc: "Large stock inventory for rapid dispatch across the region." },
  { icon: Headphones, title: "Technical Support", desc: "Expert consultation to match the right adhesive to your application." },
  { icon: Award, title: "German Quality", desc: "Backed by 70+ years of KLEIBERIT adhesive engineering excellence." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Adhesive Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              As an authorized KLEIBERIT distributor, we combine world-class adhesive technology with local expertise and service. From product selection to application support, we ensure your bonding processes run at peak performance.
            </p>
            <a
              href="#contact"
              className="inline-block gradient-accent text-accent-foreground font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Partner With Us
            </a>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card rounded-lg p-6 shadow-card border border-border"
              >
                <f.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
