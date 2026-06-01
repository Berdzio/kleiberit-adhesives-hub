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
        title: "Klejenie strukturalne i fornirowanie",
        description: "Kleje PVAc do montażu korpusów meblowych, klejenia połączeń i ręcznego fornirowania płyt.",
        matchTypes: ["PVAc"],
      },
      {
        title: "Okleinowanie obrzeży",
        description: "Termotopliwe kleje EVA i reaktywne PUR do automatycznego okleinowania krawędzi płyt w okleiniarce.",
        matchTypes: ["Termotopliwe EVA", "Termotopliwy PUR (obrzeża)"],
      },
      {
        title: "Kaszerowanie powierzchni",
        description: "Reaktywne kleje PUR do laminowania szerokich powierzchni — naklejanie folii PVC, ABS, PET i PMMA na fronty i płyty meblowe.",
        matchTypes: ["Termotopliwy PUR (laminowanie płaskie)"],
      },
      {
        title: "Laminowanie HPL i tapicerka",
        description: "Kleje kontaktowe CR do laminowania blatów HPL, postforming oraz tapicerowania pianek meblowych.",
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
        description: "Reaktywny klej PUR ME do automatycznego okleinowania obrzeży płyt meblowych – ABS, PVC, HPL, CPL i fornir. Odporność do +150 °C i –30 °C, stabilność w stapialniku min. 24 h. MDI <0,1%.",
        type: "Termotopliwy PUR (obrzeża)",
        image: "/products/707950.jpg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 706.2.50 ME",
        code: "706.2.50",
        description: "Mikroemisyjny klej PUR do kaszerowania frontów i płyt meblowych foliami PVC, ABS, PET i PMMA. Czas otwarty poniżej 4 min, lepkość 12 000 mPa·s (120 °C), temp. pracy 120–140 °C. Kość słoniowa.",
        type: "Termotopliwy PUR (laminowanie płaskie)",
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
    subcategories: [
      {
        title: "Klejenie ram i ościeżnic",
        description: "Kleje PVAc do montażu ram drzwiowych, klejenia ościeżnic i złączy drewnianych drzwi wewnętrznych i zewnętrznych.",
        matchTypes: ["PVAc"],
      },
      {
        title: "Klejenie konstrukcyjne PUR",
        description: "Jednoskładnikowe kleje PUR D4 do klejenia konstrukcji drzwiowych narażonych na wilgoć i zmienne warunki atmosferyczne.",
        matchTypes: ["PUR"],
      },
      {
        title: "Okleinowanie obrzeży PUR",
        description: "Reaktywny klej PUR ME do okleinowania krawędzi skrzydeł drzwiowych foliami PVC, ABS, HPL i fornirami.",
        matchTypes: ["Termotopliwy PUR"],
      },
    ],
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
        name: "KLEIBERIT® 304.4 EPI",
        code: "304.4",
        description: "Klej EPI D4 2K do produkcji drzwi z drewna egzotycznego (teak, merbau, bangkirai) i złączy mikrowczepowych. Bezbarwna fuga, nie niszczy narzędzi tnących. Utwardzacz 808.0 (15%). Atesty D4, WATT 91.",
        type: "PVAc",
        image: "/placeholder.svg",
        badge: "EPI · D4",
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
      "Kleje D4 odporne na warunki atmosferyczne do produkcji okien drewnianych i drewniano-aluminiowych — złącza klinowe, klejenie ram i okleinowanie profili PVC.",
    subcategories: [
      {
        title: "Klejenie ram i złączy klinowych",
        description: "Kleje PVAc D4 do produkcji ram okiennych, łączenia kantówek i złączy klinowych — wymagana odporność na wilgoć.",
        matchTypes: ["PVAc"],
      },
      {
        title: "Klejenie konstrukcyjne PUR",
        description: "Jednoskładnikowe kleje PUR D4 do klejenia ram i złączy okiennych z różnym czasem otwartym — od szybkich złączy klinowych po duże sklejenia powierzchniowe.",
        matchTypes: ["PUR"],
      },
      {
        title: "Okleinowanie profili PVC",
        description: "Reaktywne kleje PUR z certyfikatem RAL GZ 716 do okleinowania profili okiennych PVC foliami w różnych kolorach.",
        matchTypes: ["Termotopliwy PUR"],
      },
    ],
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
        name: "KLEIBERIT® 304.4 EPI",
        code: "304.4",
        description: "Klej EPI D4 2K do produkcji okien z drewna egzotycznego (teak, merbau, bangkirai) i złączy mikrowczepowych. Bezbarwna fuga, nie niszczy narzędzi tnących. Utwardzacz 808.0 (15%). Atesty D4, WATT 91, JAIA F****.",
        type: "PVAc",
        image: "/placeholder.svg",
        badge: "EPI · D4",
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
      {
        name: "KLEIBERIT® 704.3.50",
        code: "704.3.50",
        description: "Reaktywny klej PUR do okleinowania profili okiennych PVC foliami PVC w kolorze kość słoniowej. Certyfikat RAL GZ 716, odporność –40°C do +120°C. Dedykowany do białych i kość-słoniowych systemów profilowych.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
        badge: "RAL GZ 716",
      },
      {
        name: "KLEIBERIT® 704.3.57",
        code: "704.3.57",
        description: "Reaktywny klej PUR do okleinowania profili okiennych PVC foliami PVC w kolorze szary/antracyt. Certyfikat RAL GZ 716, odporność –40°C do +120°C. Dedykowany do ciemnych systemów profilowych okiennych.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
        badge: "RAL GZ 716",
      },
    ],
  },
  {
    slug: "half-products",
    name: "Półfabrykaty",
    icon: "/icons/half-products.png",
    headline: "Kleje do produkcji półfabrykatów",
    description:
      "Kleje przemysłowe do produkcji sklejki, płyt fornirowanych i okleinowanych — fornirowanie w prasie, okleinowanie obrzeży EVA i PUR oraz laminowanie HPL i CPL.",
    subcategories: [
      {
        title: "Sklejanie i fornirowanie płyt",
        description: "Kleje PVAc do produkcji sklejki i fornirowania płyt MDF i wiórowych w prasach stałociśnieniowych.",
        matchTypes: ["PVAc"],
      },
      {
        title: "Prasa membranowa",
        description: "Dyspersyjne kleje PUR 1K i 1K/2K do klejenia folii meblowych 3D (PVC, ABS, CPL) na MDF w prasach membranowych i wielokształtowych. Reaktywacja od 50°C.",
        matchTypes: ["Prasa membranowa"],
      },
      {
        title: "Okleinowanie obrzeży",
        description: "Termotopliwe kleje EVA i reaktywne PUR do automatycznego i ręcznego okleinowania krawędzi płyt meblowych obrzeżami PVC, ABS, CPL i fornirami.",
        matchTypes: ["Termotopliwe EVA", "Termotopliwy PUR (obrzeża)"],
      },
      {
        title: "Laminowanie HPL i CPL",
        description: "Kleje kontaktowe CR do nakładania okładzin HPL i CPL na płyty nośne półfabrykatów meblowych i budowlanych.",
        matchTypes: ["Klej kontaktowy"],
      },
    ],
    products: [
      {
        name: "KLEIBERIT® 303.0",
        code: "303.0",
        description: "Klej PVAc D3 (1K) lub D4 (z utwardzaczem 303.5) do produkcji sklejki i łączenia warstw płyt drewnopochodnych. Czas otwarty 6–10 min, certyfikaty IMO i FDA. Op. 0,5–1000 kg.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 431.7 Supratherm",
        code: "431.7",
        description: "Dyspersyjny klej PUR 1K do prasy membranowej i deep-draw — klejenie trójwymiarowe folii meblowych PVC i ABS na MDF. Reaktywacja do 72 h od 50°C. Certyfikat FIRA BS 6222. Natrysk 40–80 g/m². Op. 4,5–1000 kg.",
        type: "Prasa membranowa",
        image: "/placeholder.svg",
        badge: "FIRA",
      },
      {
        name: "KLEIBERIT® Supratherm 436",
        code: "436.2",
        description: "Jedno- lub dwuskładnikowy klej PUR do prasy membranowej i kaszerowania 3D folii meblowych na MDF. 7 wariantów (436.2–436.8). 2K z utwardzaczem 807.0: odporność do 120°C. Reaktywacja (1K) do 24 h. Bez oznakowania EU. Op. 10–120 kg.",
        type: "Prasa membranowa",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 773.3",
        code: "773.3",
        description: "Klej termotopliwy EVA do automatycznego okleinowania krawędzi płyt w centrach CNC i okleinarkach BAZ — CPL, PVC, ABS, poliester i fornir. Temp. pracy 170–200 °C, posuw 10–30 m/min. Op. 3–20 kg.",
        type: "Termotopliwe EVA",
        image: "/products/7733.jpg",
      },
      {
        name: "KLEIBERIT® 788.3 ME",
        code: "788.3",
        description: "Niskotopliwy klej EVA do ręcznych okleiniarek obrzeży z technologią Micro-Emission. Temperatura pracy od 130 °C, dostępny w 3 kolorach: biały, kość słoniowa, transparentny. Op. 1–15 kg.",
        type: "Termotopliwe EVA",
        image: "/products/7883.jpg",
      },
      {
        name: "KLEIBERIT® 707.9.50 ME",
        code: "707.9.50",
        description: "Reaktywny klej PUR ME do automatycznego okleinowania obrzeży — ABS, PVC, HPL, CPL i fornir. Spoina odporna do +150 °C i na wilgoć; trwalsza niż EVA. Stabilność w stapialniku min. 24 h. MDI <0,1%.",
        type: "Termotopliwy PUR (obrzeża)",
        image: "/products/707950.jpg",
        badge: "Mikroemisyjny",
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
      "Elastyczne kleje montażowe i uszczelniacze 1K PUR oraz pianki poliuretanowe do profesjonalnego montażu stolarki, uszczelniania i klejenia na drewnie, metalu, betonie i ceramice.",
    subcategories: [
      {
        title: "Kleje montażowe PUR",
        description: "Elastyczne kleje i uszczelniacze 1K PUR do klejenia i uszczelniania połączeń na różnych podłożach — drewno, metal, beton, ceramika, PVC.",
        matchTypes: ["Montaż"],
      },
      {
        title: "Pianki montażowe PUR",
        description: "Ekspansywne pianki poliuretanowe do uszczelniania i mocowania stolarki okiennej i drzwiowej w otworach.",
        matchTypes: ["Pianka PUR"],
      },
    ],
    products: [
      {
        name: "KLEIBERIT® 566.0",
        code: "566.0",
        description: "Kleiberit 566 Supracraft – trwale elastyczny 1K PUR klej i uszczelniacz do metali, drewna, betonu i ceramiki. Odporny na drgania i odkształcenia termiczne. Certyfikat IMO FTP. Dostępny w 3 kolorach: szary, czarny, biały. Op. 300/600 ml.",
        type: "Montaż",
        image: "/products/566.jpg",
      },
      {
        name: "KLEIBERIT® 568.0",
        code: "568.0",
        description: "Kleiberit 568 Supracon – szybki 1K PUR klej montażowy D4 i WATT 91 do drewna, metalu, betonu, ceramiki i PVC. Obciążalność po 15–30 min, skuteczny od +7°C. Kartusz 310/400 ml.",
        type: "Montaż",
        image: "/products/568.jpg",
      },
      {
        name: "KLEIBERIT® 601.1",
        code: "601.1",
        description: "Kleiberit 601.1 – elastyczny klej STP 1K do klejenia luster (DIN EN 1036), szkła, drewna i metali. Certyfikat EC1 plus R, klasa VOC A+. Dostępny w 4 kolorach. Op. 12×280 ml.",
        type: "Montaż",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 535.0 SupraFoam",
        code: "535.0",
        description: "Kleiberit 535.0 SupraFoam – dwukomponentowa pianka PUR do montażu ościeżnic i izolacji okien. Bez naddatku, utwardza się bez wilgoci — rozporki zdejmować już po 20 min. Certyfikat EC1 plus R, klasa B2.",
        type: "Pianka PUR",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 536.0 StairMaster",
        code: "536.0",
        description: "Kleiberit 536.0 StairMaster – ekspansywna 2K pianka klejąca PUR do montażu stopni schodowych, progów i parapetów z drewna, kamienia lub metalu. Obciążalna po 20 min, klasa B2. Op. 125/250 g.",
        type: "Pianka PUR",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 585.5",
        code: "585.5",
        description: "Kleiberit 585.5 – trudnopalna 1K pianka PUR klasy B (EN 13501-1, różowa) do uszczelnień ognioodpornych między materiałem mineralnym lub metalowym. Izoluje termicznie i akustycznie. Op. 12×750 ml.",
        type: "Pianka PUR",
        image: "/placeholder.svg",
      },
    ],
  },
  {
    slug: "floors",
    name: "Podłogi",
    icon: "/icons/floors.png",
    headline: "Kleje do podłóg i schodów",
    description:
      "Profesjonalne kleje do układania parkietu, przemysłowej produkcji parkietu warstwowego oraz montażu schodów drewnianych.",
    subcategories: [
      {
        title: "Układanie parkietu i podłóg",
        description: "Elastyczne kleje STP do klejenia parkietu i podłóg drewnianych bezpośrednio do podłoża — z izolacją akustyczną.",
        matchTypes: ["STP"],
      },
      {
        title: "Produkcja parkietu warstwowego",
        description: "Reaktywne kleje PUR do przemysłowej produkcji parkietu 2-warstwowego (engineered flooring) — klejenie warstwy ścieralnej do podkładu HDF/LVL.",
        matchTypes: ["Termotopliwy PUR"],
      },
      {
        title: "Klejenie schodów drewnianych",
        description: "Kleje PVAc i PUR D4 do produkcji i montażu schodów drewnianych — stopnie, policzki i sklejenia z podłożem mineralnym.",
        matchTypes: ["PVAc", "PUR"],
      },
    ],
    products: [
      {
        name: "KLEIBERIT® 583",
        code: "583",
        description: "Elastyczny klej STP do klejenia parkietu i podłóg drewnianych bezpośrednio do podłoża. Bezrozpuszczalnikowy, z doskonałą izolacją akustyczną – tłumi odgłosy kroków i redukuje przenoszenie dźwięków.",
        type: "STP",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT® 705.7.00",
        code: "705.7.00",
        description: "Reaktywny klej PUR do produkcji parkietu 2-warstwowego (engineered flooring). Łączy warstwę ścieralną z drewna litego z podkładem HDF/LVL/sklejką. Certyfikat BRL 2339.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
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
