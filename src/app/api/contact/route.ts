import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import connectDB from '@/lib/db'
import Contact from '@/server//contact'
import { contact } from '@/types/portfolio'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email cannot exceed 255 characters'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject cannot exceed 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message cannot exceed 2000 characters'),
})

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Send notification email to admin
const sendAdminNotification = async (contactData: contact) => {
  const transporter = createTransporter()

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `New Contact Form Submission: ${contactData.subject}`,
    text: `
      New contact form submission received:
      
      Name: ${contactData.name}
      Email: ${contactData.email}
      Subject: ${contactData.subject}
      Message: ${contactData.message}
      
      Submitted at: ${new Date().toLocaleString()}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong style="color: #374151;">Name:</strong> ${
            contactData.name
          }</p>
          <p><strong style="color: #374151;">Email:</strong> 
            <a href="mailto:${contactData.email}" style="color: #8b5cf6;">${
      contactData.email
    }</a>
          </p>
          <p><strong style="color: #374151;">Subject:</strong> ${
            contactData.subject
          }</p>
        </div>
        
        <div style="background: #fff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #4b5563;">${contactData.message.replace(
            /\n/g,
            '<br>'
          )}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Contact ID:</strong> ${contactData._id}</p>
        </div>
      </div>
    `,
  })
}

// Send confirmation email to user
const sendUserConfirmation = async (contactData: contact) => {
  const transporter = createTransporter()

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: contactData.email,
    subject: 'Thank you for contacting me!',
    text: `
      Hi ${contactData.name},
      
      Thank you for reaching out! I've received your message about "${contactData.subject}" and will get back to you as soon as possible.
      
      Your message:
      ${contactData.message}
      
      Best regards,
      [Your Name]
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Me!</h1>
        </div>
        
        <div style="background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; color: #374151;">Hi <strong>${
            contactData.name
          }</strong>,</p>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Thank you for reaching out! I've received your message about "<strong>${
              contactData.subject
            }</strong>" 
            and will get back to you as soon as possible.
          </p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8b5cf6;">
            <h3 style="color: #374151; margin-top: 0;">Your Message:</h3>
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 0;">${contactData.message.replace(
              /\n/g,
              '<br>'
            )}</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            I typically respond within 24-48 hours. If your inquiry is urgent, please don't hesitate to 
            reach out via phone or other contact methods listed on my website.
          </p>
          
          <p style="color: #374151; margin-bottom: 0;">
            Best regards,<br>
            <strong>[Your Name]</strong>
          </p>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
          <p>This is an automated confirmation email. Please do not reply to this message.</p>
        </div>
      </div>
    `,
  })
}

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB()

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Get client information for tracking
    const ipAddress =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Create new contact using Mongoose model
    const contact = new Contact({
      ...validatedData,
      ipAddress,
      userAgent,
      status: 'new',
    })

    // Save to database
    const savedContact = await contact.save()

    // Send emails (run in parallel for better performance)
    const emailPromises = []

    // Send admin notification
    if (process.env.TO_EMAIL && process.env.SMTP_HOST) {
      emailPromises.push(sendAdminNotification(savedContact))
    }

    // Send user confirmation
    if (process.env.FROM_EMAIL && process.env.SMTP_HOST) {
      emailPromises.push(sendUserConfirmation(savedContact))
    }

    // Wait for all emails to be sent (but don't fail if emails fail)
    try {
      await Promise.all(emailPromises)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue execution - don't fail the API call if emails fail
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
        contactId: savedContact._id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
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

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = Number.parseInt(searchParams.get('limit') || '10')
    const page = Number.parseInt(searchParams.get('page') || '1')
    const skip = (page - 1) * limit

    // Build query
    let query = {}
    if (status && ['new', 'read', 'replied', 'archived'].includes(status)) {
      query = { status }
    }

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-ipAddress -userAgent') // Don't expose sensitive data

    const total = await Contact.countDocuments(query)

    // Get status counts for dashboard
    const statusCounts = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ])

    const statusStats = statusCounts.reduce(
      (acc, item) => {
        acc[item._id] = item.count
        return acc
      },
      { new: 0, read: 0, replied: 0, archived: 0 }
    )

    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
      stats: statusStats,
    })
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch contacts',
      },
      { status: 500 }
    )
  }
}
