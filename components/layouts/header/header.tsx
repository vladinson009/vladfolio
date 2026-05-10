import Container from '@/components/shared/container';
import { BriefcaseBusinessIcon } from 'lucide-react';
import { HeadNavigation } from './head-navigation/head-navigation';
import { LanguageSwitcher } from './language-switcher/language-switcher';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import classes from './header.module.css';

export default function Header() {
  const t = useTranslations('Header');
  return (
    <div className="bg-secondary py-5">
      <Container className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 text-2xl">
          <BriefcaseBusinessIcon
            className={`text-primary size-8 ${classes['icon-effect']}`}
          />
          <h1 className={`${classes['title-effect']} hover:text-primary`}>
            {t('portfolio')}
          </h1>
        </Link>
        <div className="flex items-center gap-10">
          <HeadNavigation />
          <LanguageSwitcher />
        </div>
      </Container>
    </div>
  );
}
