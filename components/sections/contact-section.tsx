'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, ArrowRight, Check } from 'lucide-react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Let&apos;s build something intelligent together.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Have a product idea or want to collaborate? Reach out and our team
              will get back to you.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="mailto:contact@deostech.space"
                className="flex items-center gap-3 rounded-2xl glass px-5 py-4 transition-colors hover:bg-secondary"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-foreground">contact@deostech.space</span>
              </a>
              <a
                href="https://www.deostech.space"
                className="flex items-center gap-3 rounded-2xl glass px-5 py-4 transition-colors hover:bg-secondary"
              >
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-foreground">www.deostech.space</span>
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              By reaching out you agree to our{' '}
              <Link
                href="/privacy"
                className="text-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-strong p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" type="text" placeholder="Jane Doe" required />
              <Field
                id="email"
                label="Email"
                type="email"
                placeholder="jane@company.com"
                required
              />
            </div>
            <div className="mt-5">
              <Field
                id="company"
                label="Company"
                type="text"
                placeholder="Company name"
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <Check className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  )
}
