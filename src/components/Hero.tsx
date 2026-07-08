'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const badges = [
    { text: 'Python', color: 'badge-green' },
    { text: 'Node.js', color: 'badge-blue' },
    { text: 'GNN · XGBoost', color: 'badge-purple' },
    { text: 'AWS · OCI · GCP', color: 'badge-orange' },
    { text: 'Docker', color: 'badge-green' },
    { text: 'MongoDB · MySQL', color: 'badge-blue' },
    { text: 'Generative AI', color: 'badge-purple' },
    { text: 'LangChain', color: 'badge-orange' },
  ]

  const badgeColors = {
    'badge-green': 'border-gh-green text-gh-green bg-gh-green/8',
    'badge-blue': 'border-gh-accent text-gh-accent bg-gh-accent/8',
    'badge-purple': 'border-gh-purple text-gh-purple bg-gh-purple/8',
    'badge-orange': 'border-gh-orange text-gh-orange bg-gh-orange/8',
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-10 pt-20 pb-10 text-center">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[linear-gradient(rgba(63,185,80,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(63,185,80,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute w-[600px] h-[600px] top-[-100px] left-1/2 -translate-x-1/2 bg-gh-green/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="font-mono text-xs text-gh-green tracking-[0.15em] uppercase mb-6 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="w-10 h-[1px] bg-gh-green opacity-50" />
        B.Tech CSE · AI & Robotics · VIT Chennai '26
        <span className="w-10 h-[1px] bg-gh-green opacity-50" />
      </motion.div>

      <motion.h1
        className="text-[clamp(52px,8vw,96px)] font-extrabold leading-none tracking-tight text-gradient mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        Kushal Choudhary
      </motion.h1>

      <motion.div
        className="font-mono text-[clamp(16px,2.5vw,24px)] text-gh-muted mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
      >
        <span className="text-gh-green">$</span> ./aspiring_sde --mode=build_cool_stuff
      </motion.div>

      <motion.p
        className="max-w-[560px] text-lg text-gh-muted leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.9 }}
      >
        Backend engineer & ML practitioner building production-ready AI systems. Open source contributor. I debug at 2AM and still push clean commits.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2 justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.9 }}
      >
        {badges.map((badge, index) => (
          <span
            key={index}
            className={`font-mono text-[11px] px-3 py-1 rounded-full border ${badgeColors[badge.color as keyof typeof badgeColors]}`}
          >
            {badge.text}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9 }}
      >
        <motion.a
          href="#projects"
          className="px-8 py-3.5 bg-gh-green-dark text-white rounded-lg font-bold text-base hover:bg-gh-green transition-all interactive"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="https://github.com/Kushal1213"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 bg-transparent text-gh-text border border-gh-border rounded-lg font-semibold text-base hover:border-gh-accent hover:text-gh-accent transition-all interactive"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub ↗
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-mono text-[11px] text-gh-muted tracking-[0.1em]">scroll</span>
        <motion.div
          className="w-5 h-5 border-r-2 border-b-2 border-gh-muted rotate-45"
          animate={{ translateY: [-4, 4, -4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
