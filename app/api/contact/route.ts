import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  reason: z.string().trim().max(100).optional().default("Upit"),
  message: z.string().trim().min(10).max(2000),
  website: z.string().optional(), // honeypot
});

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Proverite unete podatke." },
      { status: 400 },
    );
  }
  const d = parsed.data;

  // Honeypot: botu vracamo "uspeh", a ne saljemo mail
  if (d.website) return NextResponse.json({ ok: true });

  const key = process.env.MAILJET_API_KEY;
  const secret = process.env.MAILJET_SECRET_KEY;
  const sender = process.env.SITE_MAIL_SENDER;
  const receiver = process.env.SITE_MAIL_RECEIVER;

  if (!key || !secret || !sender || !receiver) {
    console.error("Mailjet env varijable nisu podesene.");
    return NextResponse.json(
      { error: "Slanje trenutno nije dostupno." },
      { status: 500 },
    );
  }

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${key}:${secret}`).toString("base64")}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: sender, Name: "Miha Garage sajt" },
          To: [{ Email: receiver }],
          ReplyTo: { Email: d.email, Name: d.name },
          Subject: `Novi upit sa sajta: ${d.reason}`.replace(/[\r\n]/g, " "),
          TextPart: `Ime: ${d.name}\nEmail: ${d.email}\nTelefon: ${d.phone || "-"}\nRazlog: ${d.reason}\n\n${d.message}`,
          HTMLPart: `<p><b>Ime:</b> ${esc(d.name)}<br><b>Email:</b> ${esc(d.email)}<br><b>Telefon:</b> ${esc(d.phone || "-")}<br><b>Razlog:</b> ${esc(d.reason)}</p><p>${esc(d.message).replace(/\n/g, "<br>")}</p>`,
        },
      ],
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    console.error("Mailjet greska", res?.status);
    return NextResponse.json(
      { error: "Slanje nije uspelo." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
