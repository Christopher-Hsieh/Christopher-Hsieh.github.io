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
    roles: [{ title: 'Lead Software Engineer', dates: '2022 — Present' }],
    bullets: [
      'Created and fostered high-level technical strategies supporting in-store retail applications such as online to offline mode, a standardized tech stack and cross-platform patterns. Worked with business leadership to discuss options and outcomes, choosing a go-forward path with proofs of concept, and evangelize adoption across teams.',
      'United developers and teams org-wide to create standardization and a community of practice for web applications used by retail employees. Patterns included authentication, CI/CD, and observability instrumentation, giving teams a clear path to design and deliver unified experiences quickly.',
      'Owned micro frontend powering Nike.com\u2019s store search modal from proof of concept to production across approximately 12 teams, improving multiple core consumer flows used by millions globally.',
      'Own Nike.com\u2019s Store Locator (nike.com/retail and all child pages), a globally available high-traffic property with peak days exceeding one million sessions. Led end-to-end migration from Mapbox to Apple Maps in partnership with Apple engineers.',
      'Upgraded the organization\u2019s web authentication for iOS compatibility, modernizing core libraries while coordinating cross-team adoption so both web and mobile use the same consumer login service.',
      'Maintained and delivered internal reporting tools on store data used daily by retail employees globally.',
      'Founded a cross-team workforce development program creating a collaborative forum for engineers to share domain knowledge, strengthen competencies, and reduce cross-team friction.',
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
