'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { PROJECTS } from '@/data/portfolio'

type Project = (typeof PROJECTS)[number]

function RepositoryLink({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="site-link mt-6 inline-flex items-center gap-2 text-sm font-bold"
    >
      <Github size={16} aria-hidden="true" />
      Open repository
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}

function ProjectCard({ project, className = '' }: { project: Project; className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className={`site-panel rounded-2xl p-6 sm:p-8 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      <p className="text-sm font-semibold site-accent">{project.subtitle}</p>
      <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.045em] sm:text-3xl">{project.title.replace('—', '-')}</h3>
      <p className="mt-4 max-w-xl leading-7 site-muted">{project.summary}</p>
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
          <p className="site-kicker mb-5">Selected work</p>
          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
            Systems with a reason to exist.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 site-muted">
            Machine learning, backend architecture, and AI products built around real constraints.
          </p>
        </div>

        <motion.article
          className="site-panel mt-12 overflow-hidden rounded-2xl lg:grid lg:grid-cols-[1.25fr_0.75fr]"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <figure className="relative min-h-[300px] overflow-hidden lg:min-h-full">
            <Image
              src="/images/data-topography.png"
              alt="A physical topographic map representing complex data relationships"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </figure>
          <div className="p-7 sm:p-9 lg:p-10">
            <p className="text-sm font-semibold site-accent">{featured.subtitle}</p>
            <h3 className="mt-3 text-3xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-4xl">{featured.title}</h3>
            <p className="mt-5 leading-7 site-muted">{featured.summary}</p>
            <dl className="mt-8 grid grid-cols-3 gap-3 border-y py-5 site-rule">
              {featured.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="text-xl font-extrabold tracking-[-0.04em]">{metric.value}</dd>
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

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <ProjectCard project={otherProjects[0]} />
          <ProjectCard project={otherProjects[1]} className="lg:translate-y-10" />
          <ProjectCard project={otherProjects[2]} className="lg:col-span-2 lg:mx-[12%]" />
        </div>
      </div>
    </section>
  )
}
