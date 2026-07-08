'use client'

import { motion } from 'framer-motion'

export default function OpenSource() {
  const prs = [
    {
      icon: '🔀',
      title: 'PR #2096 — GET /v1/pull/variants test coverage',
      repo: 'lemonade-sdk/lemonade',
      date: 'Jun 2026',
      tag: 'merged',
      tagColor: 'tag-merged',
      description: 'Added 4 pytest cases covering all code paths (400, 400, 404, 200) for the production-facing endpoint used by the CLI and desktop app. Gated live HuggingFace tests behind env var to prevent CI rate-limit failures — adopted by maintainer. 58 CI checks passed.',
    },
    {
      icon: '📄',
      title: 'PR #2038 — LangChain integration guide for Lemonade Server',
      repo: 'lemonade-sdk/lemonade',
      date: 'Jun 2026',
      tag: 'merged',
      tagColor: 'tag-merged',
      description: 'Authored 218-line integration guide covering 3 end-to-end examples: simple chat, RAG pipeline with PDF ingestion, and prompt template chains. Reproduced all examples against a real PDF. Reviewed by two core maintainers; 61 CI checks passed.',
    },
    {
      icon: '🐛',
      title: 'Issue #2231 — POST endpoints return 500 instead of 400 for malformed JSON',
      repo: 'lemonade-sdk/lemonade',
      date: '',
      tag: 'bug',
      tagColor: 'tag-bug',
      description: 'Identified systemic error-handling bug across POST endpoints — empty/malformed JSON bodies returned 500 (server error) instead of the correct 400 (bad request). Filed issue, led to PR #2232.',
    },
    {
      icon: '🔎',
      title: 'Issue #2041 — Silent test shadowing: /stats endpoint had zero coverage',
      repo: 'lemonade-sdk/lemonade',
      date: '',
      tag: 'testing',
      tagColor: 'tag-test',
      description: 'Discovered two test methods sharing the test_021_ prefix — Python\'s class dict silently overwrote one, leaving the /stats endpoint completely untested in production.',
    },
  ]

  const tagStyles = {
    'tag-merged': 'bg-gh-purple/15 text-gh-purple border-gh-purple/30',
    'tag-bug': 'bg-gh-orange/10 text-gh-orange border-gh-orange/30',
    'tag-test': 'bg-gh-accent/10 text-gh-accent border-gh-accent/30',
    'tag-docs': 'bg-gh-green/10 text-gh-green border-gh-green/30',
  }

  return (
    <section id="oss" className="py-24 bg-gradient-to-b from-gh-bg to-[#0a0f1a] relative z-10">
      <div className="max-w-[1100px] mx-auto px-10">
        <motion.div
          className="font-mono text-xs text-gh-green tracking-[0.15em] uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          // open-source
        </motion.div>

        <motion.h2
          className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Shipped. Merged. Deployed.
        </motion.h2>

        <motion.p
          className="text-lg text-gh-muted max-w-[540px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Real contributions to AMD's production LLM inference server — not just forks and stars.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[
            { num: '2', label: 'PRs Merged to main' },
            { num: '5', label: 'Issues Raised' },
            { num: '119', label: 'CI Checks Passed' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gh-surface border border-gh-border rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="font-mono text-[36px] font-extrabold text-gh-green leading-none">{stat.num}</div>
              <div className="text-sm text-gh-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* PR Flow Animation */}
        <motion.div
          className="bg-gh-surface border border-gh-border rounded-2xl p-10 mt-12 overflow-hidden relative min-h-[200px] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {[
              { label: 'identify bug', sub: '🔍 issue filed' },
              { label: 'write fix', sub: '✍️ code + tests', active: true, badge: 'PR' },
              { label: 'CI pipeline', sub: '⚙️ 58+ checks' },
              { label: 'maintainer review', sub: '👀 fl0rianr' },
              { label: 'merged to main', sub: '✅ shipped', success: true },
            ].map((step, index) => (
              <>
                <div
                  key={index}
                  className={`bg-gh-bg border rounded-xl p-3 text-center relative ${step.active ? 'border-gh-green shadow-[0_0_20px_rgba(63,185,80,0.2)]' : 'border-gh-border'} ${step.success ? 'border-gh-green' : ''}`}
                >
                  {step.badge && (
                    <span className="absolute -top-2 -right-2 bg-gh-green-dark text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                      {step.badge}
                    </span>
                  )}
                  <div className="text-[12px] text-gh-muted">{step.label}</div>
                  <div className={`text-sm ${step.success ? 'text-gh-green' : ''}`}>{step.sub}</div>
                </div>
                {index < 4 && (
                  <motion.span
                    className="text-gh-green text-xl"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                )}
              </>
            ))}
          </div>
        </motion.div>

        {/* PR List */}
        <div className="flex flex-col gap-4 mt-12">
          {prs.map((pr, index) => (
            <motion.div
              key={index}
              className="bg-gh-surface border border-gh-border rounded-xl p-5 flex gap-4 hover:border-gh-green hover:translate-x-1 transition-all interactive"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-2xl flex-shrink-0">{pr.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-base mb-1">
                  {pr.title}
                  {pr.tag && (
                    <span className={`ml-2 font-mono text-[11px] px-2 py-0.5 rounded-full border ${tagStyles[pr.tagColor as keyof typeof tagStyles]}`}>
                      {pr.tag}
                    </span>
                  )}
                </div>
                <div className="font-mono text-[12px] text-gh-muted flex gap-3 flex-wrap">
                  <span>{pr.repo}</span>
                  {pr.date && <span>{pr.date}</span>}
                </div>
                <p className="text-[13px] text-gh-muted mt-2 leading-relaxed">{pr.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
