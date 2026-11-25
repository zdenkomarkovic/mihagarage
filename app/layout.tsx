import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { StickyCall } from "@/components/layout/StickyCall";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1d2631",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // verification: { google: "TVOJ_VERIFICATION_CODE" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr-Latn" className={`${inter.variable} ${barlow.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-amber focus:px-4 focus:py-2 focus:text-black"
        >
          Preskoči na sadržaj
        </a>
        <Header />
        <div id="sadrzaj" className="flex-1">
          {children}
        </div>
        <Footer />
        <StickyCall />
        <HashScroll />
        <JsonLd data={businessSchema} />
        <JsonLd data={websiteSchema} />
      </body>
    </html>
  );
}
