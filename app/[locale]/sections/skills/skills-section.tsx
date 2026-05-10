'use server';

import { getTranslations } from 'next-intl/server';
import { SkillsSectionView } from './skills-section-view';

export type Skill = {
  skill: string;
  info: string;
};

export async function SkillsSection() {
  const translate = await translateSkills();
  return <SkillsSectionView {...translate} />;
}

async function translateSkills() {
  const t = await getTranslations('Skills');

  const frontendTranslation = {
    javascript: t('frontend.javascript'),
    html5: t('frontend.html5'),
    css3: t('frontend.css3'),
    typescript: t('frontend.typescript'),
    react: t('frontend.react'),
  };
  const backendTranslation = {
    typescript: t('backend.typescript'),
    nodejs: t('backend.nodejs'),
  };
  const databasesTranslation = {
    mongodb: t('databases.mongodb'),
    postgresql: t('databases.postgresql'),
  };
  const frameworksTranslation = {
    nextjs: t('frameworks.nextjs'),
    angular: t('frameworks.angular'),
    'react-router': t('frameworks.react-router'),
    expressjs: t('frameworks.expressjs'),
  };
  const librariesTranslation = {
    'next-auth': t('libraries.next-auth'),
    handlebars: t('libraries.handlebars'),
    mongoose: t('libraries.mongoose'),
    'drizzle-orm': t('libraries.drizzle-orm'),
    tailwindcss: t('libraries.tailwindcss'),
    'shadcn-ui': t('libraries.shadcn-ui'),
    'material-ui': t('libraries.material-ui'),
    'react-hook-form': t('libraries.react-hook-form'),
    zod: t('libraries.zod'),
    'next-intl': t('libraries.next-intl'),
  };
  const devOpsTranslation = {
    devops: t('devops.devops'),
    jenkins: t('devops.jenkins'),
    docker: t('devops.docker'),
    containers: t('devops.containers'),
    azure: t('devops.azure'),
    vercel: t('devops.vercel'),
  };
  const translateCategories = {
    frontend: t('translate.frontend'),
    backend: t('translate.backend'),
    databases: t('translate.databases'),
    frameworks: t('translate.frameworks'),
    libraries: t('translate.libraries'),
    devops: t('translate.devops'),
  };
  const frontend: Skill[] = [
    {
      skill: 'HTML5',
      info: frontendTranslation.html5,
    },
    {
      skill: 'CSS3',
      info: frontendTranslation.css3,
    },
    {
      skill: 'JavaScript (ES6+)',
      info: frontendTranslation.javascript,
    },
    {
      skill: 'TypeScript',
      info: frontendTranslation.typescript,
    },
    {
      skill: 'React',
      info: frontendTranslation.react,
    },
  ];
  const backend: Skill[] = [
    {
      skill: 'TypeScript',
      info: backendTranslation.typescript,
    },
    {
      skill: 'Node.js',
      info: backendTranslation.nodejs,
    },
  ];
  const databases: Skill[] = [
    {
      skill: 'MongoDB',
      info: databasesTranslation.mongodb,
    },
    {
      skill: 'PostgreSQL',
      info: databasesTranslation.postgresql,
    },
  ];
  const frameworks: Skill[] = [
    { skill: 'NextJs', info: frameworksTranslation.nextjs },
    { skill: 'Angular', info: frameworksTranslation.angular },
    { skill: 'React-Router', info: frameworksTranslation['react-router'] },
    { skill: 'Express.js', info: frameworksTranslation.expressjs },
  ];
  const libraries: Skill[] = [
    { skill: 'NextAuth', info: librariesTranslation['next-auth'] },
    { skill: 'Handlebars.js', info: librariesTranslation.handlebars },
    { skill: 'Mongoose', info: librariesTranslation.mongoose },
    { skill: 'DrizzleORM', info: librariesTranslation['drizzle-orm'] },
    { skill: 'TailwindCSS', info: librariesTranslation.tailwindcss },
    { skill: 'ShadcnUI', info: librariesTranslation['shadcn-ui'] },
    { skill: 'MaterialUI', info: librariesTranslation['material-ui'] },
    { skill: 'React-hook-form', info: librariesTranslation['react-hook-form'] },
    { skill: 'Zod', info: librariesTranslation.zod },
    { skill: 'Next-intl', info: librariesTranslation['next-intl'] },
  ];
  const devOps: Skill[] = [
    { skill: 'DevOps', info: devOpsTranslation.devops },
    { skill: 'Jenkins', info: devOpsTranslation.jenkins },
    { skill: 'Docker', info: devOpsTranslation.docker },
    { skill: 'Containers', info: devOpsTranslation.containers },
    { skill: 'Azure', info: devOpsTranslation.azure },
    { skill: 'Vercel', info: devOpsTranslation.vercel },
  ];

  return {
    translateCategories,
    frontend,
    backend,
    databases,
    frameworks,
    libraries,
    devOps,
  };
}
