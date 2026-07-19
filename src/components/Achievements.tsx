'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, GraduationCap, Github } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { ACHIEVEMENTS } from '@/data/portfolio'

const categoryIcons = {
  Certifications: Award,
  'Open Source': Github,
  Academic: GraduationCap,
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative z-10">
      <div className="container-main">
        <SectionHeader
          label="// achievements"
          title="Verified"
          titleAccent="credentials."
          description="Industry certifications, open-source contributions, and academic milestones — all verified and documented."
        />

        <div className="space-y-10">
          {ACHIEVEMENTS.map((group, gi) => {
            const Icon = categoryIcons[group.category as keyof typeof categoryIcons] ?? Trophy

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <h3 className="text-lg font-semibold">{group.category}</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="glass rounded-xl p-5 hover:bg-surface-hover interactive"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      <p className="font-semibold text-sm leading-snug mb-2">{item.title}</p>
                      <p className="text-xs text-text-secondary">{item.issuer}</p>
                      <p className="font-mono text-[10px] text-primary mt-3">{item.year}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
