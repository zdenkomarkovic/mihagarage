"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Posle ucitavanja/navigacije skroluje do sekcije iz URL-a (npr. /#usluge).
 * Nativni skrol cesto promasi jer se stranica (slike, fontovi) jos slaze.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const go = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    };
    // vise pokusaja dok se raspored ne stabilizuje
    const timers = [50, 300, 800].map((ms) => window.setTimeout(go, ms));
    window.addEventListener("hashchange", go);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("hashchange", go);
    };
  }, [pathname]);

  return null;
}
