import type { MetadataRoute } from "next";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(CONTENT_UPDATED);
  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/usluge/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/o-nama`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
  return pages;
}
