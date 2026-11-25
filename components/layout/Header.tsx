"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

function NavLink({
  href,
  children,
  ...rest
}: React.ComponentProps<typeof Link>) {
  const h = typeof href === "string" ? href : "";
  // Hash linkovi (/#usluge) idu preko obicnog <a> - uvek skrolaju na sekciju
  return h.includes("#") ? (
    <a href={h} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  ) : (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href === "/#usluge"
        ? pathname.startsWith("/usluge")
        : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE_NAME} – početna`}>
          <Image
            src="/images/logo.jpg"
            alt=""
            width={48}
            height={48}
            priority
            className="h-12 w-12 bg-white object-contain"
          />
          <span className="font-display text-2xl font-extrabold uppercase leading-none tracking-wide">
            Miha <span className="text-amber">Garage</span>
          </span>
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) =>
              l.href === "/#usluge" ? (
                <li key={l.href} className="group relative">
                  <NavLink
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-amber group-has-[:focus-visible]:text-amber ${
                      isActive(l.href) ? "text-amber" : "text-snow"
                    }`}
                  >
                    {l.label}
                    <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform group-hover:rotate-180 group-has-[:focus-visible]:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M2 4l4 4 4-4" />
                    </svg>
                  </NavLink>
                  <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-1 border border-line bg-steel opacity-0 shadow-2xl transition-all group-has-[:focus-visible]:visible group-has-[:focus-visible]:translate-y-0 group-has-[:focus-visible]:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="py-2">
                      {SERVICES.map((sv) => (
                        <li key={sv.slug}>
                          <Link
                            href={`/usluge/${sv.slug}`}
                            aria-current={pathname === `/usluge/${sv.slug}` ? "page" : undefined}
                            className={`block border-l-2 px-5 py-2.5 text-sm transition-colors hover:border-amber hover:bg-panel hover:text-amber ${
                              pathname === `/usluge/${sv.slug}`
                                ? "border-amber text-amber"
                                : "border-transparent text-snow"
                            }`}
                          >
                            {sv.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <NavLink
                      href="/#usluge"
                      className="block border-t border-line px-5 py-3 text-xs font-bold uppercase tracking-wider text-amber hover:bg-panel"
                    >
                      Sve usluge →
                    </NavLink>
                  </div>
                </li>
              ) : (
                <li key={l.href}>
                  <NavLink
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-amber ${
                      isActive(l.href) ? "text-amber" : "text-snow"
                    }`}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="hidden bg-amber px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-amber-dark md:block"
          >
            {CONTACT.phone}
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobilni-meni"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobilni-meni" aria-label="Mobilna navigacija" className="border-t border-line bg-steel lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="border-b border-line last:border-0">
                <div className="flex items-center justify-between">
                  <NavLink
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`block flex-1 py-4 font-display text-xl uppercase ${
                      isActive(l.href) ? "text-amber" : ""
                    }`}
                  >
                    {l.label}
                  </NavLink>
                  {l.href === "/#usluge" && (
                    <button
                      type="button"
                      onClick={() => setSvcOpen((o) => !o)}
                      aria-expanded={svcOpen}
                      aria-controls="mobilni-usluge"
                      aria-label={svcOpen ? "Zatvori listu usluga" : "Otvori listu usluga"}
                      className="grid h-12 w-12 place-items-center text-amber"
                    >
                      <svg
                        viewBox="0 0 12 12"
                        className={`h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </button>
                  )}
                </div>
                {l.href === "/#usluge" && svcOpen && (
                  <ul id="mobilni-usluge" className="mb-3 ml-3 border-l border-line">
                    {SERVICES.map((sv) => (
                      <li key={sv.slug}>
                        <Link
                          href={`/usluge/${sv.slug}`}
                          className={`block py-2.5 pl-4 text-sm ${
                            pathname === `/usluge/${sv.slug}` ? "text-amber" : "text-mist"
                          }`}
                        >
                          {sv.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
