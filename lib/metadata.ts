import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "./constants";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  /** Putanja do slike za OG (relativna od /public ili apsolutna URL) */
  image?: string;
  /** Putanja stranice (npr. "/usluge") - koristi se za canonical */
  path?: string;
  /** Kljucne reci */
  keywords?: string[];
  /** Da li da noindex ova stranica */
  noIndex?: boolean;
  /** Tip stranice za OG */
  type?: "website" | "article";
  /** Datum objave (za blog postove) */
  publishedTime?: string;
}

/**
 * Helper za generisanje Next.js Metadata objekta.
 * Koristiti u svakom page.tsx fajlu.
 *
 * @example
 * // U page.tsx:
 * export const metadata = buildMetadata({
 *   title: "O nama",
 *   description: "Kratki opis stranice",
 * });
 */
export function buildMetadata({
  title,
  description,
  image,
  path = "/",
  keywords,
  noIndex = false,
  type = "website",
  publishedTime,
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = title ?? `${SITE_NAME} – ${SITE_TAGLINE}`;
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = image ?? `${SITE_URL}/images/gallery/garaza_1.jpg`;

  return {
    title: { absolute: fullTitle },
    description,
    ...(keywords && { keywords }),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "sr_RS",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
