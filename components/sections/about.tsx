'use client';

import {
Sparkles,
Layers,
Code2,
Palette,
Laptop,
} from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal-on-scroll';

const facets = [
{
icon: Layers,
title: 'Full-Stack Development',
text: 'Building practical web applications using frontend technologies, Node.js, databases, and modern development practices.',
},
{
icon: Code2,
title: 'Frontend Development',
text: 'Creating responsive, accessible, and user-friendly interfaces using HTML, CSS, JavaScript, and React.js.',
},
{
icon: Palette,
title: 'UI/UX Design',
text: 'Designing wireframes, prototypes, and intuitive user experiences using Figma and user-centred design principles.',
},
{
icon: Laptop,
title: 'Software Development',
text: 'Applying Java, SQL, problem-solving, and computer science fundamentals to build practical software solutions.',
},
];

export default function About() {
return ( <section
   id="about"
   className="relative scroll-mt-16 py-20 sm:py-28"
 > <div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHeading
      eyebrow="About Me"
      title="Building, designing, and developing digital solutions."
    />

    <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">

      {/* About Content */}
      <Reveal
        className="lg:col-span-3"
        as="div"
      >
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          I'm a Computer Science Engineering graduate with hands-on
          experience in full-stack development, frontend development,
          UI/UX design, and software development. Through full-stack
          training, UI/UX internship experience, and academic projects,
          I've worked on web applications, responsive interfaces,
          wireframes, prototypes, and practical software solutions.
          I enjoy solving technical problems, creating user-focused
          experiences, and turning ideas into clean, functional digital
          products. I'm currently strengthening my skills in Java,
          JavaScript, React.js, Node.js, SQL, MongoDB, and modern web
          development.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
          <Sparkles
            className="h-3.5 w-3.5 text-accent"
            aria-hidden
          />

          Open to fresher and junior roles across full-stack development,
          frontend development, UI/UX design, and software development.
        </div>
      </Reveal>

      {/* Expertise */}
      <Reveal
        className="lg:col-span-2"
        as="div"
        delay={120}
      >
        <ul className="grid gap-4">
          {facets.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="group rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card"
              >
                <div className="flex items-start gap-4">

                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon
                      className="h-5 w-5"
                      aria-hidden
                    />
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>

                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>

    </div>
  </div>
</section>

);
}
