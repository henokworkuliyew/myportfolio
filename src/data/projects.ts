import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
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
