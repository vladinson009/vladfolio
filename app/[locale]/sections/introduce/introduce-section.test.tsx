import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';

import { IntroduceSection } from './introduce-section';

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

vi.mock('@/components/shared/quote', () => ({
  default: ({ text, author }: { text: string; author: string }) => (
    <blockquote data-testid="quote">
      <p>{text}</p>
      <footer>{author}</footer>
    </blockquote>
  ),
}));

vi.mock('next-intl', () => {
  const translations: Record<string, string> = {
    heading:
      "Hi, I'm <author>Vladimir</author> — a <span>Full-Stack Developer</span>",
    description: 'I build scalable and maintainable web applications',
    quote: 'The best code is...',
    quoteAuthor: 'Author',
  };

  // Create a mock function that can be called as t() and has t.rich() method
  const mockT = ((key: string) => {
    return translations[key] || key;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;

  // Add the rich method
  mockT.rich = (
    key: string,
    components?: Record<string, (chunks: React.ReactNode) => React.ReactNode>,
  ) => {
    const text = translations[key] || key;

    if (!components) {
      return text;
    }

    const parts: React.ReactNode[] = [];
    const regex = /<([a-zA-Z0-9_-]+)>(.+?)<\/\1>/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let partIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, tag, content] = match;
      const index = match.index;

      if (lastIndex < index) {
        parts.push(
          <React.Fragment key={`text-${partIndex++}`}>
            {text.slice(lastIndex, index)}
          </React.Fragment>,
        );
      }

      const Component = components[tag];
      parts.push(
        <React.Fragment key={`component-${partIndex++}`}>
          {Component ? Component(content) : fullMatch}
        </React.Fragment>,
      );
      lastIndex = index + fullMatch.length;
    }

    if (lastIndex < text.length) {
      parts.push(
        <React.Fragment key={`text-${partIndex++}`}>
          {text.slice(lastIndex)}
        </React.Fragment>,
      );
    }

    return parts.length === 1 ? parts[0] : React.Children.toArray(parts);
  };

  return {
    useTranslations: () => mockT,
  };
});

// ============================================
// TESTS
// ============================================

describe('IntroduceSection', () => {
  it('renders the section', () => {
    render(<IntroduceSection />);
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('renders rich translated text', () => {
    render(<IntroduceSection />);
    expect(screen.getByText(/Vladimir/i)).toBeInTheDocument();
    expect(screen.getByText(/Full-Stack Developer/i)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<IntroduceSection />);
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(description.textContent).to.include(
      'I build scalable and maintainable web applications',
    );
  });

  it('renders the ProfilePhoto', () => {
    render(<IntroduceSection />);
    expect(screen.getByAltText('Photo of Vladimir')).toBeInTheDocument();
  });

  it('renders quote', () => {
    const { container } = render(<IntroduceSection />);
    const quote = container.querySelector('blockquote');
    expect(screen.getByTestId('quote')).toBeInTheDocument();
    expect(quote?.textContent).to.include('The best code is...');
    expect(quote?.textContent).to.include('Author');
  });
});
