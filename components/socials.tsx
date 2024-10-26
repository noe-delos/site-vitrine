interface PressProps {
  images: string[];
  title?: string;
}

export default function Press({ images, title = 'FEATURED IN' }: PressProps) {
  return (
    <section id="press">
      <div className="py-0">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            {title}
          </h3>
          <div className="relative mt-6 overflow-hidden">
            {/* Main scrolling container */}
            <div className="flex animate-marquee-infinite">
              {/* First set of logos */}
              <div className="flex min-w-full shrink-0 items-center justify-around gap-10">
                {images.map((src, idx) => (
                  <img
                    key={`first-${idx}`}
                    src={src}
                    className="h-10 w-fit pr-5"
                    alt={`logo-${idx}`}
                  />
                ))}
              </div>
              {/* Second set of logos for seamless loop */}
              <div className="flex min-w-full shrink-0 items-center justify-around gap-8 ml-10">
                {images.map((src, idx) => (
                  <img
                    key={`second-${idx}`}
                    src={src}
                    className="h-10 w-fit pr-5"
                    alt={`logo-${idx}`}
                  />
                ))}
              </div>
            </div>
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-gray-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
