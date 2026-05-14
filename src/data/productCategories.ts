import { Layers, Droplets, Flame, Package, Pipette, SprayCan, Sparkles, HandMetal, LucideIcon } from "lucide-react";
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
  // ── Czyściwa ──
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 761.6",
      code: "761.6",
      description:
        "Czyściwo do konserwacji systemów klejowych – usuwa osady i zanieczyszczenia z dysz, walców i zbiorników klejowych.",
      type: "Czyściwo",
      image: "/products/7616.jpg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 761.7",
      code: "761.7",
      description:
        "Środek czyszczący w granulacie do usuwania resztek klejów termotopliwych EVA i PUR z maszyn i narzędzi. Skuteczny w podwyższonej temperaturze.",
      type: "Czyściwo",
      image: "/products/7617.jpg",
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
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 820",
      code: "820",
      description:
        "Środek czyszczący do usuwania utwardzonych resztek klejów PUR z maszyn i narzędzi. Skuteczne czyszczenie bez uszkadzania powierzchni.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 826.0",
      code: "826.0",
      description:
        "Środek czyszczący do systemów klejowych hot melt. Usuwa pozostałości klejów EVA i PUR, utrzymując maszyny w optymalnym stanie.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 823.3",
      code: "823.3",
      description:
        "Preparat czyszczący do maszyn okleiniarskich i aplikatorów klejowych. Rozpuszcza i usuwa utwardzone resztki kleju.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 827",
      code: "827",
      description:
        "Uniwersalny środek czyszczący do konserwacji urządzeń klejowych. Zapobiega zatykaniu dysz i zapewnia równomierną aplikację kleju.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  // ── Primery ──
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
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 831.8",
      code: "831.8",
      description:
        "Primer o podwyższonej reaktywności do przygotowania powierzchni przed klejeniem PUR. Szczególnie skuteczny na podłożach lakierowanych i foliowanych.",
      type: "Primer",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 821.0",
      code: "821.0",
      description:
        "Środek gruntujący do zwiększenia przyczepności klejów na powierzchniach metalowych, szklanych i z tworzyw sztucznych. Szybkoschnący i łatwy w aplikacji.",
      type: "Primer",
      image: "/placeholder.svg",
    },
  },
  // ── PUR termotopliwe (standalone) ──
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 702.5.49",
      code: "702.5.49",
      description:
        "Reaktywny klej PUR hot melt do wrappingu profili okiennych. Doskonała przyczepność do folii PVC i forniru na profilach drewnianych i aluminiowych.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 702.8.49",
      code: "702.8.49",
      description:
        "Termotopliwy klej PUR do wrappingu profili okiennych o wydłużonym czasie otwartym. Elastyczna spoina odporna na warunki atmosferyczne.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 709.3.50",
      code: "709.3.50",
      description:
        "Reaktywny klej PUR do okleinowania krawędzi i laminowania płaskiego. Wysoka odporność termiczna i wyjątkowa jakość spoiny.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "EMICODE EC1",
    },
  },
  // ── EVA termotopliwe (standalone) ──
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 788.7",
      code: "788.7",
      description:
        "Klej termotopliwy EVA do obrzeży ABS, PVC, poliestru, forniru i papieru. Odporność do +100 °C i –30 °C, długi czas otwarty, prędkość posuwu 5–20 m/min. Granulat 5–25 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 779.6",
      code: "779.6",
      description:
        "Klej EVA hot melt do okleinowania krawędzi – ekonomiczna opcja wypełniona. Dobra przyczepność przy niższym koszcie aplikacji.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 774.4",
      code: "774.4",
      description:
        "Termotopliwy klej EVA do okleinowania obrzeży. Średnia lepkość, wysoka siła wiązania, granulat kości słoniowej lub biały. Idealny do ręcznych i wolnobieżnych okleiniarek. Opakowanie 25 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  // ── PUR (standalone) ──
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 501.4",
      code: "501.4",
      description:
        "Jednokomponentowy klej poliuretanowy do klejenia drewna i materiałów drewnopochodnych. Wodoodporna spoina o wysokiej wytrzymałości mechanicznej.",
      type: "PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 509.5",
      code: "509.5",
      description:
        "Klej PUR do produkcji paneli sandwiczowych i klejenia warstwowego. Wysoka wytrzymałość spoiny i doskonała przyczepność do różnych materiałów rdzeniowych.",
      type: "PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 541",
      code: "541",
      description:
        "Dwukomponentowy klej poliuretanowy do klejenia konstrukcyjnego i laminowania. Wysoka wytrzymałość mechaniczna i odporność na warunki atmosferyczne.",
      type: "PUR",
      image: "/placeholder.svg",
    },
  },
  // ── Montażowe (standalone) ──
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 585.5",
      code: "585.5",
      description:
        "Pianka montażowa ognioodporna do wypełniania i uszczelniania przejść instalacyjnych. Spełnia wymagania klasyfikacji ogniowej.",
      type: "Montaż",
      image: "/placeholder.svg",
      badge: "Ognioodporny",
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 545.5",
      code: "545.5",
      description:
        "Klej montażowy do trwałego łączenia elementów konstrukcyjnych. Wysoka przyczepność do drewna, betonu i metalu.",
      type: "Montaż",
      image: "/placeholder.svg",
    },
  },
  // ── Kontaktowe (standalone) ──
  {
    categorySlug: "contact",
    product: {
      name: "KLEIBERIT® 120",
      code: "120",
      description:
        "Klej kontaktowy na bazie rozpuszczalnika do laminowania HPL i CPL. Natychmiastowe wiązanie po dociśnięciu i wysoka odporność termiczna.",
      type: "Klej kontaktowy",
      image: "/placeholder.svg",
    },
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "pur-hot-melts",
    title: "Termotopliwe kleje PUR",
    icon: Flame,
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
    icon: Layers,
    description:
      "Uniwersalne kleje EVA do okleinowania, laminowania i formowania profili.",
    matchTypes: ["Termotopliwe EVA"],
  },
  {
    slug: "montage",
    title: "Kleje i pianki montażowe",
    icon: HandMetal,
    description:
      "Kleje oraz pianki do montażu i łączenia elementów w budownictwie i aranżacji wnętrz – trwałość i niezawodność.",
    matchTypes: ["Montaż"],
  },
  {
    slug: "pur",
    title: "Kleje poliuretanowe",
    icon: Package,
    description:
      "Jedno- i dwukomponentowe kleje poliuretanowe do klejenia konstrukcyjnego, łączenia na mikrowczepy i laminowania.",
    matchTypes: ["PUR"],
  },
  {
    slug: "contact",
    title: "Kleje kontaktowe",
    icon: Pipette,
    description:
      "Kleje kontaktowe do laminowania HPL/CPL oraz klejenia powierzchniowego w produkcji mebli i paneli.",
    matchTypes: ["Klej kontaktowy"],
  },
  {
    slug: "cleaners",
    title: "Czyściwa",
    icon: SprayCan,
    description:
      "Środki czyszczące i granulaty do konserwacji maszyn klejowych – usuwanie resztek klejów EVA i PUR z systemów hot melt.",
    matchTypes: ["Czyściwo"],
  },
  {
    slug: "primer",
    title: "Primery",
    icon: Sparkles,
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
