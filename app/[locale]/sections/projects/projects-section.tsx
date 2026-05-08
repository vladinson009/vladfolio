/* eslint-disable @next/next/no-img-element */
import Container from '@/components/shared/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Project = {
  project: { name: string; tech: string[]; description: string; imgUrl: string };
};

export default function ProjectsSection() {
  const mostRecentProjects = [
    {
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
      description:
        'Job Application Tracker about job applications for different jobs',
      imgUrl: '/project1.webp',
    },
    {
      name: 'Finance Tracker',
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
      name: 'Finance Tracker',
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
  ];

  return (
    <section className="bg-primary py-5">
      <Container className="flex flex-col gap-8 md:flex-row md:gap-3">
        <ProjectCard project={mostRecentProjects[0]} />
        <ProjectCard project={mostRecentProjects[1]} />
        <ProjectCard project={mostRecentProjects[2]} />
      </Container>
    </section>
  );
}

function ProjectCard({ project }: Project) {
  return (
    <Card className="flex-1">
      <img src={project.imgUrl} alt={`Photo of ${project.name}`} />
      <CardHeader>
        <CardDescription className="flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <Badge variant="outline" key={tech}>
              {tech}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        <CardTitle className="text-center m-auto">
          <h3 className="text-2xl">{project.name}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </CardTitle>
        <div className="flex flex-wrap gap-1 justify-center mt-auto">
          <Button className="hover:scale-115">Live</Button>
          <Button className="hover:scale-115" variant="secondary">
            Git
          </Button>
          <Button className="hover:scale-115" variant="outline">
            Read more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
