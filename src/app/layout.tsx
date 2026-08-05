import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Manrope } from 'next/font/google'
import './globals.css'
import { SITE } from '@/data/portfolio'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kushalchoudhary.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${SITE.name} | Software Engineer, AI/ML, Full Stack`, template: `%s | ${SITE.name}` },
  description: 'Software Engineer specializing in AI/ML, full-stack development, and open source. Built fraud detection on 500K+ transactions and contributes to AMD Lemonade SDK.',
  keywords: ['Kushal Choudhary', 'Software Engineer', 'Full Stack Developer', 'AI ML Engineer', 'Machine Learning', 'Open Source', 'Python', 'Node.js', 'VIT Chennai'],
  authors: [{ name: SITE.name, url: siteUrl }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${SITE.name} | Portfolio`,
    title: `${SITE.name} | Software Engineer, AI/ML, Full Stack`,
    description: 'Software Engineer building production AI/ML systems and contributing to AMD Lemonade SDK.',
    images: [{ url: '/images/og.png', width: 1920, height: 1080, alt: `${SITE.name} — Software Engineer` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Software Engineer`,
    description: 'Software Engineer, AI/ML, Full Stack, Open Source Contributor',
    images: ['/images/og.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = { themeColor: '#11130f', width: 'device-width', initialScale: 1, colorScheme: 'dark light' }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: 'Software Engineer',
  email: SITE.email,
  url: siteUrl,
  sameAs: [SITE.urls.github, SITE.urls.linkedin, SITE.urls.leetcode],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Vellore Institute of Technology Chennai' },
  knowsAbout: ['Machine Learning', 'Software Engineering', 'Graph Neural Networks', 'Full Stack Development'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
