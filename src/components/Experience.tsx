'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, GitPullRequest } from '@phosphor-icons/react'
import { EXPERIENCE, OPEN_SOURCE } from '@/data/portfolio'

const normalizeDashes = (value: string) => value.replace(/[—–]/g, '-')

export default function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--canvas-deep)' }}>
      <div className="container-main">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] text-balance sm:text-5xl lg:text-6xl">
            Building in public and in production.
          </h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-8 site-muted">
            Experiences that sharpened how I test, document, and improve real systems.
          </p>
        </div>

        <div className="relative mt-14 max-w-3xl">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-[var(--line)]" aria-hidden="true" />
          <div className="space-y-0">
            {EXPERIENCE.map((experience, index) => (
              <motion.article
                key={experience.role}
                className="relative grid grid-cols-[15px_1fr] gap-5 pb-12 last:pb-0 sm:gap-8"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="relative z-[1] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--canvas-deep)]" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs font-medium tracking-wide site-accent">
                    {normalizeDashes(experience.date)}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.045em]">{experience.role}</h3>
                  {experience.companyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="site-link mt-1 inline-flex items-center gap-1.5 text-sm font-bold"
                    >
                      {experience.company}
                      <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-bold site-muted">{experience.company}</p>
                  )}
                  <ul className="mt-5 space-y-3">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="max-w-[65ch] text-sm leading-6 site-muted">
                        {normalizeDashes(bullet)}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 border-y py-10 site-rule"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-xl font-extrabold tracking-[-0.035em] sm:text-2xl">
                Open source at AMD Lemonade SDK
              </p>
              <p className="mt-4 max-w-[65ch] leading-7 site-muted">
                Contributions focused on production endpoint coverage, documentation, and surfacing issues that made the test suite more trustworthy.
              </p>
              <a
                href={OPEN_SOURCE.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="site-link mt-6 inline-flex items-center gap-2 text-sm font-bold"
              >
                Visit the repository
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
              </a>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-4">
                {OPEN_SOURCE.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-3xl font-semibold tracking-[-0.055em] tabular-nums">{stat.value}</p>
                    <p className="mt-1 text-sm leading-5 site-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {OPEN_SOURCE.contributions.map((item) => (
                  <div key={item.title} className="flex gap-3 text-sm leading-6 site-muted">
                    <GitPullRequest className="mt-1 shrink-0 site-accent" size={15} weight="bold" aria-hidden="true" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
