import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductByCode } from "@/data/productCategories";
import { sectors } from "@/data/sectors";
import { useSeo } from "@/hooks/useSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getBadgeClass, getBadgeIcon } from "@/lib/badges";

const ProductDetailPage = () => {
  const { code } = useParams<{ code: string }>();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);

  const { product, sectorOccurrences, standaloneEntry, category } = useMemo(
    () => getProductByCode(code ?? ""),
    [code]
  );

  // Canonical description: prefer standalone (SEO meta), fall back to first sector
  const mainDescription =
    standaloneEntry?.product.description ?? sectorOccurrences[0]?.product.description ?? "";

  const jsonLd = useMemo(() => {
    if (!product) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: mainDescription,
      brand: { "@type": "Brand", name: "KLEIBERIT" },
      url: `https://klejeme.pl/product/${code}`,
    };
  }, [product, mainDescription, code]);

  useSeo({
    title: product
      ? `${product.name} — klej przemysłowy KLEIBERIT® | Klejber`
      : "Nie znaleziono produktu | Klejber kleje przemysłowe",
    description: mainDescription || "Produkt KLEIBERIT® – autoryzowany dystrybutor w Polsce.",
    canonical: product ? `https://klejeme.pl/product/${code}` : undefined,
    jsonLd,
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Nie znaleziono produktu</h1>
          <Link to="/" className="text-secondary hover:underline">← Strona główna</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Sectors that use this product, in display order
  const relatedSectors = sectorOccurrences.map(({ sectorSlug, sectorName, product: p }) => {
    const sector = sectors.find((s) => s.slug === sectorSlug);
    return { sectorSlug, sectorName, description: p.description, icon: sector?.icon };
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <Link
            to={category ? `/products/${category.slug}` : "/"}
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 font-heading text-sm tracking-wide"
          >
            <ArrowLeft className="h-4 w-4" />
            {category ? category.title : "Strona główna"}
          </Link>
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-heading text-sm font-semibold tracking-widest uppercase text-secondary">
                {product.type}
              </span>
              {product.badge && (
                <Badge className={`gap-1 ${getBadgeClass(product.badge)}`}>
                  {getBadgeIcon(product.badge)}
                  {product.badge}
                </Badge>
              )}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
              {product.name}
            </h1>
            <p className="font-heading text-primary-foreground/50 text-lg tracking-widest">
              KOD: {product.code}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Description card */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
                  Opis produktu
                </p>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  Informacje techniczne
                </h2>
              </ScrollReveal>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card rounded-lg p-8 shadow-card border border-border"
              >
                <p className="text-foreground text-lg leading-relaxed">{mainDescription}</p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
                  Szczegóły
                </p>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  Klasyfikacja
                </h2>
              </ScrollReveal>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card rounded-lg p-8 shadow-card border border-border space-y-6"
              >
                <div>
                  <p className="text-muted-foreground text-sm font-heading uppercase tracking-wider mb-1">Kod produktu</p>
                  <p className="font-heading text-xl font-bold text-foreground">{product.code}</p>
                </div>
                <div className="border-t border-border" />
                <div>
                  <p className="text-muted-foreground text-sm font-heading uppercase tracking-wider mb-1">Rodzaj kleju</p>
                  <span className="inline-block text-xs font-heading font-semibold tracking-wider uppercase bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                    {product.type}
                  </span>
                </div>
                {product.badge && (
                  <>
                    <div className="border-t border-border" />
                    <div>
                      <p className="text-muted-foreground text-sm font-heading uppercase tracking-wider mb-2">Certyfikat / cecha</p>
                      <Badge className={`gap-1 ${getBadgeClass(product.badge)}`}>
                        {getBadgeIcon(product.badge)}
                        {product.badge}
                      </Badge>
                    </div>
                  </>
                )}
                {category && (
                  <>
                    <div className="border-t border-border" />
                    <div>
                      <p className="text-muted-foreground text-sm font-heading uppercase tracking-wider mb-2">Kategoria</p>
                      <Link
                        to={`/products/${category.slug}`}
                        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-heading font-semibold text-sm transition-colors"
                      >
                        {category.title}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related sectors ── */}
      {relatedSectors.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <ScrollReveal className="mb-12">
              <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
                Zastosowania
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Branże wykorzystujące ten produkt
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSectors.map(({ sectorSlug, sectorName, description, icon }, i) => (
                <motion.div
                  key={sectorSlug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/sector/${sectorSlug}`}
                    className="group flex flex-col h-full bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {icon && (
                        <img src={icon} alt={sectorName} className="w-8 h-8 object-contain" />
                      )}
                      <h3 className="font-heading text-lg font-bold text-foreground">{sectorName}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
                    <div className="flex items-center gap-1 mt-4 text-secondary font-heading text-sm font-semibold group-hover:gap-2 transition-all">
                      Zobacz branżę
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Chcesz zamówić lub zapytać o produkt?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Skontaktuj się z nami — dobierzemy właściwą ilość i opakowanie.
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

export default ProductDetailPage;
