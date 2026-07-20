import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, Trash2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { DeletionForm } from '@/components/deletion-form'

export const metadata: Metadata = {
  title: 'Delete Your AI On It Account',
  description:
    'Submit a request to permanently delete your AI On It account and all associated personal data, in accordance with the Deos Tech Privacy Policy.',
  alternates: { canonical: '/aionitdelete' },
}

const deletedItems = [
  'Your AI On It account',
  'Profile information',
  'Saved chats and conversation history',
  'Preferences and settings',
  'Any other personal data associated with your account, except where we are legally required to retain certain information.',
]

export default function AiOnItDeletePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* ambient background */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/12 blur-[150px]" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top,black,transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-[900px] px-5 pb-24 pt-32 md:pt-40">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <header className="border-b border-border pb-8">
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-primary">
              Account Deletion
            </p>
            <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Delete Your AI On It Account
            </h1>
            <div className="mt-5 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                If you would like to permanently delete your AI On It account and
                all associated personal data, you can submit a deletion request
                using the form below.
              </p>
              <p>
                Once your request is verified, we will permanently delete your
                account and associated personal data in accordance with our{' '}
                <Link
                  href="/privacy"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>{' '}
                and applicable laws.
              </p>
            </div>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
            {/* Form */}
            <DeletionForm />

            {/* Sidebar info */}
            <aside className="flex flex-col gap-6">
              <section className="rounded-2xl glass p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/15">
                    <Trash2
                      className="h-5 w-5 text-destructive"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    What will be deleted?
                  </h2>
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {deletedItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl glass p-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Need help?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  If you experience any issues submitting your request, contact
                  us:
                </p>
                <a
                  href="mailto:contact@deostech.space"
                  className="mt-4 inline-flex items-center gap-3 rounded-xl glass px-4 py-3 text-sm transition-colors hover:bg-secondary"
                >
                  <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-foreground">contact@deostech.space</span>
                </a>
              </section>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
