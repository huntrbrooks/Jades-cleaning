export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  location: string;
  serviceArea: string;
  phone: {
    display: string;
    dial: string;
  };
  email: string;
  ctas: {
    primary: string;
    secondary: string;
    consult: string;
  };
  links: {
    booking: string;
    quote: string;
    consult: string;
    instagram: string;
    googleReviews: string;
    whatsapp: string;
  };
  stats: {
    rating: string;
    reviewCount: string;
    insured: string;
    local: string;
    satisfaction: string;
  };
  nav: NavItem[];
  footerNav: NavItem[];
  social: NavItem[];
};

export type Service = {
  id: string;
  name: string;
  summary: string;
  forWho: string[];
  includes: string[];
  excludes: string[];
  time: string;
  addons: string[];
};

export type PackageTier = {
  id: string;
  name: string;
  time: string;
  priceFrom: string;
  description: string;
  bestFor: string[];
  includes: string[];
};

export type Review = {
  id: string;
  name: string;
  suburb: string;
  quote: string;
  outcome: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ServiceArea = {
  area: string;
  blurb: string;
  suburbs: string[];
};

export type GalleryItem = {
  id: string;
  category: string;
  title: string;
  time: string;
  summary: string;
  win: string;
  beforeImage: string;
  afterImage: string;
};

export type BlogPost = {
  title: string;
  summary: string;
  slug: string;
};

export type HomeAnchorNavItem = {
  label: string;
  href: string;
};

export type HomeContactCard = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export const siteConfig: SiteConfig = {
  name: "Total Reset Services",
  tagline: "Your home, totally reset.",
  description:
    "Judgment-free deep cleaning, decluttering, and reorganisation that turns chaos into calm.",
  location: "Melbourne, Australia",
  serviceArea: "Inner Melbourne + surrounding suburbs",
  phone: {
    display: "+61 4 0000 0000",
    dial: "+61400000000",
  },
  email: "hello@totalresetservices.com",
  ctas: {
    primary: "Get a Quote",
    secondary: "See Packages",
    consult: "Free 10-Min Reset Consult",
  },
  links: {
    booking: "https://calendly.com/total-reset-services/reset-consult",
    quote: "/contact",
    consult: "https://calendly.com/total-reset-services/reset-consult",
    instagram: "https://instagram.com/totalresetservices",
    googleReviews: "https://g.page/r/total-reset-services/review",
    whatsapp:
      "https://wa.me/61400000000?text=Hi%20Total%20Reset%20Services%20%E2%80%94%20I%27d%20love%20a%20reset%20quote.",
  },
  stats: {
    rating: "5.0",
    reviewCount: "120+ reviews",
    insured: "Fully insured",
    local: "Local & trusted",
    satisfaction: "Satisfaction guaranteed",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Before & After", href: "/before-after" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "FAQs", href: "/faqs" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/totalresetservices" },
    { label: "Facebook", href: "https://facebook.com/totalresetservices" },
  ],
};

export const resetMethod = [
  {
    title: "Clear",
    description: "Declutter with care, sort by category, and create breathing room.",
  },
  {
    title: "Clean",
    description: "Deep clean surfaces, fixtures, and hard-to-reach details.",
  },
  {
    title: "Create",
    description: "Organise with zones, labels, and systems that make life easier.",
  },
  {
    title: "Calm",
    description: "Final styling, walkthrough, and simple routines to keep it easy.",
  },
];

export const heroTrustBadges = [
  siteConfig.stats.rating,
  siteConfig.stats.reviewCount,
  siteConfig.stats.insured,
  siteConfig.stats.local,
  siteConfig.stats.satisfaction,
];

