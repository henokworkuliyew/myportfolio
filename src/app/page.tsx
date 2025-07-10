'use client'

import Navigation from '@/components/navigation'
import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import SkillsSection from '@/components/sections/skills-section'
import ProjectsSection from '@/components/sections/projects-section'
import ExperienceSection from '@/components/sections/experience-section'
import ContactSection from '@/components/sections/contact-section'
import Footer from '@/components/footer'
import AnimatedBackground from '@/components/animated-background'
import { useApi } from '@/hooks/use-api'
import { Project } from '@/types/portfolio'
import { skills } from '@/data/skills'
import { experience } from '@/data/experience'


export default function Portfolio() {
    const {  data: projects } = useApi<Project[]>('/api/projects')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 text-white overflow-x-hidden transition-colors duration-300">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      <ContactSection />
      <Footer />
    </div>
  )
}
