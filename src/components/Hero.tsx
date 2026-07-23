'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Download } from 'lucide-react'
import { SITE } from '@/data/portfolio'

const highlights = [
  { value: '500K+', label: 'transactions modeled' },
  { value: '2', label: 'merged AMD pull requests' },
  { value: '36', label: 'public repositories' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? {} : { opacity: 0, y: 24 }

  return (
    <>
      <section id="hero" className="relative flex min-h-[100dvh] items-center overflow-clip pt-[72px]">
        <div className="container-main grid w-full items-center gap-10 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.72fr)] lg:gap-16 lg:py-20">
          <div className="max-w-2xl">
            <motion.p
              className="site-kicker mb-6"
              initial={reveal}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              Software engineering for AI and data systems
            </motion.p>
            <motion.h1
              className="max-w-[10ch] text-[clamp(3.3rem,7vw,6.75rem)] font-extrabold leading-[0.94] tracking-[-0.075em]"
              initial={reveal}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Intelligence that holds up.
            </motion.h1>
            <motion.p
              className="mt-7 max-w-xl text-lg leading-8 site-muted sm:text-xl"
              initial={reveal}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              I turn complex data and AI ideas into dependable software, from model pipelines to production APIs.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={reveal}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <a className="site-button-primary" href="#projects">
                View work
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a className="site-button-secondary" href={SITE.resumeUrl} download>
                <Download size={17} aria-hidden="true" />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.figure
            className="site-panel relative mx-auto w-full max-w-[540px] overflow-hidden rounded-2xl p-2"
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/systems-sculpture.png"
                alt="A metal network sculpture with one illuminated signal path"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>
          </motion.figure>
        </div>
      </section>

      <section aria-label="Selected highlights" className="border-y site-rule">
        <dl className="container-main grid md:grid-cols-3">
          {highlights.map((item, index) => (
            <div key={item.label} className={`py-7 ${index < highlights.length - 1 ? 'md:border-r site-rule' : ''} ${index > 0 ? 'md:pl-8' : ''}`}>
              <dt className="text-sm site-muted">{item.label}</dt>
              <dd className="mt-2 text-3xl font-extrabold tracking-[-0.055em] sm:text-4xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
