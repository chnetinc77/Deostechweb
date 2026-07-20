'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const tech = [
  { name: 'OpenAI', src: '/logos/openai.svg' },
  { name: 'Gemini', src: '/logos/google-gemini.svg' },
  { name: 'Claude', src: '/logos/claude-ai.svg' },
  { name: 'React', src: '/logos/react.svg' },
  { name: 'Next.js', src: '/logos/nextdotjs.svg' },
  { name: 'TypeScript', src: '/logos/typescript.svg' },
  { name: 'Vercel', src: '/logos/vercel.svg' },
  { name: 'AWS', src: '/logos/amazon-web-services.svg' },
  { name: 'Supabase', src: '/logos/supabase.svg' },
  { name: 'PostgreSQL', src: '/logos/postgresql.svg' },
]

function Logo({ name, src }: { name: string; src: string }) {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl glass px-6 py-4">
      <Image
        src={src || '/placeholder.svg'}
        alt={`${name} logo`}
        width={28}
        height={28}
        className="h-7 w-7 object-contain opacity-70 grayscale [filter:brightness(0)_invert(1)] transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  )
}

export function TechSection() {
  return (
    <section id="technology" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            Technology Stack
          </p>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Built on world-class technology.
          </h2>
        </motion.div>
      </div>

      {/* marquee */}
      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
          {[...tech, ...tech].map((t, i) => (
            <Logo key={`${t.name}-${i}`} name={t.name} src={t.src} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_38s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
