/* eslint-disable @next/next/no-img-element */
import ContainerWrapper from '@/components/shared/cards-container-wrapper/container-wrapper';
import Container from '@/components/shared/container';
import { useTranslations } from 'next-intl';

import classes from './about-me-section.module.css';
export function AboutMeSection() {
  const t = useTranslations('AboutMe');
  const heading = t('heading');
  const paragraphs: string[] = t.raw('paragraphs');
  return (
    <ContainerWrapper>
      <Container as="section" className="flex md:flex-row flex-col gap-4">
        <div className="flex-6 flex flex-col gap-4 text-xl font-semibold">
          <p>{heading}</p>
          {paragraphs.map((paragraph, i) => {
            return (
              <p
                data-testid="about-paragraph"
                className={classes['animate-paragraph']}
                key={i}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
        <div className="flex-4">
          <img
            className="rounded-2xl overflow-hidden"
            src="/author2.webp"
            alt="Photo of author"
          />
        </div>
      </Container>
    </ContainerWrapper>
  );
}
