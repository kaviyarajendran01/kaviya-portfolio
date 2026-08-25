'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/80 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
          aria-label="Kaviya Rajendren— home"
        >
          Kaviya<span className="text-accent"> </span>Rajendren
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-white md:inline-block"
        >
          Get In Touch
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden',
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col px-5 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full border border-accent/40 bg-accent/10 px-4 py-2.5 text-center text-sm font-medium text-accent"
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
