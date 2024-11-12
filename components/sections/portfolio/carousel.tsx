import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  Carousel,
  CarouselArrowFloatButtons,
  useCarousel,
} from '@/components/carousel';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
  }[];
  isHoveringParallax: boolean;
};

export function CarouselParallax({ data, isHoveringParallax }: Props) {
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
      className="relative"
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
      {isHoveringParallax && (
        <>
          <div className="arrow-buttons">
            <CarouselArrowFloatButtons
              {...carousel.arrows}
              options={carousel.options}
            />
          </div>
        </>
      )}{' '}
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
    <div className="h-full">
      <img
        alt={item.title}
        src={item.coverUrl}
        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}
