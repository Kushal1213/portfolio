'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { EDUCATION, GITHUB, SITE } from '@/data/portfolio'

const principles = [
  ['Start with the constraint', 'I turn ambiguous problems into testable decisions before writing the expensive part of a system.'],
  ['Make the system legible', 'Models and services need useful evaluation, explainability, documentation, and a path to operate them.'],
  ['Finish the implementation', 'The work includes the testing, deployment, and iteration that turns a prototype into software.'],
]

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="section-padding border-t site-rule">
      <div className="container-main grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
        >
          <h2 className="max-w-md text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] text-balance sm:text-5xl lg:text-6xl">
            A systems-minded builder.
          </h2>
          <p className="mt-6 max-w-[65ch] text-lg leading-8 site-muted">
            I am a software engineer focused on the seam between reliable backend systems and practical machine learning.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <div className="rounded-[1.15rem] border p-1.5 site-rule" style={{ background: 'color-mix(in srgb, var(--surface-solid) 40%, transparent)' }}>
              <Image
                src={GITHUB.avatarUrl}
                alt="Kushal Choudhary"
                width={88}
                height={88}
                className="h-[88px] w-[88px] rounded-[calc(1.15rem-0.375rem)] object-cover"
              />
            </div>
            <div>
              <p className="font-extrabold tracking-[-0.03em]">Kushal Choudhary</p>
              <p className="mt-1 text-sm site-muted">{EDUCATION.degree}</p>
              <p className="mt-1 text-sm site-muted">{EDUCATION.institution}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a className="site-link inline-flex items-center gap-2 text-sm font-bold" href={SITE.urls.github} target="_blank" rel="noreferrer">
              <GithubLogo size={17} weight="bold" aria-hidden="true" />
              GitHub
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
            <a className="site-link inline-flex items-center gap-2 text-sm font-bold" href={SITE.urls.linkedin} target="_blank" rel="noreferrer">
              <LinkedinLogo size={17} weight="bold" aria-hidden="true" />
              LinkedIn
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <div className="lg:pt-3">
          {principles.map(([title, description], index) => (
            <motion.article
              key={title}
              className="border-t py-7 first:border-t-0 first:pt-0 site-rule"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            >
              <h3 className="text-2xl font-extrabold tracking-[-0.045em]">{title}</h3>
              <p className="mt-3 max-w-[65ch] leading-7 site-muted">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
