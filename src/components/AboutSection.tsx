import { Shield, Truck, Headphones, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const features = [
  { icon: Shield, title: "Autoryzowany Dystrybutor", desc: "Oficjalny autoryzowany partner KLEIBERIT® z pełną gwarancją i gammą produktów." },
  { icon: Truck, title: "Szybkie doręczenia", desc: "Magazyn produktów umożliwia nam szybkie dostarczenie produktów." },
  { icon: Headphones, title: "Wsparcie techniczne", desc: "Profesjonalne doradztwo techniczne dopasowane do Państwa wymagań." },
  { icon: Award, title: "Wieloletnie doświadczenie", desc: "20+ lat obecności na Polskim rynku" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Dlaczego my?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Zaufany partner w rozwiązaniach klejowych
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Jako autoryzowany dystrybutor KLEIBERIT® łączymy światowej klasy technologię klejów ze znajomością lokalnych realiów i profesjonalnym wsparciem. Od doboru produktu po wsparcie integracji dbamy o to, aby procesy klejenia w Twojej firmie przebiegały z maksymalną wydajnością i niezawodnością
            </p>
            <a
              href="#contact"
              className="inline-block gradient-accent text-accent-foreground font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Zapytaj o ofertę
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
