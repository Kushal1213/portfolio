'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight, GithubLogo, Play } from '@phosphor-icons/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LATEST_WORK, PROJECTS, REPOSITORY_ARCHIVE } from '@/data/portfolio'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const prioritySpans = ['lg:col-span-8', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4']

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const motionPreference = gsap.matchMedia()
    motionPreference.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('[data-work-card]').forEach((card) => {
        gsap.fromTo(card, { scale: 0.94, opacity: 0.55 }, {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top 88%', end: 'top 44%', scrub: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-project-media]').forEach((media) => {
        gsap.fromTo(media, { scale: 0.88, opacity: 0.6 }, {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: media, start: 'top 92%', end: 'center 58%', scrub: true },
        })
      })
    })
    return () => motionPreference.revert()
  }, { scope: sectionRef })

  return (
    <section id="projects" ref={sectionRef} className="section-padding overflow-clip">
      <div className="container-main">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <h2 className="max-w-4xl text-[clamp(3rem,6vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.075em] text-balance">
            Work, ranked by what matters now.
          </h2>
          <p className="max-w-[58ch] text-lg leading-8 site-muted lg:justify-self-end">
            Current product work comes first. Proven machine-learning and data systems follow with the architecture, tradeoffs, and outcomes intact.
          </p>
        </div>

        <div className="mt-16 grid grid-flow-dense auto-rows-[minmax(260px,auto)] border-l border-t site-rule lg:grid-cols-12">
          {LATEST_WORK.map((work, index) => (
            <article
              key={work.title}
              className={`group relative flex min-h-[290px] flex-col overflow-hidden border-b border-r p-7 site-rule sm:p-9 ${prioritySpans[index]}`}
              style={{ background: index === 0 ? 'var(--surface-solid)' : 'color-mix(in srgb, var(--surface-solid) 68%, transparent)' }}
            >
              {index === 0 ? (
                <div className="pointer-events-none absolute inset-0 opacity-35 transition-transform duration-700 ease-out group-hover:scale-105" aria-hidden="true">
                  <Image src="/images/cuepoint-product.png" alt="" fill className="object-cover object-center mix-blend-luminosity" sizes="(max-width: 1024px) 100vw, 66vw" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface-solid)] via-[color-mix(in_srgb,var(--surface-solid)_82%,transparent)] to-transparent" />
                </div>
              ) : null}
              <div className="relative flex h-full flex-col">
                <p className="text-sm font-semibold site-accent">{work.eyebrow}</p>
                <h3 className={`mt-3 font-extrabold leading-none tracking-[-0.06em] text-balance ${index === 0 ? 'max-w-2xl text-5xl sm:text-6xl' : 'text-3xl sm:text-4xl'}`}>
                  {work.title}
                </h3>
                <p className="mt-5 max-w-[62ch] leading-7 site-muted">{work.summary}</p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium site-quiet">
                  {work.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="mt-auto flex flex-wrap gap-5 pt-8">
                  <a href={work.github} target="_blank" rel="noreferrer" className="site-link inline-flex items-center gap-2 text-sm font-bold">
                    <GithubLogo size={16} weight="bold" aria-hidden="true" /> Repository
                    <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                  </a>
                  {work.demo ? (
                    <a href={work.demo} target="_blank" rel="noreferrer" className="site-link inline-flex items-center gap-2 text-sm font-bold">
                      Live product <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-32 md:mt-48">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="text-sm font-semibold site-accent">Evidence over adjectives</p>
            <h3 className="text-4xl font-extrabold leading-[0.95] tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl">
              The numbers belong to working systems.
            </h3>
          </div>
          <div className="mt-10 flex snap-x snap-mandatory gap-0 overflow-x-auto border-y site-rule">
            {PROJECTS.flatMap((project) => project.metrics.slice(0, 2).map((metric) => ({ project: project.title, ...metric }))).map((proof) => (
              <article key={`${proof.project}-${proof.label}`} className="min-w-[78vw] snap-start border-r px-6 py-8 site-rule sm:min-w-[330px] sm:px-8">
                <p className="font-mono text-4xl font-semibold tracking-[-0.06em] tabular-nums">{proof.value}</p>
                <p className="mt-2 text-sm font-bold">{proof.label}</p>
                <p className="mt-4 text-xs leading-5 site-quiet">{proof.project.replace(/[—–]/g, '-')}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-32 md:mt-48">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold site-accent">Selected case studies</p>
            <h3 className="mt-4 text-4xl font-extrabold leading-[0.95] tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl">
              Architecture, tradeoffs, and the part that shipped.
            </h3>
          </div>

          <div className="mt-14 space-y-8">
            {PROJECTS.map((project, index) => (
              <article
                key={project.id}
                data-work-card
                className="relative overflow-hidden rounded-[var(--radius-panel)] border site-rule lg:sticky lg:grid lg:min-h-[610px] lg:grid-cols-[1.2fr_0.8fr]"
                style={{ top: `calc(5.5rem + ${index * 0.8}rem)`, background: 'var(--surface-solid)' }}
              >
                <div data-project-media className="relative min-h-[280px] overflow-hidden bg-[var(--canvas-deep)] sm:min-h-[380px] lg:min-h-full">
                  {project.video ? (
                    <video className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.025]" src={project.video} poster={project.poster ?? undefined} controls playsInline preload="metadata" aria-label={`${project.title} product walkthrough`} />
                  ) : (
                    <Image src={project.poster ?? '/images/data-topography.webp'} alt={`${project.title} project preview`} fill className="object-cover mix-blend-luminosity transition-transform duration-700 ease-out hover:scale-105" sizes="(max-width: 1024px) 100vw, 60vw" />
                  )}
                </div>
                <div className="flex flex-col p-7 sm:p-9 lg:p-11">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold site-accent">{project.subtitle}</p>
                    {project.video ? <Play size={15} weight="fill" className="shrink-0 site-accent" aria-hidden="true" /> : null}
                  </div>
                  <h4 className="mt-4 text-3xl font-extrabold leading-[0.98] tracking-[-0.055em] text-balance sm:text-4xl">{project.title.replace(/[—–]/g, '-')}</h4>
                  <p className="mt-5 leading-7 site-muted">{project.summary}</p>
                  <dl className="mt-8 grid grid-cols-3 gap-3 border-y py-5 site-rule">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dd className="font-mono text-xl font-semibold tracking-[-0.04em] tabular-nums">{metric.value}</dd>
                        <dt className="mt-1 text-xs leading-4 site-quiet">{metric.label}</dt>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-7 text-sm leading-6 site-muted"><strong className="text-[var(--ink)]">Why this approach:</strong> {project.solution}</p>
                  <div className="mt-auto flex flex-wrap gap-5 pt-8">
                    <a href={project.github} target="_blank" rel="noreferrer" className="site-link inline-flex items-center gap-2 text-sm font-bold">Repository <ArrowUpRight size={15} weight="bold" aria-hidden="true" /></a>
                    {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="site-link inline-flex items-center gap-2 text-sm font-bold">Live demo <ArrowUpRight size={15} weight="bold" aria-hidden="true" /></a> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <details className="mt-24 border-y py-7 site-rule">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-extrabold tracking-[-0.03em] marker:hidden">
            <span>Every public repository <span className="ml-3 font-mono text-sm font-medium site-accent">{REPOSITORY_ARCHIVE.length}</span></span>
            <span className="text-xs font-semibold site-quiet">Open archive</span>
          </summary>
          <div className="mt-7 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {REPOSITORY_ARCHIVE.map((repository) => (
              <a key={repository} href={`https://github.com/Kushal1213/${repository}`} target="_blank" rel="noreferrer" className="site-link flex min-w-0 items-center justify-between gap-3 border-t py-3 text-sm site-rule">
                <span className="truncate font-medium">{repository}</span>
                <ArrowUpRight size={14} weight="bold" className="shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
