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

const skills = [
  { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', level: 90, color: 'from-gray-700 to-black' },
  { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
  { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
  { name: 'Python', level: 80, color: 'from-yellow-400 to-yellow-600' },
  { name: 'PostgreSQL', level: 82, color: 'from-blue-600 to-blue-800' },
  { name: 'AWS', level: 75, color: 'from-orange-400 to-orange-600' },
  { name: 'Docker', level: 78, color: 'from-blue-400 to-blue-500' },
]

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: '/placeholder.svg?height=300&width=500',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description:
      'Real-time chat application with AI integration, voice messages, and file sharing capabilities.',
    image: '/placeholder.svg?height=300&width=500',
    tech: ['React', 'Socket.io', 'OpenAI', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management System',
    description:
      'Collaborative project management tool with real-time updates, team collaboration, and analytics.',
    image: '/placeholder.svg?height=300&width=500',
    tech: ['Vue.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Analytics Dashboard',
    description:
      'Interactive dashboard displaying weather data with charts, maps, and predictive analytics.',
    image: '/placeholder.svg?height=300&width=500',
    tech: ['React', 'D3.js', 'Python', 'FastAPI', 'Chart.js'],
    github: '#',
    live: '#',
    featured: false,
  },
]

const experience = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    duration: '2022 - Present',
    description:
      'Led development of microservices architecture, mentored junior developers, and improved system performance by 40%.',
    achievements: [
      'Reduced load times by 60%',
      'Led team of 5 developers',
      'Implemented CI/CD pipeline',
    ],
  },
  {
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    duration: '2020 - 2022',
    description:
      'Built responsive web applications, collaborated with design team, and implemented modern UI/UX practices.',
    achievements: [
      'Increased user engagement by 35%',
      'Built 15+ responsive websites',
      'Optimized SEO performance',
    ],
  },
  {
    company: 'Digital Agency',
    position: 'Junior Developer',
    duration: '2019 - 2020',
    description:
      'Developed client websites, learned modern frameworks, and contributed to open-source projects.',
    achievements: [
      'Completed 25+ client projects',
      'Contributed to 10+ open source projects',
      'Learned 5+ new technologies',
    ],
  },
]

export default function PortfolioContent() {
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
