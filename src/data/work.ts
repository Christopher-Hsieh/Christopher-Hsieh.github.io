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
  /** Year or year-range (e.g. "2024", "2025-2026") shown inline with company. */
  year?: string;
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

/**
 * Live-demo work — public URLs, screenshots, recordings, or interactive
 * mocks that mirror what shipped. Ordered reverse-chronologically by
 * completion (most recent first), with Liberty Mutual pinned to the
 * bottom as the pre-Nike anchor.
 */
export const work: WorkItem[] = [
  {
    id: 'ios-web-auth',
    title: 'Web \u2194 iOS Auth Bridge \u2014 Nike App',
    company: 'Nike',
    year: '2025',
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
        href: 'https://apps.apple.com/us/app/nike-shoes-apparel-stories/id1095459556',
      },
    ],
  },
  {
    id: 'store-search',
    title: 'Store Search — Nike.com Micro Frontend',
    company: 'Nike',
    year: '2024',
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
    id: 'store-pages',
    title: 'Dynamic Store Pages — Nike.com/retail/s/*',
    company: 'Nike',
    year: '2023',
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
    id: 'store-locator',
    title: 'Store Locator — Nike.com/retail',
    company: 'Nike',
    year: '2022',
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
    id: 'lm-broker-portal',
    title: 'Agent & Broker Quoting Portal \u2014 Liberty Mutual',
    company: 'Liberty Mutual',
    year: '2016-2022',
    blurb:
      'Built full-stack \u2014 backend services through frontend UI \u2014 on the internal portal that brokers and agents across the country use to quote, create, and bind commercial property & casualty policies. Led multiple teams across the multi-year build from greenfield to production; the platform now handles the full policy lifecycle and generates $100K+/day in premiums on average. The link below is Liberty Mutual\u2019s public overview of the broker / agent toolset I helped ship.',
    tags: [
      'Full Stack',
      'Angular',
      'Java / Spring',
      'AWS',
      'Greenfield \u2192 Prod',
      'P&C Commercial Insurance',
    ],
    liveLinks: [
      {
        label: 'business.libertymutual.com/agent-and-broker-dashboard',
        sublabel: 'Public overview of the broker / agent toolset',
        href: 'https://business.libertymutual.com/agent-and-broker-dashboard/#midsize-and-large-brokers--property-and-casualty',
      },
    ],
  },
];

/**
 * Platform / leadership work that doesn't have a public URL or live demo.
 * Cross-team initiatives, architectural direction, internal systems, and
 * standards adopted across teams. Same `WorkItem` shape \u2014 these entries
 * just don't carry screenshots, videos, or `liveLinks`.
 */
export const platformsLed: WorkItem[] = [
  {
    id: 'mfe-shell',
    title: 'Retail Store Operations',
    company: 'Nike',
    year: '2025-2026',
    blurb:
      'A conceptual view of the platform powering retail-store operations. The result for store employees: one unified app to run a store \u2014 login, inventory lookup, customer assistance, transactions \u2014 with the same UX whether they pick it up on an in-store iOS device, a register browser, or a back-office desktop. I helped shape the overall architecture \u2014 a host shell composing independently-shipped feature modules through micro frontends, one design system, a shared routing model, and a build pipeline that emits the same app to every surface. I also contributed to the finer details: a unified auth handshake and token refresh strategy, a state management approach that lets modules stay isolated while coordinating through the host, and the observability and CI/CD patterns teams adopt as they onboard. Pick a target, mount a module, and explore the layout below.',
    tags: [
      'Micro Frontends',
      'Host / Feature Teams',
      'Web \u2192 iOS / Desktop',
      'Shared Design System',
      'Routing Strategy',
      'CI/CD',
    ],
  },
  {
    id: 'nike-platform',
    title: 'Nike.com Web Platform',
    company: 'Nike',
    year: '2024-2026',
    blurb:
      'Lead web platform direction across Nike.com \u2014 cross-team standards, architectural calls, partnering with business leadership on emerging-tech initiatives, and the upgrade paths that let other teams ship faster on consumer surfaces seen by millions daily.',
    tags: [
      'Web Platform Leadership',
      'Cross-team',
      'Architecture',
      'Strategy',
      'Standards',
    ],
  },
];
