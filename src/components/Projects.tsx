'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  Server,
  Database,
  Cloud,
  Cpu,
  Globe,
  Layers,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROJECTS } from '@/data/portfolio'

const archIcons = {
  frontend: Globe,
  backend: Server,
  database: Database,
  deployment: Cloud,
  ai: Cpu,
  infrastructure: Layers,
} as const

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container-main">
        <SectionHeader
          label="// projects"
          title="Built from scratch."
          titleAccent="Shipped to production."
          description="End-to-end systems solving real problems — from 500K+ transaction fraud detection to AI-powered analytics platforms. Each project includes architecture, metrics, and case study details."
        />

        <div className="space-y-8">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedId === project.id

            return (
              <motion.article
                key={project.id}
                className="glass-strong rounded-2xl overflow-hidden shadow-glow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className={`bg-gradient-to-br ${project.gradient} p-6 sm:p-8 border-b border-border/50`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="font-mono text-xs text-primary tracking-widest uppercase">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold mt-2 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-primary/90 font-medium mt-1">{project.subtitle}</p>
                    </div>
                    <span className="text-5xl opacity-80" aria-hidden="true">{project.icon}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed max-w-3xl">{project.summary}</p>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="grid sm:grid-cols-3 gap-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="glass rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gradient">{m.value}</div>
                        <div className="text-xs text-text-secondary mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-5">
                      <h4 className="font-semibold text-sm mb-2 text-text-primary">Problem</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="glass rounded-xl p-5">
                      <h4 className="font-semibold text-sm mb-2 text-text-primary">Solution</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-text-primary">Architecture</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {(Object.entries(project.architecture) as [keyof typeof archIcons, string[]][]).map(
                        ([key, items]) => {
                          const Icon = archIcons[key]
                          return (
                            <div key={key} className="glass rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Icon size={14} className="text-primary" />
                                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                                  {key}
                                </span>
                              </div>
                              <ul className="space-y-1">
                                {items.map((item) => (
                                  <li key={item} className="text-xs text-text-secondary">{item}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        }
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-text-primary">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((f) => (
                        <span
                          key={f}
                          className="font-mono text-xs px-3 py-1.5 glass rounded-lg text-text-secondary"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm interactive group"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={16} />
                      GitHub
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </motion.a>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-xl font-semibold text-sm hover:bg-surface-hover interactive"
                      aria-expanded={isExpanded}
                    >
                      Case Study
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border/50">
                          {[
                            { title: 'Research', content: project.caseStudy.research },
                            { title: 'Approach', content: project.caseStudy.approach },
                            { title: 'Tradeoffs', content: project.caseStudy.tradeoffs },
                            { title: 'Optimizations', content: project.caseStudy.optimizations },
                            { title: 'Learnings', content: project.caseStudy.learnings },
                            { title: 'Future Improvements', content: project.caseStudy.future },
                          ].map((item) => (
                            <div key={item.title} className="glass rounded-xl p-5">
                              <h5 className="font-semibold text-sm text-primary mb-2">{item.title}</h5>
                              <p className="text-sm text-text-secondary leading-relaxed">{item.content}</p>
                            </div>
                          ))}
                          <div className="md:col-span-2 glass rounded-xl p-5">
                            <h5 className="font-semibold text-sm text-primary mb-3">Challenges</h5>
                            <ul className="space-y-2">
                              {project.challenges.map((c) => (
                                <li key={c} className="text-sm text-text-secondary pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-primary">
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="md:col-span-2 glass rounded-xl p-5">
                            <h5 className="font-semibold text-sm text-primary mb-3">Results</h5>
                            <ul className="space-y-2">
                              {project.results.map((r) => (
                                <li key={r} className="text-sm text-text-secondary pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-success">
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
