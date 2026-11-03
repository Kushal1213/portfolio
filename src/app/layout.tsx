import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Outfit } from 'next/font/google'
import './globals.css'
import { LATEST_WORK, SITE } from '@/data/portfolio'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kushalchoudhary.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${SITE.name} | Software & Data Engineer`, template: `%s | ${SITE.name}` },
  description: 'Software and data engineer building AI products, data platforms, desktop tools, and open-source systems. Creator of Cuepoint and KaamKaaj; contributor to AMD Lemonade SDK.',
  keywords: ['Kushal Choudhary', 'Software Engineer', 'Data Engineer', 'AI Engineer', 'Machine Learning', 'Open Source', 'Python', 'FastAPI', 'Tauri', 'VIT Chennai'],
  authors: [{ name: SITE.name, url: siteUrl }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${SITE.name} | Portfolio`,
    title: `${SITE.name} | Software & Data Engineer`,
    description: 'Building AI products, data platforms, desktop tools, and open-source systems.',
    images: [{ url: '/images/og.png', width: 1200, height: 630, alt: `${SITE.name} - Software and Data Engineer` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Software & Data Engineer`,
    description: 'AI products, data platforms, desktop tools, and open source.',
    images: ['/images/og.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = { themeColor: '#11130f', width: 'device-width', initialScale: 1, colorScheme: 'dark light' }

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      name: `${SITE.name} engineering portfolio`,
      url: siteUrl,
      mainEntity: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: SITE.name,
      jobTitle: 'Software and Data Engineer',
      email: SITE.email,
      url: siteUrl,
      sameAs: [SITE.urls.github, SITE.urls.linkedin, SITE.urls.leetcode],
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Vellore Institute of Technology Chennai' },
      knowsAbout: ['Machine Learning', 'Data Engineering', 'Software Engineering', 'Graph Neural Networks', 'Full Stack Development'],
    },
    {
      '@type': 'ItemList',
      name: 'Selected engineering projects',
      itemListElement: LATEST_WORK.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareSourceCode',
          name: project.title,
          description: project.summary,
          codeRepository: project.github,
          url: project.demo ?? project.github,
          programmingLanguage: project.tags,
        },
      })),
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
