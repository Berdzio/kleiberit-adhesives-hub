import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            Skontaktuj się
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Zapytaj o ofertę
          </h2>
          <p className="text-muted-foreground text-lg">
            Opisz nad czym pracujesz a my dobierzemy produkt KLEIBERIT®
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, label: "Adres", value: "Bukowiecka 92/155\n03-893 Warszawa" },
              { icon: Phone, label: "Telefon", value: "+48 512-825-215" },
              { icon: Mail, label: "Email", value: "info@klejeme.pl" },
              { icon: Clock, label: "Godziny", value: "Pon–Pt: 8 – 16" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-3">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Imie i Nazwisko" className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                <input type="text" placeholder="Firma" className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="email" placeholder="Adres Email" className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                <input type="tel" placeholder="Numer telefonu" className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
              <textarea rows={5} placeholder="Napisz nam o swoich wymaganiach dla naszego kleju..." className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none" />
              <button type="submit" className="w-full gradient-accent text-accent-foreground font-semibold py-4 rounded-md hover:opacity-90 transition-opacity text-lg">
                Wyślij zapytanie
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