export const homeAnchorNav: HomeAnchorNavItem[] = [
  { label: "Proof", href: "#proof" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export const homeContactCard: HomeContactCard = {
  eyebrow: "Ready for your reset?",
  title: "Start with a calm, clear next step.",
  description:
    "Tell us what feels overwhelming and we will map the best reset plan for your home.",
  highlights: [
    "Response within one business day",
    "Judgment-free consult and clear pricing",
    "Flexible scheduling across inner Melbourne",
  ],
  primaryLabel: "Get My Quote",
  primaryHref: "/contact",
  secondaryLabel: "Book a Reset Consult",
  secondaryHref: siteConfig.links.booking,
};

export const services: Service[] = [
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    summary:
      "A top-to-bottom refresh that targets grime, detail work, and the things normal cleans miss.",
    forWho: [
      "Busy households that need a full reset",
      "Move-in or post-renovation prep",
      "Anyone craving a fresh start",
    ],
    includes: [
      "Kitchen degrease and appliance fronts",
      "Bathrooms scrubbed and sanitised",
      "Floors vacuumed + mopped",
      "Dusting walls, skirting, and high-touch points",
    ],
    excludes: [
      "Exterior windows",
      "Mould remediation",
      "Biohazard or hoarding cleanups",
    ],
    time: "3-6 hours depending on size",
    addons: ["Oven clean", "Fridge clean", "Interior windows"],
  },
  {
    id: "decluttering",
    name: "Decluttering",
    summary:
      "Judgment-free sorting, binning, and donation prep so you can breathe again.",
    forWho: [
      "Overwhelmed families",
      "ADHD households or life transitions",
      "Anyone who wants more space",
    ],
    includes: [
      "Category-by-category sorting",
      "Donation and discard prep",
      "Labelled keep zones",
      "Gentle coaching and support",
    ],
    excludes: ["Hoarding cleanups", "Hazardous waste"],
    time: "2-5 hours per zone",
    addons: ["Donation run prep", "Storage bin sourcing"],
  },
  {
    id: "reorganisation",
    name: "Reorganisation",
    summary:
      "Systems that stick: pantries, wardrobes, laundry rooms, and storage zones.",
    forWho: [
      "People who want functional systems",
      "Families looking for calmer routines",
      "Homeowners prepping to sell",
    ],
    includes: [
      "Zone planning",
      "Container and label setup",
      "Workflow-based layouts",
      "Maintenance checklist",
    ],
    excludes: ["Custom carpentry", "Large furniture assembly"],
    time: "3-6 hours per main zone",
    addons: ["Product sourcing", "Label printing"],
  },
  {
    id: "move-reset",
    name: "Move-in / Move-out Reset",
    summary:
      "A full reset for moves so you can hand over or move in with confidence.",
    forWho: ["Tenants", "Property managers", "Busy move timelines"],
    includes: [
      "Deep clean of all rooms",
      "Spot treatment for walls",
      "Cabinets wiped and refreshed",
      "Floors, fixtures, and skirting detail",
    ],
    excludes: ["Carpet steam cleaning", "Exterior pressure washing"],
    time: "Half day to full day",
    addons: ["Carpet steam clean coordination", "Rubbish removal"],
  },
  {
    id: "post-renovation",
    name: "Post-renovation Clean",
    summary:
      "Dust-busting, debris cleanup, and a final polish after trades finish.",
    forWho: ["Renovators", "Builders", "Homeowners with fresh upgrades"],
    includes: [
      "Fine dust removal",
      "Surface wipe-downs",
      "Bathroom and kitchen detailing",
      "Floor vacuum + mop",
    ],
    excludes: ["Construction waste removal", "Paint correction"],
    time: "4-8 hours",
    addons: ["Window wash", "Fixture polishing"],
  },
];

export const packages: PackageTier[] = [
  {
    id: "mini-reset",
    name: "Mini Reset",
    time: "2-3 hours",
    priceFrom: "From $240",
    description: "One room or zone reset with a targeted clean and tidy.",
    bestFor: ["Bathrooms", "Kitchen touch-up", "Wardrobe starter"],
    includes: [
      "Focused deep clean",
      "Declutter and reset one zone",
      "Quick organisation touch",
    ],
  },
  {
    id: "total-reset",
    name: "Total Reset",
    time: "4-6 hours",
    priceFrom: "From $460",
    description: "Deep clean + declutter + reorganisation for one main zone.",
    bestFor: ["Overwhelmed households", "Busy professionals"],
    includes: [
      "Deep clean of key areas",
      "Decluttered surfaces",
      "Systems installed",
    ],
  },
  {
    id: "ultimate-reset",
    name: "Ultimate Reset",
    time: "Full day",
    priceFrom: "From $820",
    description: "Full transformation across multiple zones with systems and styling.",
    bestFor: ["Move-outs", "Whole-home chaos"],
    includes: [
      "Multi-zone reset",
      "Deep clean + organisation",
      "Walkthrough + maintenance plan",
    ],
  },
];

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Samantha R.",
    suburb: "Richmond",
    quote: "I could breathe again. The house felt brand new in a single day.",
    outcome: "Whole-home reset and pantry system",
  },
  {
    id: "review-2",
    name: "David M.",
    suburb: "Fitzroy",
    quote: "Judgment-free and unbelievably efficient. Worth every cent.",
    outcome: "Deep clean + wardrobe declutter",
  },
  {
    id: "review-3",
    name: "Priya K.",
    suburb: "St Kilda",
    quote: "They didn’t just clean, they rebuilt my routines.",
    outcome: "Laundry + storage reset",
  },
  {
    id: "review-4",
    name: "Hannah L.",
    suburb: "Carlton",
    quote: "The calm in my home is the best part. Everything has a place now.",
    outcome: "Kitchen and living reset",
  },
  {
    id: "review-5",
    name: "Marcus T.",
    suburb: "Brunswick",
    quote: "Fast, kind, and a total transformation. Highly recommend.",
    outcome: "Move-out reset",
  },
];

