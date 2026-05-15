export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetails {
  body: string;
  specs?: ProductSpec[];
  applications?: string;
  note?: string;
  warning?: string;
  keyFeature?: string;
}

export interface Product {
  name: string;
  code: string;
  description: string;
  type: string;
  image?: string;
  badge?: string;
  details?: ProductDetails;
}

export interface ProductSubcategory {
  title: string;
  description: string;
  matchTypes: string[];
}

export interface Sector {
  slug: string;
  name: string;
  icon: string;
  headline: string;
  description: string;
  products: Product[];
  subcategories?: ProductSubcategory[];
}

export const sectors: Sector[] = [
  {
    slug: "furnitures",
    name: "Meble",
    icon: "/icons/furnitures.png",
    headline: "Kleje do produkcji mebli",
    description:
      "Kleje przemysłowe wspierające wszystkie etapy produkcji mebli — montaż korpusów, okleinowanie krawędzi i laminowanie powierzchni HPL.",
    subcategories: [
      {
        title: "Kleje białe",
        description: "Kleje PVAc do montażu korpusów meblowych, fornirowania płyt i okleinowania HPL.",
        matchTypes: ["PVAc"],
      },
      {
        title: "Oklejanie obrzeży",
        description: "Termotopliwe kleje EVA i PUR do okleinowania krawędzi płyt meblowych w okleiniarce.",
        matchTypes: ["Termotopliwe EVA", "Termotopliwy PUR"],
      },
      {
        title: "Kleje kontaktowe",
        description: "Kleje kontaktowe CR do laminowania blatów HPL, okleinowania postforming i tapicerowania pianek.",
        matchTypes: ["Klej kontaktowy"],
      },
    ],
    products: [
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Klej PVAc D3 (1K) lub D4 (z utwardzaczem 303.5) do montażu korpusów meblowych, klejenia obrzeży ręcznych i okleinowania HPL. Czas otwarty 6–10 min, certyfikaty IMO i FDA. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 314.3",
        code: "314.3",
        description: "Jednokomponentowy klej PVAc D4 do mebli – bez konieczności dodawania utwardzacza. Transparentna fuga, czas otwarty 4–7 min, certyfikaty D4, WATT 91, BRL 2339. Min. temp. +15 °C. Op. 4,5–1050 kg.",
        type: "PVAc",
        image: "/products/314.jpg",
        badge: "D4",
      },
      {
        name: "KLEIBERIT® 332.0",
        code: "332.0",
        description: "Klej PVAc D2 do fornirowania płyt meblowych i laminowania HPL. Czas otwarty do 25 min, ilość nanoszenia 80–150 g/m², certyfikat IMO. Gotowy do użycia. Op. 10–1000 kg.",
        type: "PVAc",
        image: "/products/332.jpg",
        badge: "IMO",
      },
      {
        name: "KLEIBERIT® 773.3",
        code: "773.3",
        description: "Klej termotopliwy EVA do automatycznego okleinowania krawędzi płyt meblowych – CPL, PVC, ABS, poliester i fornir. Temp. pracy 170–200 °C, posuw 10–30 m/min. Granulat naturalny lub biały. Op. 3–20 kg.",
        type: "Termotopliwe EVA",
        image: "/products/7733.jpg",
      },
      {
        name: "KLEIBERIT® 788.3",
        code: "788.3",
        description: "Klej termotopliwy EVA do ręcznego okleinowania obrzeży mebli. Niska temperatura pracy od 130 °C, bardzo długi czas otwarty, odporność od –30 °C do +90 °C. Granulat 25 kg: biały, kość słoniowa, czarny.",
        type: "Termotopliwe EVA",
        image: "/products/7883.jpg",
      },
      {
        name: "KLEIBERIT® 707.9.50 ME",
        code: "707.9.50",
        description: "Reaktywny klej PUR ME do automatycznego okleinowania obrzeży płyt meblowych – ABS, PVC, HPL, CPL i fornir. Odporność do +150 °C i –30 °C, stabilność w stapialniku min. 24 h. Op. 6×2 kg / 20 kg.",
        type: "Termotopliwy PUR",
        image: "/products/707950.jpg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 706.2.50 ME",
        code: "706.2.50",
        description: "Mikroemisyjny klej PUR do kaszerowania frontów i płyt meblowych foliami PVC, ABS, PET i PMMA. Czas otwarty poniżej 4 min, lepkość 12 000 mPa·s (120 °C), temp. pracy 120–140 °C. Kość słoniowa.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 114.5",
        code: "114.5",
        description: "Klej kontaktowy CR bez toluenu do laminowania blatów i frontów meblowych HPL. Z utwardzaczem H801: odporność do ponad 100 °C – idealny do blatów kuchennych. Czas odpowietrzania 10–20 min. Op. 0,7–25 kg.",
        type: "Klej kontaktowy",
        image: "/products/114.jpg",
      },
      {
        name: "KLEIBERIT® 152.0",
        code: "152.0",
        description: "Niskowiskozowy klej kontaktowy CR do natrysku – klejenie pianek tapicerskich i tkanin w produkcji mebli tapicerowanych oraz postforming. Dysza 1,3–1,7 mm, 3–4 bar. Lepkość 600 mPa·s. Op. 4,5–170 kg.",
        type: "Klej kontaktowy",
        image: "/products/152.jpg",
      },
    ],
  },
  {
    slug: "doors",
    name: "Drzwi",
    icon: "/icons/doors.png",
    headline: "Kleje do produkcji drzwi",
    description:
      "Kleje do produkcji drzwi wewnętrznych i zewnętrznych — klejenie ram, ościeżnic i skrzydeł oraz okleinowanie obrzeży.",
    products: [
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Klej PVAc D3 (1K) lub D4 (z utwardzaczem 303.5) do produkcji ram drzwiowych – klejenie ościeżnic, skrzydeł i elementów drewnianych. Czas otwarty 6–10 min, certyfikaty IMO i FDA. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 304.1",
        code: "304.1",
        description: "Klej PVAc D4 2K do produkcji drzwi zewnętrznych – klejenie ram, ościeżnic i złączy narażonych na wilgoć. Z utwardzaczem 304.3, żywotność mieszanki 7 dni, czas otwarty 6–10 min. Atesty D4, WATT 91.",
        type: "PVAc",
        image: "/products/303.jpg",
        badge: "D4",
      },
      {
        name: "KLEIBERIT® 501.0",
        code: "501.0",
        description: "Klej 1K PUR D4 do produkcji drzwi drewnianych – klejenie ram, płycin i złączy konstrukcyjnych. Czas otwarty 20–25 min, certyfikat IMO. D4, WATT 91.",
        type: "PUR",
        image: "/products/501.jpg",
        badge: "IMO",
      },
      {
        name: "KLEIBERIT® 707.9.50 ME",
        code: "707.9.50",
        description: "Reaktywny klej PUR ME do okleinowania obrzeży skrzydeł drzwiowych – ABS, PVC, HPL, CPL, fornir. Odporność do +150 °C i –30 °C, stabilność w stapialniku min. 24 h. MDI <0,1%.",
        type: "Termotopliwy PUR",
        image: "/products/707950.jpg",
        badge: "Mikroemisyjny",
      },
    ],
  },
  {
    slug: "windows",
    name: "Okna",
    icon: "/icons/window.png",
    headline: "Kleje do produkcji okien",
    description:
      "Kleje D4 odporne na warunki atmosferyczne do produkcji okien drewnianych i drewniano-aluminiowych — złącza klinowe, klejenie ram i sklejeń powierzchniowych.",
    products: [
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Klej PVAc D3 (1K) lub D4 (z utwardzaczem 303.5) do produkcji ram okiennych i łączenia kantówek. Czas otwarty 6–10 min, certyfikaty IMO i FDA. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 304.1",
        code: "304.1",
        description: "Klej PVAc D4 2K do produkcji okien drewnianych i drewniano-aluminiowych – klejenie ram i złączy klinowych. Z utwardzaczem 304.3, żywotność mieszanki 7 dni, czas otwarty 6–10 min. Atesty D4, WATT 91.",
        type: "PVAc",
        image: "/products/303.jpg",
        badge: "D4",
      },
      {
        name: "KLEIBERIT® 501.0",
        code: "501.0",
        description: "Klej 1K PUR D4 do produkcji okien drewnianych – klejenie ram, złączy klinowych i sklejeń powierzchniowych. Czas otwarty 20–25 min, certyfikat IMO. D4, WATT 91.",
        type: "PUR",
        image: "/products/501.jpg",
        badge: "IMO",
      },
      {
        name: "KLEIBERIT® 501.6",
        code: "501.6",
        description: "Klej 1K PUR D4 o wydłużonym czasie otwartym (70 min) do formowania ram okiennych i sklejeń powierzchniowych dużych elementów stolarki okiennej. Czas docisku 6–7 h. D4, WATT 91.",
        type: "PUR",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 501.8",
        code: "501.8",
        description: "Szybki klej 1K PUR D4 (czas otwarty 10 min) do produkcji okien – złącza klinowe i klejenie ram przy krótszym cyklu prasowania. Czas docisku od 30 min. D4, WATT 91.",
        type: "PUR",
        image: "/placeholder.svg",
      },
    ],
  },
  {
    slug: "half-products",
    name: "Półfabrykaty",
    icon: "/icons/half-products.png",
    headline: "Kleje do produkcji półfabrykatów",
    description:
      "Kleje przemysłowe do produkcji sklejki, płyt fornirowanych, okleinowanych i laminatów stosowanych w branży meblarskiej i budowlanej.",
    products: [
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Klej PVAc D3 (1K) lub D4 (z utwardzaczem 303.5) do produkcji sklejki i łączenia warstw płyt drewnopochodnych. Czas otwarty 6–10 min, certyfikaty IMO i FDA. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 332.0",
        code: "332.0",
        description: "Klej PVAc D2 do fornirowania płyt wiórowych i stolarskich oraz okleinowania HPL i folii papierowych w produkcji półfabrykatów. Czas otwarty do 25 min, 80–150 g/m². Op. 10–1000 kg.",
        type: "PVAc",
        image: "/products/332.jpg",
        badge: "IMO",
      },
      {
        name: "KLEIBERIT® 114.5",
        code: "114.5",
        description: "Klej kontaktowy CR bez toluenu do laminowania półfabrykatów płytowych – klejenie HPL, CPL i laminatów warstwowych na płytach MDF i wiórowych. Z utwardzaczem H801: odporność do +100 °C. Op. 0,7–25 kg.",
        type: "Klej kontaktowy",
        image: "/products/114.jpg",
      },
    ],
  },
  {
    slug: "montage",
    name: "Montaż",
    icon: "/icons/montage.png",
    headline: "Kleje montażowe",
    description:
      "Elastyczne kleje montażowe 1K PUR i STP do profesjonalnego montażu, uszczelniania i klejenia na drewnie, metalu, betonie i ceramice.",
    products: [
      {
        name: "KLEIBERIT® 566.0",
        code: "566.0",
        description: "Kleiberit 566 Supracraft – trwale elastyczny 1K PUR klej i uszczelniacz do metali, drewna, betonu, ceramiki i tworzyw. Shore A 45, rozciąganie >600%, odporność –40 do +90°C, IMO FTP, klasa E. Szary/czarny/biały. Op. 300 ml / 600 ml.",
        type: "Montaż",
        image: "/products/566.jpg",
      },
      {
        name: "KLEIBERIT® 568.0",
        code: "568.0",
        description: "Kleiberit 568 Supracon – ekstremalnie szybki 1K PUR klej montażowy D4 i WATT 91. Drewno, metal, beton, ceramika, PVC, GRP, styropian. Czas otwarty ok. 5 min, czas docisku 15–30 min, od +7°C. Bez rozpuszczalników. Kartusz 310/400 ml.",
        type: "Montaż",
        image: "/products/568.jpg",
      },
    ],
  },
  {
    slug: "floors",
    name: "Podłogi",
    icon: "/icons/floors.png",
    headline: "Kleje do podłóg i schodów",
    description:
      "Profesjonalne kleje do układania parkietu, produkcji i montażu schodów drewnianych oraz klejenia elementów podłogowych z izolacją akustyczną.",
    products: [
      {
        name: "KLEIBERIT® 583",
        code: "583",
        description: "Elastyczny klej STP do klejenia parkietu i podłóg drewnianych bezpośrednio do podłoża. Bezrozpuszczalnikowy, z doskonałą izolacją akustyczną – tłumi odgłosy kroków i redukuje przenoszenie dźwięków.",
        type: "STP",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Klej PVAc D3 (1K) lub D4 (z utwardzaczem 303.5) do produkcji i montażu stopni schodowych, policzków i elementów schodów drewnianych. Czas otwarty 6–10 min, certyfikaty IMO i FDA. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 304.1",
        code: "304.1",
        description: "Klej PVAc D4 2K do produkcji schodów zewnętrznych i tarasowych – złącza narażone na wilgoć i zmienne warunki atmosferyczne. Z utwardzaczem 304.3, żywotność mieszanki 7 dni. Atesty D4, WATT 91.",
        type: "PVAc",
        image: "/products/304.jpg",
        badge: "D4",
      },
      {
        name: "KLEIBERIT® 501.0",
        code: "501.0",
        description: "Klej 1K PUR D4 do montażu i produkcji schodów drewnianych – klejenie stopni, policzków i sklejeń z podłożem mineralnym. Czas otwarty 20–25 min, certyfikat IMO. D4, WATT 91.",
        type: "PUR",
        image: "/products/501.jpg",
        badge: "IMO",
      },
    ],
  },
];
