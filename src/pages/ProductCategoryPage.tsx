import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductsByCategory } from "@/data/productCategories";
import { useSeo } from "@/hooks/useSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, RectangleVertical, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { category, products } = getProductsByCategory(slug || "");

  const jsonLd = useMemo(() => {
    if (!category) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${category.title} KLEIBERIT® — Klejber`,
      description: category.description,
      url: `https://klejeme.pl/products/${slug}`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://klejeme.pl/" },
          { "@type": "ListItem", position: 2, name: "Produkty", item: "https://klejeme.pl/#products" },
          { "@type": "ListItem", position: 3, name: category.title, item: `https://klejeme.pl/products/${slug}` },
        ],
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: products.map((p, i) => ({
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
  }, [category, products, slug]);

  useSeo({
    title: category
      ? `${category.title} KLEIBERIT® — kleje przemysłowe | Klejber`
      : "Nie znaleziono kategorii | Klejber kleje przemysłowe",
    description: category
      ? `${category.description} Autoryzowany dystrybutor KLEIBERIT® w Polsce.`
      : "Kategoria produktów nie została znaleziona.",
    canonical: category ? `https://klejeme.pl/products/${slug}` : undefined,
    jsonLd,
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Nie znaleziono kategorii</h1>
          <Link to="/" className="text-secondary hover:underline">← Strona główna</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = category.icon;

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
            <div className="w-16 h-16 rounded-lg gradient-accent flex items-center justify-center mb-4">
              <Icon className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {category.title}
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              {category.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-12">
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              Produkty w tej kategorii
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              KLEIBERIT® {category.title}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.code}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                {product.image && (
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.name} — ${product.type}`}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-foreground">{product.name}</h3>
                    <span className="text-xs font-heading font-semibold tracking-wider uppercase bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                      {product.type}
                    </span>
                  </div>
                  {product.badge && (
                    <Badge className={`mb-3 gap-1 ${
                      product.badge === "Do luster"
                        ? "bg-sky-600 hover:bg-sky-700 text-white"
                        : product.badge === "EMICODE EC1"
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                        : product.badge === "Ognioodporny"
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}>
                      {product.badge === "Do luster" ? <RectangleVertical className="h-3 w-3" /> : product.badge === "Ognioodporny" ? <ShieldCheck className="h-3 w-3" /> : <Leaf className="h-3 w-3" />}
                      {product.badge}
                    </Badge>
                  )}
                  <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Potrzebujesz pomocy w doborze odpowiedniego produktu?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Dopasujemy odpowiednie produkty KLEIBERIT® do Twoich potrzeb.
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

export default ProductCategoryPage;
