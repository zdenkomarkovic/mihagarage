import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { BRANDS, gallery } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { Container, CtaBand, PageHero, SectionTitle } from "@/components/ui/parts";

export const metadata = buildMetadata({
  title: "O nama – Miha Garage | Ugradnja i servis garažnih vrata",
  description:
    "Miha Garage ugrađuje, prodaje i servisira garažna vrata, rampe, motore i foto ćelije svih poznatih brendova. Saznajte ko smo i kako radimo.",
  path: "/o-nama",
  keywords: ["o nama", "Miha Garage", "proizvodnja garažnih vrata"],
});

export default function ONamaPage() {
  return (
    <main>
      <PageHero
        title="O nama"
        lead="Ugradnja, prodaja i servis garažnih vrata, rampi, motora i foto ćelija."
        crumbs={[{ name: "O nama", path: "/o-nama" }]}
        image={gallery(20)}
      />

      <section className="light bg-ink py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-mist">
            <p>
              <strong className="text-snow">Miha Garage</strong> ugrađuje i vrši prodaju i servis
              svih vrsta garažnih vrata, rampi, motora i foto ćelija svih poznatih brendova, kao i
              održavanje istih.
            </p>
            <p>
              Proizvodimo garažna vrata od sendvič panela sa toplotnom i zvučnom izolacijom.
              Automatizujemo klizne i zaokretne kapije, ugrađujemo automatske rampe, automatske
              stubiće, parking sisteme, automatska klizna vrata, rolo vrata i rešetke.
            </p>
            <p>
              Radimo još i PVC i ALU stolariju, kao i ograde i kapije za vaš dom.
            </p>
            <p>
              Uz kvalitetnu montažu svih naših proizvoda obezbeđujemo i servis sa originalnim
              delovima u garantnom i vangarantnom roku.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-panel">
            <Image
              src={gallery(17)}
              alt="Ugradnja garažnih vrata i motora – Miha Garage"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-steel py-16 md:py-24">
        <Container>
          <SectionTitle eyebrow="Zašto mi" title="Kako radimo" />
          <div className="grid gap-px bg-line md:grid-cols-3">
            {[
              ["Kvalitetna montaža", "Svaki sistem ugrađujemo, podešavamo i testiramo – uključujući bezbednosnu opremu."],
              ["Originalni delovi", "Servis radimo sa originalnim delovima, u garantnom i vangarantnom roku."],
              ["Savet pre ponude", "Konsultacije su deo usluge. Predlažemo rešenje koje odgovara vašoj potrebi."],
            ].map(([t, d]) => (
              <div key={t} className="bg-steel p-8">
                <h3 className="text-3xl text-amber">{t}</h3>
                <p className="mt-3 leading-relaxed text-mist">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-mist">
            Brendovi sa kojima radimo, između ostalih: {BRANDS.join(", ")}.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl">Naše usluge</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/usluge/${s.slug}`}
                  className="block border border-line px-4 py-2 text-sm hover:border-amber hover:text-amber"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
