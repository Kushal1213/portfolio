'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { num: '2', label: 'OSS PRs merged into AMD Lemonade' },
    { num: '5', label: 'Issues raised & resolved in production' },
    { num: '3×', label: 'Oracle OCI Certified' },
    { num: '25%', label: 'False positive reduction in fraud detection' },
  ]

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-[1100px] mx-auto px-10">
        <motion.div
          className="font-mono text-xs text-gh-green tracking-[0.15em] uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          // about me
        </motion.div>

        <motion.h2
          className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Hi, I'm Kushal 👋
        </motion.h2>

        <motion.p
          className="text-lg text-gh-muted max-w-[540px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Aspiring SDE. Always happy to help — feel free to reach out.
        </motion.p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 items-center">
          {/* Code Block */}
          <motion.div
            className="bg-gh-surface border border-gh-border rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gh-surface/80 border-b border-gh-border px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-gh-muted">kushal.py</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <pre className="text-[13px]">
                <span className="text-[#ff79c6]">class</span> <span className="text-[#50fa7b]">Kushal</span>:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name = <span className="text-[#f1fa8c]">"Kushal Choudhary"</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;degree = <span className="text-[#f1fa8c]">"B.Tech CSE (AI & Robotics)"</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;university = <span className="text-[#f1fa8c]">"VIT Chennai"</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;graduation = <span className="text-[#f1fa8c]">2026"</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;cgpa = <span className="text-[#f1fa8c]">7.92"</span>
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;focus = [
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f1fa8c]">"Backend Systems"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f1fa8c]">"Machine Learning"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f1fa8c]">"Generative AI"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f1fa8c]">"Open Source"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;]
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff79c6]">def</span> <span className="text-[#bd93f9]">greet</span>(<span className="text-[#8be9fd]">self</span>):
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff79c6]">return</span> <span className="text-[#f1fa8c]">"Let's build something that works."</span>
              </pre>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gh-surface border border-gh-border rounded-xl p-6 hover:border-gh-green hover:-translate-y-1 transition-all interactive"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="font-mono text-[40px] font-extrabold text-gradient leading-none mb-1.5">
                  {stat.num}
                </div>
                <div className="text-sm text-gh-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
