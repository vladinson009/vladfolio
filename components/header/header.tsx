import Container from '../container';
import { BriefcaseBusinessIcon } from 'lucide-react';
import { Nav } from './navigation';
import { ChangeLanguage } from './change-language';

export default function Header() {
  return (
    <div className="bg-secondary py-5">
      <Container className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-2xl">
          <BriefcaseBusinessIcon className="text-primary size-8" />
          <h1>Vladimir</h1>
        </div>
        <div className="flex items-center gap-10">
          <Nav />
          <ChangeLanguage />
        </div>
      </Container>
    </div>
  );
}
