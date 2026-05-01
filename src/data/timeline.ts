export type Phase = {
  id: string;
  /** Short discipline label, e.g. "Backend", "Platform Lead". */
  label: string;
  /** Relative-year label shown at the top, e.g. "Years 0-4". */
  yearRange: string;
  /** Calendar years used to compute proportional widths. */
  yearStart: number;
  yearEnd: number;
  /** One-line description of the phase focus. */
  focus: string;
  /** Primary tech anchors for this phase. */
  tech: string[];
};

export const phases: Phase[] = [
  {
    id: 'backend',
    label: 'Backend',
    yearRange: 'Years 0-4',
    yearStart: 2016,
    yearEnd: 2020,
    focus: 'Heavy backend development across Java services and early Python analytics.',
    tech: ['Java', 'Spring Boot', 'Python'],
  },
  {
    id: 'fullstack',
    label: 'Full-stack',
    yearRange: 'Years 4-5',
    yearStart: 2020,
    yearEnd: 2022,
    focus: 'Full-stack delivery, picked up the frontend layer end-to-end.',
    tech: ['Java', 'Angular'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    yearRange: 'Years 6-7',
    yearStart: 2022,
    yearEnd: 2024,
    focus: 'Pure frontend depth across modern React.',
    tech: ['React', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'platform',
    label: 'Full-stack Platform Lead',
    yearRange: 'Years 8-10+',
    yearStart: 2024,
    yearEnd: 2026,
    focus: 'Architectural direction across teams, still hands-on full-stack.',
    tech: ['Web platform', 'Architecture', 'Cross-team'],
  },
];

export const constants = {
  label: 'Constants across 10+ years',
  items: ['AWS infrastructure', 'CI/CD', 'Testing (unit + E2E)', 'Observability'],
};
