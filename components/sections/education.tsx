'use client';

import {
GraduationCap,
CalendarDays,
MapPin,
} from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal-on-scroll';

const education = [
{
degree: 'B.E. Computer Science and Engineering',
institution: 'Saranathan College of Engineering',
location: 'Tiruchirappalli, Tamil Nadu',
period: '2022 – 2026',
result: 'CGPA 7.94',
},
{
degree: 'HSC — 12th',
institution: 'Government Higher Secondary School',
location: 'Salem, Tamil Nadu',
period: '2021 – 2022',
result: '73.5%',
},
{
degree: 'SSLC — 10th',
institution: 'Government Higher Secondary School',
location: 'Salem, Tamil Nadu',
period: '2019 – 2020',
result: '77.8%',
},
];

export default function Education() {
return ( <section
   id="education"
   className="relative scroll-mt-16 py-20 sm:py-28"
 > <div className="mx-auto max-w-6xl px-5 sm:px-6">

    <SectionHeading
      eyebrow="Education"
      title="Academic background."
    />

    <div className="relative mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">

      {/* Education Content */}
      <div className="relative z-10">

        <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-border sm:block" />

        <div className="grid gap-7">

          {education.map((item, index) => (
            <Reveal
              key={item.degree}
              as="article"
              delay={index * 90}
            >
              <div className="relative grid gap-5 sm:grid-cols-[48px_1fr]">

                {/* Icon */}
                <div className="relative z-10 hidden sm:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-accent">
                    <GraduationCap
                      className="h-5 w-5"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="py-1">

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-accent">
                        {item.institution}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {item.period}
                    </div>

                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">

                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>

                    <span className="font-semibold text-foreground">
                      {item.result}
                    </span>

                  </div>

                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </div>

      {/* Education Image */}
      <Reveal
        as="div"
        delay={180}
        className="relative hidden lg:block"
      >
        <img
          src="/images/Education.png"
          alt="Education"
          className="w-full scale-110 object-contain"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      </Reveal>

    </div>
  </div>
</section>

);
}
