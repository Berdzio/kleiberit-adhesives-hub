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
    name: "Furnitures",
    icon: "/icons/furnitures.svg",
    headline: "Adhesive Solutions for Furniture Manufacturing",
    description:
      "High-performance adhesives for every step of furniture production — from panel assembly and edge banding to surface lamination and upholstery bonding.",
    products: [
      {
        name: "KLEIBERIT 303",
        code: "303",
        description: "D3 PVAc white glue for universal wood bonding in furniture assembly. Excellent initial tack, fast setting.",
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
        type: "EVA Hot Melt",
      },
      {
        name: "KLEIBERIT 707.9",
        code: "707.9",
        description: "PUR hot melt for high-quality edge banding with outstanding heat and moisture resistance.",
        type: "PUR Hot Melt",
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
    name: "Doors",
    icon: "/icons/doors.svg",
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
    name: "Windows",
    icon: "/icons/windows.svg",
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
    name: "Half-Products for Furnitures",
    icon: "/icons/half-products.svg",
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
    name: "Montage",
    icon: "/icons/montage.svg",
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
    slug: "constructions",
    name: "Constructions",
    icon: "/icons/constructions.svg",
    headline: "Construction-Grade Adhesive Systems",
    description:
      "Durable, certified adhesives for structural timber construction, insulation bonding, and building element assembly.",
    products: [
      {
        name: "KLEIBERIT 501",
        code: "501",
        description: "PUR adhesive for structural timber bonding, glulam, and finger jointing.",
        type: "PUR",
      },
      {
        name: "KLEIBERIT 540",
        code: "540",
        description: "Two-component PUR system for load-bearing timber construction bonds.",
        type: "PUR",
      },
      {
        name: "KLEIBERIT 305",
        code: "305",
        description: "One-component PUR for cross-laminated timber and engineered wood construction.",
        type: "PUR",
      },
      {
        name: "KLEIBERIT 600",
        code: "600",
        description: "Montage adhesive for on-site construction bonding and fixing applications.",
        type: "Montage",
      },
      {
        name: "KLEIBERIT 304",
        code: "304",
        description: "D4 waterproof PVAc for exterior construction timber bonding.",
        type: "PVAc",
      },
    ],
  },
];
