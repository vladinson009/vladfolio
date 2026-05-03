import PageSeparator from '@/components/utils/page-separator';
import { IntroduceSection } from './home-sections/introduce-section';

export default function HomePage() {
  return (
    <>
      <IntroduceSection />
      <PageSeparator title="Projects" href="/projects" />
    </>
  );
}
