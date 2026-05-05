import Container from '../container';
import { BriefcaseBusinessIcon } from 'lucide-react';
import { HeadNavigation } from './head-navigation/head-navigation';
import { ChangeLanguage } from './change-language/change-language';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
  return (
    <div className="bg-secondary py-5">
      <Container className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 text-2xl">
          <BriefcaseBusinessIcon className="text-primary size-8" />
          <h1>{t('portfolio')}</h1>
        </Link>
        <div className="flex items-center gap-10">
          <HeadNavigation />
          <ChangeLanguage />
        </div>
      </Container>
    </div>
  );
}
