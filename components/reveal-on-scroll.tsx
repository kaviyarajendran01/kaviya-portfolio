'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article';
};

export function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      className={cn('reveal', className)}
    >
      {children}
    </Tag>
  );
}
