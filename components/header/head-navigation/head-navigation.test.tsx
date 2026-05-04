import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { HeadNavigation } from './head-navigation';
import { NAVIGATION_ITEMS } from '@/config/navigation';

// ! KEEP IN SYNC WITH NAVIGATION ITEMS
const TRANSLATIONS = {
  'about-me': 'About me',
  home: 'Home',
} as const;

function getTranslatedText(key: string) {
  return TRANSLATIONS[key as keyof typeof TRANSLATIONS] || key;
}
// ============================================
// 1. MOCK EXTERNAL DEPENDENCIES
// ============================================

// Mock next-intl's useTranslations hook
// This returns a function that translates keys to text
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    return getTranslatedText(key);
  },
}));

// Mock next/link component
// The real Link is complex, but for tests we just need a simple link
vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe('Nav Component', () => {
  it('renders all navigation items from config', () => {
    render(<HeadNavigation />);

    NAVIGATION_ITEMS.forEach((item) => {
      const translatedText = getTranslatedText(item.key);
      const link = screen.getByRole('link', {
        name: new RegExp(translatedText, 'i'),
      });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.href);
    });
  });

  it('renders correct number of navigation links', () => {
    render(<HeadNavigation />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(NAVIGATION_ITEMS.length);
  });

  it('renders links with hash symbol prefix', () => {
    render(<HeadNavigation />);

    NAVIGATION_ITEMS.forEach((item) => {
      const translatedText = getTranslatedText(item.key);
      const link = screen.getByRole('link', {
        name: new RegExp(`^#${translatedText}$`, 'i'),
      });
      expect(link).toBeInTheDocument();
    });
  });

  it('toggles mobile menu when button is clicked', async () => {
    const user = userEvent.setup();
    render(<HeadNavigation />);

    const triggerButton = screen.getByRole('button', {
      name: /toggle mobile navigation/i,
    });

    await user.click(triggerButton);

    const firstItem = NAVIGATION_ITEMS[0];
    const translatedText = getTranslatedText(firstItem.key);
    const link = screen.getByRole('link', {
      name: new RegExp(translatedText, 'i'),
    });
    expect(link).toBeVisible();
  });

  it('applies primary color class to hash symbols', () => {
    render(<HeadNavigation />);
    const firstItem = NAVIGATION_ITEMS[0];
    const translatedText = getTranslatedText(firstItem.key);
    const firstLink = screen.getByRole('link', {
      name: new RegExp(`#${translatedText}`, 'i'),
    });

    // Check that the parent link exists
    expect(firstLink).toHaveClass('hover:text-primary');
  });
});
