'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface GptPopupProps {
  lang: string;
}

const GptPopup = ({ lang }: GptPopupProps) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 0);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    router.push(`/${lang}/ks-gpt`);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 hidden md:block
                ${
                  isVisible
                    ? 'opacity-100 translate-y-0 transition-all duration-300 ease-in-out'
                    : 'opacity-0 translate-y-10 pointer-events-none transition-all duration-150 ease-in-out'
                }`}
    >
      <div
        onClick={handleClick}
        className="relative w-16 h-16 rounded-full bg-black shadow-lg 
                  cursor-pointer transition-all duration-300 ease-in-out
                  hover:shadow-xl hover:scale-105 hover:bg-gray-900
                  flex items-center justify-center"
      >
        <Image
          src="/fr/logo/brand-logo-white.png"
          alt="Circle Button Icon"
          width={32}
          height={32}
          className="transition-transform duration-300 ease-in-out
                    group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default GptPopup;
