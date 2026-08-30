'use client';

import {
ExternalLink,
Github,
Figma,
ArrowUpRight,
} from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal-on-scroll';

const projects = [
{
type: 'UI/UX Case Study',
title: 'IRCTC App Redesign',
description:
'Redesigned the IRCTC mobile booking experience with a cleaner flow, clearer navigation, and improved usability.',
details:
'Focused on reducing friction in the booking journey through user flows, wireframes, prototypes, and iterative UI design.',
tags: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
image: '/images/irctc.png',
link: 'https://www.figma.com/proto/tz2V0ssGUEu6LHuuy3LqPv/Untitled',
linkType: 'Figma',
},
{
type: 'UI/UX Design',
title: 'E-Commerce Website',
description:
'Designed a user-focused e-commerce experience covering product discovery, cart, and checkout.',
details:
'Created responsive layouts and prototypes with a focus on intuitive navigation and a smooth shopping experience.',
tags: ['Figma', 'Canva', 'UI Design'],
image: '/images/ecommerce.png',
link: 'https://www.figma.com/proto/8q0sfHutCwAGdj0RkS5OsK/E-commerce',
linkType: 'Figma',
},
{
type: 'Full-Stack Development',
title: 'Online Reservation System',
description:
'Developed a railway reservation web application covering authentication, train search, seat booking, and cancellation.',
details:
'Built a responsive frontend with a Node.js backend to implement the core reservation workflow.',
tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
image: '/images/denis-chick-mHqIs22M2Kw-unsplash.jpg',
linkType: 'Live Demo',
},
{
type: 'Full-Stack Development',
title: 'Smart Task Tracker',
description:
'Built a full-stack task management web application for creating, organizing, prioritizing, and tracking tasks efficiently.',
details:
'Implemented task creation, priority-based sorting, CRUD operations, and completion tracking using a React.js frontend and Node.js with Express.js backend. Containerized the application using Docker for consistent deployment.',
tags: [
'React.js',
'Node.js',
'Express.js',
'JavaScript',
'REST APIs',
'Docker',
],
image: '/images/2h-media-YbtlsuQEp1I-unsplash.jpg',
link: 'https://github.com/kaviyarajendran01/SmartTaskTracker.git',
linkType: 'Full-Stack Project',
},
{
  title: "Real Juice — Concept Ad Campaign",
  category: "Concept Design",
  image: "/images/Task_01.png",
  description:
    "A self-initiated concept ad poster for a fruit juice brand, focused on communicating freshness and energy through bold typography and vibrant visual composition.",
  bullets: [
    "Researched reference ad campaigns for tone and visual direction",
    "Designed a poster-style creative built around a strong central visual and headline",
    "Refined layout, typography, and color balance for a clean, market-ready look",
  ],
  tags: ["Visual Design", "Typography", "Photo Editing"],
},{
  type: 'Branding / Mockup Design',
  title: 'Dashing Whippets — Brand Mockup System',
  description:
    'A branding mockup system built around the Dashing Whippets running club identity, extended across apparel, accessories, and lifestyle scenes.',
  details:
    'Designed a cohesive mockup presentation — t-shirts, hoodies, caps, bottles, race bibs, tote bags, banners, and street lifestyle scenes — using the brand\u2019s black, white, and red palette to keep every piece consistent.',
  tags: ['Visual Design', 'Brand Identity', 'Mockup Design'],
 image: '/images/dashing_whippets_tshirt_logo.jpg',
link: '/images/ChatGPT.png',
  linkType: 'View Full Mockup',
},
];

export default function Projects() {
return ( <section
   id="projects"
   className="relative scroll-mt-16 py-20 sm:py-28"
 > <div className="mx-auto max-w-6xl px-5 sm:px-6">

    <SectionHeading
      eyebrow="Projects"
      title="Selected work and case studies."
    />

    <div className="mt-12 grid gap-7 lg:grid-cols-2">

      {projects.map((project, index) => (
        <Reveal
          key={project.title}
          as="article"
          delay={index * 90}
          className={index === 2 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto' : ''}
        >
          <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card">

            {/* Project Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  Project Preview
                </div>
              )}

              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                {project.type}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {project.details}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
                >
                  {project.linkType === 'Figma' ? (
                    <Figma className="h-4 w-4" />
                  ) : (
                    <ExternalLink className="h-4 w-4" />
                  )}

                  {project.linkType}
                </a>
              )}

            </div>
          </div>
        </Reveal>
      ))}

    </div>

  </div>
</section>

);
}
