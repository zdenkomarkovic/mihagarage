import { buildMetadata } from "@/lib/metadata";
import { Container, ButtonLink } from "@/components/ui/parts";

export const metadata = buildMetadata({
  title: "Stranica nije pronađena | Miha Garage",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <main className="panels py-32">
      <Container>
        <p className="font-display text-9xl font-extrabold text-amber">404</p>
        <h1 className="mt-2 text-5xl">Stranica nije pronađena</h1>
        <p className="mt-4 max-w-lg text-mist">
          Stranica koju tražite ne postoji ili je premeštena.
        </p>
        <div className="mt-8 flex gap-4">
          <ButtonLink href="/">Početna</ButtonLink>
          <ButtonLink href="/kontakt" variant="ghost">Kontakt</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
