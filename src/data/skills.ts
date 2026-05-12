export type SkillGroup = {
  name: string;
  items: string[];
  note?: string;
};

/** Mirrors `resume-26.md` TECHNICAL SKILLS — each line becomes a group + tags. */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python'],
  },
  {
    name: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Vite',
      'HTML',
      'CSS',
      'Webpack',
      'Micro-frontends',
      'Module Federation',
    ],
  },
  {
    name: 'Backend & APIs',
    items: ['Node.js', 'Spring Boot', 'Maven', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Cloud & Infrastructure',
    items: [
      'AWS',
      'CloudFront',
      'Route 53',
      'CDK',
      'S3',
      'Lambda',
      'RDS',
      'OpenSearch',
      'Docker',
    ],
  },
  {
    name: 'CI/CD, Testing & Quality',
    items: ['Jenkins', 'GitHub Actions', 'Jest', 'Testing Library', 'JUnit', 'Sonar'],
  },
  {
    name: 'Observability',
    items: ['New Relic', 'Splunk', 'AppDynamics'],
  },
  {
    name: 'Identity & Security',
    items: ['OAuth', 'Okta', 'Ping Identity', 'Custom identity providers'],
  },
  {
    name: 'Leadership',
    items: [
      'Platform architecture',
      'Technical strategy',
      'Cross-functional partnership',
      'Engineering standards',
      'Developer enablement',
      'Delivery ownership',
    ],
  },
];
