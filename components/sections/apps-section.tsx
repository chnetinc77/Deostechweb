'use client'

import { motion } from 'framer-motion'
import {
  Bot,
  CheckSquare,
  Flame,
  Dumbbell,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

type App = {
  name: string
  icon: LucideIcon
  description: string
  features: string[]
  wide?: boolean
}

const apps: App[] = [
  {
    name: 'AI On It',
    icon: Bot,
    description:
      'An intelligent AI assistant that combines the power of multiple leading AI models into one seamless experience, helping users research, write, code, analyze, and solve complex problems faster.',
    features: [
      'Multiple AI models',
      'Web research',
      'Smart conversations',
      'Productivity assistant',
    ],
    wide: true,
  },
  {
    name: 'Todo List',
    icon: CheckSquare,
    description:
      'A beautifully designed task management application that helps users organize projects, stay productive, and accomplish more every day.',
    features: [
      'Smart task organization',
      'Priorities',
      'Deadlines',
      'Productivity analytics',
    ],
  },
  {
    name: 'Habit Tracker',
    icon: Flame,
    description:
      'Build better habits with intelligent tracking, reminders, streaks, and progress insights designed to help users create lasting routines.',
    features: ['Daily habits', 'Streak tracking', 'Statistics', 'Smart reminders'],
  },
  {
    name: 'Workout Log',
    icon: Dumbbell,
    description:
      'Track workouts, monitor progress, and stay motivated with a clean fitness companion built for consistency.',
    features: [
      'Workout history',
      'Progress charts',
      'Exercise tracking',
      'Performance analytics',
    ],
  },
  {
    name: 'Finance Tracker',
    icon: Wallet,
    description:
      'A personal finance platform that helps users stay completely on top of their money. Track income, expenses, savings, investments, subscriptions, and financial goals in one intelligent dashboard.',
    features: [
      'Expense tracking',
      'Budget management',
      'Investment overview',
      'Financial insights',
      'Smart reports',
    ],
    wide: true,
  },
]

function AppCard({ app, index }: { app: App; index: number }) {
  const Icon = app.icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className={`group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1 ${
        app.wide ? 'md:col-span-2' : ''
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-40" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/20 ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-7 w-7 text-accent" />
        </div>
      </div>

      <h3 className="relative mt-6 font-display text-2xl font-bold tracking-tight">
        {app.name}
      </h3>
      <p className="relative mt-3 text-pretty leading-relaxed text-muted-foreground">
        {app.description}
      </p>

      <ul className="relative mt-6 flex flex-wrap gap-2">
        {app.features.map((f) => (
          <li
            key={f}
            className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
          >
            {f}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export function AppsSection() {
  return (
    <section id="apps" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[150px]" />
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            Our Apps
          </p>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Intelligent products, crafted end to end.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {apps.map((app, i) => (
            <AppCard key={app.name} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
