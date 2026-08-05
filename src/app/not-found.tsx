import Link from 'next/link'
import { SITE } from '@/data/portfolio'

export default function NotFound() {
  return (
    <div className="site-shell flex min-h-[100dvh] items-center">
      <div className="container-main py-24">
        <p className="font-mono text-sm tracking-[0.14em] uppercase site-accent">404</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.06em] text-balance sm:text-6xl">
          This page does not exist.
        </h1>
        <p className="mt-5 max-w-[65ch] text-lg leading-8 site-muted">
          The link may be outdated, or the page moved. Head back to the portfolio to keep exploring {SITE.name}&apos;s work.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="site-button-primary">
            Back home
          </Link>
          <Link href="/#projects" className="site-button-secondary">
            View projects
          </Link>
        </div>
      </div>
    </div>
  )
}
