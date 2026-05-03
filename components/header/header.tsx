import Container from '../container';
import { BriefcaseBusinessIcon } from 'lucide-react';
import { Nav } from './navigation';
import { ChangeLanguage } from './change-language';
import { Link } from '@/i18n/navigation';

export default function Header() {
  return (
    <div className="bg-secondary py-5">
      <Container className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 text-2xl">
          <BriefcaseBusinessIcon className="text-primary size-8" />
          <h1>Portfolio</h1>
        </Link>
        <div className="flex items-center gap-10">
          <Nav />
          <ChangeLanguage />
        </div>
      </Container>
    </div>
  );
}
