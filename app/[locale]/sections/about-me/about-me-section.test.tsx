import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { AboutMeSection } from './about-me-section';
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
  useTranslations: vi.fn(() => {
    const translations: Record<string, string | string[]> = {
      heading: 'Hello, my name is Vladimir!',
      paragraphs: [
        'I am a passionate full-stack web developer',
        'Over the years, I have worked on a wide range of personal projects',
        'I enjoy creating scalable and maintainable applications',
        'My development journey has included working with both frontend and backend',
      ],
    };
    const t = (key: string) => translations[key] || key;

    t.raw = (key: string) => translations[key];
    return t;
  }),
}));
// ============================================
// TESTS
// ============================================

describe('About me section', () => {
  it('renders the section', () => {
    render(<AboutMeSection />);
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('paragraphs are rendered correctly', () => {
    render(<AboutMeSection />);

    const expectedParagraphs = [
      'I am a passionate full-stack web developer',
      'Over the years, I have worked on a wide range of personal projects',
      'I enjoy creating scalable and maintainable applications',
      'My development journey has included working with both frontend and backend',
    ];

    const paragraphs = screen.getAllByTestId('about-paragraph');

    expect(paragraphs).toHaveLength(expectedParagraphs.length);

    paragraphs.forEach((paragraph, index) => {
      expect(paragraph).toHaveTextContent(expectedParagraphs[index]);
    });
  });
  it('render all paragraphs including heading paragraph', () => {
    const { container } = render(<AboutMeSection />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(5);
  });
});
