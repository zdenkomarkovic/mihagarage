"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const PAGE_SIZE = 8;

export function Gallery({
  images,
  sectionId,
}: {
  images: { src: string; alt: string }[];
  sectionId?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(images.length / PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(p);
    if (sectionId) {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) =>
      setActive((a) => (a === null ? a : (a + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {images.map((img, i) => (
          // Sve slike su u HTML-u (SEO); neaktivne strane su samo sakrivene
          <li key={img.src} hidden={Math.floor(i / PAGE_SIZE) !== page}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden bg-panel"
              aria-label={`Uvećaj: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
            </button>
          </li>
        ))}
      </ul>

      {pages > 1 && (
        <nav aria-label="Paginacija galerije" className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className="h-11 border border-line px-4 text-sm font-bold uppercase tracking-wider hover:border-amber hover:text-amber disabled:opacity-40 disabled:hover:border-line disabled:hover:text-inherit"
          >
            ‹ Prethodna
          </button>
          {Array.from({ length: pages }, (_, p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-label={`Strana ${p + 1}`}
              aria-current={p === page ? "page" : undefined}
              className={`h-11 w-11 border text-sm font-bold ${
                p === page
                  ? "border-amber bg-amber text-on-amber"
                  : "border-line hover:border-amber hover:text-amber"
              }`}
            >
              {p + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === pages - 1}
            className="h-11 border border-line px-4 text-sm font-bold uppercase tracking-wider hover:border-amber hover:text-amber disabled:opacity-40 disabled:hover:border-line disabled:hover:text-inherit"
          >
            Sledeća ›
          </button>
        </nav>
      )}

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pregled slike"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Zatvori"
            className="absolute right-4 top-4 h-12 w-12 border border-line text-2xl"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Prethodna slika"
            className="absolute left-3 top-1/2 h-12 w-12 -translate-y-1/2 border border-line bg-ink/70 text-2xl"
          >
            ‹
          </button>
          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]!.src}
              alt={images[active]!.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Sledeća slika"
            className="absolute right-3 top-1/2 h-12 w-12 -translate-y-1/2 border border-line bg-ink/70 text-2xl"
          >
            ›
          </button>
          <p className="absolute bottom-4 text-sm text-mist">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
