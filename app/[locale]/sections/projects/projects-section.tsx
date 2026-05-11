/* eslint-disable @next/next/no-img-element */
'use client';
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

import classes from './projects-section.module.css';
import { fetchMostRecentProjects, Project } from '@/services/projects.services';
import { ExternalLinkIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ContainerWrapper from '@/components/shared/cards-container-wrapper/container-wrapper';
import { useRef } from 'react';
import { CarouselButtons } from '@/components/shared/carousel-button';

type ProjectCardProps = {
  project: Project;
};

export function ProjectsSection() {
  const recentProjects = fetchMostRecentProjects();
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <ContainerWrapper>
      <Container
        ref={containerRef}
        className="flex gap-8 md:gap-3 overflow-x-auto md:overflow-x-visible"
      >
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
      <CarouselButtons containerRef={containerRef} />
    </ContainerWrapper>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('CardButtons');
  const readMore = t('see-more');
  return (
    <Card
      data-card
      className={`${classes['animate']} min-w-[85vw] md:min-w-auto md:flex-1`}
    >
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
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <Button className="hover:scale-115">
              <ExternalLinkIcon />
              Live
            </Button>
          </a>
          <a href={project.git} target="_blank" rel="noopener noreferrer">
            <Button className="hover:scale-115" variant="secondary">
              <ExternalLinkIcon />
              Git
            </Button>
          </a>
          <Button className="hover:scale-115" variant="outline">
            {readMore}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
