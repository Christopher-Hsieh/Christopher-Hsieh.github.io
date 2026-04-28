export type LiveLink = {
  label: string;
  href: string;
  sublabel?: string;
};

export type VideoRef = {
  src: string;
  poster?: string;
  caption?: string;
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
  /** Mobile-format MP4s played inside phone frames. One = side-by-side with text. Two+ = grid below the text. */
  videos?: VideoRef[];
  /** "See it live" link list rendered as a grid of cards. */
  liveLinks?: LiveLink[];
  /** Optional interactive demo. Cards without a demoId render only their visual + links. */
  demoId?: 'mfeShell';
};

export const work: WorkItem[] = [
  {
    id: 'store-search',
    title: 'Store Search — Nike.com Micro Frontend',
    company: 'Nike',
    blurb:
      'Owned a consumer-facing micro frontend that shows up wherever a Nike.com customer needs to pick a store \u2014 from filtering products by store on /w, to selecting a pickup point at checkout. POC to production, integrated across ~12 teams. The two recordings below are the live MFE in two different parts of the consumer flow.',
    tags: ['React', 'Micro Frontend', 'TypeScript', 'A11y', 'Performance', 'Cross-team'],
    videos: [
      {
        src: '/work/nike-store-page-mobile.mp4',
        caption: 'Step 1 \u00b7 nike.com/w \u2014 filter products by store',
      },
      {
        src: '/work/nike-checkout-mobile.mp4',
        caption: 'Step 2 \u00b7 nike.com/checkout \u2014 select a pickup store',
      },
    ],
    liveLinks: [
      {
        label: '/w',
        sublabel: 'Product listing \u00b7 filter by store',
        href: 'https://www.nike.com/w',
      },
      {
        label: '/checkout',
        sublabel: 'Checkout \u00b7 pickup selection',
        href: 'https://www.nike.com/checkout',
      },
    ],
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
      'Built the architecture behind every Nike retail page \u2014 the directory at /retail/directory and every individual store page like /retail/s/nike-soho or /retail/s/nike-oxford-circus. Pages are dynamically generated from a backend so product owners and store ops can update hours, photos, and services and have those changes flow through to production within minutes, globally. The clip on the right is the live mobile view of /retail/s/nike-soho \u2014 open any of the links below to see more.',
    tags: ['SSG / ISR', 'Headless CMS', 'Editorial Workflow', 'Scale'],
    videos: [
      {
        src: '/work/nike-soho-mobile.mp4',
        caption: 'Live mobile view \u00b7 /retail/s/nike-soho',
      },
    ],
    liveLinks: [
      {
        label: '/retail/directory',
        sublabel: 'Browse all stores',
        href: 'https://www.nike.com/retail/directory',
      },
      {
        label: '/retail/s/nike-soho',
        sublabel: 'Nike Soho \u00b7 NYC',
        href: 'https://www.nike.com/retail/s/nike-soho',
      },
      {
        label: '/retail/s/nike-oxford-circus',
        sublabel: 'Nike Oxford Circus \u00b7 London',
        href: 'https://www.nike.com/retail/s/nike-oxford-circus',
      },
    ],
  },
  {
    id: 'ios-web-auth',
    title: 'Web \u2194 iOS Auth Bridge \u2014 Nike App',
    company: 'Nike',
    blurb:
      'As lead of the Web Platform team, partnered cross-team with iOS engineers to build a JavaScript bridge so the Nike app could embed our web login portal inside an ASWebAuthenticationSession. One source of truth for sign-in UI, one team owning the auth flow, an identical experience across web and iOS \u2014 and any change to the web login lights up on mobile the moment it deploys. The clip on the right is the live Nike iOS app: tap Sign In \u2192 ASWebAuthenticationSession \u2192 the same web portal that powers nike.com.',
    tags: [
      'Web Platform Leadership',
      'iOS \u2194 Web JS Bridge',
      'ASWebAuthenticationSession',
      'OAuth',
      'Cross-team',
    ],
    videos: [
      {
        src: '/work/nike-app-login-mobile.mp4',
        caption: 'Nike iOS app \u2192 ASWebAuthenticationSession \u2192 shared web login',
      },
    ],
    liveLinks: [
      {
        label: 'Nike app on the App Store',
        sublabel: 'Try it yourself \u00b7 tap Sign In',
        href: 'https://apps.apple.com/us/app/nike/id383098204',
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
