import { Layers, Droplets, Flame, Package, LucideIcon } from "lucide-react";
import { sectors, Product } from "./sectors";

export interface ProductCategory {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  matchTypes: string[]; // product.type values that belong to this category
}

export const productCategories: ProductCategory[] = [
  {
    slug: "pur-hot-melts",
    title: "Termotopliwe kleje PUR",
    icon: Layers,
    description:
      "Reaktywne kleje poliuretanowe – idealne do okleinowania krawędzi i laminowania, gwarantujące odporność na temperaturę i wilgoć.",
    matchTypes: ["PUR Hot Melt", "Termotopliwe PUR"],
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
    matchTypes: ["EVA Hot Melt"],
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
      "One and two-component polyurethane adhesives for structural bonding, finger jointing, and lamination.",
    matchTypes: ["PUR"],
  },
  {
    slug: "contact",
    title: "Kleje kontaktowe",
    icon: Package,
    description:
      "Contact adhesives for HPL/CPL lamination and surface bonding in furniture and panel production.",
    matchTypes: ["Contact Adhesive"],
  },
  {
    slug: "cleaners",
    title: "Czyściwa",
    icon: Flame,
    description:
      "Versatile ethylene vinyl acetate hot melt adhesives for edge banding, flat lamination, and profile wrapping.",
    matchTypes: ["EVA Hot Melt"],
  },
  {
    slug: "primer",
    title: "Primery",
    icon: Flame,
    description:
      "Versatile ethylene vinyl acetate hot melt adhesives for edge banding, flat lamination, and profile wrapping.",
    matchTypes: ["EVA Hot Melt"],
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

  return { category, products };
}
