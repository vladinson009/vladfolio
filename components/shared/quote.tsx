import { cn } from '@/lib/utils';

interface QuoteProps {
  text: string;
  author?: string;
  className?: string;
}

export default function Quote({ text, author, className }: QuoteProps) {
  return (
    <blockquote
      className={cn(
        'border-l-2 border-primary pl-6 py-4 italic text-lg text-muted-foreground',
        className,
      )}
    >
      <p className="mb-2">&quot;{text}&quot;</p>
      {author && (
        <footer className="text-sm font-medium text-foreground">— {author}</footer>
      )}
    </blockquote>
  );
}
