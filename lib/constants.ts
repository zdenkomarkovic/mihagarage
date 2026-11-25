// Globalne konstante sajta - jedini izvor istine za NAP podatke (naziv, adresa, telefon)

// Kanonski domen: BEZ "www". (www.mihagarage.rs se 301 preusmerava na ovaj - vidi next.config.ts)
export const PRODUCTION_URL = "https://mihagarage.rs";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const isLocalUrl = !envUrl || /localhost|127\.0\.0\.1/.test(envUrl);

// U produkciji se NIKAD ne koristi localhost (inace bi canonical/sitemap/schema pokazivali na localhost)
export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? isLocalUrl
      ? PRODUCTION_URL
      : envUrl!
    : (envUrl ?? "http://localhost:3000");

// Datum poslednje vece izmene sadrzaja (za sitemap). Azurirati pri izmeni sadrzaja.
export const CONTENT_UPDATED = "2026-11-25";

export const SITE_NAME = "Miha Garage";

export const SITE_TAGLINE = "Ugradnja i servis garažnih vrata";

export const SITE_DESCRIPTION =
  "Miha Garage – ugradnja, prodaja i servis garažnih vrata, kliznih kapija, rampi, motora i foto ćelija svih poznatih brendova. Beograd i cela Srbija. Pozovite 011/2570-532.";

export const CONTACT = {
  phone: "011/2570-532",
  phoneHref: "+381112570532",
  mobile: "060/517-1111",
  mobileHref: "+381605171111",
  email: "office@mihagarage.rs",
  emailAlt: "kontakt@mihagarage.rs",
  city: "Beograd",
  country: "Srbija",
  countryCode: "RS",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/#usluge", label: "Usluge" },
  { href: "/#reference", label: "Reference" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

// Upit za Google mapu. Kada imate tacnu adresu, upisite je ovde (npr. "Ulica 12, Beograd").
export const MAP_QUERY = "Miha Garage, Beograd";

export const BRANDS = ["BFT", "Lift Master"];

export const AREAS = [
  "Beograd",
  "Novi Beograd",
  "Zemun",
  "Zvezdara",
  "Voždovac",
  "Čukarica",
  "Palilula",
  "Rakovica",
  "Surčin",
  "Lazarevac",
  "Šabac",
  "Cela Srbija",
];

export const gallery = (n: number) => `/images/gallery/garaza_${n}.jpg`;
