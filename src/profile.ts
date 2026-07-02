// ── Edit everything about you here ──────────────────────────────────────────
// This is the single source of truth for the page. The hobbies are the focus:
// each has a lead paragraph, some meta facts, and an `entries` list you can
// fill freely (add / remove lines). Experience is intentionally kept to a slim
// strip. Change text here and the layout updates itself.

export interface MetaFact {
  label: string;
  value: string;
}

export interface Hobby {
  id: string; // used as the section anchor (#id)
  code: string; // short mono tag shown beside the title
  title: string;
  lead: string; // 1–3 sentence intro — replace with your own
  meta: MetaFact[]; // small facts shown as a side panel
  entries: string[]; // free-form lines: builds, races, trips, notes…
  image?: string; // optional banner photo shown above the hobby's content
}

export const profile = {
  name: "Šarūnas Valionis",
  location: "Kaunas, Lietuva",
  // one short line under the name — who you are in a breath
  tagline: `Esu kaunietis, kuo džiaugiuosi ir didžiuojuosi. Profesija - programuotojas. Laisvalaikiu domiuosi automobiliais ir autosportu,
     gaminu maistą ir stendinius modelius, palaikau krepšinio komandą "Žalgiris".`,

  workStyle: {
    title: "Darbo principai",
    items: [
      "Vertinu aiškiai apibrėžtus uždavinius.",
      "Noriu grįžtamojo ryšio, padedančio suprasti klaidas ir tobulėti.",
      "Atviras ir nuoširdus bendravimas.",
      "Geriau du kartus paklausti, nei spėlioti ar nesusikalbėti.",
    ],
  },

  byDay: {
    title: "Darbo patirtis",
    line: "Sukūriau sistemą valiutų keityklai, prisidėjau prie logistikos įmonės sistemos bei elektroninių parduotuvių kūrimo, taip pat rengiau ir prižiūrėjau PWA programėles.",
    projects: [
      "Dirbant su valiutų keityklos sistema išmokau Symfony karkasą.",
      "Kūriau keletą Sylius parduotuvių ir plėčiau jų funkcijas pagal klientų poreikius.",
      "Kūriau, pritaikiau ir prižiūrėjau MLM'ams skirto produkto programėlę. Įgavau daug patirties su Vue, TypeScript, GraphQL technologijomis.",
    ],
    skills: ["TypeScript", "Vue", "GraphQL", "PHP", "Symfony", "Sylius"],
  },

  hobbies: [
    {
      id: "modeling",
      code: "Hobis-01",
      image: "/DSC_0137.jpg",
      title: "Stendinis modeliavimas",
      lead: "Darau karinės technikos ir automobilių modelius, dažniausiai lėktuvus, laivus bei tankus 1/72 mastelyje, automobilius 1/24. Tikslas visada, kad modelis atrodytų kaip realybėje.",
      meta: [
        { label: "Mastelis", value: "1/72 ir 1/24" },
        { label: "Kryptis", value: "Karinė technika ir automobiliai" },
        {
          label: "Šiuo metu dirbu prie",
          value: "Bf 109 E , Bugatti 100P, Peterbilt 378 ir nemažai kitų.",
        },
      ],
      entries: [
        "Kiekvienas projektas prasideda nuo planavimo, kaip turėtų atrodyti pabaigtas modelis, ieškant informacijos apie jo istoriją ir išvaizdą.",
        "Ruošdamas dalis, atlieku modifikacijas, suteikiančias daugiau tikroviškumo, sprendžiu pradinio rinkinio problemas ir netikslumus. Imituoju paviršių tekstūras.",
        "Dažant stengiuosi, kad būtų atvaizduotos kasdienio dėvėjimosi žymės, taip suteikiant daugiau realumo galutiniam rezultatui.",
      ],
    },
    {
      id: "racing",
      code: "Hobis-02",
      image: "/IMG_20240630_170600.jpg",
      title: "Automobiliai ir autosportas",
      lead: "Nuo vaikystės žaviuosi automobiliais ir jų istorijomis. Dažniausiai gera istorija gimsta autosporte, todėl stengiuosi sekti įvairias autosporto disciplinas, o labiausiai mėgstu ištvermės lenktynes.",
      meta: [
        { label: "Mėgstamiausia", value: "Spa 24h" },
        {
          label: "Taip pat nepraleidžiu",
          value: "Nürburgring 24h ir Le Mans 24h",
        },
        {
          label: "Mėgstamiausios kategorijos",
          value: "GT3, GT1, Group B, Group C",
        },
      ],
      entries: [
        "Teko lankytis Spa 24h ir Nürburgring 6h varžybose.",
        "Noriu  gyvai pamatyti Le Mans 24h, Le Mans Classic ir Goodwood Festival of Speed.",
        "Mėgstu automobilių renginius, kuriuose juos fotografuoju ir mėgaujuosi akimirkomis.",
      ],
    },
    {
      id: "sports",
      code: "Hobis-03",
      image: "/sports.jpeg",
      title: "Sportas",
      lead: "Krepšinis ir skvošas - du dalykai, kuriems sunkiai galiu atsispirti.",
      meta: [{ label: "Mano komanda", value: "BC Kauno Žalgiris" }],
      entries: [
        "Krepšinis patinka nuo mokyklos laikų, mėgstu būti ir žiūrovas, ir žaidėjas.",
        "Skvošą atradau prieš metus ir stengiuosi bent kartą per savaitę pažaisti.",
        "Ar sportas, ar ne - galima diskutuoti, bet užsiimu sim racing'u. Tai leidžia bent šiek tiek patirti autosportą.",
      ],
    },
    {
      id: "cooking",
      code: "Hobis-04",
      image: "/IMG_20230423_195920.jpg",
      title: "Maisto gaminimas",
      lead: "Maisto gaminimas - kūrybos procesas, kuriame ieškau naujų receptų ir skonių.",
      meta: [
        { label: "Geriausiai gaunasi pagaminti", value: "Pica" },
        {
          label: "Mėgstamiausi patiekalai",
          value: "Makaronai, pica, mėsainiai, steikai",
        },
      ],
      entries: [
        "Stengiuosi suprasti maistą ir jo gamybą.",
        "Mėgstu gaminti nuo nulio - pats darau tešlą picoms ir makaronams bei padažus. Tai geriau atskleidžia skonį ir padeda tobulėti.",
        "Mano nuomone nėra tiesiog sūrio ar padažo. Kiekvienas ingredientas turi savo skonį ir savybes, nulemtas auginimo aplinkos.",
        "Lankausi maisto gamybos kursuose, kuriuose gaunu virtuvės šefų patarimų. Ateityje tikiuosi pats improvizuoti receptus.",
      ],
    },
  ] satisfies Hobby[],
};
