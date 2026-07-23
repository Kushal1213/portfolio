'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Award } from 'lucide-react'
import { ACHIEVEMENTS } from '@/data/portfolio'

const normalizeDashes = (value: string) => value.replace(/[—–·]/g, '-')

export default function Achievements() {
  const reduceMotion = useReducedMotion()
  const certifications = ACHIEVEMENTS.find((group) => group.category === 'Certifications')?.items ?? []

  return (
    <section className="section-padding border-t site-rule">
      <div className="container-main grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
            <Award size={23} aria-hidden="true" />
          </div>
          <h2 className="mt-6 max-w-sm text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-5xl">
            Credentials with range.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 site-muted">
            Cloud, data science, and generative AI learning verified through industry programs.
          </p>
        </div>

        <ol className="grid gap-x-10 sm:grid-cols-2">
          {certifications.map((credential, index) => (
            <motion.li
              key={credential.title}
              className="border-t py-6 site-rule"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.045, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-semibold site-accent">{credential.year}</p>
              <h3 className="mt-2 font-extrabold leading-6 tracking-[-0.025em]">{normalizeDashes(credential.title)}</h3>
              <p className="mt-2 text-sm leading-6 site-muted">{normalizeDashes(credential.issuer)}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
