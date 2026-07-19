'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, BookOpen, Award, MapPin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { EDUCATION } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section-padding relative z-10 bg-bg-secondary/30">
      <div className="container-main">
        <SectionHeader
          label="// education"
          title="Academic"
          titleAccent="foundation."
          description="Strong theoretical CS foundation with AI/ML specialization, complemented by hands-on project and open-source experience."
        />

        <motion.div
          className="glass-strong rounded-2xl p-7 sm:p-10 shadow-glow mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{EDUCATION.degree}</h3>
                  <p className="text-text-secondary mt-1">{EDUCATION.specialization}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-text-secondary">
                  <BookOpen size={16} className="text-primary flex-shrink-0" />
                  {EDUCATION.institution}
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  {EDUCATION.location}
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Calendar size={16} className="text-primary flex-shrink-0" />
                  {EDUCATION.period} · {EDUCATION.graduation}
                </div>
                <div className="flex items-center gap-3">
                  <Award size={16} className="text-primary flex-shrink-0" />
                  <span className="text-text-secondary">
                    CGPA: <span className="text-text-primary font-semibold">{EDUCATION.cgpa}</span>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.coursework.map((course, i) => (
                  <motion.span
                    key={course}
                    className="px-3 py-1.5 glass rounded-lg text-sm text-text-secondary hover:text-text-primary transition-colors"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { value: EDUCATION.cgpa, label: 'Current CGPA', icon: Award },
            { value: '2026', label: 'Expected Graduation', icon: Calendar },
            { value: `${EDUCATION.coursework.length}+`, label: 'Technical Courses', icon: BookOpen },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="glass rounded-xl p-5 text-center hover:bg-surface-hover interactive"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <item.icon className="text-primary mx-auto mb-2" size={22} />
              <div className="text-2xl font-bold text-gradient">{item.value}</div>
              <div className="text-sm text-text-secondary mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
