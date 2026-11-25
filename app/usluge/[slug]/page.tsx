import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, gallery } from "@/lib/constants";
import { SERVICES, getService } from "@/lib/services";
import { serviceSchema } from "@/lib/schema";
import {
  ButtonLink,
  Container,
  CtaBand,
  FaqList,
  PageHero,
  SectionTitle,
} from "@/components/ui/parts";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({
    title: `${s.metaTitle} | Miha Garage`,
    description: s.metaDescription,
    path: `/usluge/${s.slug}`,
    image: undefined,
    keywords: s.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <main>
      <PageHero
        title={s.h1}
        lead={s.short}
        crumbs={[
          { name: s.name, path: `/usluge/${s.slug}` },
        ]}
        image={gallery(s.image)}
        imageAlt={`${s.name} – Miha Garage`}
      />

      <section className="light bg-ink py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-mist">
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-4 pt-4">
              <ButtonLink href={`tel:${CONTACT.phoneHref}`}>Pozovi {CONTACT.phone}</ButtonLink>
              <ButtonLink href="/kontakt" variant="ghost">
                Pošalji upit
              </ButtonLink>
            </div>
          </div>
          <aside className="border border-line bg-steel p-8">
            <h2 className="text-3xl text-amber">Šta dobijate</h2>
            <ul className="mt-5 space-y-3">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-snow/90">
                  <span className="text-amber">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="border-y border-line bg-steel py-16 md:py-24">
        <Container>
          <SectionTitle eyebrow="Kako radimo" title="Od upita do rešenja" />
          <ol className="grid gap-px bg-line md:grid-cols-4">
            {s.steps.map((st, i) => (
              <li key={st.title} className="bg-steel p-7">
                <span className="font-display text-5xl font-extrabold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl">{st.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{st.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="light bg-ink py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionTitle eyebrow="FAQ" title="Česta pitanja">
            {s.name}: odgovori na najčešća pitanja.
          </SectionTitle>
          <FaqList items={s.faq} />
        </Container>
      </section>

      <section className="border-t border-line py-16">
        <Container>
          <h2 className="text-3xl">Pogledajte i ostale usluge</h2>
          <ul className="mt-6 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/usluge/${o.slug}`}
                  className="group relative flex h-full gap-4 bg-ink p-5 hover:bg-panel"
                >
                  <span className="relative h-16 w-20 shrink-0 overflow-hidden bg-panel">
                    <Image
                      src={gallery(o.image)}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <span className="font-display text-xl uppercase group-hover:text-amber">
                    {o.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
      <JsonLd
        data={serviceSchema({
          name: s.name,
          description: s.metaDescription,
          path: `/usluge/${s.slug}`,
        })}
      />
    </main>
  );
}
