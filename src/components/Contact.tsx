'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Download,
  MapPin,
  Send,
  ExternalLink,
  CheckCircle,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import CopyButton from '@/components/ui/CopyButton'
import { SITE } from '@/data/portfolio'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const links = [
    { icon: Github, label: 'GitHub', href: SITE.urls.github, handle: '@Kushal1213' },
    { icon: Linkedin, label: 'LinkedIn', href: SITE.urls.linkedin, handle: 'Connect' },
    { icon: ExternalLink, label: 'LeetCode', href: SITE.urls.leetcode, handle: '@kushal_choudhary' },
  ]

  return (
    <section id="contact" className="section-padding relative z-10 bg-bg-secondary/30">
      <div className="container-main">
        <SectionHeader
          label="// contact"
          title="Let's build"
          titleAccent="something great."
          description="Open to software engineering internships and full-time roles. Reach out for collaborations, interviews, or technical conversations."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <a href={`mailto:${SITE.email}`} className="font-medium hover:text-primary transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </div>
              <CopyButton text={SITE.email} label="Copy Email" />

              <div className="flex items-center gap-3 pt-2">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Phone</p>
                  <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="font-medium hover:text-primary transition-colors">
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Location & Availability</p>
                  <p className="font-medium">{SITE.location}</p>
                  <p className="text-xs text-text-tertiary mt-0.5">{SITE.availability}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {links.map(({ icon: Icon, label, href, handle }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-sm hover:bg-surface-hover interactive"
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  <Icon size={16} className="text-primary" />
                  <span className="font-medium">{label}</span>
                  <span className="text-text-tertiary text-xs">{handle}</span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href={SITE.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-semibold hover:bg-surface-hover interactive w-full justify-center sm:w-auto"
              whileHover={{ scale: 1.02 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-7 space-y-5 shadow-glow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:border-primary/50 focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:border-primary/50 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3.5 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 interactive"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  Opening email client...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
