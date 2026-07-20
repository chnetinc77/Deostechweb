import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for AI On It by Deos Tech — how we collect, use, and protect your personal data.',
  alternates: { canonical: '/privacy' },
}

const sections = [
  { id: 'information-we-collect', title: '1. Information We Collect' },
  { id: 'how-we-use-your-data', title: '2. How We Use Your Data' },
  { id: 'data-sharing', title: '3. Data Sharing and Disclosure' },
  { id: 'data-security', title: '4. Data Security' },
  { id: 'your-data-rights', title: '5. Your Data Rights' },
  { id: 'childrens-privacy', title: "6. Children's Privacy" },
  { id: 'contact-us', title: '7. Contact Us' },
]

export default function PrivacyPage() {
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
              Legal
            </p>
            <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Privacy Policy for AI On It
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: July 20, 2026
            </p>
          </header>

          <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
            Deos Tech (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            operates the AI On It mobile application. This Privacy Policy informs
            you of our policies regarding the collection, use, and disclosure of
            personal data when you use our app and the choices you have
            associated with that data.
          </p>

          {/* Table of contents */}
          <nav
            aria-label="Table of contents"
            className="mt-10 rounded-2xl glass p-6"
          >
            <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
              Contents
            </h2>
            <ol className="grid gap-2 sm:grid-cols-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 flex flex-col gap-12">
            <Section id="information-we-collect" title="1. Information We Collect">
              <p>
                We collect several different types of information to provide and
                improve our service to you:
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                Personal Data
              </h3>
              <p>
                Such as your email address, name, or username, if you choose to
                provide it when creating an account.
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                Usage Data
              </h3>
              <p>
                Information on how the app is accessed and used, such as feature
                interaction, session duration, and technical device information
                (IP address, device model, operating system).
              </p>
            </Section>

            <Divider />

            <Section id="how-we-use-your-data" title="2. How We Use Your Data">
              <p>Deos Tech uses the collected data for various purposes:</p>
              <List
                items={[
                  'To provide and maintain the AI On It service.',
                  'To notify you about changes to our service.',
                  'To allow you to participate in interactive features when you choose to do so.',
                  'To provide customer support and respond to your inquiries.',
                  'To gather analysis or valuable information so that we can improve the app.',
                ]}
              />
            </Section>

            <Divider />

            <Section id="data-sharing" title="3. Data Sharing and Disclosure">
              <p className="font-medium text-foreground">
                We do not sell your personal data.
              </p>
              <p>
                We may share your information only in the following situations:
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                Service Providers
              </h3>
              <p>
                We may employ third-party companies to facilitate our service or
                provide service-related analysis (for example, analytics
                providers).
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                Legal Requirements
              </h3>
              <p>
                We may disclose your data if required to do so by law or in
                response to valid requests by public authorities.
              </p>
            </Section>

            <Divider />

            <Section id="data-security" title="4. Data Security">
              <p>
                The security of your data is important to us. We implement
                industry-standard security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the Internet
                or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </Section>

            <Divider />

            <Section id="your-data-rights" title="5. Your Data Rights">
              <p>
                Depending on your location, you may have rights regarding your
                personal data, including:
              </p>
              <List
                items={[
                  'Access your personal data.',
                  'Request correction of inaccurate information.',
                  'Request deletion of your personal data.',
                ]}
              />
              <p>
                To exercise these rights, please contact us using the information
                below.
              </p>
            </Section>

            <Divider />

            <Section id="childrens-privacy" title="6. Children's Privacy">
              <p>
                Our service does not knowingly collect personally identifiable
                information from children under the age of 13. If we discover
                that a child has provided us with personal data, we will promptly
                delete that information.
              </p>
            </Section>

            <Divider />

            <Section id="contact-us" title="7. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, you can
                contact us:
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:contact@deostech.space"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    contact@deostech.space
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a
                    href="https://www.deostech.space"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    https://www.deostech.space
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
    />
  )
}
