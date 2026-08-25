'use client';

import {
Award,
Code2,
Palette,
Presentation,
CalendarDays,
} from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal-on-scroll';

const items = [
{
icon: Code2,
type: 'Certification',
title: 'Programming in Java — OOP Concepts',
organization: 'NPTEL',
period: '2024',
result: 'Silver — 80%',
description:
'Completed a course focused on Programming in Java and Object-Oriented Programming concepts.',
},
{
icon: Palette,
type: 'Certification',
title: 'UI/UX Design Development',
organization: 'Course Certification',
period: '2025',
result: 'Design & Development',
description:
'Completed training covering design fundamentals, wireframing, prototyping, and Figma.',
},
{
icon: Presentation,
type: 'Achievement',
title: 'Paper Presentation',
organization: 'CARE Engineering College',
period: 'November 2024',
result: 'Technical Presentation',
description:
'Presented a paper focused on software innovations as part of a technical presentation.',
},
{
icon: Award,
type: 'Achievement',
title: 'Technical Event Participation',
organization: 'PSG College of Technology',
period: 'March 2024',
result: 'National-Level Event',
description:
'Participated in a national-level technical event and engaged in technology-focused activities.',
},
];

export default function Achievements() {
return ( <section
   id="achievements"
   className="relative scroll-mt-16 overflow-hidden py-20 sm:py-28"
 > <div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHeading
      eyebrow="Certifications & Achievements"
      title="Learning, recognition, and technical milestones."
    />

    <div className="relative mt-12 grid gap-6 sm:grid-cols-2">

      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <Reveal
            key={item.title}
            as="article"
            delay={index * 90}
          >
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">

              {/* Subtle decorative glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/5 blur-3xl transition-all duration-300 group-hover:bg-accent/10" />

              <div className="relative">

                {/* Top row */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon
                      className="h-5 w-5"
                      aria-hidden
                    />
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {item.period}
                  </span>

                </div>

                {/* Type */}
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {item.type}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-lg font-bold leading-snug text-foreground">
                  {item.title}
                </h3>

                {/* Organization */}
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

                {/* Result */}
                <div className="mt-5 inline-flex rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground">
                  {item.result}
                </div>

              </div>
            </div>
          </Reveal>
        );
      })}

    </div>
  </div>
</section>

);
}
