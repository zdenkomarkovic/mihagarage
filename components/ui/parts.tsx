import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import type { Faq } from "@/lib/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-7xl px-5 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-amber">
      <span className="h-px w-8 bg-amber" />
      {children}
    </p>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-mist">{children}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-4 text-sm font-bold uppercase tracking-wider transition-colors";
  const styles =
    variant === "primary"
      ? "bg-amber text-on-amber hover:bg-amber-dark"
      : "border border-snow/30 text-snow hover:border-amber hover:text-amber";
  const cls = `${base} ${styles}`;
  return href.startsWith("tel:") || href.startsWith("mailto:") || href.includes("#") ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PageHero({
  title,
  lead,
  crumbs,
  image,
  imageAlt,
}: {
  title: string;
  lead?: string;
  crumbs: { name: string; path: string }[];
  image?: string;
  imageAlt?: string;
}) {
  const all = [{ name: "Početna", path: "/" }, ...crumbs];
  return (
    <section className="panels relative overflow-hidden border-b border-line bg-steel">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent" />
        </>
      )}
      <Container className="relative py-16 md:py-24">
        <nav aria-label="Putanja" className="mb-6 text-xs uppercase tracking-wider text-mist">
          <ol className="flex flex-wrap gap-2">
            {all.map((c, i) => (
              <li key={c.path} className="flex gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i === all.length - 1 ? (
                  <span aria-current="page" className="text-amber">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-snow">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-4xl text-5xl md:text-7xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{lead}</p>}
      </Container>
      <JsonLd data={breadcrumbSchema(all)} />
    </section>
  );
}

export function FaqList({ items, withSchema = true }: { items: Faq[]; withSchema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-line border-y border-line">
        {items.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl uppercase">
              <h3 className="text-2xl">{f.q}</h3>
              <span aria-hidden className="text-3xl text-amber transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl leading-relaxed text-mist">{f.a}</p>
          </details>
        ))}
      </div>
      {withSchema && <JsonLd data={faqSchema(items)} />}
    </>
  );
}

export function CtaBand({
  title = "Treba vam ponuda ili savet?",
  text = "Nazovite nas – konsultacije su deo usluge. Naći ćemo pravo rešenje za vas.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-amber text-black">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-4xl md:text-5xl">{title}</h2>
          <p className="mt-2 max-w-xl text-lg font-medium">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="bg-navy px-7 py-4 text-sm font-bold uppercase tracking-wider text-snow hover:bg-ink"
          >
            {CONTACT.phone}
          </a>
          <Link
            href="/kontakt"
            className="border-2 border-navy px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy hover:bg-navy hover:text-snow"
          >
            Pošalji upit
          </Link>
        </div>
      </Container>
    </section>
  );
}
