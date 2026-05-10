'use client';
import { MenuIcon, XIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { NAVIGATION_ITEMS } from '@/config/navigation';

import classes from './head-navigation.module.css';

type HeadNavigation = {
  href: string;
  title: string;
}[];

export function HeadNavigation() {
  const t = useTranslations('Header');
  const [open, setOpen] = useState<boolean>(false);
  const nav = NAVIGATION_ITEMS.map((item) => ({
    href: item.href,
    title: t(item.key),
  }));
  return (
    <>
      <DesktopNav nav={nav} />

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className={`${classes['nav-item']} flex sm:hidden`}
          aria-label="Toggle mobile navigation"
        >
          <TriggerIcon open={open} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col-reverse sm:hidden">
          {nav.map((el) => (
            <ListItem key={el.href} {...el} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
function TriggerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-6">
      <MenuIcon
        className={`absolute transition-all duration-200
          ${open ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}
        `}
      />

      <XIcon
        className={`absolute transition-all duration-200
          ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}
        `}
      />
    </div>
  );
}
function ListItem(el: { href: string; title: string }) {
  return (
    <DropdownMenuItem asChild>
      <Link href={el.href} className="cursor-pointer">
        <div>
          <span className="text-primary">#</span>
          <span>{el.title}</span>
        </div>
      </Link>
    </DropdownMenuItem>
  );
}

function DesktopNav({ nav }: { nav: HeadNavigation }) {
  return (
    <nav className="hidden sm:flex">
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
