'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { NeuralBackground } from '@/components/neural-background'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <NeuralBackground />

      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-28 pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          AI software studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance font-display text-5xl font-bold leading-[1.03] tracking-tight md:text-7xl lg:text-8xl"
        >
          Building the Next Generation of{' '}
          <span className="gradient-text text-glow-blue">Intelligent Apps</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          We design and build AI-powered applications that help people become
          more productive, healthier, wealthier, and more informed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="#apps"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Explore Our Apps
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          <span>Trusted engineering</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Intelligent automation</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>World-class design</span>
        </motion.div>
      </div>
    </section>
  )
}
