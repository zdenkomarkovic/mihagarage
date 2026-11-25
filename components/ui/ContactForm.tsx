"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

const REASONS = [
  "Ugradnja garažnih vrata",
  "Automatizacija kapije",
  "Rampe / stubići / parking",
  "Servis ili popravka",
  "Održavanje",
  "Konsultacije",
  "Ostalo",
];

const field =
  "w-full border border-line bg-ink px-4 py-3 text-snow placeholder:text-mist/60 focus:border-amber focus:outline-none";

export function ContactForm({ defaultReason }: { defaultReason?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Greška pri slanju.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Greška pri slanju.");
    }
  }

  if (status === "ok") {
    return (
      <div role="status" className="border border-amber bg-panel p-8">
        <h3 className="text-3xl text-amber">Hvala na upitu!</h3>
        <p className="mt-3 text-mist">
          Vaša poruka je poslata. Javićemo vam se u najkraćem roku.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-bold uppercase tracking-wider text-amber underline"
        >
          Pošalji novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      {/* Honeypot protiv botova */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Ime i prezime
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Broj telefona (opciono)
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Email adresa
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Razlog kontakta
          <select name="reason" defaultValue={defaultReason ?? REASONS[0]} className={field}>
            {REASONS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Poruka / pitanje
        <textarea name="message" required minLength={10} maxLength={2000} rows={6} className={field} />
      </label>
      {status === "error" && (
        <p role="alert" className="border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-700">
          {error} Pozovite nas na 011/2570-532 ili pišite na office@mihagarage.rs.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-amber px-8 py-4 text-sm font-bold uppercase tracking-wider text-on-amber transition-colors hover:bg-amber-dark disabled:opacity-60 sm:w-fit"
      >
        {status === "sending" ? "Šaljem…" : "Pošalji upit"}
      </button>
    </form>
  );
}
