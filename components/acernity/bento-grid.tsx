import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

import { Button } from '@/components/shadcn/button';
import { cn } from '@/utils/cn';

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4',
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  textClassName,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  textClassName?: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden border-white rounded-xl cursor-default',
      'col-span-1 sm:col-span-2 lg:col-span-3',
      'bg-white',
      'transition-all duration-300 ease-in-out',
      'shadow-[rgba(0,0,0,0.1)_0px_10px_50px]',
      'hover:shadow-[rgba(0,0,0,0.2)_0px_20px_60px]',
      'dark:shadow-[rgba(255,255,255,0.04)_0px_10px_50px]',
      'dark:hover:shadow-[rgba(255,255,255,0.06)_0px_20px_60px]',
      className
    )}
    style={{
      border: '0',
      outline: '0',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
    }}
  >
    <div className="border-white">{background}</div>
    <div className="pointer-events-none z-10 border-white flex transform-gpu flex-col gap-1 p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-10">
      {Icon && (
        <Icon
          className={cn(
            'h-10 w-10 sm:h-12 sm:w-12 pb-2 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75',
            textClassName
          )}
        />
      )}
      <h3
        className={cn('text-lg sm:text-xl border-white font-semibold text-gray-900', textClassName)}
      >
        {name}
      </h3>
      <p className={cn('max-w-lg text-sm sm:text-base text-gray-500 border-white', textClassName)}>
        {description}
      </p>
    </div>

    <div
      className={cn(
        'pointer-events-none border-white absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-3 sm:p-4 opacity-0 transition-all duration-300 '
      )}
    >
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto hover:bg-transparent focus:ring-0 border-white text-sm sm:text-base"
      >
        <a
          href={href}
          className="no-underline hover:no-underline text-black"
          style={{ border: '0', outline: '0' }}
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 " />
  </div>
);

export { BentoCard, BentoGrid };
