/* eslint-disable @next/next/no-img-element */
import Container from '@/components/shared/container';
import { Badge } from '@/components/ui/badge';
import  Quote  from '@/components/shared/quote';
import { useTranslations } from 'next-intl';

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
      <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl leading-tight">
        {heading}
      </h1>
      <p
        data-testid="description"
        className="text-xl text-center sm:text-2xl lg:text-3xl text-muted-foreground leading-tight"
      >
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
  const languages = ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'];
  const frameworks = ['React', 'NextJs', 'React-Router', 'Angular'];
  const backend = ['Express.js', 'Node.js', 'NextAuth', 'Handlebars.js'];
  const databases = ['MongoDB', 'Mongoose', 'PostgreSQL', 'DrizzleORM'];
  const libraries = ['ShadCN', 'Tailwind', 'MUI', 'React-hook-form', 'Zod'];
  const devops = ['DevOps', 'Docker', 'Vercel', 'Azure'];

  return (
    <div className="flex flex-col gap-2 pt-2 items-center">
      <BadgesGroup group={languages} />
      <BadgesGroup group={frameworks} />
      <BadgesGroup group={backend} />
      <BadgesGroup group={databases} />
      <BadgesGroup group={libraries} />
      <BadgesGroup group={devops} />
    </div>
  );
}

function BadgesGroup({ group }: { group: string[] }) {
  const renderBadge = (element: string) => <Badge key={element}>{element}</Badge>;

  return <p className="flex gap-1">{group.map(renderBadge)}</p>;
}
