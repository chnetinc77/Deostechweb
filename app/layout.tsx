import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = 'https://www.deostech.space'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Deos Tech — Building the Next Generation of Intelligent Apps',
    template: '%s | Deos Tech',
  },
  description:
    'Deos Tech is an AI software studio that designs and builds intelligent applications to help people become more productive, healthier, wealthier, and more informed.',
  keywords: [
    'AI software studio',
    'AI applications',
    'Deos Tech',
    'Quantum Deos',
    'AI assistant',
    'productivity apps',
    'artificial intelligence',
  ],
  authors: [{ name: 'Deos Tech' }],
  creator: 'Deos Tech',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Deos Tech — Building the Next Generation of Intelligent Apps',
    description:
      'An AI software studio designing and building intelligent applications for a smarter future.',
    siteName: 'Deos Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deos Tech — Building Intelligent Apps for Tomorrow',
    description:
      'An AI software studio designing and building intelligent applications for a smarter future.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
