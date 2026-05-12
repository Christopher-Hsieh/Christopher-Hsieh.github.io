export type Role = {
  title: string;
  dates: string;
};

export type ExperienceItem = {
  company: string;
  location: string;
  roles: Role[];
  bullets: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Nike',
    location: 'Beaverton, OR (Remote)',
    roles: [{ title: 'Lead Software Engineer', dates: '2022 — 2026' }],
    bullets: [
      "Designed and implemented Nike.com\u2019s micro-frontend architecture, improving render performance and reusability across ecosystem experiences including Store Search, async chat, member signup, recommendations, and more.",
      "Led modernization of Nike.com\u2019s web platform \u2014 drove migrations for React, Next.js, core dependencies, and analytics infrastructure while supporting backward compatibility and coordinating adoption across 12+ teams.",
      "Built Nike.com\u2019s consumer-facing Store Search micro-frontend from proof-of-concept to production across ~12 teams \u2014 deployed in core consumer flows used by millions globally every day.",
      "Owned Nike.com\u2019s Store Locator, a global high-traffic property with 1M+ sessions on peak days \u2014 led end-to-end migration from Mapbox to Apple Maps in direct partnership with Apple engineers.",
      "Shaped frontend architecture across Nike retail-store-operations platforms by defining shared patterns, tooling, and technical standards that reduced fragmentation while preserving team autonomy.",
      "Operationalized those standards across 4 teams and 18+ engineers through shared workflows, documentation, and reusable platform capabilities, accelerating onboarding and delivery of new experiences.",
      "Selected for Nike\u2019s global innovation workshops, partnering with Product and Design leadership across the U.S. and Europe to prototype AI-powered retail experiences and influence how cross-functional teams approach discovery, experimentation, and delivery.",
      "Led cross-functional delivery of a unified reporting experience for Nike retail stores, defining scope, architecture, timelines, and execution across backend systems and frontend applications \u2014 used daily by employees in 4,000+ global stores to monitor KPIs and operational performance.",
      "Delivered a unified authentication flow across Nike.com and the Nike iOS app, partnering with cross-functional teams to support a consistent sign-in experience for millions of daily users.",
      "Partnered cross-team to ship an async chat micro-frontend on Nike.com, enabling a centrally owned chat experience to be embedded across consumer surfaces.",
      "Architected and developed Nike retail pages \u2014 built a headless, dynamically-generated experience letting product owners and store ops self-serve updates (hours, photos, services) with global propagation in minutes.",
      "Proactively established recurring cross-team developer forums to strengthen engineering alignment, knowledge sharing, and technical decision-making; facilitated discussions on PRs, emerging technologies, and modern frontend practices.",
    ],
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'Vite',
      'Micro Frontends',
      'GraphQL',
      'Node',
      'AWS',
      'CI/CD',
    ],
  },
  {
    company: 'Liberty Mutual Insurance',
    location: 'Indianapolis, IN',
    roles: [
      { title: 'Senior Software Engineer', dates: '2020 — 2022' },
      { title: 'Software Engineer', dates: '2017 — 2019' },
      { title: 'Assoc. Software Engineer', dates: '2016 — 2017' },
      { title: 'IT Analyst', dates: '2016' },
    ],
    bullets: [
      'Led multiple teams over 3+ years to build an internal insurance quoting application from greenfield to production \u2014 now handling the full policy lifecycle and generating $36M/year in premiums.',
      'Established object-oriented design patterns and reusable Spring Boot components for the platform \u2014 adopted by 40+ developers across multiple teams to ship new insurance products faster.',
      'Created and led a developer upskilling program teaching emerging technologies through hands-on AWS labs; 400+ developers across 60+ teams participated in the cross-organizational event.',
      "Chosen to spearhead the organization\u2019s first Python analytics models, leading a year-long initiative that drove investment decisions and established a cross-functional methodology aligning actuaries, data scientists, engineers, and stakeholders.",
      'Refactored Java insurance pricing services onto Spring Boot, Maven, and AWS EC2 as part of the company\u2019s first cloud migration wave, taking initiative to coordinate cross-team migration sequencing to decommission on-premises systems.',
    ],
    tags: [
      'Java',
      'Spring Boot',
      'Python',
      'AWS',
      'Jenkins',
      'GraphQL',
      'Event-Driven',
      'Leadership',
    ],
  },
  {
    company: 'CyberMetrix Inc.',
    location: 'Columbus, IN',
    roles: [{ title: 'Software Engineer Intern', dates: '2015' }],
    bullets: [
      'Modernized a legacy Fortran test analysis system to Java, converting several hundred metrics used by Cummins to test diesel engines.',
    ],
    tags: ['Java', 'Fortran', 'Modernization'],
  },
  {
    company: 'SmartTemps LLC.',
    location: 'Mishawaka, IN',
    roles: [{ title: 'Software Engineer Intern', dates: '2014' }],
    bullets: [
      'Built a Visual Basic application from scratch to update thermometer firmware, including UI development and low-level network interfaces for custom hardware.',
    ],
    tags: ['Visual Basic', 'Hardware', 'Networking'],
  },
];
