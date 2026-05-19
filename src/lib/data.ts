import type { Project, Experience, SkillGroup } from '@/types';

export const projects: Project[] = [
  {
    id: 'aurora',
    title: 'Aurora Analytics',
    description:
      'A real-time analytics dashboard with customizable widgets, dark mode, and a plugin system for third-party data sources.',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
    year: '2024',
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop',
    link: '#',
    repo: '#',
  },
  {
    id: 'fern',
    title: 'Fern Mobile Banking',
    description:
      'Cross-platform banking app focused on accessibility and offline-first transactions with end-to-end encryption.',
    tags: ['React Native', 'Expo', 'Reanimated', 'SQLite'],
    year: '2024',
    category: 'Mobile',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'studio',
    title: 'Studio Design System',
    description:
      'A token-based design system shipped to 12 internal product teams, including Figma library and a documented React kit.',
    tags: ['Design Tokens', 'Figma', 'Storybook', 'Tailwind'],
    year: '2023',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=900&q=80&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'lark',
    title: 'Lark Markdown Editor',
    description:
      'A keyboard-first markdown editor with live preview, math typesetting, and collaborative editing through CRDTs.',
    tags: ['Vite', 'CodeMirror', 'Yjs', 'TypeScript'],
    year: '2023',
    category: 'Open Source',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80&auto=format&fit=crop',
    repo: '#',
  },
  {
    id: 'nimbus',
    title: 'Nimbus Weather',
    description:
      'A minimal weather companion with hyperlocal forecasts, beautiful gradients, and a delightful onboarding flow.',
    tags: ['Next.js', 'Edge Functions', 'Tailwind'],
    year: '2022',
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=900&q=80&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'pebble',
    title: 'Pebble CLI',
    description:
      'A lightning-fast project scaffolding CLI used by 8,000+ developers, with plugin authoring docs and templates.',
    tags: ['Node.js', 'TypeScript', 'Ink'],
    year: '2022',
    category: 'Open Source',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format&fit=crop',
    repo: '#',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Senior Product Engineer',
    company: 'Northwind Labs',
    period: '2022 — Present',
    description:
      'Leading the platform pod: shipped a new component library, cut bundle size by 38%, and mentored 4 engineers.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Tailwind'],
  },
  {
    role: 'Product Engineer',
    company: 'Beacon Studio',
    period: '2020 — 2022',
    description:
      'Built customer-facing dashboards and an internal data tool used daily by 200+ teammates. Owned design system.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Lighthouse Agency',
    period: '2018 — 2020',
    description:
      'Delivered award-winning marketing sites for clients in fintech and media, focusing on motion and accessibility.',
    stack: ['Vue', 'GSAP', 'Sanity'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Motion / Animation', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'GraphQL', level: 75 },
      { name: 'Edge / Serverless', level: 72 },
    ],
  },
  {
    title: 'Craft',
    skills: [
      { name: 'Design Systems', level: 92 },
      { name: 'Accessibility (a11y)', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Testing (Vitest / Playwright)', level: 78 },
    ],
  },
];

export const stack: string[] = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Figma',
  'Vite',
  'Storybook',
];
