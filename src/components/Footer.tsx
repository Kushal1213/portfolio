import { SITE } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t py-8 site-rule">
      <div className="container-main flex flex-col justify-between gap-3 text-sm sm:flex-row sm:items-center">
        <p className="font-semibold">{SITE.name} <span className="site-muted">- Software Engineer</span></p>
        <p className="site-muted">Built with Next.js, Motion, and Tailwind CSS</p>
      </div>
    </footer>
  )
}
