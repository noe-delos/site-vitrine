import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  Carousel,
  CarouselArrowFloatButtons,
  CarouselDotButtons,
  useCarousel,
} from '@/components/carousel';
import Image from 'next/image';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
  }[];
};

export function CarouselParallax({ data }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

  const carousel = useCarousel({
    dragFree: true,
    loop: true,
    parallax: true,
    slidesToShow: '100%',
    slideSpacing: '10px',
  });

  return (
    <div
      style={{
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Carousel
        carousel={carousel}
        slotProps={{
          slide: {
            borderRadius: 2,
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
          },
        }}
      >
        {data.map((item, index) => (
          <CarouselItem key={item.id} index={index} item={item} />
        ))}
      </Carousel>
      <div
        className="arrow-buttons"
        style={{
          opacity: 0,
          visibility: 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
        }}
      >
        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />
      </div>
    </div>
  );
}
// ----------------------------------------------------------------------

type CarouselItemProps = {
  index: number;
  item: Props['data'][number];
};

function CarouselItem({ item, index }: CarouselItemProps) {
  const router = useRouter();
  return (
    <div className="relative p-0 max-h-[17rem]">
      <div className="relative w-full h-full aspect-[4/3] sm:aspect-[16/10]">
        <Image
          alt={item.title}
          src={item.coverUrl}
          fill
          priority={index < 2} // Prioritize loading first two images
          className={`object-cover transition-opacity duration-300`}
        />
      </div>
    </div>
  );
}
