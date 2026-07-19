'use client'

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  FolderGit2,
  Layers,
  Brain,
  Calendar,
} from 'lucide-react'
import { SITE, ROLES, HERO_STATS, GITHUB } from '@/data/portfolio'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [currentRole, setCurrentRole] = useState(0)
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const blob1X = useTransform(springX, [-500, 500], [-30, 30])
  const blob1Y = useTransform(springY, [-500, 500], [-30, 30])
  const blob2X = useTransform(springX, [-500, 500], [20, -20])
  const blob2Y = useTransform(springY, [-500, 500], [20, -20])

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const statIcons = [FolderGit2, Github, Layers, Code2, Calendar]

  useEffect(() => {
    const role = ROLES[currentRole]
    let i = 0
    const typing = setInterval(() => {
      if (i < role.length) {
        setTypedText(role.slice(0, i + 1))
        i++
      } else {
        clearInterval(typing)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % ROLES.length)
          setTypedText('')
        }, 2200)
      }
    }, 80)
    return () => clearInterval(typing)
  }, [currentRole])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute bottom-1/4 right-1/4 w-[24rem] h-[24rem] bg-secondary/15 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 container-main py-28 lg:py-32 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-text-secondary">{SITE.availability}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <p className="font-mono text-sm text-primary mb-3 tracking-wide">{SITE.tagline}</p>
              <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-4">
                <span className="text-gradient">{SITE.name}</span>
              </h1>
              <div className="flex items-center gap-2 text-text-secondary font-mono text-base">
                <span className="text-primary">{'>'}</span>
                <span>{typedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="w-0.5 h-5 bg-primary"
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I engineer production-ready systems at the intersection of backend, AI/ML, and data.
              From fraud detection on 500K+ transactions to open-source contributions at AMD&apos;s LLM
              inference server — I build software that scales.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="group px-6 py-3.5 bg-primary text-white rounded-xl font-semibold flex items-center gap-2 shadow-glow interactive"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
              <motion.a
                href={SITE.resumeUrl}
                download
                className="px-6 py-3.5 glass rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-hover interactive"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3.5 glass rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-hover interactive"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                Contact
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2.5 pt-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: Github, href: SITE.urls.github, label: 'GitHub' },
                { icon: Linkedin, href: SITE.urls.linkedin, label: 'LinkedIn' },
                { icon: ExternalLink, href: SITE.urls.leetcode, label: 'LeetCode' },
                { icon: Mail, href: `mailto:${SITE.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="w-11 h-11 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-hover interactive"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <motion.div
              className="glass-strong rounded-2xl p-5 shadow-glow"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-5">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 flex-shrink-0">
                  <Image
                    src={GITHUB.avatarUrl}
                    alt={SITE.name}
                    width={96}
                    height={96}
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">{SITE.name}</p>
                  <p className="text-text-secondary text-sm">VIT Chennai · B.Tech CSE &apos;26</p>
                  <p className="text-text-tertiary text-xs mt-1 flex items-center gap-1">
                    <Brain size={12} className="text-primary" />
                    AI & Robotics Minor
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {HERO_STATS.map((stat, index) => {
                const Icon = statIcons[index] ?? Code2
                return (
                  <motion.div
                    key={stat.label}
                    className="glass rounded-xl p-4 hover:bg-surface-hover interactive"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.08 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <Icon className="text-primary mb-2" size={18} />
                    <div className="text-xl font-bold text-gradient">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs text-text-secondary leading-snug mt-0.5">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
