import { SITE } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t py-10 site-rule">
      <div className="container-main flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-semibold">
            {SITE.name} <span className="site-muted">- Software Engineer</span>
          </p>
          <p className="mt-2 text-sm site-quiet">
            © {year} {SITE.name}. Built with Next.js, Motion, and Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a className="site-link font-medium" href={`mailto:${SITE.email}`}>
            Email
          </a>
          <a className="site-link font-medium" href={SITE.urls.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="site-link font-medium" href={SITE.urls.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="site-link font-medium" href="#hero">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
