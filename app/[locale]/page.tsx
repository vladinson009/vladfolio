import PageSeparator from '@/components/shared/page-separator';
import { IntroduceSection } from './sections/introduce/introduce-section';
import ProjectsSection from './sections/projects/projects-section';

export default function HomePage() {
  return (
    <>
      <IntroduceSection />
      <PageSeparator title="Projects" href="/projects" />
      <ProjectsSection />
      <PageSeparator title="Certificates" href="/certificates" />
    </>
  );
}
