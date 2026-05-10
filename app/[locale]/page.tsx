import PageSeparator from '@/components/shared/page-separator';
import { IntroduceSection } from './sections/introduce/introduce-section';
import { ProjectsSection } from './sections/projects/projects-section';
import { useTranslations } from 'next-intl';
import { CertificatesSection } from './sections/certificates/certificates-section';
import { SkillsSection } from './sections/skills/skills-section';
import { AboutMeSection } from './sections/about-me/about-me-section';

export default function HomePage() {
  const t = useTranslations('PageSeparator');
  const projects = t('projects');
  const certificates = t('certificates');
  const skills = t('skills');
  const aboutMe = t('about-me');
  const contacts = t('contacts');

  return (
    <>
      <IntroduceSection />
      <PageSeparator title={projects} href="/projects" />
      <ProjectsSection />
      <PageSeparator title={certificates} href="/certificates" />
      <CertificatesSection />
      <PageSeparator title={skills} href="/skills" />
      <SkillsSection />
      <PageSeparator title={aboutMe} href="/about-me" />
      <AboutMeSection />
      <PageSeparator title={contacts} href="/contacts" />
    </>
  );
}
