'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'

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
      className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary transition-colors interactive"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`${label}: ${text}`}
    >
      {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
      {copied ? 'Copied!' : label}
    </motion.button>
  )
}
