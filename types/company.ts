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

export type ContactInfo = {
  address: string[];
  phone: string;
  email: string;
  socials: {
    instagram: string;
    whatsapp: string;
  };
};
