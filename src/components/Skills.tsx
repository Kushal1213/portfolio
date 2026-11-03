'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/data/portfolio'

const marqueeSkills = SKILL_CATEGORIES.flatMap((category) => category.skills.map((skill) => skill.name))

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="section-padding border-t site-rule">
      <div className="container-main">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <h2 className="max-w-4xl text-[clamp(3rem,6vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.075em] text-balance">
            Capability is the system, not the tool list.
          </h2>
          <p className="mt-5 text-lg leading-8 site-muted">
            A practical stack shaped by projects, deployments, open source, and deliberate study.
          </p>
        </div>

        <div className="relative -mx-5 mt-14 overflow-hidden border-y py-5 site-rule sm:-mx-8 lg:-mx-10 xl:-mx-12" aria-hidden="true">
          <div className="skill-marquee flex w-max items-center gap-8 whitespace-nowrap px-5 sm:px-8">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="inline-flex items-center gap-8 text-xl font-semibold tracking-[-0.03em] site-muted">
                {skill}<span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-10">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.label}
              className="grid gap-4 border-t pt-6 site-rule sm:grid-cols-[180px_1fr] sm:gap-8 lg:grid-cols-[220px_1fr]"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] site-quiet">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    title={skill.level}
                    className="rounded-md border px-2.5 py-1.5 text-sm font-medium site-rule site-muted transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[var(--accent)] hover:text-[var(--ink)] active:scale-[0.98]"
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
