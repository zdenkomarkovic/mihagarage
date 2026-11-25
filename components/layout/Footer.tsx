import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-line bg-steel pb-20 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.jpg"
            alt="Miha Garage logo"
            width={80}
            height={80}
            className="mb-4 h-20 w-20 bg-white object-contain"
          />
          <p className="font-display text-3xl font-extrabold uppercase">
            Miha <span className="text-amber">Garage</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Ugradnja i servis garažnih vrata, kliznih kapija, rampi i motora.
            Beograd i cela Srbija.
          </p>
        </div>

        <nav aria-label="Usluge u podnožju">
          <h2 className="mb-4 text-lg text-amber">Usluge</h2>
          <ul className="space-y-2 text-sm text-mist">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/usluge/${s.slug}`} className="hover:text-snow">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Stranice u podnožju">
          <h2 className="mb-4 text-lg text-amber">Sajt</h2>
          <ul className="space-y-2 text-sm text-mist">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                {l.href.includes("#") ? (
                  <a href={l.href} className="hover:text-snow">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="hover:text-snow">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="mb-4 text-lg text-amber">Kontakt</h2>
          <ul className="space-y-2 text-sm text-mist">
            <li>
              Telefon:{" "}
              <a className="text-snow hover:text-amber" href={`tel:${CONTACT.phoneHref}`}>
                {CONTACT.phone}
              </a>
            </li>
            <li>
              Mobilni:{" "}
              <a className="text-snow hover:text-amber" href={`tel:${CONTACT.mobileHref}`}>
                {CONTACT.mobile}
              </a>
            </li>
            <li>
              Email:{" "}
              <a className="text-snow hover:text-amber" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
            <li>
              {CONTACT.city}, {CONTACT.country}
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-mist sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Sva prava zadržana.
          </p>
          <p>
            Izrada sajta{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-snow hover:text-amber"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