export const faqs: Faq[] = [
  {
    question: "Do I need to be home?",
    answer:
      "Not necessarily. Many clients provide access instructions and return for the walkthrough.",
  },
  {
    question: "How do you price resets?",
    answer:
      "Pricing is based on time, scope, and the level of reset required. We offer photo quotes or on-site quotes.",
  },
  {
    question: "What if I feel embarrassed?",
    answer:
      "We are judgment-free, always. Our job is to help you feel calm and supported.",
  },
  {
    question: "Do you bring products?",
    answer:
      "Yes, we bring professional-grade supplies. Let us know if you prefer eco products.",
  },
  {
    question: "How long will it take?",
    answer:
      "It depends on the package and space. Most resets range from 2 hours to a full day.",
  },
  {
    question: "What about pets?",
    answer:
      "We love pets. Just let us know in advance so we can plan around them.",
  },
  {
    question: "Do you do hoarding cleanups?",
    answer:
      "We currently focus on light-to-moderate clutter. If you need specialised support we can refer you.",
  },
  {
    question: "Are you insured?",
    answer: "Yes. We are fully insured for peace of mind.",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    area: "Inner North",
    blurb: "Decluttering and deep cleaning tailored for apartment and terrace living.",
    suburbs: ["Fitzroy", "Carlton", "Brunswick", "Northcote"],
  },
  {
    area: "Inner East",
    blurb: "Reset packages designed for busy professionals and families.",
    suburbs: ["Richmond", "Hawthorn", "Kew", "Camberwell"],
  },
  {
    area: "Bayside",
    blurb: "Move-in and Airbnb resets for coastal homes.",
    suburbs: ["St Kilda", "Elwood", "Brighton", "Sandringham"],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    category: "Kitchen",
    title: "Kitchen reset and pantry flow",
    time: "5 hours",
    summary: "Deep clean, decluttered benches, and zone-based pantry systems.",
    win: "Meal prep became effortless.",
    beforeImage: "/images/before-placeholder.svg",
    afterImage: "/images/after-placeholder.svg",
  },
  {
    id: "gallery-2",
    category: "Pantry",
    title: "Pantry transformation",
    time: "3 hours",
    summary: "Sorted by category, clear containers, and labels.",
    win: "No more expired food.",
    beforeImage: "/images/before-placeholder.svg",
    afterImage: "/images/after-placeholder.svg",
  },
  {
    id: "gallery-3",
    category: "Wardrobe",
    title: "Wardrobe edit",
    time: "4 hours",
    summary: "Seasonal edit, donation prep, and folded systems.",
    win: "Outfits made in minutes.",
    beforeImage: "/images/before-placeholder.svg",
    afterImage: "/images/after-placeholder.svg",
  },
  {
    id: "gallery-4",
    category: "Bathroom",
    title: "Bathroom reset",
    time: "2 hours",
    summary: "Deep clean and simplified product storage.",
    win: "Spa-level calm.",
    beforeImage: "/images/before-placeholder.svg",
    afterImage: "/images/after-placeholder.svg",
  },
  {
    id: "gallery-5",
    category: "Garage",
    title: "Garage zone rebuild",
    time: "6 hours",
    summary: "Stored by use, labelled bins, and clean floors.",
    win: "Space for the car again.",
    beforeImage: "/images/before-placeholder.svg",
    afterImage: "/images/after-placeholder.svg",
  },
  {
    id: "gallery-6",
    category: "Whole-home",
    title: "Whole-home calm",
    time: "Full day",
    summary: "Multi-zone reset with systems installed.",
    win: "House felt brand new.",
    beforeImage: "/images/before-placeholder.svg",
    afterImage: "/images/after-placeholder.svg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "How to declutter a bedroom in 60 minutes",
    summary: "A quick reset routine that makes mornings feel calmer.",
    slug: "declutter-bedroom-60-min",
  },
  {
    title: "Move-out cleaning checklist",
    summary: "The exact checklist we use to hand over spotless homes.",
    slug: "move-out-cleaning-checklist",
  },
  {
    title: "ADHD-friendly home organisation systems",
    summary: "Simple systems that reduce decision fatigue and keep clutter away.",
    slug: "adhd-friendly-organisation",
  },
  {
    title: "10-minute daily reset",
    summary: "A tiny routine that protects your reset every day.",
    slug: "ten-minute-reset",
  },
];

