'use client';
import { MenuIcon, XIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';
import { useState } from 'react';

const nav = [
  {
    href: '/about',
    title: 'about',
  },
  {
    href: '/more',
    title: 'more',
  },
];

export function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <DesktopNav />

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="flex sm:hidden">
          <TriggerIcon open={open} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col sm:hidden">
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

function DesktopNav() {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex gap-3 bsg-red-400">
        {nav.map(({ href, title }) => (
          <li key={href}>
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
