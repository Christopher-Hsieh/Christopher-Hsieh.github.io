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
    roles: [{ title: 'Lead Software Engineer', dates: '2022 — July 2026' }],
    bullets: [
      "Selected as the embedded engineer for Nike\u2019s global innovation and emerging-technology workshops \u2014 partnered with Product, Store Ops, and Design leadership traveling across Oregon, Amsterdam, and London to build AI-powered prototypes shaping the next iteration of retail employee experiences.",
      "Founded a community of practice across teams building Nike\u2019s retail-store-operations platform \u2014 aligned standards on stack, CI/CD, testing, component and styling libraries, state management, observability, and AI-assisted application blueprints. Unified existing experiences across stores globally and gave teams a clear path to ship new ones.",
      "Led web platform for Nike.com \u2014 drove migrations to the latest React, Next.js, and core dependencies with full backwards compatibility, and coordinated cross-team adoption.",
      "Partnered with iOS and web engineers on a JavaScript bridge to deliver a unified auth flow across Nike.com and the Nike iOS app \u2014 both surfaces use the same login service.",
      "Built Nike.com\u2019s consumer-facing Store Search micro-frontend from proof-of-concept to production across ~12 teams \u2014 deployed in core consumer flows used by millions globally.",
      "Partnered cross-team to ship an async-chat micro-frontend on Nike.com \u2014 one team owns chat; every consumer surface picks it up. Live on nike.com/help.",
      "Own Nike.com\u2019s Store Locator, a global high-traffic property with 1M+ sessions on peak days \u2014 led end-to-end migration from Mapbox to Apple Maps in direct partnership with Apple engineers.",
      "Architected and developed Nike retail pages \u2014 built a headless, dynamically-generated experience letting product owners and store ops self-serve updates (hours, photos, services) with global propagation in minutes.",
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
      'Led multiple teams over years to build an internal insurance quoting platform from greenfield to production; the platform now handles the full policy lifecycle and generates over $100K/day in premiums on average.',
      'Spearheaded the org\u2019s first Python analytics models — drove investment decisions that retired legacy tech, enabled new data strategies, and aligned actuaries, data scientists, engineers, and stakeholders.',
      'Created and led a developer upskilling program teaching emerging tech through hands-on AWS labs — 400+ developers across 60+ teams participated.',
      'Architected a unified dashboard and monitoring infra adopted by 20+ teams integrating 500+ applications, enabling on-time decommission of the legacy monitoring vendor.',
      'Led migration from legacy systems to event-driven cloud architecture, coordinating 20+ developers through design, implementation, and delivery.',
      'Established code review and release standards for a 3+ year project, streamlining delivery for 40+ developers across several teams.',
      'Initiated cross-team community events that senior leadership later adopted as an annual org-wide engineer skill-building program.',
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
