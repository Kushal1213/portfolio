'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone } from 'lucide-react'

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'kushalchoudhary1213@gmail.com',
      href: 'mailto:kushalchoudhary1213@gmail.com',
    },
    {
      icon: Github,
      label: 'Kushal1213',
      href: 'https://github.com/Kushal1213',
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kushal-choudhary-8044a227b/',
      external: true,
    },
    {
      icon: Phone,
      label: '+91 8619299156',
      href: 'tel:+918619299156',
    },
  ]

  return (
    <section id="contact" className="bg-gh-surface border-t border-gh-border py-24 text-center relative z-10">
      <div className="absolute w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-gh-green/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-10 relative">
        <motion.h2
          className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's build something<br />that actually works.
        </motion.h2>

        <motion.p
          className="text-lg text-gh-muted mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Always happy to help — feel free to reach out.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 px-6 py-3 border border-gh-border rounded-xl text-gh-muted text-sm font-medium bg-gh-bg hover:border-gh-accent hover:text-gh-text hover:-translate-y-1 transition-all interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <contact.icon size={18} />
              {contact.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
