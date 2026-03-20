import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { sectors } from "@/data/sectors";
import { useSeo } from "@/hooks/useSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const SectorPage = () => {
  const { slug } = useParams<{ slug: string }>();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const sector = sectors.find((s) => s.slug === slug);

  const jsonLd = useMemo(() => {
    if (!sector) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Kleje przemysłowe do branży: ${sector.name} — Klejber`,
      description: sector.description,
      url: `https://klejeme.pl/sector/${slug}`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://klejeme.pl/" },
          { "@type": "ListItem", position: 2, name: "Branże", item: "https://klejeme.pl/#industries" },
          { "@type": "ListItem", position: 3, name: sector.name, item: `https://klejeme.pl/sector/${slug}` },
        ],
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: sector.products.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: p.name,
            description: p.description,
            brand: { "@type": "Brand", name: "KLEIBERIT" },
          },
        })),
      },
    };
  }, [sector, slug]);

  useSeo({
    title: sector
      ? `Kleje do ${sector.name.toLowerCase()} KLEIBERIT® — kleje przemysłowe | Klejber`
      : "Nie znaleziono branży | Klejber",
    description: sector
      ? `${sector.description} Autoryzowany dystrybutor klejów przemysłowych KLEIBERIT® w Polsce.`
      : "Branża nie została znaleziona.",
    canonical: sector ? `https://klejeme.pl/sector/${slug}` : undefined,
    jsonLd,
  });

  if (!sector) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Nie znaleziono</h1>
          <Link to="/" className="text-secondary hover:underline">
            ← Strona główna
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 font-heading text-sm tracking-wide"
          >
            <ArrowLeft className="h-4 w-4" />
            Strona główna
          </Link>
          <ScrollReveal>
            <img src={sector.icon} alt={sector.name} className="w-16 h-16 mb-4 object-contain" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {sector.headline}
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              {sector.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-12">
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Rekomendowane produkty
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Rozwiązania KLEIBERIT® do {sector.name}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sector.products.map((product, i) => (
              <motion.div
                key={product.code + i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <span className="text-xs font-heading font-semibold tracking-wider uppercase bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                    {product.type}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Potrzebujesz pomocy w wyborze?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Dopasujemy odpowiedni produkt do Twoich wymagań.
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-secondary text-secondary-foreground font-heading font-bold px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Wyślij zapytanie
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SectorPage;
