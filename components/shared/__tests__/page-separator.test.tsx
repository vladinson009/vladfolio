import { expect, describe, vi, it } from 'vitest';
import { screen, render } from '@testing-library/react';

import PageSeparator from '@/components/shared/page-separator';

function mockSvgComponent(testId: string) {
  const Component = ({ className }: { className?: string }) => (
    <svg data-testid={testId} className={className} />
  );
  return Component;
}
vi.mock('lucide-react', () => ({
  ArrowRightIcon: mockSvgComponent('arrow-right-icon'),
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
    <a href={href} className={className} data-testid="link">
      {children}
    </a>
  ),
}));
vi.mock('next-intl', () => ({
  useTranslations: vi.fn(() => (key: string) => {
    const translations: Record<string, string> = {
      'view-all': 'View All',
      projects: 'Projects',
    };
    return translations[key] || key;
  }),
}));

vi.mock('@/components/ui/button', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  Button: ({ children, className, variant, asChild, ...props }: any) => (
    <button
      className={className}
      data-testid="button"
      data-variant={variant}
      {...props}
    >
      {children}
    </button>
  ),
}));

describe('PageSeparator', () => {
  it('renders correct title', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders hash symbol with primary color class', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    const heading = screen.getByText('Projects');
    const hashSymbol = heading.parentElement?.querySelector('.text-primary');
    expect(hashSymbol).toBeInTheDocument();
    expect(hashSymbol?.textContent).toBe('#');
  });

  it('renders link with correct href', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    const link = screen.getByTestId('link');
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('renders "View All" button text', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    expect(screen.getByText('View All')).toBeInTheDocument();
  });

  it('renders arrow right icon', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument();
  });

  it('wraps content in container', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('container has correct layout classes', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('flex', 'justify-between');
  });

  it('button has ghost variant', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    const button = screen.getByTestId('button');
    expect(button).toHaveAttribute('data-variant', 'ghost');
  });

  it('left section displays title with hash and border', () => {
    const { container } = render(
      <PageSeparator title="Experience" href="/experience" />,
    );
    expect(screen.getByText('Experience')).toBeInTheDocument();

    const border = container.querySelector('.border-primary.border-t');
    expect(border).toBeInTheDocument();
  });

  it.each([
    ['Projects', '/projects'],
    ['Experience', '/experience'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ])('renders with title "%s" and href "%s"', (title, href) => {
    render(<PageSeparator title={title} href={href} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId('link')).toHaveAttribute('href', href);
  });

  it('button wraps the link (asChild)', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    const button = screen.getByTestId('button');
    const link = screen.getByTestId('link');
    expect(button).toContainElement(link);
  });

  it('button contains both text and icon', () => {
    render(<PageSeparator title="Projects" href="/projects" />);
    const button = screen.getByTestId('button');
    expect(button).toContainElement(screen.getByText('View All'));
    expect(button).toContainElement(screen.getByTestId('arrow-right-icon'));
  });
});
