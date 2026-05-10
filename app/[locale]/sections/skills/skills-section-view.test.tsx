import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillsSectionView } from './skills-section-view';
import { Skill } from './skills-section';
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
  const mockData: Skill[] = [{ skill: 'Test', info: 'asd' }];
  const translateCategories = {
    frontend: 'string',
    backend: 'string',
    databases: 'string',
    frameworks: 'string',
    libraries: 'string',
    devops: 'string',
  };

  it('renders the section', () => {
    render(
      <SkillsSectionView
        frontend={mockData}
        backend={mockData}
        databases={mockData}
        frameworks={mockData}
        libraries={mockData}
        devOps={mockData}
        translateCategories={translateCategories}
      />,
    );
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });
  it('check for valid render elements', () => {
    render(
      <SkillsSectionView
        frontend={mockData}
        backend={mockData}
        databases={mockData}
        frameworks={mockData}
        libraries={mockData}
        devOps={mockData}
        translateCategories={translateCategories}
      />,
    );
    expect(screen.getAllByText('string')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Test')[0]).toBeInTheDocument();
  });
});
