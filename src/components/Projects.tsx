'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      number: 'project.001 / fraud-detection',
      title: 'Temporal Motif-Aware Fraud Detection',
      description: 'A hybrid fraud detection engine that models transactions as temporal graphs, capturing multi-hop fraud rings that rule-based systems miss entirely. XGBoost stacked on GNN embeddings for ensemble predictions with SHAP explainability.',
      metrics: [
        { val: '25%', key: 'false positive reduction' },
        { val: '10+', key: 'fraud features' },
        { val: 'GNN', key: '+ XGBoost ensemble' },
      ],
      tags: ['Python', 'Graph Neural Networks', 'XGBoost', 'SHAP', 'Pandas', 'NumPy'],
      link: 'https://github.com/Kushal1213/fraud-detection',
      glow: 'bg-gh-orange',
      reverse: false,
    },
    {
      number: 'project.002 / shopify-analytics',
      title: 'Shopify Analytics Platform',
      description: 'Real-time e-commerce analytics backend. Event-driven pipelines from raw webhook events to aggregated revenue dashboards with sub-second query response. Idempotency keys, retry logic, and MongoDB aggregation pipelines.',
      metrics: [
        { val: '5+', key: 'RESTful APIs' },
        { val: '<1s', key: 'query response' },
        { val: '0', key: 'data loss events' },
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Webhooks', 'Event-Driven'],
      link: 'https://github.com/Kushal1213/shopify',
      glow: 'bg-gh-accent',
      reverse: true,
    },
    {
      number: 'project.003 / sleep-oracle',
      title: 'Sleep Oracle: Health & Lifestyle Prediction',
      description: 'End-to-end ML pipeline for predicting Insomnia and Sleep Apnea from health and lifestyle data. Random Forest classifier selected over 3 baseline models using precision, recall, and F1 benchmarks. Deployed as a Flask web app.',
      metrics: [
        { val: '400+', key: 'patient records' },
        { val: '13', key: 'features' },
        { val: '3', key: 'class prediction' },
      ],
      tags: ['Python', 'scikit-learn', 'Flask', 'Pandas', 'Random Forest'],
      link: 'https://github.com/Kushal1213/Sleep-Oracle',
      glow: 'bg-gh-purple',
      reverse: false,
    },
    {
      number: 'project.004 / querycraft',
      title: 'QueryCraft — AI Text-to-SQL',
      description: 'An AI-powered platform enabling non-technical users to query structured databases using plain English. Built on Google Cloud with schema-aware prompt engineering and validation pipelines. 30% accuracy improvement over baseline.',
      metrics: [
        { val: '30%', key: 'SQL accuracy boost' },
        { val: 'GCP', key: 'Google Cloud powered' },
      ],
      tags: ['Python', 'Google Cloud AI', 'LLM', 'Prompt Engineering', 'SQL'],
      link: 'https://github.com/Kushal1213/querycraft',
      glow: 'bg-gh-green',
      reverse: true,
    },
  ]

  return (
    <section id="projects" className="relative z-10">
      <div className="px-10 py-24 max-w-[1100px] mx-auto">
        <motion.div
          className="font-mono text-xs text-gh-green tracking-[0.15em] uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          // projects
        </motion.div>

        <motion.h2
          className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Built from scratch.<br />Ships to prod.
        </motion.h2>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`min-h-screen flex items-center relative overflow-hidden ${index % 2 === 1 ? 'bg-gradient-to-br from-gh-bg to-[#0a1520]' : ''}`}
        >
          <div
            className={`absolute w-[500px] h-[500px] top-1/2 ${project.reverse ? 'right-[-100px]' : 'left-[-100px]'} -translate-y-1/2 ${project.glow}/20 rounded-full blur-[100px] pointer-events-none`}
          />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(63,185,80,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(63,185,80,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />

          <div className={`max-w-[1100px] mx-auto px-10 py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${project.reverse ? 'md:[&>*]:dir-rtl' : ''}`}>
            <div className={project.reverse ? 'dir-ltr' : ''}>
              <motion.div
                className="font-mono text-[11px] text-gh-muted tracking-[0.15em] uppercase mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {project.number}
              </motion.div>

              <motion.h3
                className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-base text-gh-muted leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex gap-6 mb-7 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-mono text-xl font-bold text-gh-green">{metric.val}</span>
                    <span className="text-xs text-gh-muted">{metric.key}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2 mb-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] px-2.5 py-1 bg-gh-surface border border-gh-border rounded-md text-gh-muted"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gh-accent font-semibold text-sm hover:gap-3 transition-all interactive"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                View on GitHub <ExternalLink size={16} />
              </motion.a>
            </div>

            <motion.div
              className="bg-gh-surface border border-gh-border rounded-2xl overflow-hidden h-[380px] relative"
              initial={{ opacity: 0, x: project.reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gh-surface/90 border-b border-gh-border px-4 py-2.5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-xs text-gh-muted">project.visual</span>
              </div>
              <div className="p-5 h-[calc(100%-41px)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-3">{index === 0 ? '🔗' : index === 1 ? '📊' : index === 2 ? '😴' : '🤖'}</div>
                  <div className="font-mono text-sm text-gh-muted">Interactive visualization</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  )
}
