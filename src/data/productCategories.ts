import { Layers, Droplets, Flame, Package, LucideIcon } from "lucide-react";
import { sectors, Product } from "./sectors";

export interface ProductCategory {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  matchTypes: string[]; // product.type values that belong to this category
}

// Standalone products not tied to any sector
export const standaloneProducts: { categorySlug: string; product: Product }[] = [
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 761.7",
      code: "761.7",
      description:
        "Środek czyszczący do usuwania resztek klejów termotopliwych EVA i PUR z maszyn i narzędzi. Skuteczny w podwyższonej temperaturze.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 761.6",
      code: "761.6",
      description:
        "Czyściwo do konserwacji systemów klejowych – usuwa osady i zanieczyszczenia z dysz, walców i zbiorników klejowych.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 760.3",
      code: "760.3",
      description:
        "Granulat czyszczący do maszyn okleiniarskich i systemów hot melt. Usuwa zwęglone resztki kleju, przedłuża żywotność urządzeń.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 831.0",
      code: "831.0",
      description:
        "Primer do przygotowania powierzchni przed klejeniem reaktywnymi klejami PUR. Poprawia przyczepność na trudnych podłożach takich jak melamina i lakier.",
      type: "Primer",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 842.0",
      code: "842.0",
      description:
        "Primer na bazie wody do aktywacji powierzchni przed okleinowaniem krawędzi. Zwiększa siłę wiązania kleju PUR i EVA na materiałach o niskiej energii powierzchniowej.",
      type: "Primer",
      image: "/placeholder.svg",
    },
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "pur-hot-melts",
    title: "Termotopliwe kleje PUR",
    icon: Layers,
    description:
      "Reaktywne kleje poliuretanowe – idealne do okleinowania krawędzi i laminowania, gwarantujące odporność na temperaturę i wilgoć.",
    matchTypes: ["Termotopliwy PUR"],
  },
  {
    slug: "pvac",
    title: "Kleje PVAc",
    icon: Droplets,
    description:
      "Białe kleje równiez z normą D3/D4 – idealne rozwiązania do montażu mebli i łączenia elementów drewnianych.",
    matchTypes: ["PVAc"],
  },
  {
    slug: "eva-hot-melts",
    title: "Termotopliwe kleje EVA",
    icon: Flame,
    description:
      "Uniwersalne kleje EVA do okleinowania, laminowania i formowania profili.",
    matchTypes: ["Termotopliwe EVA"],
  },
  {
    slug: "montage",
    title: "Kleje i pianki montażowe",
    icon: Package,
    description:
      "Kleje oraz pianki do montażu i łączenia elementów w budownictwie i aranżacji wnętrz – trwałość i niezawodność.",
    matchTypes: ["Montage"],
  },
  {
    slug: "pur",
    title: "Kleje poliuretanowe",
    icon: Layers,
    description:
      "Jedno- i dwukomponentowe kleje poliuretanowe do klejenia konstrukcyjnego, łączenia na mikrowczepy i laminowania.",
    matchTypes: ["PUR"],
  },
  {
    slug: "contact",
    title: "Kleje kontaktowe",
    icon: Package,
    description:
      "Kleje kontaktowe do laminowania HPL/CPL oraz klejenia powierzchniowego w produkcji mebli i paneli.",
    matchTypes: ["Klej kontaktowy"],
  },
  {
    slug: "cleaners",
    title: "Czyściwa",
    icon: Flame,
    description:
      "Środki czyszczące i granulaty do konserwacji maszyn klejowych – usuwanie resztek klejów EVA i PUR z systemów hot melt.",
    matchTypes: ["Czyściwo"],
  },
  {
    slug: "primer",
    title: "Primery",
    icon: Flame,
    description:
      "Środki gruntujące do przygotowania powierzchni przed klejeniem – zwiększają przyczepność na trudnych podłożach.",
    matchTypes: ["Primer"],
  },
];

export interface ProductWithSector extends Product {
  sectorName: string;
  sectorSlug: string;
}

export function getProductsByCategory(slug: string): {
  category: ProductCategory | undefined;
  products: ProductWithSector[];
} {
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return { category: undefined, products: [] };

  const products: ProductWithSector[] = [];
  const seen = new Set<string>();

  // Products from sectors
  for (const sector of sectors) {
    for (const product of sector.products) {
      if (category.matchTypes.includes(product.type) && !seen.has(product.code)) {
        seen.add(product.code);
        products.push({
          ...product,
          sectorName: sector.name,
          sectorSlug: sector.slug,
        });
      }
    }
  }

  // Standalone products (not tied to any sector)
  for (const entry of standaloneProducts) {
    if (entry.categorySlug === slug && !seen.has(entry.product.code)) {
      seen.add(entry.product.code);
      products.push({
        ...entry.product,
        sectorName: "",
        sectorSlug: "",
      });
    }
  }

  return { category, products };
}
