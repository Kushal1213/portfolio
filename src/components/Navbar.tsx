'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 50], ['rgba(13,17,23,0)', 'rgba(13,17,23,0.85)'])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'open-source', href: '#oss' },
    { name: 'projects', href: '#projects' },
    { name: 'experience', href: '#experience' },
    { name: 'skills', href: '#skills' },
    { name: 'contact', href: '#contact' },
  ]

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 px-10 py-4 flex items-center justify-between backdrop-blur-md border-b border-gh-border/0 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href="#"
        className="font-mono text-sm text-gh-green hover:text-gh-text transition-colors interactive"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-gh-muted">~/</span>kushal
      </motion.a>

      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={link.href}
              className="font-mono text-xs text-gh-muted hover:text-gh-text transition-colors relative interactive group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-gh-green group-hover:w-full transition-all duration-300" />
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.a
        href="mailto:kushalchoudhary1213@gmail.com"
        className="hidden md:inline-flex items-center gap-2 bg-gh-green-dark text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gh-green transition-all interactive"
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
      >
        Hire me
      </motion.a>

      {/* Mobile menu button */}
      <button className="md:hidden text-gh-text interactive">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
    </motion.nav>
  )
}
