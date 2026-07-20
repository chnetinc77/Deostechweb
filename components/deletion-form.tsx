'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, MailCheck } from 'lucide-react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = {
  fullName?: string
  email?: string
  reason?: string
  acknowledged?: string
}

export function DeletionForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [acknowledged, setAcknowledged] = useState(false)

  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [formError, setFormError] = useState('')

  function validate(): FieldErrors {
    const next: FieldErrors = {}
    if (fullName.trim().length < 2) {
      next.fullName = 'Please enter your full name.'
    }
    if (!EMAIL_RE.test(email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (reason.trim().length > 1000) {
      next.reason = 'Reason must be 1000 characters or fewer.'
    }
    if (!acknowledged) {
      next.acknowledged =
        'You must acknowledge that deletion is permanent to continue.'
    }
    return next
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError('')

    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    try {
      const res = await fetch('/api/aionitdelete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          reason: reason.trim(),
          acknowledged,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string
          fields?: FieldErrors
        }
        if (data.fields) setErrors(data.fields)
        setFormError(
          data.error ?? 'Something went wrong. Please try again shortly.',
        )
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setFormError(
        'We could not submit your request. Check your connection and try again.',
      )
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        role="status"
        aria-live="polite"
        className="rounded-3xl glass-strong p-8 text-center md:p-10"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
          <MailCheck className="h-7 w-7 text-accent" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">
          Request Received
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Thank you. We have received your account deletion request. Our team
          will verify your request and process it as soon as possible. You will
          receive a confirmation email once the deletion has been completed.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl glass-strong p-6 md:p-8"
    >
      <div className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-required="true"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          {errors.fullName && (
            <FieldError id="fullName-error">{errors.fullName}</FieldError>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? 'email-error email-hint' : 'email-hint'
            }
            placeholder="jane@example.com"
            className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <p id="email-hint" className="mt-1.5 text-xs text-muted-foreground">
            Use the email associated with your AI On It account.
          </p>
          {errors.email && (
            <FieldError id="email-error">{errors.email}</FieldError>
          )}
        </div>

        <div>
          <label
            htmlFor="reason"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Reason for deletion{' '}
            <span className="text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            maxLength={1000}
            aria-invalid={Boolean(errors.reason)}
            aria-describedby={errors.reason ? 'reason-error' : undefined}
            placeholder="Let us know why you're leaving (optional)..."
            className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          {errors.reason && (
            <FieldError id="reason-error">{errors.reason}</FieldError>
          )}
        </div>

        <div>
          <label
            htmlFor="acknowledged"
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-input bg-background/40 p-4 transition-colors hover:bg-secondary/40"
          >
            <input
              id="acknowledged"
              name="acknowledged"
              type="checkbox"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              aria-required="true"
              aria-invalid={Boolean(errors.acknowledged)}
              aria-describedby={
                errors.acknowledged ? 'acknowledged-error' : undefined
              }
              className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-input bg-background/60 text-primary accent-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <span className="text-sm leading-relaxed text-foreground">
              I understand that deleting my account is permanent and cannot be
              undone.
            </span>
          </label>
          {errors.acknowledged && (
            <FieldError id="acknowledged-error">
              {errors.acknowledged}
            </FieldError>
          )}
        </div>

        {formError && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground"
          >
            <AlertCircle
              className="mt-0.5 h-5 w-5 shrink-0 text-destructive"
              aria-hidden="true"
            />
            <span>{formError}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting request...
            </>
          ) : (
            <>
              Submit Request
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <CheckCircle2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          Your request is sent securely to our privacy team.
        </p>
      </div>
    </motion.form>
  )
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p
      id={id}
      role="alert"
      className="mt-1.5 flex items-center gap-1.5 text-sm text-destructive"
    >
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {children}
    </p>
  )
}
