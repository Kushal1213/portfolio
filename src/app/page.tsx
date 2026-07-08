import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import ParticleBackground from '@/components/ParticleBackground'
import Hero from '@/components/Hero'
import About from '@/components/About'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gh-border to-transparent" />
        <About />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gh-border to-transparent" />
        <OpenSource />
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gh-green to-transparent animate-glow-scan" />
        <Projects />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gh-border to-transparent" />
        <Experience />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gh-border to-transparent" />
        <Skills />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gh-border to-transparent" />
        <Certifications />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gh-border to-transparent" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
