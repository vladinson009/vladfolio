import ContainerWrapper from '@/components/shared/cards-container-wrapper/container-wrapper';
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
        <Badge className="cursor-help hover:scale-120" variant="secondary">
          {skillObject.skill}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent>{skillObject.info}</HoverCardContent>
    </HoverCard>
  );
}
