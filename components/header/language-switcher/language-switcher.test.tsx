import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LanguageSwitcher } from './language-switcher';
import React from 'react';

vi.mock('next-intl', () => ({
  useLocale: () => 'en',
}));
vi.mock('@/i18n/routing', () => ({
  routing: {
    locales: ['en', 'no'],
  },
}));
vi.mock('@/i18n/navigation', () => ({
  Link: ({
    children,
    locale,
    className,
  }: {
    children: React.ReactNode;
    locale: string;
    className?: string;
  }) => (
    <a href={`/${locale}`} className={className}>
      {children}
    </a>
  ),
}));

describe('LanguageSwitcher', () => {
  it('renders current locale', () => {
    render(<LanguageSwitcher />);

    expect(screen.getByText('EN')).toBeVisible();
  });

  it('opens dropdown and shows locales', async () => {
    const user = userEvent.setup();

    render(<LanguageSwitcher />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByText('English')).toBeVisible();

    expect(screen.getByText('Norsk')).toBeVisible();
  });

  it('marks active locale', async () => {
    const user = userEvent.setup();

    render(<LanguageSwitcher />);

    await user.click(screen.getByRole('button'));

    const activeLocale = screen.getByText('English');

    expect(activeLocale).toHaveClass('font-bold');
  });
});
