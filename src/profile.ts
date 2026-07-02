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
  location: "Kaune gimęs, Kaune augęs",
  // one short line under the name — who you are in a breath
  tagline: `Aš kaunietis kuo džiaugiuosi ir didžiuojuosi. Esu programuotojas pagal profesiją, o laisvalaikiu domiuosi automobiliais ir autosportu,
     gaminu maistą ir stendinius modelius, palaikau Kauno Žalgirį.`,

  workStyle: {
    title: "Kaip man patinka dirbti",
    items: [
      "Vertinu aiškiai apibrėžtus uždavinius.",
      "Noriu grįžtamojo ryšio padedančio suprasti mano klaidas ir tobulėti.",
      "Tiesus ir nuoširdus bendravimas.",
      "Manau geriau du kartus paklausti, nei spėlioti ar nesusikalbėti."
    ],
  },

  byDay: {
    title: "Mano patirtis",
    line: "Programuotojas kuriam teko kurti sistemą valiutų keityklai, logistikos įmonei, elektronines parduotuves su Sylius'u, bei dirbti prie produkto kūrimo kur buvau atsakingas už PWA app'ą.",
    projects: [
      "Dirbdamas prie valiutų keityklų sistemos teko pačiupinėti symfony framework'ą ir jQuery.",
      "Kūriau keletą Sylius'u parduotuvių bei plėčiau funkcijas pagal klientų poreikius.",
      "Kūriau, pritaikiau ir prižiūrėjau MLM'ams skirto produkto appą. Šiuo atveju daug dirbau su Vue, TypeScript, GraphQL technologijomis.",
    ],
    skills: ["TypeScript", "Vue", "GraphQL", "PHP", "Symfony", "Sylius"],
  },

  hobbies: [
    {
      id: "modeling",
      code: "Hobis-01",
      image: "/DSC_0137.jpg",
      title: "Stendinis modeliavimas",
      lead: "Gmainu karinės technikos ir automobilių modelius. Dažniausiai lėktuvus, laivus bei tankus 1/72 mastelyje, automobilius 1/24. Tikslas visada tas pats: kad modelis atrodytų kuo tikroviškiau.",
      meta: [
        { label: "Mastelis", value: "1/72 ir 1/24" },
        { label: "Kryptis", value: "Karinė technika ir automobiliai" },
        {
          label: "Šiuo metu dirbu prie",
          value: "Bf 109 E , Bugatti 100P, Peterbilt 378 ir namažai kitų.",
        },
      ],
      entries: [
        "Kiekvienas projektas prasideda nuo planavimo kaip modelis turėtų atrodyti pabaigoje, informacijos apie tai kaip jis atrodė tikrovėje ir kokia jo istorija.",
        "Paruošdamas dalis, atlieku modifikacijas suteikiančias daugiau tikroviškumo, sprendžiu pradinio rinkinio problemas ir netikslumus. Imituoju paviršių tekstūras.",
        "Dažant stengiuosi suprasti kaip tikras atitikmuo atrodė, nes atvaizduotos kasdienio dėvėjimosi žymės suteikia realizmo efektą galutiniam rezultatui.",
      ],
    },
    {
      id: "racing",
      code: "Hobis-02",
      image: "/IMG_20240630_170600.jpg",
      title: "Automobiliai ir autosportas",
      lead: "Nuo vaikystės žaviuosi automobiliais ir istorijomis apie juos. Dažniausiai gera automobilio istorija gimsta autosporte, tad stengiuosi sekti ir žiūrėti įvairias autosporto disciplinas. Dažniausiai ištvermės lenktynes ir kitas kiek mažiau populiarias atšakas nei Formulė 1.",
      meta: [
        { label: "Mėgstamiausia", value: "Spa 24h" },
        {
          label: "Taip pat nepraleidžiu",
          value: "Nürburgring 24h ir Le Mans 24h",
        },
        { label: "Mėgstamiausios kategorijos", value: "GT3, GT1, Group B, Group C" },
      ],
      entries: [
        "Teko lankytis Spa 24h ir Nürburgring 6h varžybose.",
        "Tikiuosi rasti būdą pamatyti ir Le Mans 24h, Le Mans Classic ar Goodwood Festival of Speed varžybas gyvai.",
        "Labai tikiuosi viskas įvyks pagal statybų planą ir jau šiais metais bus galima aplankyti ir pirmą tikrai rimtą trasą Lietuvoje.",
        "Mėgstu ieškoti automobilių renginių ir juose matyti, analizuoti ir mėgautis išskirtinių ar įdomių automobilių keliamomis emocijomis. Juos fotografuoti.",
      ],
    },
    {
      id: "sports",
      code: "Hobis-03",
      image: "/sports.jpeg",
      title: "Sportas",
      lead: "Krepšinis ir skvošas - du dalykai kuriems gal neturiu didelio talento, bet sunkiai galiu atsisakyti pasiūlymo pažaisti.",
      meta: [{ label: "Mano komanda", value: "BC Kauno Žalgiris" }],
      entries: [
        "Labai mėgstu žaisti krepšinį, tačiau nuo mokyklos draugų rate trūko žmonių su tuo pačiu noru. Vis dar tikiuosi rasti galimybę išspręsti šią problemą",
        "Skvošą atradau prieš metus ir jau kurį laiką bent kartą į savaitę stengiuosi pažaisti.",
        "Ar sportas ar ne galima diskutuoti, bet užsiimu sim racing'u. Tai mano būdas kažkiek prisiliesti prie autosporto.",
      ],
    },
    {
      id: "cooking",
      code: "Hobis-04",
      image: "/IMG_20230423_195920.jpg",
      title: "Maisto gaminimas",
      lead: "Gaminimas man yra kūrybos procesas, kuriame galiu išreikšti savo kūrybinį potencialą ir mėgautis procesu.",
      meta: [
        { label: "Geriausiai gaunasi pagaminti", value: "Pica" },
        {
          label: "Mėgstamiausias patiekalas",
          value: "Makaronai, pica, mėsainiai, steikai",
        },
      ],
      entries: [
        "Stengiuosi suprasti maistą ir jo gamybą.",
        "Gamindamas bandau naudoti savo gamybos picos padus, padažus, makaronus. Manau tai padeda suvokti kaip gaunamas skonis labiau padeda tobulėti.",
        "Mano supratimu nėra tiesiog sūrio, pomidorų padažo ir t.t. Kiekvienas sūris priklausomai nuo gamintojo turi savo skonį ir savybes. Kiekvienas padažas turi savo konsistenciją.",
        "Kol kas dar remiuosi kitų žmonių receptais. Kartais nueinu į kursus kur moko keletos patiekalų gamybos. Įgavus daugiau įgūdžių ir patirties tikiuosi sugebėsiu ir improvizuoti.",
      ],
    },
  ] satisfies Hobby[],
};
