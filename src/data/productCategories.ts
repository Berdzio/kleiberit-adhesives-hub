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
    title: "PUR Hot Melts",
    icon: Layers,
    description:
      "Reactive polyurethane adhesives for high-performance edge banding and lamination with exceptional heat and moisture resistance.",
    matchTypes: ["PUR Hot Melt"],
  },
  {
    slug: "pvac",
    title: "PVAc Adhesives",
    icon: Droplets,
    description:
      "White glues and D3/D4 adhesives for furniture, joinery, and wood assembly applications. Fast setting, strong bonds.",
    matchTypes: ["PVAc"],
  },
  {
    slug: "eva-hot-melts",
    title: "EVA Hot Melts",
    icon: Flame,
    description:
      "Versatile ethylene vinyl acetate hot melt adhesives for edge banding, flat lamination, and profile wrapping.",
    matchTypes: ["EVA Hot Melt"],
  },
  {
    slug: "montage",
    title: "Montage Adhesives",
    icon: Package,
    description:
      "High-strength montage adhesives for bonding, fixing, and assembly applications in construction and interior finishing.",
    matchTypes: ["Montage"],
  },
  {
    slug: "pur",
    title: "PUR Adhesives",
    icon: Layers,
    description:
      "One and two-component polyurethane adhesives for structural bonding, finger jointing, and lamination.",
    matchTypes: ["PUR"],
  },
  {
    slug: "contact",
    title: "Contact Adhesives",
    icon: Package,
    description:
      "Contact adhesives for HPL/CPL lamination and surface bonding in furniture and panel production.",
    matchTypes: ["Contact Adhesive"],
  },
  {
    slug: "stp",
    title: "STP Adhesives",
    icon: Droplets,
    description:
      "Silane-terminated polymer adhesives for elastic bonding applications including flooring installation.",
    matchTypes: ["STP"],
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
