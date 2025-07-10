import { type NextRequest, NextResponse } from 'next/server'

// Mock database - in a real app, this would be from a database
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
  // ... other projects
]

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id)
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
    if (error instanceof Error) {
      console.error('Error fetching project:', error.message)
    }
    return NextResponse.json(
      { success: false, message: 'Failed to fetch project' },
      { status: 500 }
    )
  }
}
