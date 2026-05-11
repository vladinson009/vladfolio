import { RefObject } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type CarouselButtonProps = {
  containerRef: RefObject<HTMLDivElement | null>;
};

export function CarouselButtons({ containerRef }: CarouselButtonProps) {
  function scrollLeft() {
    if (!containerRef.current) return;

    const card = containerRef.current.querySelector('[data-card]');

    if (!card) return;

    const cardWidth = card.clientWidth;
    containerRef.current?.scrollBy({
      left: -cardWidth,
      behavior: 'smooth',
    });
  }

  function scrollRight() {
    if (!containerRef.current) return;

    const card = containerRef.current.querySelector('[data-card]');

    if (!card) return;

    const cardWidth = card.clientWidth;
    containerRef.current?.scrollBy({
      left: cardWidth,
      behavior: 'smooth',
    });
  }

  return (
    <div className="flex items-center justify-around md:hidden">
      <Button
        className="rounded-full size-10"
        variant="secondary"
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        <ArrowLeft />
      </Button>
      <Button
        className="rounded-full size-10"
        variant="secondary"
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        <ArrowRight />
      </Button>
    </div>
  );
}
