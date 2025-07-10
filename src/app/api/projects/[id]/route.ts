import { type NextRequest, NextResponse } from 'next/server'
import type { Project } from '@/types/portfolio'

 const projects: Project[] = [
//   {
//     id: 1,
//     title: 'E-Commerce Platform',
//     description:
//       'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
//     image: '/placeholder.svg?height=300&width=500',
//     tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
//     github: 'https://github.com/henokworkuliyew/ecommerce-platform',
//     live: 'https://ecommerce-demo.vercel.app',
//     featured: true,
//     category: 'Full Stack',
//     status: 'Completed',
//   },
//   {
//     id: 2,
//     title: 'AI Chat Application',
//     description:
//       'Real-time chat application with AI integration, voice messages, and file sharing capabilities.',
//     image: '/placeholder.svg?height=300&width=500',
//     tech: ['React', 'Socket.io', 'OpenAI', 'Node.js', 'MongoDB'],
//     github: 'https://github.com/henokworkuliyew/ai-chat-app',
//     live: 'https://ai-chat-demo.vercel.app',
//     featured: true,
//     category: 'Frontend',
//     status: 'In Progress',
//   },
]

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id, 10)
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
