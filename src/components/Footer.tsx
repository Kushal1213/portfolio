import { SITE } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-tertiary">© {new Date().getFullYear()} {SITE.name} · Software Engineer</p>
        <p className="font-mono text-xs text-text-secondary">Built with Next.js · Framer Motion · Tailwind CSS</p>
      </div>
    </footer>
  )
}
