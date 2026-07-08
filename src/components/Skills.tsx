'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      label: 'Languages',
      skills: ['Python', 'C++', 'JavaScript', 'SQL'],
    },
    {
      label: 'AI / ML',
      skills: ['Generative AI', 'Prompt Engineering', 'Graph Neural Networks', 'XGBoost', 'scikit-learn', 'LangChain', 'RAG'],
    },
    {
      label: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'Webhooks'],
    },
    {
      label: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
    },
    {
      label: 'Cloud & DevOps',
      skills: ['AWS', 'Google Cloud', 'Oracle OCI', 'Docker', 'Git', 'Postman'],
    },
    {
      label: 'Frontend',
      skills: ['React.js', 'HTML/CSS', 'JavaScript'],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gh-bg relative z-10">
      <div className="max-w-[1100px] mx-auto px-10">
        <motion.div
          className="font-mono text-xs text-gh-green tracking-[0.15em] uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          // skills
        </motion.div>

        <motion.h2
          className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Toolkit
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gh-surface border border-gh-border rounded-xl p-6 hover:border-gh-accent hover:-translate-y-1 transition-all interactive"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="font-mono text-[11px] text-gh-green tracking-[0.1em] uppercase mb-3.5">
                {category.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-[12px] px-3 py-1.5 bg-gh-bg border border-gh-border rounded-md text-gh-muted hover:border-gh-accent hover:text-gh-text transition-all"
                  >
                    {skill}
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