export const homeSteps = [
  {
    title: "Tell us what’s going on",
    description: "Share photos or a quick rundown so we can scope your reset.",
  },
  {
    title: "We reset it",
    description: "Deep clean, declutter, and organise with care and speed.",
  },
  {
    title: "You keep it easy",
    description: "Walkthrough, simple routines, and optional maintenance plan.",
  },
];

export const howItWorksSteps = [
  {
    title: "Request a quote",
    description: "Send a few photos or book an on-site consult.",
  },
  {
    title: "Quick consult",
    description: "We align on scope, goals, and the right reset package.",
  },
  {
    title: "We plan the reset",
    description: "A tailored plan so reset day runs smoothly.",
  },
  {
    title: "Reset day",
    description: "We clear, clean, and create calm in your home.",
  },
  {
    title: "Walkthrough",
    description: "Final touches, feedback, and any quick fixes.",
  },
  {
    title: "Maintenance option",
    description: "Simple routines or recurring clean support.",
  },
];

export const addOns = [
  "Oven clean",
  "Fridge clean",
  "Interior windows",
  "Extra bathrooms",
  "Linen reset",
  "Product sourcing",
];

export const valueProps = [
  {
    title: "Deep Clean",
    description: "Detail-first cleaning that lifts grime and restores shine.",
  },
  {
    title: "Declutter",
    description: "Judgment-free sorting to create space and clarity.",
  },
  {
    title: "Reorganise",
    description: "Systems that make your home easier to live in.",
  },
];

export const beforeAfterPreview = galleryItems.slice(0, 6);
