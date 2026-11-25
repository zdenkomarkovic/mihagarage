import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { AREAS, BRANDS, CONTACT, SITE_DESCRIPTION, gallery } from "@/lib/constants";
import { GALLERY_COUNT, HOME_FAQ, REFERENCES, SERVICES } from "@/lib/services";
import { Gallery } from "@/components/ui/Gallery";
import {
  ButtonLink,
  Container,
  CtaBand,
  FaqList,
  SectionTitle,
} from "@/components/ui/parts";

export const metadata = buildMetadata({
  title: "Garažna vrata Beograd – ugradnja i servis | Miha Garage",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "garažna vrata",
    "ugradnja garažnih vrata",
    "klizne kapije",
    "automatske rampe",
    "motori za kapije",
    "servis garažnih vrata",
    "Beograd",
    "BFT",
    "Lift Master",
  ],
});

const GALLERY_IMAGES = Array.from({ length: GALLERY_COUNT }, (_, i) => ({
  src: gallery(i + 1),
  alt: `Garažna vrata i motor – primer ugradnje Miha Garage ${i + 1}`,
}));

const REFERENCE_LOGOS = [
  { src: "/images/nis_logo.gif", alt: "Referenca Miha Garage – NIS" },
  { src: "/images/kbcbk.gif", alt: "Referenca Miha Garage – KBC Bežanijska kosa" },
  { src: "/images/kankancom.jpg", alt: "Referenca Miha Garage – Can-Com d.o.o." },
];

