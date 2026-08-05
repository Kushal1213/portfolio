'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, DownloadSimple } from '@phosphor-icons/react'
import { SITE } from '@/data/portfolio'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? {} : { opacity: 0, y: 20 }

  return (
    <section id="hero" className="relative flex min-h-[100dvh] items-stretch overflow-clip pt-[5.5rem]">
      <div className="container-main grid w-full flex-1 items-center gap-8 py-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-0 lg:py-12">
        <div className="relative z-10 max-w-3xl lg:pr-10 xl:pr-16">
          <motion.p
            className="mb-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-none tracking-[-0.06em]"
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            {SITE.name}
            <span className="site-accent">.</span>
          </motion.p>
          <motion.p
            className="site-kicker mb-5"
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            Software engineering for AI and data systems
          </motion.p>
          <motion.h1
            className="max-w-5xl text-[clamp(2.5rem,5.5vw,5.25rem)] font-extrabold leading-[1.05] tracking-[-0.07em] text-balance"
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          >
            Intelligence that holds up.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-[65ch] text-base leading-7 site-muted sm:text-lg sm:leading-8"
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            I turn complex data and AI ideas into dependable software, from model pipelines to production APIs.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            <a className="site-button-primary group" href="#projects">
              View work
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent-ink)_12%,transparent)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                <ArrowDownRight size={15} weight="bold" aria-hidden="true" />
              </span>
            </a>
            <a className="site-button-secondary" href={SITE.resumeUrl} download>
              <DownloadSimple size={17} weight="bold" aria-hidden="true" />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.figure
          className="relative -mx-5 h-[min(52vh,420px)] overflow-hidden sm:-mx-8 sm:h-[min(56vh,480px)] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-[52%] xl:w-[50%]"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
        >
          <Image
            src="/images/systems-sculpture.png"
            alt="A metal network sculpture with one illuminated signal path"
            fill
            className="object-cover object-[center_35%] lg:object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--canvas)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--canvas)] lg:via-[color-mix(in_srgb,var(--canvas)_35%,transparent)] lg:to-transparent"
            aria-hidden="true"
          />
        </motion.figure>
      </div>
    </section>
  )
}
