'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/data/portfolio'

export default function DSA() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="dsa" className="border-t py-16 md:py-20 site-rule">
      <div className="container-main">
        <motion.div
          className="grid items-end gap-8 sm:grid-cols-[auto_1fr_auto] sm:gap-12"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[clamp(3.5rem,8vw,5.5rem)] font-semibold leading-none tracking-[-0.06em] site-accent">
            400+
          </p>
          <div className="max-w-md">
            <h2 className="text-2xl font-extrabold tracking-[-0.045em] sm:text-3xl">
              DSA problems across platforms
            </h2>
            <p className="mt-3 leading-7 site-muted">
              Deliberate practice building algorithmic thinking for technical interviews and production problem-solving.
            </p>
          </div>
          <a
            href={SITE.urls.leetcode}
            target="_blank"
            rel="noreferrer"
            className="site-button-secondary self-center sm:self-end"
          >
            LeetCode profile
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
