import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';

import { ProjectsSection } from './projects-section';

// ============================================
// MOCKS
// ============================================

vi.mock('@/components/shared/container', () => ({
  default: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={className} data-testid="container">
      {children}
    </div>
  ),
}));

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(() => (key: string) => {
    const translations: Record<string, string> = {
      'see-more': 'See more',
    };
    return translations[key] || key;
  }),
}));

// ============================================
// TESTS
// ============================================

describe('Projects Section', () => {
  it('renders the section', () => {
    render(<ProjectsSection />);
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('cards are rendered correclty', () => {
    render(<ProjectsSection />);
    const liveButtons = screen.getAllByRole('button', { name: /live/i });
    const gitButtons = screen.getAllByRole('button', { name: /git/i });
    const seeMoreButtons = screen.getAllByRole('button', { name: /see more/i });
    expect(liveButtons.length).toBeGreaterThan(0);
    expect(gitButtons.length).toBeGreaterThan(0);
    expect(seeMoreButtons.length).toBeGreaterThan(0);
  });
});
