'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from '@phosphor-icons/react'

interface CopyButtonProps {
  text: string
  label?: string
}

export default function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      onClick={handleCopy}
      className="site-button-secondary inline-flex items-center gap-2 px-4 py-2 text-sm"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`${label}: ${text}`}
    >
      {copied ? <Check size={16} weight="bold" className="site-accent" /> : <Copy size={16} weight="bold" />}
      {copied ? 'Copied' : label}
    </motion.button>
  )
}
