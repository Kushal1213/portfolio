'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react'
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
  const [errors, setErrors] = useState<Partial<FormState>>({})

  function validate() {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.'
    if (!form.message.trim()) next.message = 'Message is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!validate()) {
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
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] text-balance sm:text-5xl lg:text-6xl">
            Let&apos;s build something that holds up.
          </h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-8 site-muted">
            I am open to software engineering roles, internships, and thoughtful technical collaborations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <a
              className="site-link inline-flex break-all text-xl font-extrabold tracking-[-0.04em] sm:text-2xl"
              href={`mailto:${SITE.email}`}
            >
              {SITE.email}
            </a>
            <p className="mt-4 max-w-[65ch] leading-7 site-muted">{SITE.availability.replace('·', '-')}</p>

            <div className="mt-9 space-y-0">
              <a
                className="site-link flex items-center justify-between border-t py-3 text-sm font-bold site-rule"
                href={SITE.urls.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <GithubLogo size={17} weight="bold" aria-hidden="true" /> GitHub
                </span>
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
              </a>
              <a
                className="site-link flex items-center justify-between border-t py-3 text-sm font-bold site-rule"
                href={SITE.urls.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <LinkedinLogo size={17} weight="bold" aria-hidden="true" /> LinkedIn
                </span>
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
              </a>
              <a
                className="site-link flex items-center justify-between border-y py-3 text-sm font-bold site-rule"
                href={SITE.urls.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                <span>LeetCode</span>
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
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
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold" htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="input-focus-ring rounded-[var(--radius-control)] border bg-transparent px-4 py-3.5 font-medium outline-none site-rule placeholder:text-[var(--quiet)]"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-xs font-medium text-[var(--error,#d96d61)]">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold" htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="input-focus-ring rounded-[var(--radius-control)] border bg-transparent px-4 py-3.5 font-medium outline-none site-rule placeholder:text-[var(--quiet)]"
                  placeholder="name@company.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="text-xs font-medium text-[var(--error,#d96d61)]">
                    {errors.email}
                  </span>
                )}
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold" htmlFor="message">
              What are you working on?
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="input-focus-ring min-h-36 resize-y rounded-[var(--radius-control)] border bg-transparent px-4 py-3.5 font-medium outline-none site-rule placeholder:text-[var(--quiet)]"
                placeholder="A short note is perfect."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span id="message-error" className="text-xs font-medium text-[var(--error,#d96d61)]">
                  {errors.message}
                </span>
              )}
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="submit" className="site-button-primary group">
                {status === 'success' ? (
                  <EnvelopeSimple size={17} weight="bold" aria-hidden="true" />
                ) : (
                  <PaperPlaneTilt size={17} weight="bold" aria-hidden="true" />
                )}
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
