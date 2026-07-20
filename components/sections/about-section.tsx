import { Reveal } from '@/components/reveal'

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
                Who We Are
              </p>
              <h2 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                A modern studio building intelligent software.
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            <Reveal delay={1}>
              <p>
                Deos Tech is a modern software studio focused on creating
                innovative applications powered by artificial intelligence and
                cutting-edge technology.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                We believe software should simplify life, increase productivity,
                and help people make smarter decisions.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                From AI assistants to productivity tools and finance platforms,
                every product we build is designed with exceptional user
                experience and intelligent automation.
              </p>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { value: '6+', label: 'Intelligent apps' },
                  { value: 'AI-first', label: 'By design' },
                  { value: '24/7', label: 'Always improving' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl glass p-5"
                  >
                    <div className="font-display text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
