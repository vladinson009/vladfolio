import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { localeMap } from '@/config/i18n';

import classes from './language-switcher.module.css';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button
          variant="outline"
          className={`${classes['nav-item']} flex hover:text-primary`}
        >
          <span>{locale.toUpperCase()}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {routing.locales.map((loc) => (
          <DropdownMenuItem key={loc}>
            <Link
              href="/"
              locale={loc}
              className={`${loc === locale ? 'font-bold text-primary' : ''} w-full`}
            >
              {localeMap[loc]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
