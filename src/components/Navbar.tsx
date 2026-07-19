'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { SITE, NAV_LINKS } from '@/data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(9, 9, 11, 0)', 'rgba(9, 9, 11, 0.85)']
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
          isScrolled ? 'border-border/60' : 'border-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-main flex items-center justify-between h-16">
          <motion.a
            href="#hero"
            className="font-mono text-sm hover:text-primary transition-colors interactive"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-text-tertiary">~/</span>
            <span className="text-text-primary">kushal</span>
          </motion.a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-2 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface/50 interactive"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors interactive"
            >
              <Download size={15} />
              Resume
            </a>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl shadow-glow interactive"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>
          </div>

          <button
            className="lg:hidden p-2 text-text-primary interactive"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
          <motion.nav
            className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-2 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-text-secondary hover:text-text-primary py-3 transition-colors"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 px-8 py-3.5 bg-primary text-white rounded-xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hire Me
            </motion.a>
          </motion.nav>
        </motion.div>
      )}
    </>
  )
}
