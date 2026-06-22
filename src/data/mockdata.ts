import type { Product, Review } from "../types/types.ts";

const WATCH_IMAGES = {
  chrono1: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
  chrono2: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80",
  chrono3: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80",
  diver1: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
  diver2: "https://images.unsplash.com/photo-1548171916-c8d1cde1e981?w=800&q=80",
  diver3: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
  dress1: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
  dress2: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
  dress3: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80",
  sport1: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
  sport2: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80",
  sport3: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
  hero: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&q=80",
  lifestyle1: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
  lifestyle2: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
  lifestyle3: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80",
} as const;


export const products: Product[] = [
  {
    id: 1,
    name: "Sovereign Chronograph",
    brand: "CHRONOS",
    price: 12500,
    description:
      "The Sovereign Chronograph is the pinnacle of precision engineering. Housing a Swiss-made automatic movement with a 72-hour power reserve, its sapphire crystal caseback reveals the intricate mechanics within. The 42mm case is crafted from grade 5 titanium, offering exceptional durability at a fraction of the weight of steel.",
    features: [
      "Swiss automatic movement (Caliber CH-7750)",
      "72-hour power reserve",
      "42mm grade 5 titanium case",
      "Sapphire crystal with AR coating",
      "100m water resistance",
      "Crocodile leather strap",
    ],
    category: "Chronograph",
    images: [WATCH_IMAGES.chrono1, WATCH_IMAGES.chrono2, WATCH_IMAGES.chrono3, WATCH_IMAGES.lifestyle1],
    rating: 4.9,
    reviewCount: 127,
    badge: "bestseller",
    inStock: true,
  },
  {
    id: 2,
    name: "Eclipse Flyback",
    brand: "CHRONOS",
    price: 18900,
    originalPrice: 22000,
    description:
      "The Eclipse Flyback represents the art of haute horlogerie. With its revolutionary flyback complication, pilots and enthusiasts can reset and restart the chronograph with a single push. The meteorite dial is unique to each timepiece — no two watches are alike.",
    features: [
      "Flyback chronograph complication",
      "Meteorite dial (unique per watch)",
      "44mm 18K rose gold case",
      "Hand-finished movement (Caliber CH-9900)",
      "50m water resistance",
      "Hand-stitched alligator strap",
    ],
    category: "Chronograph",
    images: [WATCH_IMAGES.chrono2, WATCH_IMAGES.chrono1, WATCH_IMAGES.chrono3, WATCH_IMAGES.lifestyle2],
    rating: 4.8,
    reviewCount: 64,
    badge: "sale",
    inStock: true,
  },
  {
    id: 3,
    name: "Velocity GMT",
    brand: "CHRONOS",
    price: 8750,
    description:
      "Designed for the global traveler, the Velocity GMT combines chronograph functionality with dual-timezone display. The ceramic bezel is virtually scratch-proof, while the integrated bracelet flows seamlessly from case to clasp.",
    features: [
      "GMT complication with 24-hour bezel",
      "Ceramic bezel insert",
      "40mm stainless steel case",
      "Integrated steel bracelet",
      "200m water resistance",
      "Super-LumiNova indices",
    ],
    category: "Chronograph",
    images: [WATCH_IMAGES.chrono3, WATCH_IMAGES.chrono1, WATCH_IMAGES.chrono2, WATCH_IMAGES.lifestyle3],
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
  },

  // diver data
  {
    id: 4,
    name: "Abyssal 600",
    brand: "CHRONOS",
    price: 7200,
    description:
      "Built for the deepest explorations, the Abyssal 600 is tested to 600 meters of water resistance. The unidirectional rotating bezel features a luminescent 60-minute scale for precise dive timing. A helium escape valve ensures safe ascent from saturation dives.",
    features: [
      "600m water resistance (ISO 6425 certified)",
      "Helium escape valve",
      "Unidirectional rotating bezel",
      "43mm marine-grade steel case",
      "Rubber strap with extension system",
      "Super-LumiNova C3 lume",
    ],
    category: "Diver",
    images: [WATCH_IMAGES.diver1, WATCH_IMAGES.diver2, WATCH_IMAGES.diver3, WATCH_IMAGES.lifestyle1],
    rating: 4.8,
    reviewCount: 312,
    badge: "bestseller",
    inStock: true,
  },
  {
    id: 5,
    name: "Neptune Pro",
    brand: "CHRONOS",
    price: 5400,
    originalPrice: 6200,
    description:
      "The Neptune Pro blends everyday elegance with serious dive capability. Its slimmer 40mm profile sits comfortably under a shirt cuff, while still delivering 300m water resistance and ISO dive watch certification.",
    features: [
      "300m water resistance (ISO 6425)",
      "Automatic movement (Caliber CH-2824)",
      "40mm stainless steel case",
      "Ceramic bezel insert",
      "NATO and steel bracelet included",
      "Date magnifier at 3 o'clock",
    ],
    category: "Diver",
    images: [WATCH_IMAGES.diver1, WATCH_IMAGES.diver3, WATCH_IMAGES.lifestyle2],
    rating: 4.6,
    reviewCount: 189,
    badge: "sale",
    inStock: true,
  },
  {
    id: 6,
    name: "Mariner Heritage",
    brand: "CHRONOS",
    price: 14800,
    description:
      "A tribute to the golden age of ocean exploration. The Mariner Heritage features a bronze case that develops a unique patina over time — each watch tells the story of its owner's adventures. The warm-toned dial echoes vintage nautical instruments.",
    features: [
      "CuSn8 bronze case (develops patina)",
      "Vintage-inspired domed dial",
      "42mm case with exhibition back",
      "200m water resistance",
      "Swiss automatic (Caliber CH-2892)",
      "Handmade canvas strap",
    ],
    category: "Diver",
    images: [WATCH_IMAGES.diver3, WATCH_IMAGES.diver1, WATCH_IMAGES.diver2, WATCH_IMAGES.lifestyle3],
    rating: 4.9,
    reviewCount: 76,
    badge: "new",
    inStock: true,
  },

  // dress data
  {
    id: 7,
    name: "Éternité",
    brand: "CHRONOS",
    price: 24500,
    description:
      "The Éternité is our most refined creation. At just 7.2mm thick, this ultra-slim dress watch glides beneath any cuff. The grand feu enamel dial is hand-painted by master artisans in our Geneva atelier, requiring over 40 hours of meticulous work per dial.",
    features: [
      "Grand feu enamel dial (hand-painted)",
      "Ultra-slim 7.2mm profile",
      "38mm 18K white gold case",
      "Manual-wind movement (Caliber CH-1000)",
      "30m water resistance",
      "Hand-stitched ostrich leather strap",
    ],
    category: "Dress",
    images: [WATCH_IMAGES.dress1, WATCH_IMAGES.dress2, WATCH_IMAGES.dress3, WATCH_IMAGES.lifestyle1],
    rating: 5.0,
    reviewCount: 42,
    badge: "new",
    inStock: true,
  },
  {
    id: 8,
    name: "Classique Moon Phase",
    brand: "CHRONOS",
    price: 16200,
    description:
      "The Classique Moon Phase combines two of watchmaking's most romantic complications — a precision moon phase display accurate to within one day every 122 years, and a retrograde date hand. The guilloché dial catches light in endlessly shifting patterns.",
    features: [
      "Moon phase complication (122-year accuracy)",
      "Retrograde date display",
      "Guilloché-engraved dial",
      "40mm 18K rose gold case",
      "Automatic movement (Caliber CH-6654)",
      "Alligator strap with folding clasp",
    ],
    category: "Dress",
    images: [WATCH_IMAGES.dress2, WATCH_IMAGES.dress1, WATCH_IMAGES.dress3, WATCH_IMAGES.lifestyle2],
    rating: 4.8,
    reviewCount: 91,
    badge: "bestseller",
    inStock: true,
  },
  {
    id: 9,
    name: "Minimalist Série Noire",
    brand: "CHRONOS",
    price: 4800,
    description:
      "Inspired by the bauhaus philosophy that less is more, the Série Noire strips away everything unnecessary. The result is a watch of pure, quiet confidence — a jet-black dial with razor-thin hands and no indices beyond the cardinal hours.",
    features: [
      "Minimalist dial with 4 indices",
      "DLC-coated stainless steel case",
      "39mm case, 8.5mm thickness",
      "Japanese automatic movement",
      "50m water resistance",
      "Italian calfskin strap",
    ],
    category: "Dress",
    images: [WATCH_IMAGES.dress3, WATCH_IMAGES.dress1, WATCH_IMAGES.dress2, WATCH_IMAGES.lifestyle3],
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
  },

// sport data
  {
    id: 10,
    name: "Apex Carbon",
    brand: "CHRONOS",
    price: 9800,
    description:
      "Forged from aerospace-grade carbon fiber, the Apex Carbon weighs just 52 grams — making it one of the lightest luxury sports watches ever created. The skeletonized dial reveals the high-beat movement within, while the integrated rubber strap provides supreme comfort during any activity.",
    features: [
      "Forged carbon fiber case (52g total)",
      "Skeletonized dial",
      "High-beat automatic movement (28,800 vph)",
      "42mm case with integrated strap",
      "200m water resistance",
      "Shock-resistant to 5,000 G",
    ],
    category: "Sport",
    images: [WATCH_IMAGES.sport1, WATCH_IMAGES.sport2, WATCH_IMAGES.sport3, WATCH_IMAGES.lifestyle1],
    rating: 4.7,
    reviewCount: 234,
    badge: "new",
    inStock: true,
  },
  {
    id: 11,
    name: "Rally Tachymeter",
    brand: "CHRONOS",
    price: 6900,
    originalPrice: 7800,
    description:
      "Born on the racetrack, the Rally Tachymeter features a bi-compax dial layout inspired by vintage racing dashboards. The tachymeter bezel calculates speed over a known distance, while the oversized crown and pushers ensure easy operation even with racing gloves.",
    features: [
      "Tachymeter bezel (speed calculation)",
      "Bi-compax chronograph layout",
      "41mm stainless steel case",
      "Racing-inspired perforated strap",
      "100m water resistance",
      "Chronograph accurate to 1/4 second",
    ],
    category: "Sport",
    images: [WATCH_IMAGES.sport2, WATCH_IMAGES.sport1, WATCH_IMAGES.sport3, WATCH_IMAGES.lifestyle2],
    rating: 4.6,
    reviewCount: 178,
    badge: "sale",
    inStock: true,
  },
  {
    id: 12,
    name: "Titanium Explorer",
    brand: "CHRONOS",
    price: 11200,
    description:
      "The Titanium Explorer is the ultimate expedition companion. Featuring an integrated compass bezel, dual-crown design for inner-bezel rotation, and a scratch-resistant sapphire crystal, it's been tested from Arctic expeditions to Saharan crossings.",
    features: [
      "Grade 2 titanium case and bracelet",
      "Compass bezel with dual-crown system",
      "Anti-magnetic protection (>1,000 Gauss)",
      "43mm case, 13.5mm thickness",
      "300m water resistance",
      "Power reserve indicator on dial",
    ],
    category: "Sport",
    images: [WATCH_IMAGES.sport3, WATCH_IMAGES.sport1, WATCH_IMAGES.sport2, WATCH_IMAGES.lifestyle3],
    rating: 4.8,
    reviewCount: 145,
    badge: "bestseller",
    inStock: true,
  },
  {
    id: 13,
    name: "Pulse Digital",
    brand: "CHRONOS",
    price: 3200,
    description:
      "Where tradition meets technology. The Pulse Digital is our first hybrid watch, combining an analog dial with a discreet digital display for advanced fitness metrics. The solar-powered movement never needs a battery change.",
    features: [
      "Hybrid analog-digital display",
      "Solar-powered movement",
      "Step counter and heart rate zone",
      "40mm stainless steel case",
      "100m water resistance",
      "Interchangeable quick-release straps",
    ],
    category: "Sport",
    images: [WATCH_IMAGES.sport1, WATCH_IMAGES.sport3, WATCH_IMAGES.sport2, WATCH_IMAGES.lifestyle1],
    rating: 4.4,
    reviewCount: 298,
    inStock: true,
  },
  {
    id: 14,
    name: "Grande Complication",
    brand: "CHRONOS",
    price: 45000,
    description:
      "The Grande Complication is the magnum opus of CHRONOS. Housing a minute repeater, perpetual calendar, and tourbillon in a single movement, it represents over 800 components assembled entirely by hand. Only 25 pieces are produced each year.",
    features: [
      "Minute repeater complication",
      "Perpetual calendar (day, date, month, leap year)",
      "Tourbillon at 6 o'clock",
      "42mm platinum case",
      "Limited to 25 pieces per year",
      "Handmade, numbered certificate",
    ],
    category: "Dress",
    images: [WATCH_IMAGES.dress1, WATCH_IMAGES.dress3, WATCH_IMAGES.dress2, WATCH_IMAGES.chrono1],
    rating: 5.0,
    reviewCount: 12,
    inStock: true,
  },
];

