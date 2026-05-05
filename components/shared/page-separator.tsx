import { ArrowRightIcon } from 'lucide-react';
import Container from './container';
import { Button } from '../ui/button';
import { Link } from '@/i18n/navigation';

type Props = {
  title: string;
  href: string;
};

export default function PageSeparator({ title, href }: Props) {
  return (
    <Container className="mt-15 flex justify-between ">
      {/* Left */}
      <div className="flex items-center gap-5 w-full">
        <h2 className="text-3xl">
          <span className="text-primary">#</span>
          {title}
        </h2>
        <div className="border-primary border-t w-2/3"></div>
      </div>
      {/* Right */}
      <div>
        <Button asChild variant="ghost">
          <Link href={href}>
            <span>View All</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Container>
  );
}
