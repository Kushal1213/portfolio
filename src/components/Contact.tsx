'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, Send } from 'lucide-react'
import { SITE } from '@/data/portfolio'

type FormState = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const reduceMotion = useReducedMotion()
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(`Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--canvas-deep)' }}>
      <div className="container-main">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
            Let&apos;s build something that holds up.
          </h2>
          <p className="mt-5 text-lg leading-8 site-muted">
            I am open to software engineering roles, internships, and thoughtful technical collaborations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              className="site-link inline-flex break-all text-xl font-extrabold tracking-[-0.04em] sm:text-2xl"
              href={`mailto:${SITE.email}`}
            >
              {SITE.email}
            </a>
            <p className="mt-4 max-w-sm leading-7 site-muted">{SITE.availability.replace('·', '-')}</p>

            <div className="mt-9 space-y-0">
              <a
                className="site-link flex items-center justify-between border-t py-3 text-sm font-bold site-rule"
                href={SITE.urls.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Github size={17} aria-hidden="true" /> GitHub
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                className="site-link flex items-center justify-between border-t py-3 text-sm font-bold site-rule"
                href={SITE.urls.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin size={17} aria-hidden="true" /> LinkedIn
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                className="site-link flex items-center justify-between border-y py-3 text-sm font-bold site-rule"
                href={SITE.urls.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                <span>LeetCode</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.aside>

          <motion.form
            noValidate
            onSubmit={handleSubmit}
            className="site-panel p-6 sm:p-9"
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold" htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="input-focus-ring rounded-[var(--radius-panel)] border bg-transparent px-4 py-3.5 font-medium outline-none site-rule placeholder:text-[var(--quiet)]"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold" htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="input-focus-ring rounded-[var(--radius-panel)] border bg-transparent px-4 py-3.5 font-medium outline-none site-rule placeholder:text-[var(--quiet)]"
                  placeholder="name@company.com"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold" htmlFor="message">
              What are you working on?
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="input-focus-ring min-h-36 resize-y rounded-[var(--radius-panel)] border bg-transparent px-4 py-3.5 font-medium outline-none site-rule placeholder:text-[var(--quiet)]"
                placeholder="A short note is perfect."
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="submit" className="site-button-primary">
                {status === 'success' ? <Mail size={17} aria-hidden="true" /> : <Send size={17} aria-hidden="true" />}
                {status === 'success' ? 'Email draft ready' : 'Open email draft'}
              </button>
              <p className="text-sm site-muted" aria-live="polite">
                {status === 'error' && 'Please complete each field before opening your email app.'}
                {status === 'success' && 'Your email app should now have a ready-to-send draft.'}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
