// ── Edit everything about you here ──────────────────────────────────────────
// This is the single source of truth for the page. The hobbies are the focus:
// each has a lead paragraph, some meta facts, and an `entries` list you can
// fill freely (add / remove lines). Experience is intentionally kept to a slim
// strip. Change text here and the layout updates itself.

export interface MetaFact {
  label: string
  value: string
}

export interface Hobby {
  id: string          // used as the section anchor (#id)
  code: string        // short mono tag shown beside the title
  title: string
  lead: string        // 1–3 sentence intro — replace with your own
  meta: MetaFact[]    // small facts shown as a side panel
  entries: string[]   // free-form lines: builds, races, trips, notes…
}

export interface Link {
  label: string
  href: string
  handle: string
}

export const profile = {
  name: 'Šarūnas',
  location: 'Kaunas, Lithuania',
  // one short line under the name — who you are in a breath
  tagline:
    'Developer by day. Off the clock: scale models, endurance racing, and aircraft.',

  hobbies: [
    {
      id: 'modeling',
      code: 'H-01',
      title: 'Scale modeling',
      lead:
        'Building 1:72 WWII Luftwaffe aircraft — masking, weathering, and oil-paint filtering. Write about what draws you to it here.',
      meta: [
        { label: 'Scale', value: '1:72' },
        { label: 'Focus', value: 'WWII Luftwaffe' },
        { label: 'On the bench', value: 'Bf 109 E night fighter' },
      ],
      entries: [
        'Current build: Bf 109 E night fighter (OWL S72004) — RLM 74/75/22 scheme.',
        'Technique I am into: dot filtering with enamels and oils.',
        'Add a finished kit, a technique you are trying, a wishlist model…',
      ],
    },
    {
      id: 'racing',
      code: 'H-02',
      title: 'Endurance racing',
      lead:
        'Following the long ones — the 24-hour classics, entry lists, classes and all. Say what pulls you to endurance over sprint racing.',
      meta: [
        { label: 'Favourite', value: 'Nürburgring 24h' },
        { label: 'Also', value: 'Spa 24h' },
        { label: 'Watching for', value: 'Add a class or team' },
      ],
      entries: [
        'A race that stuck with you and why.',
        'A class, team, or driver you follow.',
        'Add a track you would love to attend in person…',
      ],
    },
    {
      id: 'aviation',
      code: 'H-03',
      title: 'Aviation spotting',
      lead:
        'Photographing aircraft at airshows and airfields around the region. Describe your setup and what you like to shoot.',
      meta: [
        { label: 'Region', value: 'Baltics / Poland' },
        { label: 'Last event', value: 'Add an airshow' },
        { label: 'Gear', value: 'Add your camera / lens' },
      ],
      entries: [
        'A memorable spotting day or airshow.',
        'An aircraft type you always look out for.',
        'Add a link to your photos if you host them somewhere…',
      ],
    },
  ] satisfies Hobby[],

  // Kept deliberately short — the day job in one strip.
  byDay: {
    line: 'Software developer building typed Vue front ends and Symfony / Sylius commerce backends.',
    skills: ['TypeScript', 'Vue', 'GraphQL', 'PHP', 'Symfony', 'Sylius'],
  },

  // Fill these in with your real handles before deploying.
  links: [
    { label: 'Email', href: 'mailto:you@example.com', handle: 'you@example.com' },
    { label: 'GitHub', href: 'https://github.com/your-handle', handle: 'github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle', handle: 'linkedin.com/in/your-handle' },
  ] satisfies Link[],
}
