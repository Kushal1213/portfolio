'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      date: 'Apr 2025 – Jul 2025',
      role: 'Trainee — Generative AI Engineering',
      company: 'SmartBridge × Google Cloud',
      bullets: [
        'Selected for a competitive externship focused on building real-world Generative AI applications on Google Cloud infrastructure.',
        'Built QueryCraft — an AI-powered Text-to-SQL platform enabling non-technical users to query structured databases using natural language.',
        'Applied prompt engineering and schema grounding techniques, achieving a 30% improvement in SQL accuracy over baseline.',
        'Implemented query validation and execution pipelines before surfacing results, reducing hallucinated column/table names significantly.',
      ],
    },
    {
      date: 'Jun 2026 (present)',
      role: 'Open Source Contributor',
      company: 'AMD Lemonade — lemonade-sdk/lemonade',
      bullets: [
        'Identified systemic test coverage gaps in AMD\'s production LLM inference server (C++ + Python test suite).',
        '2 PRs merged into main — test coverage for production endpoint + LangChain integration documentation.',
        'Raised 5 actionable issues — bugs, silent test shadowing, race condition detection gaps — 3 fixed by core team.',
        'CI architecture improvement (env-var gated integration tests) adopted by maintainer across the codebase.',
      ],
      highlight: true,
    },
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#0a0f1a] to-gh-bg relative z-10">
      <div className="max-w-[1100px] mx-auto px-10">
        <motion.div
          className="font-mono text-xs text-gh-green tracking-[0.15em] uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          // experience
        </motion.div>

        <motion.h2
          className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Where I've Worked
        </motion.h2>

        <div className="relative mt-16 pl-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gh-green to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[-32px] top-1 w-4 h-4 rounded-full border-2 ${
                  exp.highlight
                    ? 'bg-gh-green-dark border-gh-green shadow-[0_0_12px_rgba(63,185,80,0.5)]'
                    : 'bg-gh-green/10 border-gh-green shadow-[0_0_12px_rgba(63,185,80,0.3)]'
                }`}
              />

              <div className="font-mono text-xs text-gh-green tracking-[0.08em] mb-1.5">{exp.date}</div>
              <div className="text-xl font-bold mb-1">{exp.role}</div>
              <div className="text-base text-gh-muted mb-4">{exp.company}</div>

              <ul className="flex flex-col gap-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-base text-gh-muted pl-5 relative leading-relaxed">
                    <span className="absolute left-0 text-gh-green font-mono">→</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet.replace(/competitive|QueryCraft|30%|2 PRs|5 actionable/g, '<strong class="text-gh-text font-semibold">$&</strong>') }} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
