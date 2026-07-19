'use client'

import { motion } from 'framer-motion'
import { Code2, Trophy, Target, TrendingUp, ExternalLink, Flame } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { LEETCODE } from '@/data/portfolio'

export default function LeetCode() {
  const stats = [
    { value: String(LEETCODE.total), label: 'Total Solved', icon: Code2 },
    { value: String(LEETCODE.medium), label: 'Medium', icon: Target },
    { value: String(LEETCODE.hard), label: 'Hard', icon: Trophy },
    { value: String(LEETCODE.easy), label: 'Easy', icon: Flame },
  ]

  const difficultyBreakdown = [
    { label: 'Easy', count: LEETCODE.easy, total: LEETCODE.total, color: 'bg-success' },
    { label: 'Medium', count: LEETCODE.medium, total: LEETCODE.total, color: 'bg-warning' },
    { label: 'Hard', count: LEETCODE.hard, total: LEETCODE.total, color: 'bg-error' },
  ]

  const topTopics = [
    'Arrays & Hashing',
    'Two Pointers',
    'Sliding Window',
    'Binary Search',
    'Dynamic Programming',
    'Graph Algorithms',
    'Tree Traversal',
    'Backtracking',
  ]

  return (
    <section id="leetcode" className="section-padding relative z-10 bg-bg-secondary/30">
      <div className="container-main">
        <SectionHeader
          label="// leetcode"
          title="Problem-solving"
          titleAccent="discipline."
          description={`${LEETCODE.total} problems solved on LeetCode — consistent DSA practice that strengthens algorithmic thinking for technical interviews. All stats pulled from my live profile.`}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center hover:bg-surface-hover interactive"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
            >
              <stat.icon className="text-primary mx-auto mb-2" size={24} />
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-5">Difficulty Breakdown</h3>
            <div className="space-y-4 mb-8">
              {difficultyBreakdown.map((d) => {
                const pct = Math.round((d.count / d.total) * 100)
                return (
                  <div key={d.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{d.label}</span>
                      <span className="text-text-secondary font-mono">{d.count} ({pct}%)</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${d.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <h3 className="text-lg font-semibold mb-4">Core Topics</h3>
            <div className="flex flex-wrap gap-2">
              {topTopics.map((topic) => (
                <span key={topic} className="px-3 py-1.5 glass rounded-lg text-sm text-text-secondary">
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-strong rounded-2xl p-8 shadow-glow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-5">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <Code2 size={32} className="text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold">@{LEETCODE.username}</h3>
                <p className="text-text-secondary text-sm mt-1 flex items-center justify-center gap-1">
                  <TrendingUp size={14} />
                  Global Rank #{LEETCODE.ranking.toLocaleString()}
                </p>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">
                View my complete submission history, contest activity, and badges on LeetCode.
              </p>

              <motion.a
                href={LEETCODE.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold interactive group"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={18} />
                View LeetCode Profile
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
