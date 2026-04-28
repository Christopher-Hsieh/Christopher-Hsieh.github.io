export type LiveLink = {
  label: string;
  href: string;
  sublabel?: string;
};

export type WorkItem = {
  id: string;
  title: string;
  company: string;
  blurb: string;
  tags: string[];
  link?: { label: string; href: string };
  screenshot?: {
    src: string;
    alt: string;
    caption?: string;
    href?: string;
  };
  /** Optional mobile-format MP4 played inside a phone frame. */
  video?: {
    src: string;
    poster?: string;
    caption?: string;
  };
  /** "See it live" link list rendered as a grid of cards. */
  liveLinks?: LiveLink[];
  /** Optional interactive demo. Cards without a demoId render only their visual + links. */
  demoId?: 'storeSearch' | 'mfeShell';
};

export const work: WorkItem[] = [
  {
    id: 'store-search',
    title: 'Store Search — Nike.com Micro Frontend',
    company: 'Nike',
    blurb:
      'Owned a consumer-facing micro frontend that powers store search across Nike.com. Drove it from POC to production and integrated across ~12 teams. Try a faithful interactive mock below — debounced search, keyboard navigation, the works.',
    tags: ['React', 'Micro Frontend', 'TypeScript', 'A11y', 'Performance'],
    link: {
      label: 'See it on Nike.com',
      href: 'https://www.nike.com/retail',
    },
    demoId: 'storeSearch',
  },
  {
    id: 'store-locator',
    title: 'Store Locator — Nike.com/retail',
    company: 'Nike',
    blurb:
      'Own Nike.com\u2019s globally-available Store Locator (peak >1M sessions/day) and led the end-to-end migration from Mapbox to Apple Maps in partnership with Apple engineers. Open the live page above to try it yourself \u2014 search a city, browse the map, drill into any store.',
    tags: ['Apple Maps', 'Mapbox \u2192 Apple migration', 'High Traffic', 'Geo'],
    link: {
      label: 'Visit nike.com/retail',
      href: 'https://www.nike.com/retail',
    },
    screenshot: {
      src: '/work/store-locator.jpg',
      alt: 'Live screenshot of Nike.com/retail showing the Store Locator UI',
      caption: 'Live on Nike.com',
      href: 'https://www.nike.com/retail',
    },
  },
  {
    id: 'store-pages',
    title: 'Dynamic Store Pages — Nike.com/retail/s/*',
    company: 'Nike',
    blurb:
      'Built the architecture behind every Nike retail page \u2014 the directory at /retail/directory and every individual store page like /retail/s/nike-soho or /retail/s/nike-oxford-circus. Pages are dynamically generated from a backend so product owners and store ops can update hours, photos, and services and have those changes flow through to production within minutes, globally. Open any of the live links below to see it in action.',
    tags: ['SSG / ISR', 'Headless CMS', 'Editorial Workflow', 'Scale'],
    liveLinks: [
      {
        label: '/retail/directory',
        sublabel: 'Browse all stores',
        href: 'https://www.nike.com/retail/directory',
      },
      {
        label: '/retail/s/nike-soho',
        sublabel: 'Nike Soho · NYC',
        href: 'https://www.nike.com/retail/s/nike-soho',
      },
      {
        label: '/retail/s/nike-oxford-circus',
        sublabel: 'Nike Oxford Circus · London',
        href: 'https://www.nike.com/retail/s/nike-oxford-circus',
      },
      {
        label: '/retail/s/nike-beaverton',
        sublabel: 'Nike Beaverton · OR',
        href: 'https://www.nike.com/retail/s/nike-beaverton',
      },
    ],
  },
  {
    id: 'mfe-shell',
    title: 'Micro Frontend Shell & Standards',
    company: 'Nike',
    blurb:
      'Established the cross-team standards and shell patterns used to compose retail-employee web apps from independently-deployed modules. The demo below mounts two simulated remotes into a shell with realistic load states.',
    tags: ['Module Federation', 'Architecture', 'Standards', 'CI/CD'],
    demoId: 'mfeShell',
  },
];
