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
  { year: '2014', tech: ['VB'] },
  { year: '2015', tech: ['Fortran'] },
  { year: '2016', tech: ['Java'], alsoUsing: ['AWS'] },
  { year: '2017', tech: ['Python'] },
  { year: '2018', tech: ['Angular', 'Java'] },
  { year: '2022', tech: ['React'] },
  { year: '2024', tech: ['GraphQL'] },
];

/** Lowest year shown on the master line. */
export const TIMELINE_MIN_YEAR = 2014;

/** Highest year shown on the master line. */
export const TIMELINE_MAX_YEAR = 2026;
