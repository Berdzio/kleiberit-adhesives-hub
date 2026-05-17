import { getProductByCode } from "@/data/productCategories";
import { sectors } from "@/data/sectors";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap, TriangleAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getBadgeClass, getBadgeIcon } from "@/lib/badges";

interface Props {
  code: string;
}

const ProductDetailContent = ({ code }: Props) => {
  const { product, sectorOccurrences, standaloneEntry, category } = getProductByCode(code);

  const mainDescription =
    standaloneEntry?.product.description ?? sectorOccurrences[0]?.product.description ?? "";
  const mainDetails =
    standaloneEntry?.product.details ?? sectorOccurrences[0]?.product.details;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Nie znaleziono produktu</h1>
          <a href="/" className="text-secondary hover:underline">← Strona główna</a>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedSectors = sectorOccurrences.map(({ sectorSlug, sectorName, product: p }) => {
    const sector = sectors.find((s) => s.slug === sectorSlug);
    return { sectorSlug, sectorName, description: p.description, icon: sector?.icon };
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <a
            href={category ? `/products/${category.slug}` : "/"}
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 font-heading text-sm tracking-wide"
          >
            <ArrowLeft className="h-4 w-4" />
            {category ? category.title : "Strona główna"}
          </a>
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

      {/* Main content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
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
                className="bg-card rounded-lg p-8 shadow-card border border-border space-y-6"
              >
                {mainDetails ? (
                  <>
                    <p className="text-foreground text-base leading-relaxed">{mainDetails.body}</p>
                    {mainDetails.keyFeature && (
                      <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-sm text-foreground flex gap-3">
                        <Zap className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                        <span>{mainDetails.keyFeature}</span>
                      </div>
                    )}
                    {mainDetails.warning && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-800 flex gap-3">
                        <TriangleAlert className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{mainDetails.warning}</span>
                      </div>
                    )}
                    {mainDetails.specs && mainDetails.specs.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {mainDetails.specs.map((spec) => (
                          <div key={spec.label} className="bg-muted/40 rounded-lg p-3">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{spec.label}</p>
                            <p className="text-sm font-semibold text-foreground">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {mainDetails.applications && (
                      <div>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-1">Zastosowanie</p>
                        <p className="text-sm text-foreground leading-relaxed">{mainDetails.applications}</p>
                      </div>
                    )}
                    {mainDetails.note && (
                      <p className="text-sm text-muted-foreground">{mainDetails.note}</p>
                    )}
                  </>
                ) : (
                  <p className="text-foreground text-lg leading-relaxed">{mainDescription}</p>
                )}
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
                      <a
                        href={`/products/${category.slug}`}
                        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-heading font-semibold text-sm transition-colors"
                      >
                        {category.title}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related sectors */}
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
                  <a
                    href={`/sector/${sectorSlug}`}
                    className="group flex flex-col h-full bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {icon && <img src={icon} alt={sectorName} className="w-8 h-8 object-contain" />}
                      <h3 className="font-heading text-lg font-bold text-foreground">{sectorName}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
                    <div className="flex items-center gap-1 mt-4 text-secondary font-heading text-sm font-semibold group-hover:gap-2 transition-all">
                      Zobacz branżę
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Chcesz zamówić lub zapytać o produkt?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Skontaktuj się z nami — dobierzemy właściwą ilość i opakowanie.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-secondary text-secondary-foreground font-heading font-bold px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Wyślij zapytanie
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailContent;
