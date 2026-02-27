export interface Product {
  name: string;
  code: string;
  description: string;
  type: string;
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
        name: "KLEIBERIT 303",
        code: "303",
        description: "Biały klej D3 PVAc do uniwersalnego klejenia drewna w produkcji mebli. Doskonała przyczepność początkowa i szybki czas wiązania.",
        type: "PVAc",
      },
      {
        name: "KLEIBERIT 304",
        code: "304",
        description: "D4 waterproof PVAc adhesive for furniture joints exposed to moisture. Superior bond strength.",
        type: "PVAc",
      },
      {
        name: "KLEIBERIT 788",
        code: "788",
        description: "EVA hot melt for edge banding of furniture panels. Excellent adhesion on melamine, PVC and ABS edges.",
        type: "Termotopliwe EVA",
      },
      {
        name: "KLEIBERIT 707.9",
        code: "707.9",
        description: "PUR hot melt for high-quality edge banding with outstanding heat and moisture resistance.",
        type: "Termotopliwe PUR",
      },
      {
        name: "KLEIBERIT 435",
        code: "435",
        description: "Contact adhesive for HPL lamination and furniture surface bonding applications.",
        type: "Contact Adhesive",
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
      },
      {
        name: "KLEIBERIT 304",
        code: "304",
        description: "D4 waterproof adhesive for exterior door production requiring moisture resistance.",
        type: "PVAc",
      },
      {
        name: "KLEIBERIT 707.9",
        code: "707.9",
        description: "PUR hot melt for door edge banding with excellent durability and heat resistance.",
        type: "PUR Hot Melt",
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "PUR prepolymer adhesive for sandwich panel bonding in door construction.",
        type: "PUR",
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
      },
      {
        name: "KLEIBERIT 305",
        code: "305",
        description: "One-component PUR adhesive for structural window bonding with outstanding weather resistance.",
        type: "PUR",
      },
      {
        name: "KLEIBERIT 501",
        code: "501",
        description: "PUR prepolymer for finger joint bonding in window scantling production.",
        type: "PUR",
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "Two-component PUR system for high-strength laminated window profiles.",
        type: "PUR",
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
      },
      {
        name: "KLEIBERIT 305",
        code: "305",
        description: "PUR adhesive for cross-laminated timber (CLT) and engineered wood panels.",
        type: "PUR",
      },
      {
        name: "KLEIBERIT 788",
        code: "788",
        description: "EVA hot melt for edge banding of MDF and particleboard panels.",
        type: "EVA Hot Melt",
      },
      {
        name: "KLEIBERIT 707.9",
        code: "707.9",
        description: "PUR hot melt for premium edge finishing on semi-finished board products.",
        type: "PUR Hot Melt",
      },
      {
        name: "KLEIBERIT 435",
        code: "435",
        description: "Contact adhesive for HPL and CPL surface lamination of panels.",
        type: "Contact Adhesive",
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
      },
      {
        name: "KLEIBERIT 610",
        code: "610",
        description: "High-strength montage adhesive for heavy-duty fixing and load-bearing bonds.",
        type: "Montage",
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "PUR assembly adhesive for structural bonding in montage applications.",
        type: "PUR",
      },
      {
        name: "KLEIBERIT 501",
        code: "501",
        description: "One-component PUR glue for versatile assembly and montage bonding.",
        type: "PUR",
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
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "PUR adhesive for bonding multilayer flooring panels and engineered wood substrates.",
        type: "PUR",
      },
      {
        name: "KLEIBERIT 303",
        code: "303",
        description: "D3 PVAc adhesive for laminate flooring tongue-and-groove bonding.",
        type: "PVAc",
      },
      {
        name: "KLEIBERIT 304",
        code: "304",
        description: "D4 waterproof PVAc for flooring applications in moisture-prone areas.",
        type: "PVAc",
      },
      {
        name: "KLEIBERIT 600",
        code: "600",
        description: "Montage adhesive for quick-fix flooring trim, skirting board, and threshold installation.",
        type: "Montage",
      },
    ],
  },
];
