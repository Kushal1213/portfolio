'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-30 border-b site-rule bg-[color-mix(in_srgb,var(--canvas)_82%,transparent)] backdrop-blur-xl"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="container-main flex h-[72px] items-center justify-between gap-4" aria-label="Primary navigation">
          <a href="#hero" className="shrink-0 text-sm font-extrabold tracking-[-0.04em]" onClick={() => setIsOpen(false)}>
            Kushal<span className="site-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a className="rounded-lg px-3 py-2 text-sm font-medium site-muted transition-colors hover:text-[var(--ink)]" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold site-muted transition-colors hover:text-[var(--ink)]" href={SITE.resumeUrl} download>
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
            <a className="site-button-primary px-4 py-2.5" href="#contact">Contact</a>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-20 flex items-center justify-center bg-[var(--canvas)] px-6 pt-16 lg:hidden"
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
                  className="border-b px-1 py-4 text-2xl font-bold tracking-[-0.04em] site-rule"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a className="site-button-primary mt-6" href={SITE.resumeUrl} download onClick={() => setIsOpen(false)}>
                <Download size={17} aria-hidden="true" />
                Download resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
