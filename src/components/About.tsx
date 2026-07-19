'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Target, Rocket, Cpu, Database } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { EDUCATION } from '@/data/portfolio'

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Engineering Mindset',
      description:
        'I decompose complex problems into testable components, design for scalability, and validate assumptions with data before shipping.',
      color: 'text-primary',
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description:
        'From Graph Neural Networks to production LLM inference servers — I learn by building, contributing to open source, and solving hard problems.',
      color: 'text-secondary',
    },
    {
      icon: Target,
      title: 'Impact-Driven',
      description:
        'Every project targets measurable outcomes: 25% fraud detection improvement, 30% SQL accuracy gains, zero data loss in production pipelines.',
      color: 'text-accent',
    },
    {
      icon: Rocket,
      title: 'Production Focus',
      description:
        'I ship with testing, documentation, and deployment in mind — from AMD open-source PRs to Flask and Node.js production deployments.',
      color: 'text-success',
    },
  ]

  const techFocus = [
    { label: 'Backend Systems', icon: Database },
    { label: 'Machine Learning', icon: Cpu },
    { label: 'Generative AI', icon: Zap },
    { label: 'Cloud Infrastructure', icon: Rocket },
  ]

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="container-main">
        <SectionHeader
          label="// about"
          title="Engineer who builds"
          titleAccent="systems that scale."
          description={`${EDUCATION.degree} student at ${EDUCATION.institution}, graduating ${EDUCATION.graduation}. I specialize in AI/ML pipelines, backend architecture, and open-source contributions — turning complex problems into production software.`}
        />

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="glass rounded-2xl p-7 hover:bg-surface-hover interactive"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <h.icon className={`${h.color} mb-3`} size={24} />
              <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            className="glass-strong rounded-2xl overflow-hidden shadow-glow"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface/90 border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-text-secondary">engineer.ts</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto">
              <pre>
                <span className="text-primary">interface</span>{' '}
                <span className="text-secondary">Engineer</span> {'{'}
                {'\n'}  name: <span className="text-accent">&quot;Kushal Choudhary&quot;</span>;
                {'\n'}  role: <span className="text-accent">&quot;Software Engineer&quot;</span>;
                {'\n'}  education: <span className="text-accent">&quot;B.Tech CSE (AI &amp; Robotics)&quot;</span>;
                {'\n'}  university: <span className="text-accent">&quot;VIT Chennai&quot;</span>;
                {'\n'}  graduation: <span className="text-accent">2026</span>;
                {'\n'}  cgpa: <span className="text-accent">{EDUCATION.cgpa}</span>;
                {'\n\n'}  focus: <span className="text-primary">Array</span>&lt;<span className="text-secondary">string</span>&gt; = [
                {'\n'}    <span className="text-accent">&quot;Backend Systems&quot;</span>,
                {'\n'}    <span className="text-accent">&quot;Machine Learning&quot;</span>,
                {'\n'}    <span className="text-accent">&quot;Generative AI&quot;</span>,
                {'\n'}    <span className="text-accent">&quot;Open Source&quot;</span>,
                {'\n'}  ];
                {'\n\n'}  <span className="text-primary">async</span>{' '}
                <span className="text-secondary">build</span>() {'{'}
                {'\n'}    <span className="text-primary">return</span>{' '}
                <span className="text-accent">&quot;Production-ready solutions&quot;</span>;
                {'\n'}  {'}'}
                {'\n'}{'}'}
              </pre>
            </div>
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Technical Focus</h3>
            {techFocus.map((tech, i) => (
              <motion.div
                key={tech.label}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-surface-hover interactive"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <tech.icon className="text-primary" size={20} />
                </div>
                <span className="font-medium">{tech.label}</span>
              </motion.div>
            ))}
            <p className="text-text-secondary text-sm leading-relaxed pt-2">
              I write clean, maintainable code and design systems that handle real-world scale.
              Whether architecting REST APIs, training ML models on 500K+ records, or contributing
              test coverage to production inference servers — I focus on measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