const WHY = [
  {
    t: "Montaža i servis na jednom mestu",
    d: "Uz kvalitetnu montažu svih naših proizvoda obezbeđujemo servis sa originalnim delovima.",
  },
  {
    t: "Garantni i vangarantni servis",
    d: "Brinemo o vratima i motorima i nakon isteka garancije.",
  },
  {
    t: "Svi poznati brendovi",
    d: "Ugrađujemo i servisiramo motore, foto ćelije i prijemnike svih poznatih brendova.",
  },
  {
    t: "Konsultacije bez obaveze",
    d: "Ne ustručavajte se – nazovite nas i naći ćemo pravo rešenje za vas.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="panels relative overflow-hidden border-b border-line">
        <Image
          src={gallery(8)}
          alt="Ugrađena garažna vrata i motor – Miha Garage"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent" />
        <Container className="relative py-24 md:py-36">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-amber">
            Beograd · Cela Srbija
          </p>
          <h1 className="max-w-4xl text-6xl md:text-8xl">
            Ugradnja i servis <span className="text-amber">garažnih vrata</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-snow/85 md:text-xl">
            Proizvodnja garažnih vrata od sendvič panela sa toplotnom i zvučnom
            izolacijom, automatizacija kliznih i zaokretnih kapija, rampe, stubići
            i parking sistemi – uz servis sa originalnim delovima.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={`tel:${CONTACT.phoneHref}`}>Pozovi {CONTACT.phone}</ButtonLink>
            <ButtonLink href="/kontakt" variant="ghost">
              Pošalji upit
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* BRZE INFORMACIJE */}
      <section className="border-b border-line bg-steel">
        <Container className="grid gap-px py-0 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w) => (
            <div key={w.t} className="border-line p-7 lg:border-r last:border-r-0">
              <h2 className="text-2xl text-amber">{w.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{w.d}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* USLUGE */}
      <section id="usluge" className="light bg-ink scroll-mt-20 py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="Šta radimo" title="Naše usluge">
            Od ugradnje novih vrata i kapija, preko automatike, do servisa i
            održavanja – sve što vam treba za garažu, dvorište i poslovni prostor.
          </SectionTitle>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/usluge/${s.slug}`}
                className="group relative bg-ink p-8 transition-colors hover:bg-panel sm:max-lg:last:col-span-2 lg:last:col-span-3"
              >
                <span className="font-display text-6xl font-extrabold text-line transition-colors group-hover:text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-3xl">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{s.short}</p>
                <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-amber">
                  Saznaj više →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-6 border border-line bg-steel p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-3xl">Konsultacije i saveti</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-mist">
                Ne ustručavajte se, nazovite – naći ćemo pravo rešenje za vas. Pomoći ćemo vam da
                izaberete tip vrata, motor i opremu koji odgovaraju vašem objektu i potrebama.
              </p>
            </div>
            <ButtonLink href={`tel:${CONTACT.phoneHref}`}>Pozovi {CONTACT.phone}</ButtonLink>
          </div>
        </Container>
      </section>

      {/* O NAMA / TEKST ZA SEO */}
      <section className="border-y border-line bg-steel py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle eyebrow="O nama" title="Miha Garage – garažna vrata i automatika" />
            <div className="space-y-4 leading-relaxed text-mist">
              <p>
                <strong className="text-snow">Miha Garage</strong> ugrađuje, prodaje i servisira
                sve vrste garažnih vrata, rampi, motora i foto ćelija svih poznatih brendova, kao
                i održavanje istih. Proizvodimo garažna vrata od sendvič panela sa toplotnom i
                zvučnom izolacijom i radimo automatizaciju kliznih i zaokretnih kapija,
                automatskih rampi, automatskih stubića, parking sistema, automatskih kliznih
                vrata, rolo vrata i rešetki.
              </p>
              <p>
                Radimo još i PVC i ALU stolariju, kao i ograde i kapije za vaš dom. Naši klijenti
                su javne ustanove, preduzeća i veliki broj fizičkih lica širom Srbije, Crne Gore
                i Federacije BiH.
              </p>
              <p>
                Sa nama dogovarate i osnovno održavanje uređaja za određeni ili neodređeni period.
                Za savet ili ponudu pozovite{" "}
                <a className="text-amber" href={`tel:${CONTACT.phoneHref}`}>
                  {CONTACT.phone}
                </a>{" "}
                ili{" "}
                <a className="text-amber" href={`tel:${CONTACT.mobileHref}`}>
                  {CONTACT.mobile}
                </a>
                .
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/o-nama">Više o nama</ButtonLink>
              <ButtonLink href="/#reference" variant="ghost">
                Naše reference
              </ButtonLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[2, 6, 9, 12].map((n, i) => (
              <div
                key={n}
                className={`relative aspect-[4/5] overflow-hidden bg-panel ${i % 2 ? "mt-8" : ""}`}
              >
                <Image
                  src={gallery(n)}
                  alt="Garažna vrata i motor – primer ugradnje Miha Garage"
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BRENDOVI */}
      <section className="light bg-ink py-16">
        <Container className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-mist">
            Radimo sa svim poznatim brendovima, između ostalih
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-14 gap-y-4">
            {BRANDS.map((b) => (
              <li key={b} className="font-display text-4xl font-extrabold uppercase text-snow/70">
                {b}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* REFERENCE */}
      <section id="reference" className="scroll-mt-20 border-t border-line py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="Reference" title="Klijenti koji nam veruju">
            Radili smo za javna preduzeća, fakultete, trgovinske lance i mnoge privatne
            korisnike.
          </SectionTitle>
          <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {REFERENCES.map((r) => (
              <li key={r.name} className="bg-ink p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-amber">{r.type}</p>
                <h3 className="mt-2 text-3xl">{r.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center gap-8 border-y border-line py-8">
            {REFERENCE_LOGOS.map((l) => (
              <Image
                key={l.src}
                src={l.src}
                alt={l.alt}
                width={160}
                height={80}
                className="h-16 w-auto bg-white p-2"
              />
            ))}
          </div>

          <p className="mt-8 max-w-3xl leading-relaxed text-mist">
            Ovo su samo neki od naših klijenata. Tu spadaju i mnoga fizička lica širom Srbije,
            Crne Gore i Federacije. Izvinjavamo se onima koje nismo naveli.
          </p>
        </Container>
      </section>

      {/* GALERIJA */}
      <section id="galerija" className="scroll-mt-20 border-t border-line bg-steel py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="Galerija" title="Primeri naših radova">
            Primeri ugrađenih garažnih vrata i motora. Za više informacija pozovite{" "}
            {CONTACT.phone}.
          </SectionTitle>
          <Gallery images={GALLERY_IMAGES} sectionId="galerija" />
        </Container>
      </section>

      {/* FAQ */}
      <section className="light bg-ink py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionTitle eyebrow="FAQ" title="Česta pitanja">
            Odgovori na pitanja koja nam klijenti najčešće postavljaju.
          </SectionTitle>
          <FaqList items={HOME_FAQ} />
        </Container>
      </section>

      {/* PODRUČJE RADA */}
      <section className="light bg-ink border-t border-line py-16">
        <Container>
          <h2 className="text-3xl">Područje rada</h2>
          <p className="mt-3 max-w-3xl text-mist">
            Garažna vrata, kapije i rampe ugrađujemo i servisiramo u Beogradu i širom Srbije:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <li key={a} className="border border-line px-4 py-2 text-sm text-mist">
                {a}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
