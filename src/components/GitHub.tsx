'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Star, GitFork, ExternalLink, Code } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { GITHUB, OPEN_SOURCE } from '@/data/portfolio'

export default function GitHubSection() {
  const stats = [
    { value: String(GITHUB.publicRepos), label: 'Public Repositories' },
    { value: OPEN_SOURCE.stats[0].value, label: 'PRs Merged (AMD)' },
    { value: OPEN_SOURCE.stats[1].value, label: 'Issues Raised' },
  ]

  const languages = [
    { name: 'Python', level: 'Primary — ML & Backend' },
    { name: 'JavaScript', level: 'Node.js & Analytics' },
    { name: 'TypeScript', level: 'Frontend & Portfolio' },
    { name: 'C++', level: 'Open Source (AMD Lemonade)' },
  ]

  return (
    <section id="github" className="section-padding relative z-10">
      <div className="container-main">
        <SectionHeader
          label="// github"
          title="Code &"
          titleAccent="contributions."
          description={`${GITHUB.publicRepos} public repositories spanning ML pipelines, backend systems, and open-source contributions to AMD's LLM inference server.`}
        />

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {stats.map((stat, i) => (
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
        </div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-5">Featured Repositories</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {GITHUB.pinnedRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 hover:bg-surface-hover interactive group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github size={18} className="text-primary" />
                    <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-text-tertiary group-hover:text-primary" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{repo.description}</p>
                <span className="font-mono text-xs text-primary">{repo.language}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            className="glass-strong rounded-2xl p-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <Code size={18} className="text-primary" />
              Top Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0">
                  <span className="font-medium text-sm">{lang.name}</span>
                  <span className="text-xs text-text-tertiary font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-strong rounded-2xl p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={GITHUB.avatarUrl}
              alt={GITHUB.username}
              width={80}
              height={80}
              className="rounded-2xl mb-4"
            />
            <p className="font-semibold">@{GITHUB.username}</p>
            <p className="text-text-secondary text-sm mt-1 mb-5">Software Engineer · Open Source Contributor</p>
            <motion.a
              href={GITHUB.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm interactive"
              whileHover={{ scale: 1.03 }}
            >
              <Github size={16} />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
