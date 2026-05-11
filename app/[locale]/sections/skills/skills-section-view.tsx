import ContainerWrapper from '@/components/shared/container-wrapper/container-wrapper';
import Container from '@/components/shared/container';
import { Badge } from '@/components/ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Skill } from './skills-section';

type SkillSectionViewProps = {
  frontend: Skill[];
  backend: Skill[];
  databases: Skill[];
  frameworks: Skill[];
  libraries: Skill[];
  devOps: Skill[];
  translateCategories: {
    frontend: string;
    backend: string;
    databases: string;
    frameworks: string;
    libraries: string;
    devops: string;
  };
};

export function SkillsSectionView({
  frontend,
  backend,
  databases,
  frameworks,
  libraries,
  devOps,
  translateCategories,
}: SkillSectionViewProps) {
  return (
    <ContainerWrapper>
      <Container as="section" className="flex-col gap-3">
        <p className="text-muted-foreground animate-pulse">(Hover skill)</p>
        <div className="flex flex-wrap gap-4 flex-col">
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
      </Container>
    </ContainerWrapper>
  );
}
function RenderBadges({ tech, category }: { tech: Skill[]; category: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-2xl">{category}</h2>
      <p className="flex flex-wrap gap-3">
        {tech.map((skillObject) => (
          <HoverSkillBadge key={skillObject.skill} skillObject={skillObject} />
        ))}
      </p>
    </div>
  );
}
function HoverSkillBadge({ skillObject }: { skillObject: Skill }) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge
          className="text-xl p-5 cursor-help hover:scale-110"
          variant="secondary"
        >
          {skillObject.skill}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent>{skillObject.info}</HoverCardContent>
    </HoverCard>
  );
}
