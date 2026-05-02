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
  /** Optional small note rendered directly below the blurb in a muted,
   *  slightly smaller font \u2014 same look as bullet sub-lines. Use for
   *  context-setting asides (definitions, scope notes) that shouldn't
   *  compete with the main blurb prose. */
  blurbNote?: string;
  /** Optional bulleted highlights rendered after the blurb (paired with the
   *  same accent-arrow marker as the Experience timeline). */
  bullets?: string[];
  /** When true, suppresses the WHY sub-line that would normally render
   *  below each bullet's em-dash. The em-dash content stays in the data
   *  string so it can be re-enabled with a single flag flip. */
  hideSubBullets?: boolean;
  /** Optional trailing bullet group rendered after `bullets`, with a small
   *  mono label header above (e.g. "across every team"). Use for items
   *  that apply universally to all of the bullets above rather than as
   *  standalone accomplishments. */
  trailingBullets?: {
    label: string;
    items: string[];
  };
  tags?: string[];
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
    id: 'async-chat',
    title: 'Async Chat \u2014 Nike.com',
    company: 'Nike',
    year: '2025',
    blurb:
      'As lead of the Web Platform team, partnered cross-team with the Chat team to ship an async-chat micro-frontend that drops into every page on Nike.com. Helped them shape the component so it integrates with the site\u2019s MFE shell, ships independently of the host app, and lights up everywhere on deploy \u2014 one team owns the chat experience, every consumer surface picks it up. The clip on the right is the live experience on Nike.com \u2014 open nike.com/help and click \u201cChat with us\u201d to try it yourself.',
    tags: [
      'Web Platform Leadership',
      'Micro Frontend',
      'Async Chat',
      'Cross-team',
      'Site-wide rollout',
    ],
    videos: [
      {
        src: '/work/nike-chat.mp4',
        caption: 'Live on nike.com \u2014 async chat MFE across the consumer experience',
      },
    ],
    liveLinks: [
      {
        label: 'nike.com/help',
        sublabel: 'Try it yourself \u00b7 click \u201cChat with us\u201d',
        href: 'https://www.nike.com/help',
      },
    ],
  },
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
      "Created and fostered high-level technical strategies to build the platform powering Nike\u2019s retail-store operations. Each item below involved identifying needs, defining the path, partnering with business leadership, and driving the work with multiple engineering teams.",
    blurbNote:
      'Store Operations is everything needed to run a store: cash management, inventory, metric reports, clocking-in and out, and more.',
    hideSubBullets: true,
    bullets: [
      'Standardize tech stack and create blueprint with AI assisted prompts for new applications. \u2014 teams share the same framework, package manager, languages, etc.',
      'Create shared component library, styling baseline, visualization standards for graphs and charts. \u2014 teams can adopt and maintain a consistent look and feel.',
      'Unify auth handshake and state-management approach across applications in shared experience. \u2014 teams can support isolated modules while coordinating shared core functionality.',
      'Observability integration and usage patterns for instrumentation and monitoring. \u2014 teams can instrument and use the same tools and patterns.',
      'CI/CD templates and AWS strategy for frontend applications to deploy quickly. \u2014 teams can ship much quicker without rebuilding the same layer.',
      'E2E testing strategy for cross-team integrations in a unified experience. \u2014 teams can test their code and ensure it works as expected.',
      'Defined processes for teams to contribute and maintain; Standards and guidelines.',
      'Migration guide for existing applications and a clear path for new applications to build against.',
    ],
    // trailingBullets: {
    //   label: 'Across every team',
    //   items: [
    //     'Defined processes for teams to contribute and maintain; Standards and guidelines.',
    //     'Migration guide for existing applications and a clear path for new applications to build against.',
    //   ],
    // },
  },
  {
    id: 'nike-platform',
    title: 'Nike.com Web Platform',
    company: 'Nike',
    year: '2024-2025',
    blurb:
      'Lead web platform engineer for Nike.com, major accomplishments below.\nAll work included backwards compatibility, creating paths to migrate to new technologies, and driving cross-team coordination.',
    bullets: [
      'Re-wrote the platform\u2019s Micro-Frontend component improving performance and maintainability.',
      'Delivered a new unified auth strategy (see it live in Web \u2194 iOS Auth Bridge below).',
      'Integrated Async Chat experience usable across Nike.com (see it live in Async Chat below).',
      'Migration to the latest web technologies for React, Next.js, and more while managing critical dependencies.'
    ],
    trailingBullets: {
      label: 'All work included backwards compatibility, creating paths to migrate to new technologies, and driving cross-team coordination.',
      items: [],
    },
  },
];
