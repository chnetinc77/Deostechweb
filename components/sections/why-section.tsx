'use client'

import { motion } from 'framer-motion'
import { Cpu, Palette, Rocket, Lightbulb, type LucideIcon } from 'lucide-react'

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Cpu,
    title: 'AI First',
    text: 'Every product is built with intelligent automation at its core.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    text: 'Modern interfaces crafted for speed, simplicity, and exceptional user experience.',
  },
  {
    icon: Rocket,
    title: 'Future Ready',
    text: 'Built using the latest cloud technologies and scalable architectures.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Constantly exploring AI, automation, and emerging technologies to create products for tomorrow.',
  },
]

export function WhySection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            Why Deos Tech
          </p>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Engineered for trust and built for tomorrow.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/20 ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-accent" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
