'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { SKILL_CATEGORIES } from '@/data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="container-main">
        <SectionHeader
          label="// skills"
          title="Technical"
          titleAccent="arsenal."
          description="Categorized by domain with experience levels — no arbitrary percentages, just honest assessment of where I've built, deployed, and contributed."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.label}
              className="glass rounded-2xl p-5 hover:bg-surface-hover interactive group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -3 }}
            >
              <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-4">
                {category.label}
              </p>
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                    <span className="text-[11px] text-text-tertiary font-mono">{skill.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
