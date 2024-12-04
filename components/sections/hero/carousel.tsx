'use client';
import { Card, Carousel } from '@/components/acernity/apple-cards-carousel';

export function AppleCardsCarouselDemo({ dictionary }: { dictionary: any }) {
  const data = [
    {
      category: dictionary.aiCarousel.cards.documentIntelligence.category,
      title: dictionary.aiCarousel.cards.documentIntelligence.title,
      src: '/fr/carousel/img0.png',
      description: dictionary.aiCarousel.cards.documentIntelligence.description,
    },
    {
      category: dictionary.aiCarousel.cards.chatbots.category,
      title: dictionary.aiCarousel.cards.chatbots.title,
      src: '/en/carousel/img5.png',
      description: dictionary.aiCarousel.cards.chatbots.description,
      className: 'top-[22%]',
    },
    {
      category: dictionary.aiCarousel.cards.computerVision.category,
      title: dictionary.aiCarousel.cards.computerVision.title,
      src: '/en/carousel/img2.png',
      description: dictionary.aiCarousel.cards.computerVision.description,
    },
    {
      category: dictionary.aiCarousel.cards.audioTranscription.category,
      title: dictionary.aiCarousel.cards.audioTranscription.title,
      src: '/fr/carousel/img1.png',
      description: dictionary.aiCarousel.cards.audioTranscription.description,
    },
    {
      category: dictionary.aiCarousel.cards.webIntelligence.category,
      title: dictionary.aiCarousel.cards.webIntelligence.title,
      src: '/fr/carousel/img3.png',
      description: dictionary.aiCarousel.cards.webIntelligence.description,
    },
    {
      category: dictionary.aiCarousel.cards.translation.category,
      title: dictionary.aiCarousel.cards.translation.title,
      src: '/fr/carousel/img4.png',
      description: dictionary.aiCarousel.cards.translation.description,
    },
  ];

  const cards = data.map((card) => <Card key={card.src} card={card} />);

  return (
    <div className="w-full h-full py-20 bg-[#ffffff31]">
      <div className="mb-12 max-w-4xl ml-[18%]">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          {dictionary.aiCarousel.title}
        </h1>
        <p className="text-lg">
          {dictionary.aiCarousel.description}{' '}
          <span className="text-gray-400">{dictionary.aiCarousel.subdescription}</span>
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
