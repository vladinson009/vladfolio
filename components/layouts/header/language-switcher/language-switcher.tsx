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

export function LanguageSwitcher() {
  const locale = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">
        <div className="flex">
          <span>{locale.toUpperCase()}</span>
          <ChevronDown />
        </div>
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
