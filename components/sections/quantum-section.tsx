'use client'

import { motion } from 'framer-motion'
import { Atom, Search, Brain, MessageSquare, Sparkles } from 'lucide-react'
import { QuantumSphere } from '@/components/quantum-sphere'

const features = [
  { icon: Search, label: 'AI-powered search' },
  { icon: Brain, label: 'Deep research' },
  { icon: Sparkles, label: 'Intelligent reasoning' },
  { icon: Atom, label: 'Future-ready quantum technology' },
  { icon: MessageSquare, label: 'Modern conversational interface' },
]

export function QuantumSection() {
  return (
    <section
      id="quantum"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* dramatic background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.16_235_/_0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-primary/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />

      {/* giant background sphere */}
      <QuantumSphere className="pointer-events-none absolute right-[-10%] top-1/2 hidden w-[560px] -translate-y-1/2 opacity-60 lg:block" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-accent"
          >
            <Atom className="h-4 w-4" />
            Flagship product
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="gradient-text text-glow-blue">Quantum Deos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Quantum Deos is an advanced AI knowledge platform inspired by the
            next era of computing. It combines conversational AI with deep
            research and future quantum technologies to help users explore
            complex topics, solve problems, and discover insights faster than
            traditional search.
          </motion.p>

          <div className="mt-10 flex flex-col gap-3">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-center gap-4 rounded-2xl glass px-5 py-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/20 ring-1 ring-primary/30">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <span className="font-medium text-foreground">{f.label}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* mobile sphere */}
        <div className="mt-16 flex justify-center lg:hidden">
          <QuantumSphere className="w-72" />
        </div>
      </div>
    </section>
  )
}
