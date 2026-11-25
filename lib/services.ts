import { gallery } from "./constants";

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  benefits: string[];
  steps: { title: string; text: string }[];
  faq: Faq[];
  image: number;
  keywords: string[];
}

const commonSteps = (first: string) => [
  {
    title: first,
    text: "Pozovite nas ili pošaljite upit. Dogovaramo termin i, po potrebi, izlazak na lice mesta radi merenja.",
  },
  {
    title: "Predlog rešenja",
    text: "Preporučujemo rešenje koje odgovara vašem objektu, nameni i budžetu – bez nepotrebnih dodataka.",
  },
  {
    title: "Ugradnja i podešavanje",
    text: "Stručna montaža, podešavanje opruga, motora i bezbednosnih elemenata i testiranje celog sistema.",
  },
  {
    title: "Uputstvo i servis",
    text: "Pokazujemo kako se sistem koristi i ostajemo vam na raspolaganju za servis i održavanje.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "garazna-vrata",
    name: "Garažna vrata",
    short:
      "Segmentna garažna vrata od sendvič panela sa toplotnom i zvučnom izolacijom – proizvodnja, ugradnja i motorizacija.",
    metaTitle: "Garažna vrata Beograd – ugradnja, prodaja i servis",
    metaDescription:
      "Proizvodnja i ugradnja segmentnih garažnih vrata od sendvič panela sa toplotnom i zvučnom izolacijom. Motori, daljinski upravljači, servis. Miha Garage Beograd.",
    h1: "Ugradnja garažnih vrata",
    intro: [
      "Miha Garage proizvodi i ugrađuje garažna vrata od sendvič panela sa toplotnom i zvučnom izolacijom. Segmentna (sekciona) vrata ne zauzimaju prostor ispred garaže, tiho rade i odlično zaptivaju, pa su danas najčešći izbor za porodične kuće, zgrade i poslovne objekte.",
      "Vrata isporučujemo sa motorom i daljinskim upravljačem, a ugradnju, podešavanje i bezbednosne elemente (foto ćelije, zaštita od prignječenja) radimo mi – od merenja do puštanja u rad.",
    ],
    benefits: [
      "Sendvič paneli sa toplotnom i zvučnom izolacijom",
      "Vrata po meri otvora – nova gradnja i adaptacija",
      "Ugradnja motora i daljinskih upravljača",
      "Foto ćelije i bezbednosna oprema",
      "Servis sa originalnim delovima",
      "Garantni i vangarantni servis",
    ],
    steps: commonSteps("Upit i merenje"),
    faq: [
      {
        q: "Šta su segmentna garažna vrata?",
        a: "To su vrata sastavljena iz više horizontalnih panela koji se pri otvaranju podižu i klize ispod plafona garaže. Ne zauzimaju prostor ispred garaže i mogu da se motorizuju.",
      },
      {
        q: "Da li garažna vrata mogu da se ugrade na postojeći otvor?",
        a: "Da. Vrata se prave po meri otvora, pa se ugrađuju i u novogradnji i u već postojeće garaže. Najbolje je da nas pozovete radi merenja.",
      },
      {
        q: "Da li vrata dolaze sa motorom?",
        a: "Vrata možemo isporučiti sa motorom i daljinskim upravljačem, ili ih motorizovati naknadno. Radimo sa svim poznatim brendovima motora.",
      },
    ],
    image: 1,
    keywords: [
      "garažna vrata",
      "segmentna garažna vrata",
      "ugradnja garažnih vrata",
      "garažna vrata Beograd",
      "sekciona vrata",
    ],
  },
  {
    slug: "klizne-i-krilne-kapije",
    name: "Klizne i krilne kapije",
    short:
      "Automatizacija kliznih i zaokretnih kapija – motori, daljinski upravljači, foto ćelije i sigurnosna oprema.",
    metaTitle: "Klizne kapije i automatizacija kapija Beograd",
    metaDescription:
      "Automatizacija kliznih i krilnih (zaokretnih) kapija: motori BFT i Lift Master, daljinski upravljači, foto ćelije. Ugradnja i servis, Beograd i Srbija.",
    h1: "Klizne kapije i automatizacija kapija",
    intro: [
      "Automatizujemo klizne i zaokretne kapije za kuće, zgrade, firme i industrijske objekte. Ulazite i izlazite iz dvorišta bez izlaska iz vozila – jednim pritiskom na daljinski upravljač.",
      "Biramo motor prema težini i dužini krila i učestalosti korišćenja, a sistem opremamo foto ćelijama, signalnom lampom i prijemnicima. Radimo sa svim poznatim brendovima, uključujući BFT i Lift Master.",
    ],
    benefits: [
      "Motori za klizne i krilne kapije",
      "Daljinski upravljači i prijemnici",
      "Foto ćelije i signalne lampe",
      "Ograde i kapije za vaš dom",
      "Automatizacija postojećih kapija",
      "Ugradnja, podešavanje i servis",
    ],
    steps: commonSteps("Upit i procena"),
    faq: [
      {
        q: "Može li se postojeća kapija automatizovati?",
        a: "U većini slučajeva da. Pregledamo stanje kapije i vodilica i predlažemo odgovarajući motor. Ako je potrebno, kapiju prilagođavamo ili pravimo novu.",
      },
      {
        q: "Šta se dešava kad nestane struje?",
        a: "Motori imaju mehaničko otključavanje, pa se kapija u svakom trenutku može otvoriti ručno.",
      },
      {
        q: "Koliko daljinskih upravljača dobijam?",
        a: "Broj upravljača dogovaramo sa vama. Dodatne upravljače možemo naknadno programirati.",
      },
    ],
    image: 6,
    keywords: [
      "klizna kapija",
      "klizne kapije",
      "motori za kapije",
      "automatizacija kapija",
      "krilne kapije",
    ],
  },
  {
    slug: "rampe-i-stubici",
    name: "Rampe, stubići i parking sistemi",
    short:
      "Automatske rampe, automatski stubići i parking sistemi za firme, institucije i stambene komplekse.",
    metaTitle: "Automatske rampe i parking sistemi Beograd",
    metaDescription:
      "Ugradnja automatskih rampi, automatskih stubića i parking sistema za firme, javne ustanove i zgrade. Reference: JKP, autobuska stanica, Maxima. Miha Garage.",
    h1: "Automatske rampe, stubići i parking sistemi",
    intro: [
      "Automatske rampe i stubići kontrolišu pristup parkingu, dvorištu ili kompleksu. Ugrađujemo ih za firme, javna preduzeća, škole, stambene zgrade i privatna imanja.",
      "Naša iskustva uključuju rampe za autobusku stanicu i javna komunalna preduzeća. Sistem prilagođavamo intenzitetu saobraćaja i nameni prostora.",
    ],
    benefits: [
      "Automatske rampe različitih dužina",
      "Automatski stubići",
      "Parking sistemi i kontrola pristupa",
      "Foto ćelije, daljinski upravljači, prijemnici",
      "Ugradnja uz kompletno podešavanje",
      "Redovno održavanje po dogovoru",
    ],
    steps: commonSteps("Upit i izlazak na teren"),
    faq: [
      {
        q: "Koju dužinu rampe da izaberem?",
        a: "Dužina zavisi od širine prolaza. Na licu mesta merimo prolaz i predlažemo odgovarajući model.",
      },
      {
        q: "Da li radite za firme i javne ustanove?",
        a: "Da. Među našim klijentima su JKP Beograd, JKP Šabac, Autobuska stanica Lasta Lazarevac i Maxima Beograd.",
      },
    ],
    image: 12,
    keywords: [
      "automatske rampe",
      "rampa za parking",
      "automatski stubići",
      "parking sistemi",
      "rampe Beograd",
    ],
  },
  {
    slug: "rolo-i-automatska-vrata",
    name: "Rolo, automatska klizna vrata i rešetke",
    short:
      "Rolo vrata, roletne, rešetke i automatska klizna vrata za lokale, magacine i industrijske objekte.",
    metaTitle: "Rolo vrata, automatska vrata i rešetke Beograd",
    metaDescription:
      "Ugradnja rolo vrata, roletni, rešetki i automatskih kliznih vrata za lokale, magacine i industriju. Industrijska vrata i servis – Miha Garage Beograd.",
    h1: "Rolo vrata, automatska vrata i rešetke",
    intro: [
      "Za lokale, radnje, magacine i industrijske hale ugrađujemo rolo vrata, roletne, sigurnosne rešetke i automatska klizna vrata. Rešenja su otporna na intenzivno korišćenje i prilagođena vašem prostoru.",
      "Svi sistemi mogu da se motorizuju i opreme daljinskim upravljanjem, foto ćelijama i drugom bezbednosnom opremom.",
    ],
    benefits: [
      "Rolo vrata i roletne",
      "Sigurnosne rešetke",
      "Automatska klizna vrata",
      "Industrijska vrata",
      "Motorizacija i automatika",
      "Servis i održavanje",
    ],
    steps: commonSteps("Upit i merenje"),
    faq: [
      {
        q: "Za šta se koriste rolo vrata?",
        a: "Najčešće za garaže, lokale, magacine i industrijske objekte – tamo gde je potrebna zaštita uz minimalno zauzimanje prostora.",
      },
      {
        q: "Mogu li rolo vrata da se motorizuju?",
        a: "Da, rolo vrata se opremaju motorom i daljinskim upravljačem, a po želji i drugim komandama.",
      },
    ],
    image: 16,
    keywords: [
      "rolo vrata",
      "roletne",
      "automatska klizna vrata",
      "industrijska vrata",
      "rešetke",
    ],
  },
  {
    slug: "servis-vrata-i-motora",
    name: "Servis vrata i motora",
    short:
      "Servis svih vrsta motora i vrata sa originalnim delovima u garantnom i vangarantnom roku.",
    metaTitle: "Servis garažnih vrata i motora Beograd",
    metaDescription:
      "Servis garažnih vrata, kapija, rampi i motora svih vrsta. Originalni delovi, garantni i vangarantni rok. Miha Garage Beograd, 011/2570-532.",
    h1: "Servis garažnih vrata, kapija i motora",
    intro: [
      "Uz kvalitetnu montažu svih naših proizvoda obezbeđujemo i servis sa originalnim delovima u garantnom i vangarantnom roku. Servisiramo sve vrste motora koje koristimo za ugradnju.",
      "Vrata zastaju, motor brunda, daljinski ne reaguje ili je pukla opruga? Pozovite nas – utvrdićemo kvar i otkloniti ga, a delove menjamo originalnim.",
    ],
    benefits: [
      "Servis svih vrsta motora",
      "Originalni delovi",
      "Garantni i vangarantni servis",
      "Zamena opruga, kablova i vodilica",
      "Zamena i programiranje daljinskih upravljača",
      "Podešavanje foto ćelija i prijemnika",
    ],
    steps: [
      {
        title: "Prijava kvara",
        text: "Pozovite nas i opišite problem – često već telefonom možemo da postavimo prvu dijagnozu.",
      },
      {
        title: "Dijagnostika",
        text: "Dolazimo na lice mesta, pregledamo vrata, motor i elektroniku i utvrđujemo uzrok.",
      },
      {
        title: "Popravka",
        text: "Kvar otklanjamo uz originalne rezervne delove i proveravamo da sve radi bezbedno.",
      },
      {
        title: "Preventiva",
        text: "Dajemo savete kako da produžite vek vrata i motora, ili predlažemo plan održavanja.",
      },
    ],
    faq: [
      {
        q: "Servisirate li vrata koja niste vi ugradili?",
        a: "Servisiramo sve vrste motora koje koristimo za ugradnju. Za ostala vrata i motore pozovite nas, pa ćemo zajedno proceniti da li je popravka moguća.",
      },
      {
        q: "Šta ako vrata ne rade kad nestane struje?",
        a: "Motori imaju mehaničko otključavanje. Ako ne radi ni ono, pozovite nas za servis.",
      },
      {
        q: "Da li koristite originalne delove?",
        a: "Da, servis radimo sa originalnim delovima.",
      },
    ],
    image: 9,
    keywords: [
      "servis garažnih vrata",
      "servis motora za kapije",
      "popravka garažnih vrata",
      "servis rampi",
    ],
  },
  {
    slug: "odrzavanje",
    name: "Održavanje",
    short:
      "Redovno održavanje vaših uređaja za određeni ili neodređeni period – po dogovoru.",
    metaTitle: "Održavanje garažnih vrata, kapija i rampi",
    metaDescription:
      "Redovno održavanje garažnih vrata, kapija, rampi i motora na određeni ili neodređeni period. Manje kvarova, duži vek. Miha Garage Beograd.",
    h1: "Održavanje vrata, kapija i rampi",
    intro: [
      "Redovno održavanje smanjuje broj kvarova i produžava vek vrata, kapija i motora. Sa vama dogovaramo osnovno održavanje vaših uređaja za određeni ili neodređeni period.",
      "Posebno se preporučuje firmama, ustanovama i zgradama gde zastoj u radu vrata znači zastoj u poslovanju.",
    ],
    benefits: [
      "Pregled i podmazivanje pokretnih delova",
      "Provera opruga, kablova i vodilica",
      "Provera motora i bezbednosne opreme",
      "Određeni ili neodređeni period",
      "Prioritet pri intervencijama",
      "Savetovanje o zameni dotrajalih delova",
    ],
    steps: commonSteps("Dogovor"),
    faq: [
      {
        q: "Koliko često treba održavati vrata?",
        a: "Dinamika zavisi od učestalosti korišćenja. Za rezidencijalne objekte obično je dovoljan godišnji pregled, a za intenzivno korišćene sisteme dogovaramo češće.",
      },
      {
        q: "Da li se održavanje ugovara?",
        a: "Da, održavanje dogovaramo na određeni ili neodređeni period, u skladu sa vašim potrebama.",
      },
    ],
    image: 14,
    keywords: [
      "održavanje garažnih vrata",
      "održavanje kapija",
      "održavanje rampi",
    ],
  },
  {
    slug: "pvc-alu-stolarija-i-ograde",
    name: "PVC i ALU stolarija, ograde i kapije",
    short:
      "PVC i ALU stolarija, kao i ograde i kapije za vaš dom.",
    metaTitle: "PVC i ALU stolarija, ograde i kapije Beograd",
    metaDescription:
      "PVC i ALU stolarija, ograde i kapije za kuće i dvorišta. Izrada po meri i ugradnja – Miha Garage Beograd.",
    h1: "PVC i ALU stolarija, ograde i kapije",
    intro: [
      "Pored garažnih vrata i automatike, radimo PVC i ALU stolariju, kao i ograde i kapije za vaš dom. Izrađujemo i ugrađujemo po meri, a kapije možemo odmah da motorizujemo.",
      "Pozovite nas za konsultacije – predložićemo rešenje koje odgovara vašem objektu i budžetu.",
    ],
    benefits: [
      "PVC stolarija",
      "ALU stolarija",
      "Ograde i kapije za dvorište",
      "Izrada po meri",
      "Ugradnja i montaža",
      "Mogućnost automatizacije kapija",
    ],
    steps: commonSteps("Upit i merenje"),
    faq: [
      {
        q: "Mogu li kapiju odmah da motorizujem?",
        a: "Da. Kapiju možemo izraditi tako da je spremna za ugradnju motora, ili je motorizujemo odmah pri ugradnji.",
      },
    ],
    image: 3,
    keywords: ["PVC stolarija", "ALU stolarija", "ograde", "kapije za dvorište"],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const HOME_FAQ: Faq[] = [
  {
    q: "Kojim uslugama se bavi Miha Garage?",
    a: "Proizvodnja i ugradnja garažnih vrata, automatizacija kliznih i zaokretnih kapija, automatske rampe i stubići, parking sistemi, rolo vrata, rešetke, PVC i ALU stolarija, kao i servis i održavanje svega navedenog.",
  },
  {
    q: "Radite li samo u Beogradu?",
    a: "Sedište nam je u Beogradu, ali radimo širom Srbije. Naši klijenti su i fizička lica iz Srbije, Crne Gore i Federacije BiH.",
  },
  {
    q: "Da li nudite servis sa originalnim delovima?",
    a: "Da. Uz montažu obezbeđujemo i servis sa originalnim delovima u garantnom i vangarantnom roku.",
  },
  {
    q: "Kako mogu da zakažem merenje ili savet?",
    a: "Pozovite nas na 011/2570-532 ili 060/517-1111, ili pošaljite upit preko kontakt forme. Konsultacije su deo naše usluge.",
  },
  {
    q: "Koje brendove motora i opreme ugrađujete?",
    a: "Radimo sa svim poznatim brendovima motora, foto ćelija i daljinskih upravljača, uključujući BFT i Lift Master.",
  },
];

export const REFERENCES = [
  {
    name: "Pravni fakultet Beograd",
    text: "Rađena su vrata sa ugradnjom motora, ubacivanje okvira, bušenje okvira i postavljanje ramova.",
    type: "Vrata",
  },
  {
    name: "JKP Beograd",
    text: "Rađena su vrata sa ugradnjom motora, ubacivanje okvira, bušenje okvira i postavljanje ramova.",
    type: "Vrata",
  },
  {
    name: "Autobuska stanica Lasta Lazarevac",
    text: "Rađena su vrata, rampe sa ugradnjom motora, ubacivanje okvira, bušenje okvira i postavljanje ramova.",
    type: "Vrata i rampe",
  },
  {
    name: "JKP Šabac",
    text: "Rađena su vrata, rampe sa ugradnjom motora, ubacivanje okvira, bušenje okvira i postavljanje ramova.",
    type: "Vrata i rampe",
  },
  {
    name: "Maxima Beograd",
    text: "Rađena su vrata sa ugradnjom motora, ubacivanje okvira, bušenje okvira i postavljanje ramova.",
    type: "Vrata",
  },
  {
    name: "PMA Beograd",
    text: "Rađena su vrata sa ugradnjom motora, ubacivanje okvira, bušenje okvira i postavljanje ramova.",
    type: "Vrata",
  },
];

export const GALLERY_COUNT = 20;
export const galleryImage = (n: number) => gallery(n);
