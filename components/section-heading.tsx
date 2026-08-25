'use client';

import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  title: string;
  className?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, className, align = 'left' }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 reveal',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
