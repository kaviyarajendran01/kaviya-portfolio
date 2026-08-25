'use client';

import { Award, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/reveal-on-scroll';

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-16 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        <Reveal as="div">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Certifications
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Certifications and learning.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">

          <Reveal as="div">
            <article className="group rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">

              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-accent/20 bg-accent/10 p-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    NPTEL
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    Programming in Java — OOP Concepts
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    NPTEL • 2024
                  </p>

                  <p className="mt-4 font-semibold text-foreground">
                    Silver — 80%
                  </p>
                </div>
              </div>

            </article>
          </Reveal>


          <Reveal as="div" delay={100}>
            <article className="group rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">

              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-accent/20 bg-accent/10 p-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    Certification
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    UI/UX Design Development
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Design fundamentals • Wireframing • Prototyping • Figma
                  </p>
                </div>
              </div>

            </article>
          </Reveal>

        </div>
      </div>
    </section>
  );
}