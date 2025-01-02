"use client";
import { Card, Carousel } from "@/components/acernity/apple-cards-carousel";

export function AppleCardsCarouselDemo({ dictionary }: { dictionary: any }) {
  const data = [
    {
      category: dictionary.aiCarousel.cards.documentIntelligence.category,
      title: dictionary.aiCarousel.cards.documentIntelligence.title,
      src: "/fr/carousel/img0.webp",
      description: dictionary.aiCarousel.cards.documentIntelligence.description,
    },
    {
      category: dictionary.aiCarousel.cards.chatbots.category,
      title: dictionary.aiCarousel.cards.chatbots.title,
      src: "/en/carousel/img5.webp",
      description: dictionary.aiCarousel.cards.chatbots.description,
    },
    {
      category: dictionary.aiCarousel.cards.computerVision.category,
      title: dictionary.aiCarousel.cards.computerVision.title,
      src: "/en/carousel/img2.webp",
      description: dictionary.aiCarousel.cards.computerVision.description,
    },
    {
      category: dictionary.aiCarousel.cards.audioTranscription.category,
      title: dictionary.aiCarousel.cards.audioTranscription.title,
      src: "/fr/carousel/img1.webp",
      description: dictionary.aiCarousel.cards.audioTranscription.description,
    },
    {
      category: dictionary.aiCarousel.cards.webIntelligence.category,
      title: dictionary.aiCarousel.cards.webIntelligence.title,
      src: "/fr/carousel/img3.webp",
      description: dictionary.aiCarousel.cards.webIntelligence.description,
    },
    {
      category: dictionary.aiCarousel.cards.translation.category,
      title: dictionary.aiCarousel.cards.translation.title,
      src: "/fr/carousel/img4.webp",
      description: dictionary.aiCarousel.cards.translation.description,
      className: "lg:h-[80%]",
    },
  ];

  const cards = data.map((card) => <Card key={card.src} card={card} />);

  return (
    <div className="w-full h-full bg-white ">
      <div className="mb-12 max-w-4xl ml-[15%] flex flex-col gap-6">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          {dictionary.aiCarousel.ontitle}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {dictionary.aiCarousel.title}
          <span className="bg-gradient-to-r  from-violet-400 to-blue-500 bg-clip-text text-transparent">
            {dictionary.aiCarousel.title2}
          </span>
          {dictionary.aiCarousel.title3}
          <span className="bg-gradient-to-r  from-violet-400 to-blue-500 bg-clip-text text-transparent">
            {dictionary.aiCarousel.title4}
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          {dictionary.aiCarousel.description}
          <span className="text-gray-600">
            {dictionary.aiCarousel.subdescription}
          </span>
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
