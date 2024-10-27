import { cn } from '@/utils/cn';
import React from 'react';

interface PressProps {
  images: string[];
  title?: string;
}

const Press: React.FC<PressProps> = ({ images, title = 'FEATURED IN' }) => {
  return (
    <section id="press" className="relative w-full overflow-hidden">
      <div className="py-0">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            {title}
          </h3>

          <div className="relative mt-6">
            <div className="flex overflow-hidden relative w-full">
              {/* Primary marquee container */}
              <div className="animate-marquee-infinite flex min-w-full items-center justify-around gap-8 pr-8">
                {images.map((src, idx) => (
                  <div key={`first-${idx}`} className="flex-shrink-0">
                    <img
                      src={src}
                      className={cn(
                        'h-8 w-auto object-contain',
                        idx === 0 && 'h-6',
                        idx === 2 && 'mb-2',
                      )}
                      alt={`Logo ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate marquee container */}
              <div className="animate-marquee-infinite flex min-w-full items-center justify-around gap-8 pr-8 absolute left-full">
                {images.map((src, idx) => (
                  <div key={`second-${idx}`} className="flex-shrink-0">
                    <img
                      src={src}
                      className={cn(
                        'h-8 w-auto object-contain',
                        idx === 0 && 'h-6',
                        idx === 2 && 'mb-2',
                      )}
                      alt={`Logo ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
