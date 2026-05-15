export interface Product {
  name: string;
  code: string;
  description: string;
  type: string;
  image?: string;
  badge?: string;
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
      "Kleje przemysłowe wspierające wszystkie etapy produkcji mebli — montaż paneli, okleinowanie krawędzi i laminowanie.",
    subcategories: [
      {
        title: "Kleje białe",
        description: "Kleje PVAc do montażu mebli i łączenia elementów drewnianych.",
        matchTypes: ["PVAc"],
      },
      {
        title: "Oklejanie obrzeży",
        description: "Termotopliwe kleje EVA i PUR do okleinowania krawędzi płyt meblowych.",
        matchTypes: ["Termotopliwe EVA", "Termotopliwy PUR"],
      },
      {
        title: "Kleje kontaktowe",
        description: "Kleje kontaktowe do laminowania HPL/CPL i klejenia powierzchniowego.",
        matchTypes: ["Klej kontaktowy"],
      },
    ],
    products: [
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Wielozadaniowy klej PVAc D3 (1K) / D4 (z utw. 303.5). Czas otwarty 6–10 min, żywotność mieszanki 24 h, certyfikaty IMO i FDA. Do okien, drzwi, HPL, schodów i sklejki. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 304.1",
        code: "304.1",
        description: "Klej PVAc D4 wyłącznie 2K z utwardzaczem 304.3. Żywotność mieszanki do 7 dni, czas otwarty 6–10 min. Do produkcji okien, drzwi, złączy klinowych i schodów. Atesty D4, WATT 91.",
        type: "PVAc",
        image: "/products/303.jpg",
        badge: "D4",
      },
      {
        name: "KLEIBERIT® 314.3",
        code: "314.3",
        description: "Jednokomponentowy klej PVAc klasy D4 bez konieczności dodawania utwardzacza. Certyfikaty D4, WATT 91, BRL 2339. Transparentna fuga, czas otwarty 4–7 min, min. temp. +15°C. Op. 4,5–1050 kg.",
        type: "PVAc",
        image: "/products/314.jpg",
        badge: "D4",
      },
      {
        name: "KLEIBERIT® 332.0",
        code: "332.0",
        description: "Jednoskładnikowy klej PVAc D2 do fornirowania płyt i laminowania HPL. Czas otwarty do 25 min, ilość nanoszenia 80–150 g/m², certyfikat IMO. Gotowy do użycia. Op. 10–1000 kg.",
        type: "PVAc",
        image: "/products/332.jpg",
        badge: "IMO",
      },
      {
        name: "KLEIBERIT® 773.3",
        code: "773.3",
        description: "Klej termotopliwy EVA do automatycznego oklejania obrzeży CPL, PVC, ABS, poliestru i forniru. Temp. pracy 170–200 °C, posuw 10–30 m/min. Granulat naturalny lub biały. Op. 3–20 kg.",
        type: "Termotopliwe EVA",
        image: "/products/7733.jpg",
      },
      {
        name: "KLEIBERIT® 788.3",
        code: "788.3",
        description: "Klej termotopliwy EVA do ręcznego okleinowania obrzeży. Niska temperatura pracy od 130 °C, bardzo długi czas otwarty, odporność od –30 °C do +90 °C. Granulat 25 kg: biały, kość słoniowa, czarny.",
        type: "Termotopliwe EVA",
        image: "/products/7883.jpg",
      },
      {
        name: "KLEIBERIT® 707.9.50 ME",
        code: "707.9.50",
        description: "Reaktywny klej PUR ME do okleinowania obrzeży ABS, PVC, HPL, CPL i forniru – wariant kość słoniowa. Odporność do +150 °C i –30 °C, stabilność w stapialniku min. 24 h. Op. 6×2 kg / 20 kg.",
        type: "Termotopliwy PUR",
        image: "/products/707950.jpg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 706.2.50 ME",
        code: "706.2.50",
        description: "Mikroemisyjny klej PUR do kaszerowania płyt MDF i wiórowych foliami PVC, ABS, PET i PMMA. Średni czas otwarty poniżej 4 min, lepkość 12 000 mPa·s (120 °C), temp. pracy 120–140 °C. Kość słoniowa.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 114.5",
        code: "114.5",
        description: "Kleiberit 114.5 – klej kontaktowy polychloroprenowy bez toluenu, do nanoszenia pędzlem. HPL, laminaty, guma, termoplasty, metale, drewno. Z utwardzaczem H801: odporność do ponad 100 °C, wytrzymałość końcowa po 3 dniach. Op. 0,7–25 kg.",
        type: "Klej kontaktowy",
        image: "/products/114.jpg",
      },
      {
        name: "KLEIBERIT® 152.0",
        code: "152.0",
        description: "Kleiberit 152.5 – niskowiskozowy klej kontaktowy CR do natrysku (dysza 1,3–1,7 mm, 3–4 bar). Pianki, tkaniny, wykładziny PVC i linoleum, papier, postforming. Lepkość 600 mPa·s, –30 do +80°C. Z utwardzaczem 801.0: wytrzymałość po 3 dniach. Op. 4,5–170 kg.",
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
      "Niezawodne rozwiązania klejowe do produkcji drzwi z drewna litego, inżynieryjnego i kompozytowego — montaż ram, klejenie płycin i wykończenie powierzchni.",
    products: [
    
    
      {
        name: "KLEIBERIT® 707.9.50 ME",
        code: "707.9.50",
        description: "Reaktywny klej PUR ME do okleinowania obrzeży skrzydeł drzwiowych – ABS, PVC, HPL, CPL, fornir. Odporność do +150 °C i –30 °C, stabilność w stapialniku min. 24 h, MDI <0,1%.",
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
      "Kleje odporne na warunki atmosferyczne, zaprojektowane do produkcji okien drewnianych i kompozytowych, zapewniające trwałe połączenia w ekstremalnych warunkach.",
    products: [
      {
        name: "KLEIBERIT® 304.1",
        code: "304.1",
        description: "Klej PVAc D4 wyłącznie 2K z utwardzaczem 304.3. Żywotność mieszanki do 7 dni, czas otwarty 6–10 min. Do produkcji okien, drzwi, złączy klinowych i schodów. Atesty D4, WATT 91.",
        type: "PVAc",
        image: "/products/303.jpg",
        badge: "D4",
      },
      {
        name: "KLEIBERIT® 501.0",
        code: "501.0",
        description: "Kleiberit seria 501 – jednokomponentowe kleje PUR klasy D4 do drewna, materiałów drewnopochodnych i mineralnych. Cztery warianty: 501.0 (klasyk, 20–25 min), 501.4 (montaż, 4 min), 501.6 (formowanie, 70 min), 501.8 (szybki, 10 min). Zgodne z WATT 91.",
        type: "PUR",
        image: "/products/501.jpg",
        badge: "IMO",
      },
      {
        name: "KLEIBERIT® 501.6",
        code: "501.6",
        description: "Kleiberit seria 501 – jednokomponentowe kleje PUR klasy D4 do drewna, materiałów drewnopochodnych i mineralnych. Cztery warianty: 501.0 (klasyk, 20–25 min), 501.4 (montaż, 4 min), 501.6 (formowanie, 70 min), 501.8 (szybki, 10 min). Zgodne z WATT 91.",
        type: "PUR",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 501.8",
        code: "501.8",
        description: "Kleiberit seria 501 – jednokomponentowe kleje PUR klasy D4 do drewna, materiałów drewnopochodnych i mineralnych. Cztery warianty: 501.0 (klasyk, 20–25 min), 501.4 (montaż, 4 min), 501.6 (formowanie, 70 min), 501.8 (szybki, 10 min). Zgodne z WATT 91.",
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
      "Kleje przemysłowe do produkcji płyt, paneli, laminatów i innych półfabrykatów stosowanych w branży meblarskiej i budowlanej.",
    products: [
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Wielozadaniowy klej PVAc D3 (1K) / D4 (z utw. 303.5). Czas otwarty 6–10 min, żywotność mieszanki 24 h, certyfikaty IMO i FDA. Do okien, drzwi, HPL, schodów i sklejki. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 435",
        code: "435",
        description: "Klej kontaktowy do laminowania powierzchni płyt laminatami HPL i CPL. Wysoka odporność termiczna i natychmiastowa przyczepność po dociśnięciu.",
        type: "Klej kontaktowy",
        image: "/products/501.jpg",
      },
    ],
  },
  {
    slug: "montage",
    name: "Montaż",
    icon: "/icons/montage.png",
    headline: "Kleje montażowe",
    description:
      "Mocne, szybkowiążące kleje montażowe do profesjonalnego montażu, mocowania i instalacji na różnych podłożach.",
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
    name: "Podłogi ",
    icon: "/icons/floors.png",
    headline: "Kleje do podłóg",
    description:
      "Profesjonalne kleje do układania i produkcji parkietu, paneli laminowanych, podłóg winylowych i drewna inżynieryjnego.",
    products: [
      {
        name: "KLEIBERIT® 583",
        code: "583",
        description: "Elastyczny klej STP do klejenia parkietu i podłóg drewnianych. Bezrozpuszczalnikowy, z doskonałą izolacją akustyczną – tłumi odgłosy kroków i redukuje przenoszenie dźwięków.",
        type: "STP",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Wielozadaniowy klej PVAc D3 (1K) / D4 (z utw. 303.5). Czas otwarty 6–10 min, żywotność mieszanki 24 h, certyfikaty IMO i FDA. Do okien, drzwi, HPL, schodów i sklejki. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 304.1",
        code: "304.1",
        description: "Klej PVAc D4 wyłącznie 2K z utwardzaczem 304.3. Żywotność mieszanki do 7 dni, czas otwarty 6–10 min. Do produkcji okien, drzwi, złączy klinowych i schodów. Atesty D4, WATT 91.",
        type: "PVAc",
        image: "/products/304.jpg",
        badge: "D4",
      },
    ],
  },
];
