import dynamic from 'next/dynamic'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false })

function SectionDivider() {
  return (
    <div
      className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"
      aria-hidden="true"
    />
  )
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
