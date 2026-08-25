'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { chessAchievements, chessIntro } from '@/lib/data';
import { Reveal } from '@/components/reveal-on-scroll';

const traits = [
'Strategic thinking',
'Consistency',
'Competitive spirit',
'Patience',
'Focus',
'Problem-solving',
];

export default function Chess() {
const sectionRef = useRef<HTMLElement>(null);
const [inView, setInView] = useState(false);

useEffect(() => {
const el = sectionRef.current;

if (!el) return;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });
  },
  { threshold: 0.15 }
);

observer.observe(el);

return () => observer.disconnect();

}, []);

return ( <section
   ref={sectionRef}
   id="chess"
   className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32"
 >
<div
className={cn(
'pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700 ease-out',
inView ? 'opacity-100' : 'opacity-0'
)}
aria-hidden
>
<div
className="absolute inset-0 opacity-[0.018]"
style={{
backgroundImage:
'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
backgroundSize: '64px 64px',
}}
/>
    <div className="absolute left-0 top-[22%] h-px w-2/5 bg-gradient-to-r from-border/50 to-transparent" />

    <div className="absolute left-[40%] top-[22%] h-16 w-px bg-gradient-to-b from-border/50 to-transparent" />

    <div className="absolute bottom-[20%] right-0 h-px w-1/3 bg-gradient-to-l from-border/50 to-transparent" />

    <div className="absolute bottom-[20%] right-1/3 h-14 w-px bg-gradient-to-t from-border/50 to-transparent" />

    <div className="absolute left-0 top-0 h-32 w-32 bg-accent/[0.025] blur-3xl" />

    <div className="absolute bottom-0 right-0 h-40 w-40 bg-accent/[0.02] blur-3xl" />
  </div>

  <div className="mx-auto max-w-6xl px-5 sm:px-6">

    <Reveal as="div">
      <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="h-px w-8 bg-accent/60" aria-hidden />
        Beyond Code
      </span>
    </Reveal>

    <Reveal as="div" delay={80}>
      <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
        Strategy isn&apos;t limited to technology.
      </h2>
    </Reveal>

    <Reveal as="div" delay={160}>
      <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        {chessIntro}
      </p>
    </Reveal>

    <Reveal as="div" delay={220}>
      <ul className="mt-6 flex flex-wrap gap-2">
        {traits.map((trait) => (
          <li
            key={trait}
            className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground/70"
          >
            {trait}
          </li>
        ))}
      </ul>
    </Reveal>

    <div className="mt-14 lg:mt-16">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {chessAchievements.map((item, index) => (
          <Reveal
            as="li"
            key={item.period}
            delay={index * 120}
          >
            <div className="group relative h-full">

              <div className="mb-4 flex items-center gap-3">
                <span
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold transition-colors',
                    index === 0
                      ? 'border-accent/40 bg-accent/10 text-accent'
                      : 'border-border bg-card text-muted-foreground'
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {index < chessAchievements.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent lg:block"
                    aria-hidden
                  />
                )}
              </div>

              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card/60">

                <div
                  className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-bl from-accent/[0.06] to-transparent"
                  aria-hidden
                />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
                  {item.period}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div
                  className="mt-4 h-px w-full bg-gradient-to-r from-accent/30 via-border to-transparent"
                  aria-hidden
                />
              </div>

            </div>
          </Reveal>
        ))}
      </ol>
    </div>

  </div>
</section>
);
}
