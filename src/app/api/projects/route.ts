import { NextResponse } from 'next/server'


const projects = [
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
    github: 'https://github.com/username/ecommerce-platform',
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
      'An advanced chat application featuring real-time messaging, AI-powered responses, voice message support, file sharing, and group chat functionality. Built with modern web technologies and WebSocket for real-time communication.',
    image: '/placeholder.svg?height=300&width=500',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
    tech: ['React', 'Socket.io', 'OpenAI', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/ai-chat-app',
    live: 'https://ai-chat-demo.vercel.app',
    featured: true,
    category: 'AI/ML',
    status: 'In Progress',
    createdAt: '2024-02-20',
    metrics: {
      users: 850,
      performance: 92,
      uptime: 98.5,
    },
  },
  {
    id: 3,
    title: 'Task Management System',
    description:
      'Collaborative project management tool with real-time updates, team collaboration, and analytics.',
    longDescription:
      'A comprehensive project management solution with task tracking, team collaboration, real-time updates, analytics dashboard, and reporting features. Designed for modern teams to streamline their workflow.',
    image: '/placeholder.svg?height=300&width=500',
    images: ['/placeholder.svg?height=400&width=600'],
    tech: ['Vue.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/username/task-manager',
    live: 'https://taskmanager-demo.vercel.app',
    featured: false,
    category: 'Productivity',
    status: 'Completed',
    createdAt: '2023-11-10',
    metrics: {
      users: 420,
      performance: 88,
      uptime: 99.2,
    },
  },
  {
    id: 4,
    title: 'Weather Analytics Dashboard',
    description:
      'Interactive dashboard displaying weather data with charts, maps, and predictive analytics.',
    longDescription:
      'A sophisticated weather analytics platform featuring interactive charts, geographical maps, predictive analytics, and historical data visualization. Integrates with multiple weather APIs for comprehensive data coverage.',
    image: '/placeholder.svg?height=300&width=500',
    images: ['/placeholder.svg?height=400&width=600'],
    tech: ['React', 'D3.js', 'Python', 'FastAPI', 'Chart.js'],
    github: 'https://github.com/username/weather-dashboard',
    live: 'https://weather-analytics.vercel.app',
    featured: false,
    category: 'Data Visualization',
    status: 'Completed',
    createdAt: '2023-09-05',
    metrics: {
      users: 680,
      performance: 90,
      uptime: 97.8,
    },
  },
  
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing projects, skills, and experience with a modern design.',
    longDescription:
      'A personal portfolio website built with Next.js and Tailwind CSS. Features include project showcase, skills section, experience timeline, and contact form. Designed to highlight my work and professional journey.',
    image: '/placeholder.svg?height=300&width=500',
    images: ['/placeholder.svg?height=400&width=600'],
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/username/portfolio',
    live: 'https://portfolio-demo.vercel.app',
    featured: true,
    category: 'Web Development',
    status: 'In Progress',
    createdAt: '2024-02-20',
    metrics: {
      users: 850,
      performance: 92,
      uptime: 98.5,
    },
  },
]

export async function GET() {
  try {
    // Simulate database query delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json({
      success: true,
      data: projects,
      total: projects.length,
    })
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching projects:', error.message)
    }
    return NextResponse.json(
      { success: false, message: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}
