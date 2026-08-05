'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, GithubLogo, Play } from '@phosphor-icons/react'
import { PROJECTS } from '@/data/portfolio'

type Project = (typeof PROJECTS)[number]

function RepositoryLink({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="site-link inline-flex items-center gap-2 text-sm font-bold"
      >
        <GithubLogo size={16} weight="bold" aria-hidden="true" />
        Open repository
        <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="site-link inline-flex items-center gap-2 text-sm font-bold"
        >
          <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          Live demo
        </a>
      )}
    </div>
  )
}

function ProjectMedia({ project, className = '' }: { project: Project; className?: string }) {
  const poster = project.poster as string | null
  const video = project.video as string | null

  if (video) {
    return (
      <figure className={`relative overflow-hidden bg-[var(--canvas-deep)] ${className}`}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          poster={poster ?? undefined}
          controls
          playsInline
          preload="metadata"
          aria-label={`${project.title} product walkthrough`}
        />
      </figure>
    )
  }

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image
        src={poster ?? '/images/data-topography.png'}
        alt={`${project.title} preview`}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 58vw"
      />
    </figure>
  )
}

function ProjectCard({ project, className = '' }: { project: Project; className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className={`group border-t pt-7 site-rule ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      {project.video && (
        <div className="mb-6 overflow-hidden rounded-[calc(var(--radius-panel)-2px)] border site-rule">
          <div className="relative aspect-video overflow-hidden">
            <video
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
              src={project.video}
              poster={project.poster ?? undefined}
              controls
              playsInline
              preload="metadata"
              aria-label={`${project.title} product walkthrough`}
            />
          </div>
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold site-accent">{project.subtitle}</p>
        {project.video && (
          <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] site-quiet">
            <Play size={12} weight="fill" aria-hidden="true" />
            Walkthrough
          </span>
        )}
      </div>
      <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.045em] text-balance sm:text-3xl">
        {project.title.replace(/[—–]/g, '-')}
      </h3>
      <p className="mt-4 max-w-[65ch] leading-7 site-muted">{project.summary}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="rounded-md border px-2.5 py-1 text-xs font-medium site-rule site-muted">
            {tag}
          </span>
        ))}
      </div>
      <RepositoryLink project={project} />
    </motion.article>
  )
}

export default function Projects() {
  const reduceMotion = useReducedMotion()
  const [featured, ...otherProjects] = PROJECTS

  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] text-balance sm:text-5xl lg:text-6xl">
            Systems with a reason to exist.
          </h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-8 site-muted">
            Machine learning, backend architecture, and AI products built around real constraints — with walkthroughs where they help.
          </p>
        </div>

        <motion.article
          className="mt-12 overflow-hidden rounded-[var(--radius-panel)] border site-rule lg:grid lg:grid-cols-[1.35fr_0.65fr]"
          style={{ background: 'var(--surface-solid)' }}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          <ProjectMedia
            project={featured}
            className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px]"
          />
          <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-10">
            <p className="text-sm font-semibold site-accent">{featured.subtitle}</p>
            <h3 className="mt-3 text-3xl font-extrabold leading-[1.02] tracking-[-0.055em] text-balance sm:text-4xl">
              {featured.title.replace(/[—–]/g, '-')}
            </h3>
            <p className="mt-5 max-w-[65ch] leading-7 site-muted">{featured.summary}</p>
            <dl className="mt-8 grid grid-cols-3 gap-3 border-y py-5 site-rule">
              {featured.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="font-mono text-xl font-semibold tracking-[-0.04em] tabular-nums">{metric.value}</dd>
                  <dt className="mt-1 text-xs leading-4 site-quiet">{metric.label}</dt>
                </div>
              ))}
            </dl>
            <details className="mt-6 text-sm">
              <summary className="cursor-pointer font-bold site-accent">Why this approach</summary>
              <p className="mt-3 leading-6 site-muted">{featured.solution}</p>
            </details>
            <RepositoryLink project={featured} />
          </div>
        </motion.article>

        <div className="mt-4 grid gap-0 border-b site-rule lg:grid-cols-2 lg:gap-x-16">
          <ProjectCard project={otherProjects[0]} />
          <ProjectCard project={otherProjects[1]} className="lg:pt-16" />
          <ProjectCard project={otherProjects[2]} className="lg:col-span-2 lg:mx-[10%] lg:border-t-0 lg:pt-10" />
        </div>
      </div>
    </section>
  )
}
