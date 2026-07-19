'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { EXPERIENCE } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10 bg-bg-secondary/30">
      <div className="container-main">
        <SectionHeader
          label="// experience"
          title="Professional"
          titleAccent="journey."
          description="From competitive AI externships to open-source contributions at AMD — hands-on experience building and improving production-grade systems."
        />

        <div className="relative space-y-8">
          <div className="absolute left-[1.125rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent hidden md:block" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.role}
              className="relative md:pl-14"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`absolute left-3 top-7 w-3.5 h-3.5 rounded-full border-2 hidden md:block ${
                  exp.highlight
                    ? 'bg-primary border-primary shadow-[0_0_16px_rgba(99,102,241,0.5)]'
                    : 'bg-surface border-primary/60'
                }`}
              />

              <motion.div
                className={`glass rounded-2xl p-7 hover:bg-surface-hover interactive ${
                  exp.highlight ? 'shadow-glow border-primary/20' : ''
                }`}
                whileHover={{ y: -3 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      exp.highlight ? 'bg-primary/15' : 'bg-surface'
                    }`}>
                      <Briefcase className={exp.highlight ? 'text-primary' : 'text-text-secondary'} size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:underline"
                        >
                          {exp.company}
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                      )}
                    </div>
                  </div>
                  {exp.highlight && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)} className="text-sm text-text-secondary pl-4 relative leading-relaxed">
                      <span className="absolute left-0 text-primary font-mono text-xs">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
