import { cn } from '@/lib/utils';

interface QuoteProps {
  text: string;
  author?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Quote({ text, author, className, style }: QuoteProps) {
  return (
    <blockquote
      style={style}
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
