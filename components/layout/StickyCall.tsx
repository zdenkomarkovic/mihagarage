import { CONTACT } from "@/lib/constants";

/** Fiksno dugme za poziv – samo na mobilnim uređajima */
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-black md:hidden">
      <a
        href={`tel:${CONTACT.phoneHref}`}
        className="bg-amber py-4 text-center text-sm font-bold uppercase tracking-wider text-black"
      >
        Pozovi {CONTACT.phone}
      </a>
      <a
        href={`tel:${CONTACT.mobileHref}`}
        className="bg-snow py-4 text-center text-sm font-bold uppercase tracking-wider text-black"
      >
        Mobilni {CONTACT.mobile}
      </a>
    </div>
  );
}
