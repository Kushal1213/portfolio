'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, BookOpen, GraduationCap } from 'lucide-react'
import { EDUCATION, LEETCODE } from '@/data/portfolio'

const normalizeDashes = (value: string) => value.replace(/[—–]/g, '-')

export default function Education() {
  const reduceMotion = useReducedMotion()

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
          className="site-panel mt-12 rounded-2xl p-6 sm:p-9"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-ink)]">
                <GraduationCap size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.045em]">{EDUCATION.degree}</h3>
              <p className="mt-2 leading-7 site-muted">{EDUCATION.specialization}</p>
              <dl className="mt-7 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-5 border-t pt-3 site-rule">
                  <dt className="site-muted">Institution</dt>
                  <dd className="text-right font-semibold">{EDUCATION.institution}</dd>
                </div>
                <div className="flex items-start justify-between gap-5 border-t pt-3 site-rule">
                  <dt className="site-muted">Timeline</dt>
                  <dd className="text-right font-semibold">{normalizeDashes(EDUCATION.period)}</dd>
                </div>
                <div className="flex items-start justify-between gap-5 border-t pt-3 site-rule">
                  <dt className="site-muted">Current CGPA</dt>
                  <dd className="text-right font-semibold">{EDUCATION.cgpa}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:pt-1">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="site-accent" aria-hidden="true" />
                <h3 className="font-extrabold tracking-[-0.025em]">Relevant coursework</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {EDUCATION.coursework.map((course) => (
                  <span key={course} className="rounded-md border px-2.5 py-1.5 text-sm site-rule site-muted">
                    {course}
                  </span>
                ))}
              </div>
              <a href={LEETCODE.profileUrl} target="_blank" rel="noreferrer" className="site-link mt-9 inline-flex items-center gap-2 text-sm font-bold">
                {LEETCODE.total} problems solved on LeetCode
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
