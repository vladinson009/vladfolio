import { MenuIcon } from 'lucide-react';

import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';
import { NAVIGATION_ITEMS } from '@/config/navigation';

import classes from './head-navigation.module.css';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type HeadNavigation = {
  href: string;
  title: string;
}[];

export function HeadNavigation() {
  const t = useTranslations('Header');
  const nav = NAVIGATION_ITEMS.map((item) => ({
    href: item.href,
    title: t(item.key),
  }));
  return (
    <>
      <DesktopNav nav={nav} />

      <Sheet>
        <SheetTrigger>
          <TriggerIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col-reverse gap-5 items-center justify-center mx-auto my-auto">
            {nav.map((el, index) => (
              <ListItem key={el.href} {...el} index={index} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
function TriggerIcon() {
  return (
    <div data-testid="mobileButton" className="relative w-6 h-6 flex lg:hidden">
      <MenuIcon className={classes['nav-item']} />
    </div>
  );
}
function ListItem(el: { href: string; title: string; index: number }) {
  return (
    <Link
      href={el.href}
      className={`${classes['nav-item']} cursor-pointer text-3xl`}
      style={
        {
          '--animation-delay': `${(el.index + 1) * 0.1}s`,
        } as React.CSSProperties
      }
    >
      <span className="text-primary">#</span>
      <span>{el.title}</span>
    </Link>
  );
}

function DesktopNav({ nav }: { nav: HeadNavigation }) {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex flex-row-reverse gap-3 bsg-red-400">
        {nav.map(({ href, title }, index) => (
          <li
            className={classes['nav-item']}
            style={
              {
                '--animation-delay': `${(index + 1) * 0.1}s `,
              } as React.CSSProperties
            }
            key={href}
          >
            <Link href={href} className="hover:text-primary">
              <span className="text-primary">#</span>

              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
