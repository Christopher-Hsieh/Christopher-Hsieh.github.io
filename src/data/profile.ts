export const profile = {
  name: 'Christopher J. Hsieh',
  handle: '@christopher-hsieh',
  title: 'Lead Software Engineer',
  status:
    'Open to senior / staff / lead opportunities (seeking teams obsessed with both the craft & the people using it)',
  location: 'Fishers, IN',
  email: 'christopher.j.hsieh@gmail.com',
  phone: '(574) 514-4447',
  linkedin: 'https://www.linkedin.com/in/christopher-j-hsieh',
  github: 'https://github.com/Christopher-Hsieh',
  // Stable filename → shareable URL never changes. To update: replace
  // `public/christopher-hsieh-resume.pdf` and bump `updated`. The `?v=`
  // query string in the Nav link uses `updated` to bust browser/CDN cache.
  resume: {
    href: '/christopher-hsieh-resume.pdf',
    updated: '2026-05',
  },
  pitch:
    'Full-stack engineer and platform lead with 10+ years of experience. Regularly partner with business leadership on technical initiatives and architectural direction. Bridge strategy and execution — set direction across engineering teams and remain hands-on from proof-of-concept to production.',
  // Wrap any phrase in **double asterisks** to render it in the accent color.
  // Pattern mirrors the section heading where the closing kicker pops.
  summary: [
    'Great software comes when engineers understand the product — the why, the what, and the how. I completed my MBA in an evening program while working full-time as a Senior Engineer for this reason. I wanted to see both sides.',
    "I'm passionate about great teams: a shared goal, and people who genuinely work together to reach it. Across 10+ years I've thrived on those teams and I've led them — successfully delivering many great products and enabling engineering initiatives while remaining hands-on.",
  ],
  stats: [
    { value: '10+', label: 'Years building software professionally' },
    { value: '1M+/day', label: 'Peak sessions on Nike.com pages I own' },
    { value: '$36M+/yr', label: 'Premium volume on the LM platform I built greenfield to prod' },
    { value: '400+', label: 'Engineers across 60+ teams in the org-wide program I founded' },
  ],
};
