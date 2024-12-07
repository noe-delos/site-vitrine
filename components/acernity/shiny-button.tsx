import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group relative hover:cursor-pointer mx-auto flex max-w-fit flex-row items-center justify-center rounded-md px-4 py-1.5 text-sm font-medium bg-black shadow-[inset_0_-8px_10px_#ffffff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#ffffff3f] ',
        className
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#333333] via-[#666666] to-[#333333] bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
