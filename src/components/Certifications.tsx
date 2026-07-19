'use client'

import { motion } from 'framer-motion'
import { Award, Cloud, GraduationCap, ExternalLink } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      icon: Award,
      issuer: 'Oracle · OCI',
      title: 'OCI 2025 Certified Data Science Professional',
      year: '2025',
      description: 'Certified in data science fundamentals, machine learning, and Oracle Cloud Infrastructure services.',
    },
    {
      icon: Cloud,
      issuer: 'Oracle · OCI',
      title: 'OCI Generative AI Professional',
      year: '2025',
      description: 'Specialized certification in Generative AI concepts, implementation, and Oracle Cloud AI services.',
    },
    {
      icon: GraduationCap,
      issuer: 'Oracle · OCI',
      title: 'OCI AI Foundations Associate',
      year: '2024',
      description: 'Foundational certification in artificial intelligence concepts and Oracle Cloud AI infrastructure.',
    },
  ]

  return (
    <section id="certifications" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // certifications
          </motion.div>

          <motion.h2
            className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Professional
            <span className="text-gradient"> Certifications</span>
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Verified credentials demonstrating expertise in cloud computing, 
            machine learning, and artificial intelligence from industry leaders.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 hover:bg-surface-hover transition-all interactive group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <cert.icon className="text-primary" size={28} />
              </div>
              
              <div className="font-mono text-xs text-primary tracking-[0.1em] uppercase mb-3">
                {cert.issuer}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary font-mono">{cert.year}</span>
                <ExternalLink className="text-text-secondary group-hover:text-primary transition-colors" size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
