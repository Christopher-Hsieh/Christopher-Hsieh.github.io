export type WorkItem = {
  id: string;
  title: string;
  company: string;
  blurb: string;
  tags: string[];
  link?: { label: string; href: string };
  demoId: 'storeSearch' | 'storeLocator' | 'mfeShell';
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
      'Own Nike.com\u2019s globally-available Store Locator (peak >1M sessions/day) and led the end-to-end migration from Mapbox to Apple Maps with Apple engineers. Toggle the demo below between the two map vendors to see the visual transition.',
    tags: ['Apple Maps', 'Mapbox', 'Migration', 'High Traffic', 'Geo'],
    link: {
      label: 'Visit nike.com/retail',
      href: 'https://www.nike.com/retail',
    },
    demoId: 'storeLocator',
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
