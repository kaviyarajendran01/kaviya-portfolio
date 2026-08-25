export default function Hero() {
return ( <section
   id="home"
   className="relative overflow-hidden bg-grid pt-32 pb-20 sm:pt-40 sm:pb-24"
 > <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
  <div className="relative mx-auto max-w-6xl px-6">
    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">

        <div className="animate-hero mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Computer Science Engineering Graduate
        </div>

        <p className="animate-hero animate-hero-delay-1 mb-4 text-sm font-semibold tracking-[0.2em] text-accent">
          KAVIYA RAJENDREN
        </p>

        <h1 className="animate-hero animate-hero-delay-2 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Computer Science Graduate Building Modern Digital Experiences
        </h1>

        <p className="animate-hero animate-hero-delay-3 mt-6 text-base font-medium text-muted-foreground sm:text-lg">
           Full-Stack Development • Frontend Development • UI/UX • Software
          Development
        </p>

        <p className="animate-hero animate-hero-delay-4 mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground lg:mx-0">
        I'm a Computer Science Engineering graduate with hands-on experience in full-stack development, frontend development, and UI/UX design through internships, training, and academic projects. I enjoy combining technical problem-solving with creative thinking to build responsive, scalable, and user-focused web applications. I'm passionate about developing practical full-stack solutions while continuously strengthening my skills across modern web technologies.
        </p>

        <div className="animate-hero animate-hero-delay-5 mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <a
            href="#projects"
            className="accent-glow rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:border-accent/50"
          >
            Get In Touch
          </a>
        </div>

      </div>

      {/* RIGHT PHOTO */}
<div className="animate-hero animate-hero-delay-3 flex justify-center lg:justify-end">
  <div className="relative w-full max-w-[420px]">
    <img
      src="/images/Gemini_Generated_Image_hz3r48hz3r48hz3r.png"
      alt="Kaviya R"
      className="
        w-full
        h-auto
        object-contain
        [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]
      "
    />

    {/* Blend into background */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </div>
</div>

    </div>
  </div>
</section>
);
}
