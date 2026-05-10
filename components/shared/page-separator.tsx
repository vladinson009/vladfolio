import { ArrowRightIcon } from 'lucide-react';
import Container from './container';
import { Button } from '../ui/button';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type Props = {
  title: string;
  href: string;
};

export default function PageSeparator({ title, href }: Props) {
  const t = useTranslations('PageSeparator');
  const seeMore = t('see-more');
  return (
    <Container className="mt-15 mb-5 flex justify-between ">
      {/* Left */}
      <div className="flex items-center gap-5 w-full">
        <h2 className="text-3xl md:text-4xl whitespace-nowrap">
          <span className="text-primary">#</span>
          {title}
        </h2>
        <div className="border-primary border-t w-2/3" />
      </div>
      {/* Right */}
      <div>
        <Button asChild variant="ghost">
          <Link href={href}>
            <span>{seeMore}</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Container>
  );
}
