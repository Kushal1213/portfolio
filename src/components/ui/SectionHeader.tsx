'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  titleAccent?: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  label,
  title,
  titleAccent,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <motion.div
      className={`mb-16 max-w-3xl ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-4">
        {label}
      </p>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5">
        {title}
        {titleAccent && (
          <span className="text-gradient"> {titleAccent}</span>
        )}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
