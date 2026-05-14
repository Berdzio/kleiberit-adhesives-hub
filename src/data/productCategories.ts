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
  // ── PVAc (standalone) ──
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 304.4 EPI",
      code: "304.4",
      description:
        "Specjalistyczny klej EPI D4 do drewna egzotycznego (teak, merbau, bangkirai). Z utwardzaczem 808.0 (15%), D4, WATT 91, BRL 2339, JAIA F****. Do schodów zewnętrznych i tarasów.",
      type: "PVAc",
      image: "/placeholder.svg",
      badge: "EPI · D4",
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 316.0",
      code: "316.0",
      description:
        "Wyspecjalizowany klej PVAc do kołków i miniwczepów. Ultra-niska lepkość 470 mPa·s – dysze nie zatykają się, doskonałe właściwości natryskowe. Do automatów kołkowych, łatarek sęków. Op. 4,5–26 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 322.1",
      code: "322.1",
      description:
        "Specjalna dyspersja PVAc do fornirowania płyt wiórowych i stolarskich oraz klejenia HPL, folii papierowych i laminatów. Czas otwarty do 6 min, bez EU oznakowania. Op. 34 / 130 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 323.0",
      code: "323.0",
      description:
        "Wielozadaniowy klej PVAc D2 do fug, kołków, obrzeży ręcznych, HPL, korpusów mebli i postformingu. Wysoka wytrzymałość początkowa, fuga bezbarwna. Mrozoodporny do –25°C. Op. 10–130 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
    },
  },
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
      name: "KLEIBERIT® 702.5.50 ME",
      code: "702.5.50",
      description:
        "Mikroemisyjny klej PUR do okleinowania profili wewnętrznych foliami PVC i papierami dekoracyjnymi. MDI <0,1%, bez obowiązkowego oznakowania UE. Odporność do +140 °C i –40 °C. Posuw 20–50 m/min.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 702.8.49",
      code: "702.8.49",
      description:
        "Reaktywny klej PUR do okleinowania profili z MDF i PVC foliami PVC i papierami dekoracyjnymi, w zastosowaniach wewnętrznych. Odporność do +150 °C i –30 °C, posuw 20–50 m/min, op. 20–190 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 704.0 Supramelt PUR",
      code: "704.0",
      description:
        "Reaktywny klej PUR do opłaszczowywania profili PVC i aluminium foliami PVC, akrylanowymi i fornirem. Odporność od –40 °C do +150 °C, atest RAL GZ 716/1. Temp. pracy 120–140 °C. Do zastosowań zewnętrznych.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "RAL GZ 716/1",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 704.5",
      code: "704.5",
      description:
        "Reaktywny PUR do opłaszczowywania profili PVC i aluminium foliami PVC, akrylowymi i fornirami. Atest RAL GZ 716, odporność –40 °C do +150 °C, temp. pracy 120–140 °C, posuw 5–40 m/min. Op. 0,3–200 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "RAL GZ 716",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 707.9.51 ME",
      code: "707.9.51",
      description:
        "Reaktywny klej PUR ME do okleinowania obrzeży ABS, PVC, HPL, CPL i forniru – wariant biały. Odporność do +150 °C i –30 °C, stabilność w stapialniku min. 24 h. Idealny do białych i jasnych obrzeży.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 707.9.58 ME",
      code: "707.9.58",
      description:
        "Reaktywny klej PUR ME do okleinowania obrzeży ABS, PVC, HPL, CPL i forniru – wariant transparentny. Odporność do +150 °C i –30 °C. Uniwersalny – niewidoczna spoina pasuje do każdego koloru obrzeża.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 709.3.50 ME",
      code: "709.3.50",
      description:
        "Mikroemisyjny klej PUR do kaszerowania frontów foliami wysokopołyskowymi. Wyjątkowo niska lepkość (8 000 mPa·s), ultra-gładka spoina, czas otwarty <3 min, MDI <0,1%. Do frontów i płyt meblowych.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 711.0",
      code: "711.0",
      description:
        "Reaktywny klej PUR do kaszerowania płyt meblowych foliami z tworzyw sztucznych ABS, PET i innymi materiałami trudnymi do zwilżenia. Wysoka wytrzymałość, odporność na wilgoć i ciepło. Do maszyn flat lamination.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 711.0.02 ME",
      code: "711.0.02",
      description:
        "Reaktywny klej PUR do kaszerowania powierzchni transparentnymi foliami z tworzyw sztucznych. Temp. pracy 110–130 °C (maks.!), stabilność UV, MDI <0,1%. Lepkość 8 000 mPa·s. Op. 20–50 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
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
      name: "KLEIBERIT® 774.4",
      code: "774.4",
      description:
        "Termotopliwy klej EVA do okleinowania obrzeży. Średnia lepkość, wysoka siła wiązania, granulat kości słoniowej lub biały. Idealny do ręcznych i wolnobieżnych okleiniarek. Opakowanie 25 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 743.6",
      code: "743.6",
      description:
        "Termotopliwy klej EVA do okleinowania listw, profili i płyt MDF/wiórowych żywicznymi foliami dekoracyjnymi. Do maszyn profile wrapping. Wysoka wytrzymałość początkowa, czysta obróbka.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 743.7",
      code: "743.7",
      description:
        "Wysoce płynny klej EVA do okleinowania profili cienkimi foliami papierowymi i kaszerowania pianek tekstyliami. Posuw do 50 m/min, lepkość 3500 mPa·s (180 °C). Op. 20 kg / 750 kg.",
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
      name: "KLEIBERIT® 566.4",
      code: "566.4",
      description:
        "Kleiberit 566 Supracraft – trwale elastyczny 1K PUR klej i uszczelniacz do metali, drewna, betonu, ceramiki i tworzyw. Shore A 45, rozciąganie >600%, odporność –40 do +90°C, IMO FTP, klasa E. Szary/czarny/biały. Op. 300 ml / 600 ml.",
      type: "Montaż",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 566.5",
      code: "566.5",
      description:
        "Kleiberit 566 Supracraft – trwale elastyczny 1K PUR klej i uszczelniacz do metali, drewna, betonu, ceramiki i tworzyw. Shore A 45, rozciąganie >600%, odporność –40 do +90°C, IMO FTP, klasa E. Szary/czarny/biały. Op. 300 ml / 600 ml.",
      type: "Montaż",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 568.1",
      code: "568.1",
      description:
        "Kleiberit 568 Supracon – ekstremalnie szybki 1K PUR klej montażowy D4 i WATT 91. Drewno, metal, beton, ceramika, PVC, GRP, styropian. Czas otwarty ok. 5 min, czas docisku 15–30 min, od +7°C. Bez rozpuszczalników. Kartusz 310/400 ml.",
      type: "Montaż",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 601.1",
      code: "601.1",
      description:
        "Kleiberit 601.1 – elastyczny klej STP 1K do montażu luster (DIN EN 1036), szkła, drewna i metali wewnątrz i na zewnątrz. Shore A 73, czas kożuszenia ok. 8 min, VOC A+, EC1 plus R. 4 kolory. Op. 12×280 ml.",
      type: "Montaż",
      image: "/placeholder.svg",
      badge: "EC1 plus R",
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 584.0",
      code: "584.0",
      description:
        "Kleiberit 584.0 – elastyczny klej montażowy STP 1K bez izocyjanianów, ftalanów, silikonu i rozpuszczalników. Shore A 50, czas kożuszenia 25 min, bez obowiązkowego oznakowania EU. Listwy, panele, ceramika, drewno. Biały/czarny. Op. 300/600 ml.",
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
