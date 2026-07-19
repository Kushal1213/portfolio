'use client'

import { motion } from 'framer-motion'
import { GitPullRequest, Bug, FileText, AlertCircle, Github, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { OPEN_SOURCE } from '@/data/portfolio'

const typeIcons = {
  pr: GitPullRequest,
  issue: AlertCircle,
}

const statusColors = {
  merged: 'text-success bg-success/10',
  fixed: 'text-accent bg-accent/10',
}

export default function OpenSource() {
  return (
    <section id="opensource" className="section-padding relative z-10 bg-bg-secondary/30">
      <div className="container-main">
        <SectionHeader
          label="// open source"
          title="Contributing to"
          titleAccent="production systems."
          description="Active contributor to AMD Lemonade SDK — a production LLM inference server. Merged PRs, raised actionable issues, and improved CI architecture."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {OPEN_SOURCE.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-5 text-center hover:bg-surface-hover interactive"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
            </motion.div>
          ))}
          <motion.div
            className="glass rounded-xl p-5 text-center hover:bg-surface-hover interactive col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
          >
            <Github className="text-primary mx-auto mb-2" size={22} />
            <div className="text-lg font-bold text-gradient">AMD</div>
            <div className="text-xs text-text-secondary mt-1">Lemonade SDK</div>
          </motion.div>
        </div>

        <div className="space-y-3">
          {OPEN_SOURCE.contributions.map((item, i) => {
            const Icon = typeIcons[item.type]
            const colorClass = statusColors[item.status as keyof typeof statusColors]

            return (
              <motion.div
                key={item.title}
                className="glass rounded-xl p-5 hover:bg-surface-hover interactive"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{OPEN_SOURCE.repo}</p>
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full flex-shrink-0 ${colorClass}`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={OPEN_SOURCE.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 glass rounded-xl font-semibold hover:bg-surface-hover interactive"
            whileHover={{ scale: 1.03, y: -2 }}
          >
            <Github size={18} />
            View lemonade-sdk/lemonade
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
