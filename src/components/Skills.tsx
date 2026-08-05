'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/data/portfolio'

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="section-padding border-t site-rule">
      <div className="container-main">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
            Tools, but in context.
          </h2>
          <p className="mt-5 text-lg leading-8 site-muted">
            A practical stack shaped by projects, deployments, open source, and deliberate study.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.label}
              className="grid gap-4 border-t pt-6 site-rule sm:grid-cols-[180px_1fr] sm:gap-8 lg:grid-cols-[220px_1fr]"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] site-quiet">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    title={skill.level}
                    className="rounded-md border px-2.5 py-1.5 text-sm font-medium site-rule site-muted transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
