'use client';

import { useEffect, useRef, useState } from 'react';

const Technologies = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const content = [
    {
      title: 'Enhanced Image Quality',
      description:
        'Our advanced technology transforms your photos with unparalleled clarity and detail. Using state-of-the-art AI algorithms, we ensure every image reaches its maximum potential.',
      image:
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    },
    {
      title: 'Natural Scene Processing',
      description:
        'Specialized in processing natural landscapes and environments, our system preserves the authentic beauty while enhancing the visual appeal of outdoor photography.',
      image:
        'https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80',
    },
    {
      title: 'AI-Powered Innovation',
      description:
        'Leading the industry with cutting-edge AI technology, we provide revolutionary image processing capabilities that set new standards in digital photography.',
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    },
    {
      title: 'Next-Gen AI Solutions',
      description:
        'Experience the future of image processing with our next-generation AI solutions. Our advanced algorithms deliver unprecedented quality and innovation in digital imaging.',
      image: 'https://pixlr.com/images/index/ai-image-generator-one.webp',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const element = ref;
        const { top, bottom } = element.getBoundingClientRect();
        const elementPosition = window.scrollY + top;

        if (
          scrollPosition >= elementPosition &&
          scrollPosition <= window.scrollY + bottom
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="bg-white w-full relative min-h-screen py-[20rem]"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Progress Indicator */}
          <div className="col-span-1 sticky top-24 h-screen flex items-center">
            <div className="space-y-8">
              {content.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSection === index
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    const element = sectionRefs.current[index];
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="col-span-5 py-24">
            {content.map((item, index) => (
              <div
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  if (el) sectionRefs.current[index] = el;
                }}
                className="min-h-screen flex items-center"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Image */}
          <div className="col-span-6 sticky top-52 h-[calc(100vh-24rem)]">
            <div className="w-full h-full rounded-xl overflow-hidden mt-24">
              {content.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ${
                    activeSection === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
