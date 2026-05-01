export type SkillGroup = {
  name: string;
  items: string[];
  note?: string;
};

export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python'],
    note: 'Plus deep CS roots in C, C++, and Fortran.',
  },
  {
    name: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Vite',
      'Webpack',
      'Angular',
      'Web APIs',
      'Redux',
      'State management',
      'Accessibility (WCAG)',
      'CSS architecture',
      'Responsive design',
      'Design systems',
      'Component libraries',
    ],
    note: 'Wide array of web technologies, micro-frontend architectures.',
  },
  {
    name: 'Testing',
    items: ['Jest', 'React Testing Library', 'Playwright', 'Vitest', 'JUnit'],
    note: 'User-behavior-focused unit + e2e coverage, across JS and Java.',
  },
  {
    name: 'Architecture & Platform',
    items: [
      'Micro-frontends',
      'Design systems',
      'Monorepos',
      'Module federation',
      'Serverless distributed systems',
      'Event-driven architectures',
      'Cross-team CI/CD patterns',
      'Web platform strategy',
    ],
    note: 'Patterns I think in — across teams and orgs.',
  },
  {
    name: 'Backend & APIs',
    items: ['Spring', 'Spring Boot', 'Maven', 'REST', 'GraphQL', 'HATEOAS', 'Node.js'],
    note: 'Backend-for-frontend patterns at scale.',
  },
  {
    name: 'Cloud & Delivery',
    items: [
      'AWS',
      'Multi-region AWS',
      'CloudFront',
      'Route 53',
      'API Gateway',
      'Lambda',
      'S3',
      'DynamoDB',
      'RDS',
      'OpenSearch',
      'SQS',
      'SNS',
      'CDK',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'Blue/Green deploys',
      'Rolling deploys',
    ],
    note: 'Many stacks across multiple enterprise-wide pipeline environments.',
  },
  {
    name: 'Observability & Security',
    items: ['New Relic', 'Splunk', 'AWS CloudWatch', 'Okta', 'Custom Identity'],
    note: 'High traffic, highly available, consumer-facing context.',
  },
];
