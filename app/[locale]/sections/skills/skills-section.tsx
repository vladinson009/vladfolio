import ContainerWrapper from '@/components/shared/cards-container-wrapper/container-wrapper';
import Container from '@/components/shared/container';
import { Badge } from '@/components/ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Skill = {
  skill: string;
  info: string;
};

export default async function SkillsSection() {
  const {
    frontend,
    translateCategories,
    backend,
    databases,
    frameworks,
    libraries,
    devOps,
  } = await translateSkills();
  return (
    <ContainerWrapper>
      <Container as="section" className="flex gap-3">
        {/* Left Side */}
        <div className="flex-4 flex flex-wrap gap-4 flex-col">
          <RenderBadges tech={frontend} category={translateCategories.frontend} />
          <RenderBadges tech={backend} category={translateCategories.backend} />
          <RenderBadges tech={databases} category={translateCategories.databases} />
          <RenderBadges
            tech={frameworks}
            category={translateCategories.frameworks}
          />
          <RenderBadges tech={libraries} category={translateCategories.libraries} />
          <RenderBadges tech={devOps} category={translateCategories.devops} />
        </div>
        {/* Right Side */}
        <div className="flex-6 bg-red-400">
          <p>{frontend[0].skill}</p>
          <p>ASD</p>
          <p>ASD</p>
          <p>ASD</p>
        </div>
      </Container>
    </ContainerWrapper>
  );
}
function RenderBadges({ tech, category }: { tech: Skill[]; category: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-xl">{category}</h2>
      <p className="flex flex-wrap gap-2">
        {tech.map((skillObject) => (
          <HoverSkillCard key={skillObject.skill} skillObject={skillObject} />
        ))}
      </p>
    </div>
  );
}
function HoverSkillCard({ skillObject }: { skillObject: Skill }) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge className="cursor-help hover:scale-120" variant="secondary">
          {skillObject.skill}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent>{skillObject.info}</HoverCardContent>
    </HoverCard>
  );
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
