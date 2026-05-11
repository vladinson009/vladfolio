import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';

import Header from './header';

// ============================================
// MOCK DEPENDENCIES
// ============================================

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = { portfolio: 'Portfolio' };
    return translations[key];
  },
}));
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

vi.mock('lucide-react', () => ({
  BriefcaseBusinessIcon: mockSvgComponent('briefcase-icon'),
  MenuIcon: mockSvgComponent('menu-icon'),
  XIcon: mockSvgComponent('x-icon'),
  ChevronDown: mockSvgComponent('chevron-down-icon'),
  ArrowRightIcon: mockSvgComponent('arrow-right-icon'),
  Sun: mockSvgComponent('sun'),
  Moon: mockSvgComponent('moon'),
}));

// Helper to avoid repetition
function mockSvgComponent(testId: string) {
  const Component = ({ className }: { className?: string }) => (
    <svg data-testid={testId} className={className} />
  );
  return Component;
}

vi.mock('./head-navigation/head-navigation', () => ({
  HeadNavigation: () => <nav data-testid="head-navigation">Navigation</nav>,
}));

vi.mock('./language-switcher/language-switcher', () => ({
  LanguageSwitcher: () => <div data-testid="language-switcher">Language</div>,
}));

vi.mock('@/i18n/navigation', () => ({
  Link: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className} data-testid="logo-link">
      {children}
    </a>
  ),
}));

// ============================================
// TESTS
// ============================================

describe('Header Component', () => {
  // ✅ Test 1: Renders all child components
  it('renders all child components', () => {
    render(<Header />);

    expect(screen.getByTestId('head-navigation')).toBeInTheDocument();
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
    expect(screen.getByTestId('briefcase-icon')).toBeInTheDocument();
  });

  // ✅ Test 2: Logo links to home
  it('logo links to home page', () => {
    render(<Header />);

    const logoLink = screen.getByTestId('logo-link');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  // ✅ Test 3: Displays portfolio title
  it('displays portfolio title', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument();
  });

  // ✅ Test 4: Applies correct styling classes
  it('applies correct styling classes', () => {
    render(<Header />);

    const header = screen.getByTestId('container').parentElement;
    expect(header).toHaveClass('bg-secondary', 'py-5');
  });

  // ✅ Test 5: Has correct layout structure
  it('has correct layout structure with flex layout', () => {
    render(<Header />);

    const container = screen.getByTestId('container');
    expect(container).toHaveClass('flex', 'justify-between', 'items-center');
  });

  // ✅ Test 6: Icon has correct styling
  it('icon has primary color and correct size', () => {
    render(<Header />);

    const icon = screen.getByTestId('briefcase-icon');
    expect(icon).toHaveClass('text-primary', 'size-8');
  });

  // ✅ Test 7: Right section has navigation and language components
  it('has navigation and language switcher in right section', () => {
    render(<Header />);

    // Find the flex container with gap-10
    const rightSection = screen.getByTestId('nav-icons');
    expect(rightSection).toBeInTheDocument();
    expect(rightSection).toContainElement(screen.getByTestId('head-navigation'));
    expect(rightSection).toContainElement(screen.getByTestId('language-switcher'));
  });

  // ✅ Test 8: Logo area has correct structure
  it('logo area has icon and title with correct spacing', () => {
    render(<Header />);

    const logoLink = screen.getByTestId('logo-link');
    expect(logoLink).toHaveClass('flex', 'items-center', 'gap-1', 'text-2xl');
    expect(logoLink).toContainElement(screen.getByTestId('briefcase-icon'));
    expect(logoLink).toContainElement(
      screen.getByRole('heading', { name: 'Portfolio' }),
    );
  });
});
