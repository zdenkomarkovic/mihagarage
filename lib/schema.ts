import {
  AREAS,
  CONTACT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./constants";
import type { Faq } from "./services";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: "MIHA GARAGE",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/gallery/garaza_1.jpg`,
  logo: `${SITE_URL}/images/logo.jpg`,
  telephone: CONTACT.phoneHref,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.city,
    addressCountry: CONTACT.countryCode,
  },
  areaServed: AREAS.map((name) => ({ "@type": "Place", name })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneHref,
      contactType: "customer service",
      availableLanguage: ["sr"],
    },
    {
      "@type": "ContactPoint",
      telephone: CONTACT.mobileHref,
      contactType: "sales",
      availableLanguage: ["sr"],
    },
  ],
  knowsAbout: [
    "garažna vrata",
    "klizne kapije",
    "automatske rampe",
    "motori za kapije",
    "servis garažnih vrata",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "sr-Latn-RS",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export const faqSchema = (items: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});

export const serviceSchema = (s: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  url: `${SITE_URL}${s.path}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "Country", name: "Srbija" },
});
