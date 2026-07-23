import type { CompanyDivision, ContactInfo } from "@/types/company";

export const companyProfile = {
  name: "Sathriyan Group",
  tagline: "Strength in Unity. Growth in Diversity.",
  summary:
    "Sathriyan Group is a diversified business group with ventures in construction, real estate, branding, events, consultancy, international trade, and food and hospitality.",
  foundations: [
    {
      title: "Integrity",
      description:
        "Building every relationship with honesty, transparency, and long-term responsibility.",
    },
    {
      title: "Innovation",
      description:
        "Using modern ideas, systems, and technology to create better outcomes across industries.",
    },
    {
      title: "Customer Focus",
      description:
        "Keeping client goals, audience needs, and practical value at the center of each division.",
    },
  ],
};

export const companyDivisions: CompanyDivision[] = [
  {
    name: "Sathriyan Builders",
    slug: "sathriyan-builders",
    tagline: "Crafting Landmarks, Shaping Lifestyles",
    sector: "Construction and Real Estate",
    summary:
      "Construction and development services for residential, commercial, infrastructure, and urban planning projects.",
    services: [
      "Building construction",
      "Residential projects",
      "Commercial projects",
      "Infrastructure development",
      "Urban planning support",
    ],
    audiences: ["Property owners", "Developers", "Investors", "Institutions"],
    image: "/assets/home/construction.jpg",
  },
  {
    name: "Landmark Realty",
    slug: "landmark-realty",
    tagline: "Where Every Property Becomes a Landmark",
    sector: "Real Estate and Property Services",
    summary:
      "Property advisory, sales, leasing, investment guidance, and project marketing for real estate clients.",
    services: [
      "Property sales",
      "Leasing support",
      "Investment consultancy",
      "Project marketing",
      "Property management support",
    ],
    audiences: ["Home buyers", "Land owners", "NRIs", "Builders", "Investors"],
    image: "/assets/home/real-estate.jpg",
  },
  {
    name: "Nexgen Events",
    slug: "nexgen-events",
    tagline: "Seamless Events, Lasting Impressions",
    sector: "Event Management",
    summary:
      "End-to-end planning and execution for corporate events, exhibitions, launches, celebrations, and brand experiences.",
    services: [
      "Corporate events",
      "Exhibitions",
      "Product launches",
      "Private celebrations",
      "Vendor coordination",
    ],
    audiences: ["Corporates", "Brands", "Real estate firms", "Families"],
    image: "/assets/home/events.jpg",
  },
  {
    name: "Boldmark Agency",
    slug: "boldmark-agency",
    tagline: "Bold Ideas Marked Success",
    sector: "Branding and Advertising",
    summary:
      "Creative branding, advertising, digital marketing, and communication services for growing businesses.",
    services: [
      "Brand identity",
      "Advertising campaigns",
      "Digital marketing",
      "Creative campaigns",
      "Corporate communications",
    ],
    audiences: [
      "Real estate companies",
      "Retail brands",
      "FMCG brands",
      "Hotels",
    ],
    image: "/assets/home/boldmark.jpg",
  },
  {
    name: "InterWorld Link",
    slug: "interworld-link",
    tagline: "Connecting Borders, Creating Opportunities",
    sector: "International Trade and Business Solutions",
    summary:
      "Import-export, global sourcing, market access, and business support for companies expanding across borders.",
    services: [
      "Import-export support",
      "Global sourcing",
      "Trade consultancy",
      "Market research",
      "Cross-border business support",
    ],
    audiences: ["SMEs", "Exporters", "Importers", "Manufacturers"],
    image: "/assets/home/interworld.jpg",
  },
  {
    name: "NextWave Advisors",
    slug: "nextwave-advisors",
    tagline: "Ride the Next Wave of Success",
    sector: "Business Consulting and Advisory",
    summary:
      "Strategic advisory for business planning, finance, taxation, process transformation, and AI-enabled operations.",
    services: [
      "Business strategy",
      "Financial planning",
      "Tax advisory",
      "Process transformation",
      "Startup advisory",
    ],
    audiences: ["Startups", "SMEs", "Investors", "Growing businesses"],
    image: "/assets/home/advisor.jpg",
  },
  {
    name: "Sathriyan Foods",
    slug: "sathriyan-foods",
    tagline: "Serving Quality, Taste, and Trust",
    sector: "Food and Hospitality",
    summary:
      "Food and hospitality venture focused on restaurants, catering, packaged foods, and delivery services.",
    services: [
      "Restaurants",
      "Catering",
      "Packaged foods",
      "Food delivery",
      "Hospitality services",
    ],
    audiences: ["Families", "Events", "Corporate clients", "Retail customers"],
    image: "/assets/home/food.jpg",
  },
];

export const contactInfo: ContactInfo = {
  address: ["12, Bheema Nagar", "Trichy, 620008"],
  phone: "+91 12345 67890",
  email: "abc@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/",
    whatsapp: "https://wa.me/911234567890",
  },
};

export const getDivisionBySlug = (slug: string) =>
  companyDivisions.find((division) => division.slug === slug);
