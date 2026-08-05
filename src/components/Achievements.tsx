'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ACHIEVEMENTS } from '@/data/portfolio'

const normalizeDashes = (value: string) => value.replace(/[—–·]/g, '-')

export default function Achievements() {
  const reduceMotion = useReducedMotion()
  const certifications = ACHIEVEMENTS.find((group) => group.category === 'Certifications')?.items ?? []

  return (
    <section className="section-padding border-t site-rule">
      <div className="container-main">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] text-balance sm:text-5xl">
            Credentials with range.
          </h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-8 site-muted">
            Cloud, data science, and generative AI learning verified through industry programs.
          </p>
        </div>

        <ol className="mt-12 max-w-4xl">
          {certifications.map((credential, index) => (
            <motion.li
              key={credential.title}
              className="grid grid-cols-[3rem_1fr] gap-4 border-t py-5 site-rule sm:grid-cols-[4.5rem_1fr_auto] sm:gap-8"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.045, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="font-mono text-sm site-quiet tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-extrabold leading-6 tracking-[-0.025em]">
                  {normalizeDashes(credential.title)}
                </h3>
                <p className="mt-1 text-sm leading-6 site-muted">{normalizeDashes(credential.issuer)}</p>
              </div>
              <p className="hidden font-mono text-sm site-accent sm:block">{credential.year}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
