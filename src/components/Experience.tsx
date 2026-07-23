'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, GitPullRequest, Wrench } from 'lucide-react'
import { EXPERIENCE, OPEN_SOURCE } from '@/data/portfolio'

const normalizeDashes = (value: string) => value.replace(/[—–]/g, '-')

export default function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--canvas-deep)' }}>
      <div className="container-main">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
            Building in public and in production.
          </h2>
          <p className="mt-5 text-lg leading-8 site-muted">
            Experiences that sharpened how I test, document, and improve real systems.
          </p>
        </div>

        <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {EXPERIENCE.map((experience, index) => (
            <motion.article
              key={experience.role}
              className="border-t pt-6 site-rule"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-semibold site-accent">{normalizeDashes(experience.date)}</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.045em]">{experience.role}</h3>
              {experience.companyUrl ? (
                <a href={experience.companyUrl} target="_blank" rel="noreferrer" className="site-link mt-1 inline-flex items-center gap-1.5 text-sm font-bold">
                  {experience.company}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-1 text-sm font-bold site-muted">{experience.company}</p>
              )}
              <ul className="mt-6 space-y-3">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="grid grid-cols-[10px_1fr] gap-3 text-sm leading-6 site-muted">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    {normalizeDashes(bullet)}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="site-panel mt-16 rounded-2xl p-6 sm:p-9"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
                  <Wrench size={19} aria-hidden="true" />
                </div>
                <p className="font-extrabold tracking-[-0.035em]">Open source at AMD Lemonade SDK</p>
              </div>
              <p className="mt-5 max-w-md leading-7 site-muted">
                Contributions focused on production endpoint coverage, documentation, and surfacing issues that made the test suite more trustworthy.
              </p>
              <a href={OPEN_SOURCE.repoUrl} target="_blank" rel="noreferrer" className="site-link mt-6 inline-flex items-center gap-2 text-sm font-bold">
                Visit the repository
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {OPEN_SOURCE.stats.map((stat, index) => (
                <div key={stat.label} className={index > 0 ? 'border-l pl-5 site-rule' : ''}>
                  <p className="text-3xl font-extrabold tracking-[-0.055em]">{stat.value}</p>
                  <p className="mt-1 text-sm leading-5 site-muted">{stat.label}</p>
                </div>
              ))}
              <div className="sm:col-span-3 border-t pt-5 site-rule">
                <div className="grid gap-3 sm:grid-cols-2">
                  {OPEN_SOURCE.contributions.map((item) => (
                    <div key={item.title} className="flex gap-3 text-sm leading-6 site-muted">
                      <GitPullRequest className="mt-1 shrink-0 site-accent" size={15} aria-hidden="true" />
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
