import { getProductsByCategory, ProductCategorySubcategory } from "@/data/productCategories";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getBadgeClass, getBadgeIcon } from "@/lib/badges";

type ProductWithSector = ReturnType<typeof getProductsByCategory>["products"][number];

const ProductCard = ({ product, index }: { product: ProductWithSector; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
  >
    <a
      href={`/product/${product.code}`}
      className="group flex flex-col h-full bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
    >
      <div className="flex flex-col flex-1 p-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-xl font-bold text-foreground">{product.name}</h3>
          <span className="text-xs font-heading font-semibold tracking-wider uppercase bg-secondary/10 text-secondary px-3 py-1 rounded-full">
            {product.type}
          </span>
        </div>
        {product.badge && (
          <Badge className={`mb-3 gap-1 w-fit ${getBadgeClass(product.badge)}`}>
            {getBadgeIcon(product.badge)}
            {product.badge}
          </Badge>
        )}
        <p className="text-muted-foreground leading-relaxed flex-1">{product.description}</p>
        <div className="flex items-center gap-1 mt-6 text-secondary font-heading text-sm font-semibold group-hover:gap-2 transition-all">
          Szczegóły produktu
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </a>
  </motion.div>
);

interface Props {
  slug: string;
}

const CategoryPageContent = ({ slug }: Props) => {
  const { category, products } = getProductsByCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Nie znaleziono kategorii</h1>
          <a href="/" className="text-secondary hover:underline">← Strona główna</a>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 font-heading text-sm tracking-wide"
          >
            <ArrowLeft className="h-4 w-4" />
            Strona główna
          </a>
          <ScrollReveal>
            <div className="w-16 h-16 rounded-lg gradient-accent flex items-center justify-center mb-4">
              <Icon className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {category.title}
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">{category.description}</p>
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

          {category.subcategories && category.subcategories.length > 0 ? (
            category.subcategories.map((sub: ProductCategorySubcategory, si: number) => {
              const subProducts = products.filter((p) => sub.matchTypes.includes(p.type));
              if (subProducts.length === 0) return null;
              return (
                <div key={si} className="mb-16 last:mb-0">
                  <ScrollReveal className="mb-8">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {sub.title}
                    </h3>
                    {sub.description && (
                      <p className="text-muted-foreground">{sub.description}</p>
                    )}
                  </ScrollReveal>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subProducts.map((product, i) => (
                      <ProductCard key={product.code} product={product} index={i} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <ProductCard key={product.code} product={product} index={i} />
              ))}
            </div>
          )}
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
            <a
              href="/#contact"
              className="inline-block bg-secondary text-secondary-foreground font-heading font-bold px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Wyślij zapytanie
            </a>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default CategoryPageContent;
