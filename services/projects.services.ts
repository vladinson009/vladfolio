export type Project = {
  id: string;
  name: string;
  tech: string[];
  description: string;
  imgUrl: string;
  git: string;
  live: string;
};
const projects: Project[] = [
  {
    id: '1',
    git: 'https://github.com/vladinson009/next-job-applications',
    live: 'https://next-job-applications.vercel.app',
    name: 'NextJob Applications',
    tech: [
      'React',
      'NextAuth',
      'NextJs',
      'PostgreSQL',
      'Zod',
      'ShadCN',
      'Tailwind',
      'Vercel',
    ],
    description: 'Job Application Tracker about job applications for different jobs',
    imgUrl: '/project1.webp',
  },
  {
    id: '2',
    git: 'https://github.com/vladinson009/next-cash',
    live: 'https://next-cash-zeta.vercel.app',
    name: 'NextCash',
    tech: [
      'React',
      'NextJs',
      'Clerk',
      'PostgreSQL',
      'Zod',
      'ShadCN',
      'Tailwind',
      'Vercel',
    ],
    description:
      'Beautiful dashboard with tables that track your expenses and incomes',
    imgUrl: '/project2.webp',
  },
  {
    id: '3',
    git: 'https://github.com/vladinson009/next-cash',
    live: 'https://next-cash-zeta.vercel.app',
    name: 'NextCash',
    tech: [
      'React',
      'NextJs',
      'Clerk',
      'PostgreSQL',
      'Zod',
      'ShadCN',
      'Tailwind',
      'Vercel',
    ],
    description:
      'Beautiful dashboard with tables that track your expenses and incotrack your expenses and incotrack your expenses and incomes',
    imgUrl: '/project2.webp',
  },
  {
    id: '4',
    git: 'https://github.com/vladinson009/host-tattoo',
    live: 'https://host-tattoo.vercel.app',
    name: 'Høst Tattoo',
    tech: [
      'React',
      'NextJs',
      'Clerk',
      'PostgreSQL',
      'Zod',
      'ShadCN',
      'Tailwind',
      'Vercel',
    ],
    description:
      'Beautiful dashboard with tables that track your expenses and incotrack your expenses and incotrack your expenses and incomes',
    imgUrl: '/project3.webp',
  },
];

export function fetchMostRecentProjects() {
  const result = projects.slice(-3).reverse();
  return result;
}
export function fetchAllProjects() {
  return projects.reverse();
}
