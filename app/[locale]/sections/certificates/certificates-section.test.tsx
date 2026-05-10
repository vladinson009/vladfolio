import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CertificatesSection } from './certificates-section';
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
// ============================================
// TESTS
// ============================================

describe('Projects Section', () => {
  it('renders the section', () => {
    render(<CertificatesSection />);
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('cards are rendered correclty', () => {
    render(<CertificatesSection />);
    const credentialsButtons = screen.getAllByRole('button', {
      name: /credentials/i,
    });
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
    expect(credentialsButtons.length).toBeGreaterThan(0);
  });
});
