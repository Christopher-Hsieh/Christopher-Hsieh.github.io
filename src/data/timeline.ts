export type TimelineEntry = {
  /** The year this tech stack was picked up (4-digit string). */
  year: string;
  /** Primary tech for this year — pills sit BELOW the timeline. */
  tech: string[];
  /**
   * "Also using" tech — pills sit ABOVE the timeline, in the gap between this
   * entry and the next. Use to fill in tools you picked up between primary
   * milestones (e.g. AWS picked up while still primarily on Java in 2016).
   */
  alsoUsing?: string[];
};

export const timeline: TimelineEntry[] = [
  { year: '2014', tech: ['VB'], alsoUsing: ['C'] },
  { year: '2015', tech: ['Fortran'], alsoUsing: ['Java'] },
  { year: '2016', tech: ['AWS'], alsoUsing: ['Spring'] },
  { year: '2017', tech: ['Python'], alsoUsing: ['Docker'] },
  { year: '2018', tech: ['AWS'], alsoUsing: ['CDK'] },
  { year: '2019', tech: ['Javascript'],alsoUsing: ['Angular']  },
  { year: '2020', tech: ['Splunk'],alsoUsing: ['Typescript']  },
  { year: '2021', tech: ['Jenkins'], alsoUsing: ['React'] },
  { year: '2022', tech: ['Next.js'], alsoUsing: ['Webpack'] },
  { year: '2023', tech: ['Vite'], alsoUsing: ['GraphQL'] },
  { year: '2024', tech: ['Web Platform'], alsoUsing: ['MFE']  },
  { year: '2025', tech: ['AI']},
];

/** Lowest year shown on the master line. */
export const TIMELINE_MIN_YEAR = 2014;

/** Highest year shown on the master line. */
export const TIMELINE_MAX_YEAR = 2026;
