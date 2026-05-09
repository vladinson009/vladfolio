import PageSeparator from '@/components/shared/page-separator';
import { IntroduceSection } from './sections/introduce/introduce-section';
import ProjectsSection from './sections/projects/projects-section';
import { useTranslations } from 'next-intl';
import CertificatesSection from './sections/certificates/certificates-section';

export default function HomePage() {
  const t = useTranslations('PageSeparator');
  const projects = t('projects');
  const certificates = t('certificates');

  return (
    <>
      <IntroduceSection />
      <PageSeparator title={projects} href="/projects" />
      <ProjectsSection />
      <PageSeparator title={certificates} href="/certificates" />
      <CertificatesSection />
      <PageSeparator title="Unknown" href="/certificates" />
    </>
  );
}