// review data
export const customerReviews: Review[] = [
  {
    id: 1,
    name: "Alexander Whitmore",
    avatar: "AW",
    rating: 5,
    text: "The Sovereign Chronograph is a masterpiece. The weight, the finishing, the way light plays off the dial — it's intoxicating. I've owned Rolex and Omega, but CHRONOS offers something genuinely different.",
    date: "March 2026",
  },
  {
    id: 2,
    name: "Isabella Chen",
    avatar: "IC",
    rating: 5,
    text: "I purchased the Éternité as a gift for my husband. The grand feu enamel dial is breathtaking in person — photos don't do it justice. The unboxing experience alone felt like a special occasion.",
    date: "February 2026",
  },
  {
    id: 3,
    name: "Marcus Johansson",
    avatar: "MJ",
    rating: 4,
    text: "Took my Abyssal 600 to a depth of 45 meters on a wreck dive in the Red Sea. The lume is phenomenal, legible even in near-zero visibility. My new daily wear for both office and ocean.",
    date: "January 2026",
  },
  {
    id: 4,
    name: "Sophia de Laurent",
    avatar: "SL",
    rating: 5,
    text: "As a watch collector for 20 years, the Classique Moon Phase immediately earned its place in my collection. The guilloché work is exquisite, and the moon phase accuracy is remarkable.",
    date: "April 2026",
  },
];


// categories data
export const categories = [
  {
    name: "Chronograph",
    description: "Precision timing instruments",
    image: WATCH_IMAGES.chrono1,
    slug: "Chronograph",
  },
  {
    name: "Diver",
    description: "Built for the deep",
    image: WATCH_IMAGES.diver1,
    slug: "Diver",
  },
  {
    name: "Dress",
    description: "Understated elegance",
    image: WATCH_IMAGES.dress1,
    slug: "Dress",
  },
  {
    name: "Sport",
    description: "Engineered for performance",
    image: WATCH_IMAGES.sport1,
    slug: "Sport",
  },
] as const;


// helper functions
export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.badge === "bestseller");
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.rating >= 4.7).slice(0, 8);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.badge === "new");
}

export function getSaleProducts(): Product[] {
  return products.filter((p) => p.badge === "sale");
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
