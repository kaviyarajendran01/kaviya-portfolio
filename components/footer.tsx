'use client';

import { Mail, Github, Linkedin } from 'lucide-react';
import { profile } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="font-display text-lg font-semibold text-foreground"
            >
              Kaviya<span className="text-accent">.</span>R
            </a>
            <p className="mt-1 text-xs text-muted-foreground">
              UI/UX • Frontend Development • Software Development
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground/70 transition-all hover:border-accent/40 hover:text-accent"
            >
              <Github className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground/70 transition-all hover:border-accent/40 hover:text-accent"
            >
              <Linkedin className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground/70 transition-all hover:border-accent/40 hover:text-accent"
            >
              <Mail className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kaviya R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
