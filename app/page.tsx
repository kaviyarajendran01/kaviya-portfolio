'use client';

import { useEffect, useState } from 'react';

import { Navbar } from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Achievements from '@/components/sections/achievements';
import Chess from '@/components/sections/chess';
import Contact from '@/components/sections/contact';

export default function Home() {
const [showIntro, setShowIntro] = useState(true);
const [open, setOpen] = useState(false);

useEffect(() => {
const start = setTimeout(() => {
setOpen(true);
}, 1000);

const remove = setTimeout(() => {
  setShowIntro(false);
}, 1800);

return () => {
  clearTimeout(start);
  clearTimeout(remove);
};

}, []);

return (
<>
{showIntro && ( <div className="fixed inset-0 z-[100] overflow-hidden">
{/* Left half */}
<div
className={`absolute left-0 top-0 h-full w-1/2 bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? '-translate-x-full' : 'translate-x-0'
            }`}
/>
      {/* Right half */}
      <div
        className={`absolute right-0 top-0 h-full w-1/2 bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Portfolio text */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="font-serif text-7xl font-medium italic tracking-tight text-foreground sm:text-8xl md:text-9xl">
          Portfolio
        </h1>
      </div>
    </div>
  )}

  <Navbar />

  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Education />
  <Achievements />
  <Chess />
  <Contact />
</>
);
}
