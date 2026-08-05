'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { EDUCATION } from '@/data/portfolio'

const normalizeDashes = (value: string) => value.replace(/[—–]/g, '-')

export default function Education() {
  const reduceMotion = useReducedMotion()

  const stats = [
    { label: 'Institution', value: EDUCATION.institution },
    { label: 'Timeline', value: normalizeDashes(EDUCATION.period) },
    { label: 'Current CGPA', value: EDUCATION.cgpa },
  ]

  return (
    <section id="education" className="section-padding" style={{ backgroundColor: 'var(--canvas-deep)' }}>
      <div className="container-main">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
            Foundations worth building on.
          </h2>
          <p className="mt-5 text-lg leading-8 site-muted">
            Computer science fundamentals paired with a focused minor in AI and robotics.
          </p>
        </div>

        <motion.div
          className="mt-12"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-2xl font-extrabold tracking-[-0.045em] sm:text-3xl">{EDUCATION.degree}</h3>
          <p className="mt-2 max-w-2xl leading-7 site-muted">{EDUCATION.specialization}</p>

          <dl className="mt-10 grid gap-6 border-y py-8 site-rule sm:grid-cols-3 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.1em] site-quiet">{stat.label}</dt>
                <dd className="mt-2 text-lg font-extrabold tracking-[-0.03em] sm:text-xl">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <h4 className="font-extrabold tracking-[-0.025em]">Relevant coursework</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {EDUCATION.coursework.map((course) => (
                <span key={course} className="rounded-md border px-2.5 py-1.5 text-sm site-rule site-muted">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
