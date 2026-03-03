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
    headline: "Adhesive Solutions for Furniture Manufacturing",
    description:
      "Kleje przemysłowe wspierające wszystkie etapy produkcji mebli — montaż paneli, okleinowanie krawędzi i laminowanie.",
    products: [
      {
        name: "KLEIBERIT 303.0",
        code: "303.0",
        description: "Uniwersalny biały klej PVAc klasy D3 do klejenia drewna w produkcji mebli. Doskonała przyczepność początkowa i szybki czas wiązania.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT 304.1",
        code: "304.1",
        description: "Wodoodporny klej PVAc klasy D4 do połączeń narażonych na wilgoć. Wysoka wytrzymałość spoiny i uniwersalne zastosowanie w produkcji mebli.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT 314.3",
        code: "314.3",
        description: "Klej PVAc do szybkiego montażu mebli. Krótki czas prasowania i wysoka przyczepność początkowa – idealny do produkcji seryjnej.",
        type: "PVAc",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT 332.0",
        code: "332.0",
        description: "Jednokomponentowy klej PVAc do klejenia elementów z drewna litego i materiałów drewnopochodnych. Transparentna spoina i łatwa aplikacja.",
        type: "PVAc",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT 316.0",
        code: "316.0",
        description: "Klej PVAc o wydłużonym czasie otwartym do montażu mebli i łączenia elementów drewnianych. Elastyczna spoina odporna na obciążenia dynamiczne.",
        type: "PVAc",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT 788",
        code: "788",
        description: "EVA hot melt for edge banding of furniture panels. Excellent adhesion on melamine, PVC and ABS edges.",
        type: "Termotopliwe EVA",
        image: "/products/788.jpg",
      },
      {
        name: "KLEIBERIT 707.9",
        code: "707.9",
        description: "PUR hot melt for high-quality edge banding with outstanding heat and moisture resistance.",
        type: "PUR Hot Melt",
        image: "/products/707-9.jpg",
      },
      {
        name: "KLEIBERIT 707.9.50",
        code: "707.9.50",
        description: "Reaktywny klej PUR do okleinowania krawędzi o najwyższej jakości. Certyfikat mikroemisyjności – spełnia najwyższe normy emisji szkodliwych substancji. Doskonała odporność na temperaturę i wilgoć.",
        type: "PUR Hot Melt",
        image: "/placeholder.svg",
        badge: "Mikroemisyjny",
      },
      {
        name: "KLEIBERIT 706.2.50",
        code: "706.2.50",
        description: "Termotopliwy klej PUR do szybkiego okleinowania krawędzi. Krótki czas otwarty, wysoka przyczepność do różnych materiałów krawędziowych.",
        type: "PUR Hot Melt",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT 706.1.50",
        code: "706.1.50",
        description: "Reaktywny klej PUR do okleinowania krawędzi z wydłużonym czasem otwartym. Idealny do profili i krawędzi o złożonych kształtach.",
        type: "PUR Hot Melt",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT 706.4.50",
        code: "706.4.50",
        description: "Termotopliwy klej PUR o średniej lepkości do wszechstronnego okleinowania krawędzi. Bardzo dobra przyczepność do PVC, ABS i forniru.",
        type: "PUR Hot Melt",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT 702.8.09",
        code: "702.8.09",
        description: "Klej PUR do okleinowania krawędzi na maszynach z systemem zamkniętym. Transparentna spoina, wysoka wytrzymałość końcowa.",
        type: "PUR Hot Melt",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT 705.7.00",
        code: "705.7.00",
        description: "Reaktywny klej PUR do okleinowania krawędzi i laminowania płaskiego. Uniwersalne zastosowanie, dobra przyczepność do melaminy i lakieru.",
        type: "PUR Hot Melt",
        image: "/placeholder.svg",
      },
      {
        name: "KLEIBERIT 435",
        code: "435",
        description: "Contact adhesive for HPL lamination and furniture surface bonding applications.",
        type: "Contact Adhesive",
        image: "/products/501.jpg",
      },
    ],
  },
  {
    slug: "doors",
    name: "Drzwi",
    icon: "/icons/doors.png",
    headline: "Precision Adhesives for Door Production",
    description:
      "Reliable bonding solutions for solid wood, engineered, and composite door manufacturing — including frame assembly, panel gluing, and surface finishing.",
    products: [
      {
        name: "KLEIBERIT 303",
        code: "303",
        description: "D3 PVAc adhesive for interior door frame assembly and panel bonding.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT 304",
        code: "304",
        description: "D4 waterproof adhesive for exterior door production requiring moisture resistance.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT 707.9",
        code: "707.9",
        description: "PUR hot melt for door edge banding with excellent durability and heat resistance.",
        type: "PUR Hot Melt",
        image: "/products/707-9.jpg",
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "PUR prepolymer adhesive for sandwich panel bonding in door construction.",
        type: "PUR",
        image: "/products/501.jpg",
      },
    ],
  },
  {
    slug: "windows",
    name: "Okna",
    icon: "/icons/window.png",
    headline: "High-Performance Adhesives for Window Manufacturing",
    description:
      "Weather-resistant adhesives engineered for wooden and composite window production, ensuring lasting bonds under extreme conditions.",
    products: [
      {
        name: "KLEIBERIT 304",
        code: "304",
        description: "D4 waterproof PVAc for window scantling and frame lamination.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT 305",
        code: "305",
        description: "One-component PUR adhesive for structural window bonding with outstanding weather resistance.",
        type: "PUR",
        image: "/products/305.jpg",
      },
      {
        name: "KLEIBERIT 501",
        code: "501",
        description: "PUR prepolymer for finger joint bonding in window scantling production.",
        type: "PUR",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "Two-component PUR system for high-strength laminated window profiles.",
        type: "PUR",
        image: "/products/501.jpg",
      },
    ],
  },
  {
    slug: "half-products",
    name: "Półfabrykaty",
    icon: "/icons/half-products.png",
    headline: "Adhesives for Semi-Finished Furniture Components",
    description:
      "Industrial-grade adhesives for manufacturing boards, panels, laminates, and other semi-finished products used in furniture production.",
    products: [
      {
        name: "KLEIBERIT 303",
        code: "303",
        description: "D3 PVAc for plywood, blockboard, and laminated timber production.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT 305",
        code: "305",
        description: "PUR adhesive for cross-laminated timber (CLT) and engineered wood panels.",
        type: "PUR",
        image: "/products/305.jpg",
      },
      {
        name: "KLEIBERIT 788",
        code: "788",
        description: "EVA hot melt for edge banding of MDF and particleboard panels.",
        type: "EVA Hot Melt",
        image: "/products/788.jpg",
      },
      {
        name: "KLEIBERIT 707.9",
        code: "707.9",
        description: "PUR hot melt for premium edge finishing on semi-finished board products.",
        type: "PUR Hot Melt",
        image: "/products/707-9.jpg",
      },
      {
        name: "KLEIBERIT 435",
        code: "435",
        description: "Contact adhesive for HPL and CPL surface lamination of panels.",
        type: "Contact Adhesive",
        image: "/products/501.jpg",
      },
    ],
  },
  {
    slug: "montage",
    name: "Montaz",
    icon: "/icons/montage.png",
    headline: "Montage & Assembly Adhesives",
    description:
      "Strong, fast-curing montage adhesives for professional assembly, fixing, and installation work across multiple substrates.",
    products: [
      {
        name: "KLEIBERIT 600",
        code: "600",
        description: "Universal montage adhesive for bonding wood, metal, concrete, and plastics. High initial tack.",
        type: "Montage",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT 610",
        code: "610",
        description: "High-strength montage adhesive for heavy-duty fixing and load-bearing bonds.",
        type: "Montage",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "PUR assembly adhesive for structural bonding in montage applications.",
        type: "PUR",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT 501",
        code: "501",
        description: "One-component PUR glue for versatile assembly and montage bonding.",
        type: "PUR",
        image: "/products/501.jpg",
      },
    ],
  },
  {
    slug: "floors",
    name: "Podłogi ",
    icon: "/icons/floors.png",
    headline: "Adhesive Solutions for Flooring",
    description:
      "Professional-grade adhesives for parquet, laminate, vinyl, and engineered wood flooring installation and manufacturing.",
    products: [
      {
        name: "KLEIBERIT 583",
        code: "583",
        description: "Elastic STP adhesive for parquet and engineered wood flooring. Solvent-free with excellent sound insulation.",
        type: "STP",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "PUR adhesive for bonding multilayer flooring panels and engineered wood substrates.",
        type: "PUR",
        image: "/products/501.jpg",
      },
      {
        name: "KLEIBERIT 303",
        code: "303",
        description: "D3 PVAc adhesive for laminate flooring tongue-and-groove bonding.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT 304",
        code: "304",
        description: "D4 waterproof PVAc for flooring applications in moisture-prone areas.",
        type: "PVAc",
        image: "/products/303.jpg",
      },
      {
        name: "KLEIBERIT 600",
        code: "600",
        description: "Montage adhesive for quick-fix flooring trim, skirting board, and threshold installation.",
        type: "Montage",
        image: "/products/501.jpg",
      },
    ],
  },
];
