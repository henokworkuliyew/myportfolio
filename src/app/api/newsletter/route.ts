import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
})

// Mock newsletter subscribers storage
const subscribers: Array<{
  email: string
  name?: string
  subscribedAt: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = newsletterSchema.parse(body)

    // Check if email already exists
    const existingSubscriber = subscribers.find(
      (sub) => sub.email === validatedData.email
    )
    if (existingSubscriber) {
      return NextResponse.json(
        {
          success: false,
          message: 'This email is already subscribed to our newsletter.',
        },
        { status: 400 }
      )
    }

    // Add new subscriber
    const newSubscriber = {
      email: validatedData.email,
      name: validatedData.name,
      subscribedAt: new Date().toISOString(),
    }

    subscribers.push(newSubscriber)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to the newsletter!',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        totalSubscribers: subscribers.length,
        recentSubscribers: subscribers.slice(-5).reverse(),
      },
    })
  } catch (error ) {
    if (error instanceof Error) {
      console.error('Error fetching newsletter data:', error.message)
    }
    return NextResponse.json(
      { success: false, message: 'Failed to fetch newsletter data' },
      { status: 500 }
    )
  }
}
