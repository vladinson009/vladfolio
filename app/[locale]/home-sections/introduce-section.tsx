/* eslint-disable @next/next/no-img-element */
import Container from '@/components/container';
import { Badge } from '@/components/ui/badge';
import { Quote } from '@/components/ui/quote';
import { useTranslations } from 'next-intl';

export function IntroduceSection() {
  return (
    <section className="mt-8">
      <Container className="flex flex-col items-center gap-10 md:flex-row">
        {/* Left Side */}
        <AuthorDescription />

        {/* Right Side */}
        <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md shrink">
          <AuthorProfilePhoto />
          <AuthorBadges />
        </div>
      </Container>
    </section>
  );
}
function AuthorDescription() {
  const t = useTranslations('HomePage');
  const intro = t.rich('intro', {
    span: (chunks) => <span className="text-primary font-semibold">{chunks}</span>,
    author: (chunks) => <span className="font-bold">{chunks}</span>,
  });
  const description = t('description');
  const quote = t('quote');
  const quoteAuthor = t('quoteAuthor');

  return (
    <div className="flex-2 flex flex-col gap-5">
      <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl leading-tight">
        {intro}
      </h1>
      <p className="text-xl text-center sm:text-2xl lg:text-3xl text-muted-foreground leading-tight">
        {description}
      </p>
      <Quote text={quote} author={quoteAuthor} />
    </div>
  );
}
function AuthorProfilePhoto() {
  return (
    <img
      className="w-full rounded-4xl object-cover"
      src="author.webp"
      alt="Photo of Vladimir"
    />
  );
}
function AuthorBadges() {
  return (
    <div className="flex flex-col gap-2 pt-2 items-center">
      <p className="flex gap-1">
        <Badge>TS</Badge>
        <Badge>JS</Badge>
        <Badge>HTML5</Badge>
        <Badge>CSS3</Badge>
      </p>
      <p className="flex gap-1">
        <Badge>React</Badge>
        <Badge>NextJs</Badge>
        <Badge>React-Router</Badge>
        <Badge>Angular</Badge>
      </p>
      <p className="flex gap-1">
        <Badge>Express.js</Badge>
        <Badge>Node.js</Badge>
        <Badge>NextAuth</Badge>
        <Badge>Handlebars.js</Badge>
      </p>
      <p className="flex gap-1">
        <Badge>MongoDB</Badge>
        <Badge>Mongoose</Badge>
        <Badge>PostgreSQL</Badge>
        <Badge>DrizzleORM</Badge>
      </p>
      <p className="flex gap-1">
        <Badge>ShadCN</Badge>
        <Badge>Tailwind</Badge>
        <Badge>MUI</Badge>
        <Badge>React-hook-form</Badge>
        <Badge>Zod</Badge>
      </p>
      <p className="flex gap-1">
        <Badge>DevOps</Badge>
        <Badge>Docker</Badge>
        <Badge>Vercel</Badge>
        <Badge>Azure</Badge>
      </p>
    </div>
  );
}
