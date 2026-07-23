'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/data/portfolio'

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="section-padding border-t site-rule">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <h2 className="max-w-md text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
              Tools, but in context.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 site-muted">
              A practical stack shaped by projects, deployments, open source, and deliberate study.
            </p>
          </div>

          <div className="grid gap-x-10 lg:grid-cols-2">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.article
                key={category.label}
                className="border-t py-6 site-rule"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.035, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-extrabold tracking-[-0.025em]">{category.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
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
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
