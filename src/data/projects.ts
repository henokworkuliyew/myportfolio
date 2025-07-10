import { NextRequest, NextResponse } from 'next/server'
import { Project } from '@/types/portfolio'

// Mock database - replace with actual database in production
const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    longDescription:
      'A comprehensive e-commerce platform built with Next.js and Node.js. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory control.',
    image: '/placeholder.svg?height=300&width=500',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/henokworkuliyew/ecommerce-platform',
    live: 'https://ecommerce-demo.vercel.app',
    featured: true,
    category: 'Full Stack',
    status: 'Completed',
    createdAt: '2024-01-15',
    metrics: {
      users: 1250,
      performance: 95,
      uptime: 99.9,
    },
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description:
      'Real-time chat application with AI integration, voice messages, and file sharing capabilities.',
    longDescription:
      'A modern chat app with real-time messaging, AI-powered responses, and multimedia support. Built with React and Socket.io for seamless communication.',
    image: '/placeholder.svg?height=300&width=500',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
    tech: ['React', 'Socket.io', 'OpenAI', 'Node.js', 'MongoDB'],
    github: 'https://github.com/henokworkuliyew/ai-chat-app',
    live: 'https://ai-chat-demo.vercel.app',
    featured: true,
    category: 'Frontend',
    status: 'In Progress',
    createdAt: '2024-03-10',
    metrics: {
      users: 500,
      performance: 90,
      uptime: 99.8,
    },
  },
  {
    id: 3,
    title: 'Task Management System',
    description:
      'Collaborative project management tool with real-time updates, team collaboration, and analytics.',
    longDescription:
      'A task management system designed for teams, featuring real-time task updates, role-based access, and detailed analytics dashboards. Built with Vue.js and PostgreSQL.',
    image: '/placeholder.svg?height=300&width=500',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
    tech: ['Vue.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/henokworkuliyew/task-management-system',
    live: 'https://task-management-demo.vercel.app',
    featured: false,
    category: 'Full Stack',
    status: 'Completed',
    createdAt: '2024-06-01',
    metrics: {
      users: 300,
      performance: 92,
      uptime: 99.7,
    },
  },
  {
    id: 4,
    title: 'Weather Analytics Dashboard',
    description:
      'Interactive dashboard displaying weather data with charts, maps, and predictive analytics.',
    longDescription:
      'An interactive dashboard for visualizing weather data, including historical trends, real-time updates, and predictive analytics using machine learning models. Built with React and FastAPI.',
    image: '/placeholder.svg?height=300&width=500',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
    tech: ['React', 'D3.js', 'Python', 'FastAPI', 'Chart.js'],
    github: 'https://github.com/henokworkuliyew/weather-analytics',
    live: 'https://weather-analytics-demo.vercel.app',
    featured: false,
    category: 'Data Visualization',
    status: 'In Progress',
    createdAt: '2024-08-15',
    metrics: {
      users: 200,
      performance: 88,
      uptime: 99.6,
    },
  },
]

interface Params {
  params: { id: string }
}

export async function GET(_request: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id, 10)
    const project = projects.find((p) => p.id === id)

    if (!project) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: project,
    })
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch project' },
      { status: 500 }
    )
  }
}
