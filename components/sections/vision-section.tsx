import { Reveal } from '@/components/reveal'

export function VisionSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            Our Vision
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Building Software for the{' '}
            <span className="gradient-text text-glow-blue">Future</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Our mission is to create intelligent software that empowers millions
            of people to work smarter, live healthier, manage their finances
            with confidence, and unlock the possibilities of artificial
            intelligence and future computing technologies.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
