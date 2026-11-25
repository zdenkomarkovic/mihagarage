import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode za React - hvata potencijalne probleme ranije
  reactStrictMode: true,

  // Optimizacija slika - dodaj domene po potrebi
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Primer:
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      // },
    ],
  },

  // 301 preusmerenja sa starih .html adresa (cuva SEO rangiranje)
  async redirects() {
    return [
      // www -> non-www (jedan kanonski domen, 301)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mihagarage.rs" }],
        destination: "https://mihagarage.rs/:path*",
        permanent: true,
      },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/usluge.html", destination: "/#usluge", permanent: true },
      { source: "/usluge", destination: "/#usluge", permanent: true },
      { source: "/reference.html", destination: "/#reference", permanent: true },
      { source: "/reference", destination: "/#reference", permanent: true },
      { source: "/galerija.html", destination: "/#galerija", permanent: true },
      { source: "/galerija", destination: "/#galerija", permanent: true },
    ];
  },

  // Headers za bolju sigurnost
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
