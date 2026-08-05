'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  titleAccent?: string
  description?: string
  align?: 'left' | 'center'
  label?: string
}

export default function SectionHeader({
  title,
  titleAccent,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion()
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <motion.div
      className={`mb-12 max-w-3xl ${alignClass}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-[1.1] mb-5">
        {title}
        {titleAccent && <span className="site-accent"> {titleAccent}</span>}
      </h2>
      {description && (
        <p className="text-base leading-relaxed max-w-2xl site-muted">{description}</p>
      )}
    </motion.div>
  )
}
