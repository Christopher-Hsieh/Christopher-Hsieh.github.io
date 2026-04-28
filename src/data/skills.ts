export type SkillGroup = {
  name: string;
  items: string[];
  note?: string;
};

export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python'],
    note: 'Plus early experience in Fortran, C++, C and more.',
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Webpack', 'Angular 2+', 'HTML', 'CSS'],
    note: 'Wide array of web technologies, micro frontend architectures.',
  },
  {
    name: 'Backend & APIs',
    items: ['Spring', 'Spring Boot', 'Maven', 'GraphQL', 'HATEOAS', 'REST', 'Node.js'],
    note: 'Backend-for-frontend patterns at scale.',
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
      'Jenkins',
      'GitHub Actions',
    ],
    note: 'Many stacks across multiple enterprise-wide pipeline environments.',
  },
  {
    name: 'Observability & Security',
    items: ['New Relic', 'Splunk', 'AWS CloudWatch', 'Okta', 'Custom Identity'],
    note: 'High traffic, highly available, consumer-facing context.',
  },
  {
    name: 'Methodologies',
    items: [
      'Agile',
      'Scrum',
      'DevOps',
      'Blue/Green',
      'Rolling Deployments',
      'Tiger Teams',
    ],
    note: 'Led communities and initiatives cross-team and cross-org; also been the sole dev shipping fast.',
  },
];
