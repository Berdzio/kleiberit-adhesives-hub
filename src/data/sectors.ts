export interface Product {
  name: string;
  code: string;
  description: string;
  type: string;
  image?: string;
  badge?: string;
}

export interface Sector {
  slug: string;
  name: string;
  icon: string;
  headline: string;
  description: string;
  products: Product[];
}

export const sectors: Sector[] = [
  {
    slug: "furnitures",
    name: "Meble",
    icon: "/icons/furnitures.png",
    headline: "Kleje do produkcji mebli",
    description:
      "Kleje przemysłowe wspierające wszystkie etapy produkcji mebli — montaż paneli, okleinowanie krawędzi i laminowanie.",
    products: [
      {
        name: "KLEIBERIT® 303",
        code: "303",
        description: "Uniwersalny biały klej PVAc klasy D3 do klejenia drewna w produkcji mebli. Doskonała przyczepność początkowa i szybki czas wiązania.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 304",
        code: "304",
        description: "Wodoodporny klej PVAc klasy D4 do połączeń narażonych na wilgoć. Wysoka wytrzymałość spoiny i uniwersalne zastosowanie w produkcji mebli.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 314.3",
        code: "314.3",
        description: "Klej PVAc do szybkiego montażu mebli. Krótki czas prasowania i wysoka przyczepność początkowa – idealny do produkcji seryjnej.",
        type: "PVAc",
        image: "/products/314.jpg",
      },
      {
        name: "KLEIBERIT® 332.0",
        code: "332.0",
        description: "Jednokomponentowy klej PVAc do klejenia elementów z drewna litego i materiałów drewnopochodnych. Transparentna spoina i łatwa aplikacja.",
        type: "PVAc",
        image: "/products/332.jpg",
      },
      {
        name: "KLEIBERIT® 773.3",
        code: "773.3",
        description: "Termotopliwy klej EVA do okleinowania krawędzi na maszynach średnio- i wysokowydajnych. Jasny kolor spoiny, dobra przyczepność do PVC, ABS i melaminy.",
        type: "Termotopliwe EVA",
        image: "/products/7733.jpg",
      },
      {
        name: "KLEIBERIT® 773.1",
        code: "773.1",
        description: "Transprarentny klej EVA hot melt do okleinowania krawędzi o niskiej temperaturze aplikacji. Uniwersalne zastosowanie na maszynach jedno- i dwustronnych.",
        type: "Termotopliwe EVA",
        image: "/products/7731.jpg",
      },
      {
        name: "KLEIBERIT® 773.8",
        code: "773.8",
        description: "Termotopliwy klej EVA o zwiększonej odporności termicznej do okleinowania krawędzi. Doskonała jakość spoiny i stabilność koloru.",
        type: "Termotopliwe EVA",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 788.3",
        code: "788.3",
        description: "Klej EVA hot melt do szybkiego okleinowania krawędzi na maszynach przemysłowych. Wysoka przyczepność do różnych materiałów krawędziowych.",
        type: "Termotopliwe EVA",
        image: "/products/7883.jpg",
      },
      {
        name: "KLEIBERIT® 707.9.50 ME",
        code: "707.9.50",
        description: "Reaktywny klej PUR do okleinowania krawędzi o najwyższej jakości. Certyfikat mikroemisyjności – spełnia najwyższe normy emisji szkodliwych substancji. Doskonała odporność na temperaturę i wilgoć.",
        type: "Termotopliwy PUR",
        image: "/products/707950.jpg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 706.2.50 ME",
        code: "706.2.50",
        description: "Termotopliwy klej PUR do szybkiego okleinowania krawędzi. Krótki czas otwarty, wysoka przyczepność do różnych materiałów krawędziowych.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 706.1.50 ME",
        code: "706.1.50",
        description: "Reaktywny klej PUR do okleinowania krawędzi z wydłużonym czasem otwartym. Idealny do profili i krawędzi o złożonych kształtach.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 706.4.50 ME",
        code: "706.4.50",
        description: "Termotopliwy klej PUR o średniej lepkości do wszechstronnego okleinowania krawędzi. Bardzo dobra przyczepność do PVC, ABS i forniru.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT® 705.7.00",
        code: "705.7.00",
        description: "Reaktywny klej PUR do okleinowania krawędzi i laminowania płaskiego. Uniwersalne zastosowanie, dobra przyczepność do melaminy i lakieru.",
        type: "Termotopliwy PUR",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 435",
        code: "435",
        description: "Klej kontaktowy do laminowania powierzchni meblowych laminatami HPL. Wysoka odporność termiczna i natychmiastowe wiązanie po dociśnięciu.",
        type: "Klej kontaktowy",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 114.5",
        code: "114.5",
        description: "Klej kontaktowy na bazie rozpuszczalnika do laminowania HPL i CPL. Wysoka odporność termiczna i szybkie wiązanie.",
        type: "Klej kontaktowy",
        image: "/products/114.jpg",
      },
      {
        name: "KLEIBERIT® 152.0",
        code: "152.0",
        description: "Klej kontaktowy rozpuszczalnikowy do oklejania powierzchni meblowych i paneli dekoracyjnych. Wysoka przyczepność do laminatów i fornirów.",
        type: "Klej kontaktowy",
        image: "/products/152.jpg",
      },
      {
        name: "KLEIBERIT® 257.0",
        code: "257.0",
        description: "Wodny klej kontaktowy do klejenia powierzchniowego – ekologiczna alternatywa bez rozpuszczalników. Idealny do laminowania HPL, CPL i oklein.",
        type: "Klej kontaktowy",
        image: "/placeholder.svg",
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
        description: "Reaktywny klej PUR hot melt do okleinowania krawędzi skrzydeł drzwiowych. Wyjątkowa odporność termiczna i trwałość spoiny – idealny do drzwi wewnętrznych i zewnętrznych.",
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
        name: "KLEIBERIT® 304",
        code: "304",
        description: "Wodoodporny klej PVAc klasy D4 do klejenia kantówek okiennych i laminowania ram. Spełnia najwyższe wymagania odporności na wilgoć w produkcji okien.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 501.0",
        code: "501.0",
        description: "Jednokomponentowy klej poliuretanowy do uniwersalnego klejenia drewna. Utwardza pod wpływem wilgoci, tworząc wodoodporną i wytrzymałą spoinę.",
        type: "PUR",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT® 501.6",
        code: "501.6",
        description: "Klej PUR o wydłużonym czasie otwartym do klejenia konstrukcyjnego drewna. Idealny do złączy klinowych i łączenia kantówek okiennych.",
        type: "PUR",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 501.8",
        code: "501.8",
        description: "Szybkowiążący klej poliuretanowy do klejenia drewna litego i materiałów drewnopochodnych. Krótki czas prasowania, wysoka wydajność produkcyjna.",
        type: "PUR",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 510.3",
        code: "510.3",
        description: "Dwukomponentowy klej poliuretanowy do klejenia konstrukcyjnego i laminowania drewna. Wysoka wytrzymałość mechaniczna i odporność na warunki atmosferyczne.",
        type: "PUR",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT® 506.6",
        code: "506.6",
        description: "Klej PUR do produkcji okien i drzwi drewnianych. Spełnia wymagania norm dotyczących klejenia konstrukcyjnego drewna.",
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
        name: "KLEIBERIT® 303",
        code: "303",
        description: "Klej PVAc klasy D3 do produkcji sklejki, płyt stolarskich i drewna klejonego warstwowo. Równomierne rozprowadzanie i mocna spoina na dużych powierzchniach.",
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
        description: "Uniwersalny klej montażowy na bazie dyspersji do klejenia drewna, płyt wiórowych, MDF i innych materiałów budowlanych. Wysoka przyczepność początkowa.",
        type: "Montaż",
        image: "/products/566.jpg",
      },
      {
        name: "KLEIBERIT® 568.0",
        code: "568.0",
        description: "Elastyczny klej montażowy do trwałego łączenia różnych materiałów budowlanych. Odporny na wilgoć i starzenie, odpowiedni do zastosowań wewnętrznych i zewnętrznych.",
        type: "Montaż",
        image: "/products/568.jpg",
      },
      {
        name: "KLEIBERIT® 601.2",
        code: "601.2",
        description: "Klej montażowy szczególnie polecany do klejenia luster – neutralny chemicznie, nie uszkadza powłoki lustrzanej. Nadaje się również do montażu paneli dekoracyjnych i listew.",
        type: "Montaż",
        image: "/products/6012.jpg",
        badge: "Do luster",
      },
      {
        name: "KLEIBERIT® 535.0",
        code: "535.0",
        description: "Jednokomponentowy klej poliuretanowy do montażu konstrukcyjnego. Wysoka wytrzymałość spoiny i odporność na wilgoć.",
        type: "Montaż",
        image: "/products/535.jpg",
      },
      {
        name: "KLEIBERIT® 536.0",
        code: "536.0",
        description: "Klej montażowy PUR do trwałego łączenia elementów drewnianych i materiałów drewnopochodnych. Szybkie utwardzanie i wysoka odporność mechaniczna.",
        type: "Montaż",
        image: "/products/536.jpg",
      },
      {
        name: "KLEIBERIT® 540.5",
        code: "540.5",
        description: "Reaktywny klej PUR do montażu i klejenia strukturalnego. Doskonała przyczepność do drewna, metalu, betonu i tworzyw sztucznych.",
        type: "Montaż",
        image: "/placeholder.svg",
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
        name: "KLEIBERIT® 303",
        code: "303",
        description: "Klej PVAc klasy D3 do klejenia połączeń pióro-wpust w podłogach laminowanych. Szybkie wiązanie i łatwa aplikacja na liniach produkcyjnych.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT® 304",
        code: "304",
        description: "Wodoodporny klej PVAc klasy D4 do podłóg w pomieszczeniach narażonych na wilgoć – kuchnie, łazienki, pralnie. Trwała spoina odporna na kontakt z wodą.",
        type: "PVAc",
        image: "/products/304.jpg",
      },
    ],
  },
];
