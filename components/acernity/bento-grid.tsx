import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

import { Button } from '@/components/shadcn/button';
import { cn } from '@/utils/cn';

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-4 gap-4',
        className,
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
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden border-white rounded-xl cursor-pointer',
      'bg-white',
      'transition-all duration-300 ease-in-out',
      'shadow-[rgba(0,0,0,0.1)_0px_10px_50px]',
      'hover:shadow-[rgba(0,0,0,0.2)_0px_20px_60px]',
      'dark:shadow-[rgba(255,255,255,0.04)_0px_10px_50px]',
      'dark:hover:shadow-[rgba(255,255,255,0.06)_0px_20px_60px]',
      className,
    )}
    style={{
      border: '0',
      outline: '0',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
    }}
  >
    <div className="border-white">{background}</div>
    <div className="pointer-events-none z-10 border-white flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 pb-2 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl border-white font-semibold text-gray-900 ">
        {name}
      </h3>
      <p className="max-w-lg text-gray-500 border-white">{description}</p>
    </div>

    <div
      className={cn(
        'pointer-events-none border-white absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
      )}
    >
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto hover:bg-transparent focus:ring-0 border-white"
      >
        <a
          href={href}
          className="no-underline hover:no-underline"
          style={{ border: '0', outline: '0' }}
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
