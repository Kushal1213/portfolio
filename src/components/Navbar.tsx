'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DownloadSimple, List, X } from '@phosphor-icons/react'
import { NAV_LINKS, SITE } from '@/data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#hero')

  useEffect(() => {
    const sections = ['hero', ...NAV_LINKS.map((link) => link.href.replace('#', ''))]
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHref(`#${id}`)
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <motion.header
        className="fixed inset-x-0 top-0 z-30 flex justify-center px-4 pt-4 sm:px-6"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
      >
        <nav
          className="flex h-14 w-full max-w-[1400px] items-center justify-between gap-3 rounded-full border px-3 pl-5 shadow-[0_8px_32px_var(--shadow)] backdrop-blur-2xl site-rule sm:h-[3.75rem] sm:px-4 sm:pl-6"
          style={{ background: 'color-mix(in srgb, var(--canvas) 78%, transparent)' }}
          aria-label="Primary navigation"
        >
          <a
            href="#hero"
            className="shrink-0 text-sm font-extrabold tracking-[-0.04em]"
            onClick={() => setIsOpen(false)}
          >
            Kushal<span className="site-accent">.</span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href
              return (
                <li key={link.name}>
                  <a
                    className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'bg-[var(--surface-hover)] text-[var(--ink)]' : 'site-muted hover:text-[var(--ink)]'
                    }`}
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            <a
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold site-muted transition-colors hover:text-[var(--ink)]"
              href={SITE.resumeUrl}
              download
            >
              <DownloadSimple size={15} weight="bold" aria-hidden="true" />
              Resume
            </a>
            <a className="site-button-primary rounded-full px-4 py-2.5" href="#contact">
              Contact
            </a>
          </div>

          <button
            type="button"
            className="relative h-10 w-10 rounded-full lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? 'Close' : 'Menu'}</span>
            <span
              className={`absolute left-1/2 top-[calc(50%-4px)] h-[1.5px] w-4 -translate-x-1/2 bg-[var(--ink)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? 'translate-y-[4px] rotate-45' : ''
              }`}
              aria-hidden="true"
            />
            <span
              className={`absolute left-1/2 top-[calc(50%+4px)] h-[1.5px] w-4 -translate-x-1/2 bg-[var(--ink)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? '-translate-y-[4px] -rotate-45' : ''
              }`}
              aria-hidden="true"
            />
            <span className="pointer-events-none absolute inset-0 opacity-0">
              {isOpen ? <X size={22} /> : <List size={22} />}
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-20 flex items-center justify-center px-6 pt-16 backdrop-blur-3xl lg:hidden"
            style={{ background: 'color-mix(in srgb, var(--canvas) 88%, transparent)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav aria-label="Mobile navigation" className="flex w-full max-w-sm flex-col items-stretch gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="overflow-hidden border-b px-1 py-4 text-2xl font-bold tracking-[-0.04em] site-rule"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                className="site-button-primary mt-6"
                href={SITE.resumeUrl}
                download
                onClick={() => setIsOpen(false)}
              >
                <DownloadSimple size={17} weight="bold" aria-hidden="true" />
                Download resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
