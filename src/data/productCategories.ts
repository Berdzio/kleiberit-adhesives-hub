import { Layers, Zap, TreePine, Hammer, FlaskConical, Paintbrush, SprayCan, Shield, LucideIcon } from "lucide-react";
import { sectors, Product } from "./sectors";

export interface ProductCategorySubcategory {
  title: string;
  description?: string;
  matchTypes: string[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  matchTypes: string[];
  subcategories?: ProductCategorySubcategory[];
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
      name: "KLEIBERIT® 760.3",
      code: "760.3",
      description:
        "Kleiberit 760.3 – specjalistyczny płynny środek czyszczący do wałków i urządzeń nanoszących dyspersyjne kleje PVAc (303.0, 304.1, 322.1, 332.0 i inne). Czyszczenie po zakończeniu pracy lub przerwie produkcyjnej.",
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
        "Kleiberit 761.6 – czyściwo 2w1 do maszyn z termotopliwym PUR: łączy funkcję czyściwa płuczącego (761.7) i intensywnego (826.0). Niebieski granulat, 150–160°C, do zbiorników, pomp, węży i dysz szczelinowych. Op. 6×1,8 kg / 50 kg.",
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
        "Kleiberit 761.7 – czyściwo do przepłukiwania systemów z klejami PUR i EVA HM. Neutralizuje reakcję izocyjanianu, zapobiega zatykaniu dysz. Ta sama temperatura pracy co klej PUR. Op. 12×0,25 kg / 1,5 kg / 15 kg / 20 kg.",
      type: "Czyściwo",
      image: "/products/7617.jpg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 761.8",
      code: "761.8",
      description:
        "Kleiberit 761.8 – specjalistyczny proszek do czyszczenia walców w maszynach flat lamination przetwarzających PUR HM. Proszek roztopić w zbiorniku, uruchomić bieg wsteczny walca – resztki kleju usuwane efektywnie. Op. wiadro 20 kg.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 820.0",
      code: "820.0",
      description:
        "Kleiberit 820.0 – płynny rozcieńczalnik i czyściwo PUR bez toluenu. Usuwa nieutwardzone ciekłe kleje PUR, CR i STP z narzędzi i urządzeń. Do wszystkich klejów PUR 1K i 2K. Op. 4,5 / 22 kg.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 821.0",
      code: "821.0",
      description:
        "Kleiberit 821.0 – płynny środek czyszczący do urządzeń nanoszących dyspersje PVAc i kleje PUR. Do wałków, dysz i zbiorników nanoszących – alternatywa lub uzupełnienie 820.0.",
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
        "Kleiberit 823.3 – czyściwo PUR w aerozolu do pistoletów montażowych (pianki 535.0, 536.0, 585.5) i aplikatorów ciekłego PUR. Błyskawiczne czyszczenie zaciśniętych zaworów i dysz. Op. 12×500 ml.",
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
        "Kleiberit 826.0 – intensywny środek czyszczący (niebieski) do usuwania nawet utwardzonych i zeszklałych pozostałości PUR HM ze zbiorników, dysz i pomp. Temp. 150–160°C. Działa tam, gdzie 761.7 nie wystarcza.",
      type: "Czyściwo",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 827.0",
      code: "827.0",
      description:
        "Kleiberit 827.0 – specjalistyczny środek czyszczący do zbiorników okleiniarek i maszyn przetwarzających termotopliwe kleje EVA (773.3, 788.x, 743.x). Granulki do stopienia i przepłukania zbiornika. Op. 4,5 kg.",
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
        "Kleiberit 831.0 – solwentowy primer fluorescencyjny (UV) do opłaszczowywania profili PVC i aluminium klejami PUR HM. Zużycie 20–60 g/m², niepalny, mrozoodporny, trwałość 2 lata. Certyfikat RAL GZ 716. Op. 1 / 4,5 / 35 / 250 kg.",
      type: "Primer",
      badge: "RAL GZ 716",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 831.4",
      code: "831.4",
      description:
        "Kleiberit 831.4 – specjalistyczny primer solwentowy wyłącznie do opłaszczowywania profili foliami akrylowymi (PMMA). Nanosić w cienkiej warstwie, całkowicie wysuszyć przed strefą klejenia. Kompatybilny z klejami 704.0, 704.3, 704.5.",
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
        "Kleiberit 831.8 – fluorescencyjny primer solwentowy do opłaszczowywania profili PVC okiennych i metalowych klejami PUR HM. Niższe zużycie niż 831.0 (10–15 g/m²), trwałość 6 miesięcy, czyściwo 821.0. Wrażliwy na mróz (min. +5°C). Op. 4,5 / 35 / 250 kg.",
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
        "Kleiberit 842.0 – primer Low VOC na bazie polimeru do opłaszczowywania profili PVC klejami PUR HM. Bez chlorowanych węglowodorów, fluorescencyjny (UV), zużycie 5–10 g/m², profil podgrzać do 35–40°C. Certyfikat RAL GZ 716, trwałość 12 mies. Op. 4,5 / 25 kg.",
      type: "Primer",
      badge: "RAL GZ 716",
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
        "Kleiberit seria 501 – jednokomponentowe kleje PUR klasy D4 do drewna, materiałów drewnopochodnych i mineralnych. Cztery warianty: 501.0 (klasyk, 20–25 min), 501.4 (montaż, 4 min), 501.6 (formowanie, 70 min), 501.8 (szybki, 10 min). Zgodne z WATT 91.",
      type: "PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 508.5",
      code: "508.5",
      description:
        "Kleiberit 508.5 – jednokomponentowy klej izocyjanianowy do paneli sandwich (EPS, XPS, pianka PUR + blacha), materiałów drewnopochodnych i drzwi p-poż. PCS ok. 15 MJ/kg, lepkość 8500 mPa·s, czas docisku od 20 min (60°C). Op. 7–1400 kg.",
      type: "PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.4",
      code: "510.3.4",
      description:
        "Kleiberit seria 510.3 – certyfikowane kleje 1K PUR do nośnych elementów drewnianych: klejonki (BSH), drewna KVH i CLT wg EN 15425:2017. Trzy warianty czasu oczekiwania: .4 (4 min), .15 (15 min), .30 (30 min). D4, WATT 91. Op. 0,8–1100 kg.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.15",
      code: "510.3.15",
      description:
        "Kleiberit seria 510.3 – certyfikowane kleje 1K PUR do nośnych elementów drewnianych: klejonki (BSH), drewna KVH i CLT wg EN 15425:2017. Trzy warianty czasu oczekiwania: .4 (4 min), .15 (15 min), .30 (30 min). D4, WATT 91. Op. 0,8–1100 kg.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.30",
      code: "510.3.30",
      description:
        "Kleiberit seria 510.3 – certyfikowane kleje 1K PUR do nośnych elementów drewnianych: klejonki (BSH), drewna KVH i CLT wg EN 15425:2017. Trzy warianty czasu oczekiwania: .4 (4 min), .15 (15 min), .30 (30 min). D4, WATT 91. Op. 0,8–1100 kg.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 541.6",
      code: "541.6",
      description:
        "Kleiberit 541.6 – 2K PUR do klejenia styropianu/pianki PUR z blachą, GRP i płytami sandwich. Do elementów izolacyjnych do +90 °C i filtrów olejowych/diesel. Mieszanka A:B = 4:1, żywotność 45 min, Shore D 80. Op. 10–250 kg.",
      type: "PUR",
      image: "/placeholder.svg",
    },
  },
  // ── Montażowe (standalone) ──
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
  // ── Pianki montażowe (standalone) ──
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 535.0 SupraFoam",
      code: "535.0",
      description:
        "Kleiberit 535.0 SupraFoam – dwukomponentowa pianka PUR do montażu ościeżnic drzwi i izolacji okien. Bez gazu napędowego, bez naddatku, utwardza się niezależnie od wilgoci w 15–20 min. Klejowalna po 1 min, tnalna po 3–5 min, rozporki po 20 min. EC1 plus R, B2. Op. 16×250 g.",
      type: "Pianka montażowa",
      badge: "EMICODE EC1",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 536.0 StairMaster",
      code: "536.0",
      description:
        "Kleiberit 536.0 StairMaster – ekspansywna 2K pianka klejąca PUR do montażu stopni schodowych, progów drzwi i parapetów z drewna, kamienia lub metalu. Obciążalna po 20 min, bez gazu napędowego, bez naddatku, B2. Op. 125 g / 250 g.",
      type: "Pianka montażowa",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 585.5",
      code: "585.5",
      description:
        "Kleiberit 585.5 – trudnopalna 1K pianka PUR klasy B wg EN 13501-1 (różowa) do uszczelnień ognioodpornych między masywnym materiałem mineralnym lub metalowym. Gęstość 16 kg/m³, λ=0,036 W/mK, odporność –40 do +90°C, wydajność ok. 40–45 l (750 ml). Op. 12×750 ml.",
      type: "Pianka montażowa",
      badge: "Ognioodporny",
      image: "/placeholder.svg",
    },
  },
  // ── Kontaktowe (standalone) ──
  {
    categorySlug: "contact",
    product: {
      name: "KLEIBERIT® 120.0 Supra-Gel",
      code: "120.0",
      description:
        "Kleiberit 120.0 Supra-Gel – żelowy klej kontaktowy polychloroprenowy do szpachli. Do klejenia fornirów, dekoracyjnych laminatów warstwowych, folii metalowych i korka z płytami drewnopochodnymi. Min. temp. pracy +15 °C. Op. 0,7–25 kg.",
      type: "Klej kontaktowy",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "contact",
    product: {
      name: "KLEIBERIT® 152.5",
      code: "152.5",
      description:
        "Kleiberit 152.5 – niskowiskozowy klej kontaktowy CR do natrysku (dysza 1,3–1,7 mm, 3–4 bar). Pianki, tkaniny, wykładziny PVC i linoleum, papier, postforming. Lepkość 600 mPa·s, –30 do +80°C. Z utwardzaczem 801.0: wytrzymałość po 3 dniach. Op. 4,5–170 kg.",
      type: "Klej kontaktowy",
      image: "/placeholder.svg",
    },
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "pur-hot-melts",
    title: "Termotopliwe kleje PUR",
    icon: Zap,
    description:
      "Reaktywne kleje poliuretanowe – idealne do okleinowania krawędzi i laminowania, gwarantujące odporność na temperaturę i wilgoć.",
    matchTypes: ["Termotopliwy PUR"],
  },
  {
    slug: "pvac",
    title: "Kleje PVAc",
    icon: TreePine,
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
    icon: Hammer,
    description:
      "Kleje oraz pianki do montażu i łączenia elementów w budownictwie i aranżacji wnętrz – trwałość i niezawodność.",
    matchTypes: ["Montaż", "Pianka montażowa"],
    subcategories: [
      {
        title: "Pianki montażowe PUR",
        description: "Dwu- i jednokomponentowe pianki PUR do montażu ościeżnic, schodów oraz uszczelnień ognioodpornych.",
        matchTypes: ["Pianka montażowa"],
      },
      {
        title: "Kleje montażowe",
        description: "Elastyczne kleje STP i PUR do klejenia bez gwoździ – listwy, lustra, panele, ceramika, drewno i metal.",
        matchTypes: ["Montaż"],
      },
    ],
  },
  {
    slug: "pur",
    title: "Kleje poliuretanowe",
    icon: FlaskConical,
    description:
      "Jedno- i dwukomponentowe kleje poliuretanowe do klejenia konstrukcyjnego, łączenia na mikrowczepy i laminowania.",
    matchTypes: ["PUR"],
  },
  {
    slug: "contact",
    title: "Kleje kontaktowe",
    icon: Paintbrush,
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
    icon: Shield,
    description:
      "Środki gruntujące do przygotowania powierzchni przed klejeniem – zwiększają przyczepność na trudnych podłożach.",
    matchTypes: ["Primer"],
  },
];

export interface ProductWithSector extends Product {
  sectorName: string;
  sectorSlug: string;
}

export interface ProductSectorOccurrence {
  product: Product;
  sectorName: string;
  sectorSlug: string;
}

export function getProductByCode(code: string): {
  product: Product | undefined;
  sectorOccurrences: ProductSectorOccurrence[];
  standaloneEntry: { categorySlug: string; product: Product } | undefined;
  category: ProductCategory | undefined;
} {
  const sectorOccurrences: ProductSectorOccurrence[] = [];
  for (const sector of sectors) {
    for (const p of sector.products) {
      if (p.code === code) {
        sectorOccurrences.push({ product: p, sectorName: sector.name, sectorSlug: sector.slug });
      }
    }
  }
  const standaloneEntry = standaloneProducts.find((e) => e.product.code === code);
  const product = standaloneEntry?.product ?? sectorOccurrences[0]?.product;
  const category = product
    ? productCategories.find((c) => c.matchTypes.includes(product.type))
    : undefined;
  return { product, sectorOccurrences, standaloneEntry, category };
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
