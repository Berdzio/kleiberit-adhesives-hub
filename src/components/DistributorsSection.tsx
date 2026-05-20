import { MapPin, Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const distributors = [
  {
    name: "KLEJBER Kleje Przemysłowe S.C.",
    fullName: "",
    address: "ul. Bukowiecka 92/155, 03-893 Warszawa",
    phones: ["+48 512 825 215"],
    email: "info@klejeme.pl",
    regions: ["mazowieckie", "podlaskie", "kujawsko-pomorskie"],
    highlight: true,
  },
  {
    name: "KLEJ-DREW",
    fullName: "Mariusz Królak",
    address: "ul. Domańskiego 3, 77-430 Krajenka",
    phones: ["+48 67 263 86 32", "+48 604 504 962"],
    email: "info@klejdrew.pl",
    regions: ["zachodniopomorskie"],
    highlight: false,
  },
  {
    name: "F.P.H. WEKTOR",
    fullName: "",
    address: "ul. Budowlanych 2D, 84-200 Wejherowo",
    phones: ["+48 58 677 10 77", "+48 501 397 873"],
    email: "biuro@fphwektor.com.pl",
    regions: ["pomorskie", "warmińsko-mazurskie"],
    highlight: false,
  },
  {
    name: "KLEJSTOL",
    fullName: "Dariusz Chojnacki",
    address: "ul. Niedźwiady 2, 62-800 Kalisz",
    phones: ["+48 62 760 32 46", "+48 605 310 785"],
    email: "info@klejstol.pl",
    regions: ["wielkopolskie", "łódzkie"],
    highlight: false,
  },
  {
    name: "KLEJDOM",
    fullName: "Leszek Kwiatkowski",
    address: "ul. Starojaworska 29B, 59-400 Jawor",
    phones: ["+48 76 870 22 19", "+48 602 496 208"],
    email: "leszek.klejdom@interia.pl",
    regions: ["dolnośląskie", "lubuskie"],
    highlight: false,
  },
  {
    name: "KLEJMEB-STOLMAT S.C.",
    fullName: "Radosław Kowal, Magdalena Kałużna",
    address: "ul. Wspólna 9, 45-831 Opole",
    phones: ["+48 77 474 28 97", "+48 601 966 101"],
    email: "klejmeb@op.pl",
    regions: ["opolskie", "śląskie"],
    highlight: false,
  },
  {
    name: "KLEJTECH",
    fullName: "Dariusz Stanaszek",
    address: "Świnna Poręba 124, 34-106 Mucharz k. Wadowic",
    phones: ["+48 33 876 12 28", "+48 600 417 523"],
    email: "info@klejtech.pl",
    regions: ["małopolskie", "podkarpackie"],
    highlight: false,
  },
  {
    name: "KLEJBER",
    fullName: "Wojciech Bernaszuk",
    address: "ul. Gardzienicka 32, 21-050 Piaski k. Lublina",
    phones: ["+48 81 582 28 64", "+48 501 049 598"],
    email: "klejber@provider.pl",
    regions: ["lubelskie", "świętokrzyskie"],
    highlight: false,
  },
];

const DistributorsSection = () => (
  <section className="py-20 bg-muted/40 border-t border-border">
    <div className="container mx-auto px-4">
      <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
          Sieć dystrybucji
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Autoryzowani dystrybutorzy KLEIBERIT®
        </h2>
        <p className="text-muted-foreground">
          Znajdź dystrybutora w swoim regionie i zamów bezpośrednio.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {distributors.map((d, i) => (
          <ScrollReveal key={d.name} delay={i * 0.05}>
            <div className={`rounded-xl p-5 h-full flex flex-col gap-4 hover:shadow-md transition-shadow border ${
              d.highlight
                ? "bg-secondary/5 border-secondary/40 ring-1 ring-secondary/20"
                : "bg-card border-border"
            }`}>
              <div>
                <p className={`font-heading font-bold text-lg leading-tight ${d.highlight ? "text-secondary" : "text-foreground"}`}>
                  {d.name}
                </p>
                {d.fullName && (
                  <p className="text-muted-foreground text-sm mt-0.5">{d.fullName}</p>
                )}
              </div>

              <div className="flex flex-col gap-2.5 text-sm flex-1">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-snug">{d.address}</span>
                </div>

                <div className="flex gap-2.5 items-start">
                  <Phone className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    {d.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="text-foreground hover:text-secondary transition-colors"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2.5 items-center">
                  <Mail className="h-4 w-4 text-secondary shrink-0" />
                  <a
                    href={`mailto:${d.email}`}
                    className="text-foreground hover:text-secondary transition-colors break-all"
                  >
                    {d.email}
                  </a>
                </div>
              </div>

              {d.regions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border">
                  {d.regions.map((r) => (
                    <span
                      key={r}
                      className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default DistributorsSection;
