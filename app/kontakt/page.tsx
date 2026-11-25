import { buildMetadata } from "@/lib/metadata";
import { CONTACT, MAP_QUERY } from "@/lib/constants";
import { Container, PageHero } from "@/components/ui/parts";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata = buildMetadata({
  title: "Kontakt – Miha Garage Beograd | 011/2570-532",
  description:
    "Kontaktirajte Miha Garage: telefon 011/2570-532, mobilni 060/517-1111, email office@mihagarage.rs. Pošaljite upit za ugradnju ili servis garažnih vrata.",
  path: "/kontakt",
  keywords: ["kontakt", "Miha Garage telefon", "ponuda garažna vrata"],
});

export default function KontaktPage() {
  return (
    <main>
      <PageHero
        title="Kontakt"
        lead="Pozovite nas ili pošaljite upit – odgovaramo u najkraćem roku."
        crumbs={[{ name: "Kontakt", path: "/kontakt" }]}
      />
      <section className="light bg-ink py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <address className="not-italic">
            <h2 className="text-4xl">Miha Garage</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-amber">Telefon</dt>
                <dd className="mt-1 font-display text-3xl">
                  <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-amber">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-amber">Mobilni</dt>
                <dd className="mt-1 font-display text-3xl">
                  <a href={`tel:${CONTACT.mobileHref}`} className="hover:text-amber">
                    {CONTACT.mobile}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-amber">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-amber">
                    {CONTACT.email}
                  </a>
                  <br />
                  <a href={`mailto:${CONTACT.emailAlt}`} className="text-mist hover:text-amber">
                    {CONTACT.emailAlt}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-amber">Lokacija</dt>
                <dd className="mt-1 text-lg">
                  {CONTACT.city}, {CONTACT.country}
                </dd>
              </div>
            </dl>
          </address>

          <div className="border border-line bg-steel p-8">
            <h2 className="mb-6 text-3xl">Kontaktirajte nas</h2>
            <ContactForm />
          </div>
        </Container>

        <Container className="mt-14">
          <h2 className="mb-6 text-4xl">Gde se nalazimo</h2>
          <div className="aspect-[16/9] max-h-[480px] w-full overflow-hidden border border-line md:aspect-[21/9]">
            <iframe
              title="Miha Garage na mapi"
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=sr&z=13&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
