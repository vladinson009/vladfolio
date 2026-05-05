import PageSeparator from '@/components/shared/page-separator';
import { IntroduceSection } from './sections/introduce/introduce-section';

export default function HomePage() {
  return (
    <>
      <IntroduceSection />
      <PageSeparator title="Projects" href="/projects" />
    </>
  );
}
