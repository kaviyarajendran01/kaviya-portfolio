'use client';

import { BriefcaseBusiness, Code2, CalendarDays } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal-on-scroll';

const experiences = [
{
icon: Code2,
type: 'Internship',
title: 'UI/UX Design Intern',
company: 'CodSoft',
period: 'Jun – Jul 2024',
description:
'Completed a 4-week UI/UX internship focused on creating practical, user-focused digital interfaces.',
points: [
'Designed 5+ UI screens using Figma.',
'Created wireframes and interactive prototypes for different interface requirements.',
'Applied user-centred design principles and improved designs through iterative feedback.',
],
},
{
icon: BriefcaseBusiness,
type: 'Training',
title: 'Full-Stack Development Training',
company: 'NoviTech R&D',
period: 'Full-Stack Training',
description:
'Completed hands-on training covering frontend and backend technologies used to develop modern web applications.',
points: [
'Worked with HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.',
'Built responsive web interfaces and practiced full-stack application development.',
'Worked with frontend-backend integration and database concepts.',
],
},
];

export default function Experience() {
return ( <section
   id="experience"
   className="relative scroll-mt-16 py-20 sm:py-28"
 > <div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHeading
      eyebrow="Experience & Training"
      title="Internships, training, and hands-on development."
    />

    <div className="relative mt-12">

      <div className="relative z-10 max-w-3xl">

        <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-border sm:block" />

        <div className="grid gap-8">

          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <Reveal
                key={experience.title}
                as="article"
                delay={index * 100}
              >
                <div className="relative grid gap-5 sm:grid-cols-[48px_1fr]">

                  <div className="relative z-10 hidden sm:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>

                  <div className="py-1">

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          {experience.type}
                        </span>

                        <h3 className="mt-2 text-xl font-bold text-foreground">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                          {experience.company}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        {experience.period}
                      </div>

                    </div>

                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {experience.description}
                    </p>

                    <ul className="mt-4 space-y-2.5">

                      {experience.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}

                    </ul>

                  </div>
                </div>
              </Reveal>
            );
          })}

        </div>
      </div>

<div className="pointer-events-none absolute right-[-8%] top-1/2 hidden w-[55%] -translate-y-1/2 lg:block">
  <div className="relative">
    <img
      src="/images/Ex-removebg-preview.png"
      alt=""
      className="w-full scale-125 object-contain"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />

    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
  </div>
</div>

    </div>
  </div>
</section>
);
}
