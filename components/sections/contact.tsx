'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';import { profile } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal-on-scroll';

const EMAIL = profile.email;

const contactItems = [
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
];

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    href: profile.github,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: profile.instagram,
  },
];

export default function Contact() {
const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-16 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-fade opacity-60" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact info */}
          <Reveal as="div">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              I&apos;m open to fresher and junior opportunities across full-stack development, frontend development, UI/UX design, and software development.
            </p>

            <ul className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-accent/40"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 text-foreground/70 transition-all hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal as="div" delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                    placeholder="Tell me about the role or project…"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.6)]"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  Send Message
                </button>
                {sent && (
                  <p className="text-center text-xs text-muted-foreground">
                    Your email client should have opened with your message. If not, email me directly at {EMAIL}.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
