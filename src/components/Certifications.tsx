'use client'

import { motion } from 'framer-motion'

export default function Certifications() {
  const certifications = [
    {
      icon: '🏆',
      issuer: 'Oracle · OCI',
      title: 'OCI 2025 Certified Data Science Professional',
      year: '2025',
    },
    {
      icon: '🥇',
      issuer: 'Oracle · OCI',
      title: 'OCI Generative AI Professional',
      year: '2025',
    },
    {
      icon: '🎖️',
      issuer: 'Oracle · OCI',
      title: 'OCI AI Foundations Associate',
      year: '2024',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gh-bg to-[#0a0f1a] relative z-10">
      <div className="max-w-[1100px] mx-auto px-10">
        <motion.div
          className="font-mono text-xs text-gh-green tracking-[0.15em] uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          // certifications
        </motion.div>

        <motion.h2
          className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Credentials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0d1f0d] to-[#0a1a24] border border-gh-border rounded-xl p-7 flex gap-4 hover:border-gh-green hover:-translate-y-1 transition-all interactive"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl">{cert.icon}</div>
              <div>
                <div className="font-mono text-[11px] text-gh-orange tracking-[0.08em] mb-1.5">
                  {cert.issuer}
                </div>
                <div className="text-base font-semibold leading-relaxed">{cert.title}</div>
                <div className="font-mono text-xs text-gh-muted mt-2">{cert.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
