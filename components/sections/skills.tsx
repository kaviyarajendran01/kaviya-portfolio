'use client';

import {
Layers,
Code2,
Database,
Palette,
Wrench,
Brain,
} from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal-on-scroll';

const skillGroups = [
{
icon: Layers,
title: 'Full-Stack Development',
skills: ['Node.js', 'MongoDB', 'JavaScript', 'REST APIs'],
},
{
icon: Code2,
title: 'Frontend Development',
skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
},
{
icon: Code2,
title: 'Programming',
skills: ['Java', 'Python', 'C'],
},
{
icon: Database,
title: 'Database & SQL',
skills: ['MySQL', 'SQL', 'DBMS', 'MongoDB'],
},
{
icon: Palette,
title: 'UI/UX & Design',
skills: [
'Figma',
'UI/UX Design',
'Wireframing',
'Prototyping',
'Responsive Web Design',
'Canva',
],
},
{
icon: Wrench,
title: 'Development Tools',
skills: ['VS Code', 'Git', 'GitHub', 'NetBeans'],
},
{
icon: Brain,
title: 'Professional Skills',
skills: [
'Problem Solving',
'Teamwork',
'Communication',
'Adaptability',
'Time Management',
],
},
];

export default function Skills() {
return ( <section
   id="skills"
   className="relative scroll-mt-16 py-20 sm:py-28"
 > <div className="mx-auto max-w-6xl px-5 sm:px-6">

    <SectionHeading
      eyebrow="Skills"
      title="Technologies and tools I work with."
    />

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, index) => {
        const Icon = group.icon;

        return (
          <Reveal
            key={group.title}
            as="div"
            delay={index * 70}
          >
            <div className="group h-full rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card">

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon
                    className="h-5 w-5"
                    aria-hidden
                  />
                </div>

                <h3 className="text-base font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
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
