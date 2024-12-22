import { forwardRef, useCallback } from 'react';

import { cn } from '@/utils/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoResize?: boolean;
  invisible?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invisible, autoResize, ...props }, ref) => {
    const onInput = useAutoResize(props.onInput);
    return (
      <textarea
        ref={ref}
        {...props}
        onInput={autoResize ? onInput : props.onInput}
        className={cn(
          'flex min-h-[60px] w-full rounded-md bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          {
            'cursor-not-allowed opacity-50': props.disabled,
            'border-none shadow-none focus-visible:ring-0': invisible,
            'border border-input focus-visible:ring-1 focus-visible:ring-ring':
              !invisible,
          },
          className,
        )}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };

function useAutoResize(onInput?: React.FormEventHandler<HTMLTextAreaElement>) {
  const callback: React.FormEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      const target = event.currentTarget;

      target.style.height = '';
      target.style.height = target.scrollHeight + 'px';

      if (onInput) {
        onInput(event);
      }
    },
    [onInput],
  );

  return callback;
}
