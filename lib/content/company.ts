export type CompanyDivision = {
  name: string;
  slug: string;
  tagline: string;
  sector: string;
  summary: string;
  services: string[];
  audiences: string[];
  image: string;
};

export const companyProfile = {
  name: "Sathriyan Group",
  tagline: "Strength in unity. Growth in diversity.",
  summary:
    "Sathriyan Group runs independent businesses. Construction, real estate, events, branding, trade, advisory, and hospitality. Each one focused. All connected.",
  foundations: [
    {
      title: "Do it right",
      description:
        "No shortcuts. Every project, every client, every time. We would rather do less and do it well than do more and do it poorly.",
    },
    {
      title: "Think forward",
      description:
        "The market moves. We move with it. New tools, new methods, better ways to get things done. That is how we stay relevant.",
    },
    {
      title: "People come first",
      description:
        "The client's problem is our problem. We listen, we understand, we deliver what actually matters, not what is easiest to sell.",
    },
  ],
};

export const companyDivisions: CompanyDivision[] = [
  {
    name: "Sathriyan Builders",
    slug: "sathriyan-builders",
    tagline: "We build it. We stand behind it.",
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
    tagline: "Property decisions you won't regret.",
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
    tagline: "Events that people actually remember.",
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
    tagline: "Brands that stand out. Not blend in.",
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
    tagline: "Trade without boundaries.",
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
    tagline: "Advice that moves the needle.",
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
    tagline: "Good food. Done right.",
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
    audiences: [
      "Restaurant customers",
      "Catering clients",
      "Food delivery customers",
    ],
    image: "/assets/home/events.jpg",
  },
];
