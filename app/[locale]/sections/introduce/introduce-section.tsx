/* eslint-disable @next/next/no-img-element */
import Container from '@/components/shared/container';
import Quote from '@/components/shared/quote';
import { useTranslations } from 'next-intl';
import classes from './introduce-section.module.css';
import React from 'react';
import { techStack } from '@/config/tech-stack';

export function IntroduceSection() {
  return (
    <Container
      as="section"
      className="mt-8 flex flex-col items-center gap-10 md:flex-row"
    >
      {/* Left Side */}
      <AuthorDescription />

      {/* Right Side */}
      <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md shrink">
        <AuthorProfilePhoto />
        <AuthorBadges />
      </div>
    </Container>
  );
}
function AuthorDescription() {
  const t = useTranslations('HomePage');

  const description = t('description');
  const quote = t('quote');
  const quoteAuthor = t('quoteAuthor');
  const heading = t.rich('heading', {
    span: (chunks) => <span className="text-primary font-semibold">{chunks}</span>,
    author: (chunks) => <span className="font-bold">{chunks}</span>,
  });

  return (
    <div className="flex-2 flex flex-col gap-5">
      <h1
        className={`${classes['left-side-animation']} text-3xl text-center sm:text-4xl lg:text-5xl leading-tight`}
        style={
          {
            '--animation-delay': `${0}s`,
          } as React.CSSProperties
        }
      >
        {heading}
      </h1>
      <p
        data-testid="description"
        className={`${classes['left-side-animation']} text-xl text-center sm:text-2xl lg:text-3xl text-muted-foreground leading-tight`}
        style={
          {
            '--animation-delay': `${0.05}s`,
          } as React.CSSProperties
        }
      >
        {description}
      </p>
      <Quote
        className={classes['left-side-animation']}
        style={
          {
            '--animation-delay': `${0.1}s`,
          } as React.CSSProperties
        }
        text={quote}
        author={quoteAuthor}
      />
    </div>
  );
}
function AuthorProfilePhoto() {
  return (
    <img
      className={`${classes['right-side-animation']} w-full rounded-4xl object-cover`}
      style={{ '--animation-delay': `${0}s` } as React.CSSProperties}
      src="author.webp"
      alt="Photo of Vladimir"
    />
  );
}

function AuthorBadges() {
  return (
    <div
      className={`${classes['right-side-animation']} flex flex-wrap gap-2 pt-2 items-center`}
      style={{ '--animation-delay': `${0}s` } as React.CSSProperties}
    >
      {techStack.map((element) => (
        <img
          src={element.url}
          alt={element.name}
          className="w-10"
          key={element.name}
        />
      ))}
    </div>
  );
}
