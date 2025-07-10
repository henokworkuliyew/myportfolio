'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  Phone,
  User,
  Mail,
  MessageSquare,
} from 'lucide-react'
import { apiRequest } from '@/hooks/use-api'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormState {
  loading: boolean
  success: boolean
  error: string | null
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  // Frontend validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required'
    if (name.length < 2) return 'Name must be at least 2 characters'
    if (name.length > 100) return 'Name cannot exceed 100 characters'
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    if (email.length > 255) return 'Email cannot exceed 255 characters'
    return undefined
  }

  const validatePhone = (phone: string): string | undefined => {
    if (phone && phone.trim()) {
      const phoneRegex = /^\+?[\d\s\-$$$$]+$/
      if (!phoneRegex.test(phone)) return 'Please enter a valid phone number'
      if (phone.length > 20) return 'Phone number cannot exceed 20 characters'
    }
    return undefined
  }

  const validateSubject = (subject: string): string | undefined => {
    if (!subject.trim()) return 'Subject is required'
    if (subject.length < 5) return 'Subject must be at least 5 characters'
    if (subject.length > 200) return 'Subject cannot exceed 200 characters'
    return undefined
  }

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Message is required'
    if (message.length < 10) return 'Message must be at least 10 characters'
    if (message.length > 2000) return 'Message cannot exceed 2000 characters'
    return undefined
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    errors.name = validateName(formData.name)
    errors.email = validateEmail(formData.email)
    errors.phone = validatePhone(formData.phone)
    errors.subject = validateSubject(formData.subject)
    errors.message = validateMessage(formData.message)

    // Remove undefined errors
    Object.keys(errors).forEach((key) => {
      if (errors[key as keyof FormErrors] === undefined) {
        delete errors[key as keyof FormErrors]
      }
    })

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear specific field error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    // Clear general error when user starts typing
    if (formState.error) {
      setFormState((prev) => ({ ...prev, error: null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Frontend validation
    if (!validateForm()) {
      return
    }

    setFormState({ loading: true, success: false, error: null })

    const {  error } = await apiRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    if (error) {
      setFormState({ loading: false, success: false, error })
    } else {
      setFormState({ loading: false, success: true, error: null })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setFormErrors({})
    }
  }

  return (
    <Card className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border-white/10 dark:border-white/5">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-white/70 dark:text-white/60 flex items-center"
              >
                <User className="w-4 h-4 mr-1" />
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={`bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400 ${
                  formErrors.name ? 'border-red-400 focus:border-red-400' : ''
                }`}
                placeholder="Your full name"
              />
              {formErrors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm flex items-center"
                >
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {formErrors.name}
                </motion.p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-white/70 dark:text-white/60 flex items-center"
              >
                <Mail className="w-4 h-4 mr-1" />
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400 ${
                  formErrors.email ? 'border-red-400 focus:border-red-400' : ''
                }`}
                placeholder="your@email.com"
              />
              {formErrors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm flex items-center"
                >
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {formErrors.email}
                </motion.p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-white/70 dark:text-white/60 flex items-center"
            >
              <Phone className="w-4 h-4 mr-1" />
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className={`bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400 ${
                formErrors.phone ? 'border-red-400 focus:border-red-400' : ''
              }`}
              placeholder="+251 948 736 453"
            />
            {formErrors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm flex items-center"
              >
                <AlertCircle className="w-3 h-3 mr-1" />
                {formErrors.phone}
              </motion.p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="subject"
              className="text-white/70 dark:text-white/60 flex items-center"
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              className={`bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400 ${
                formErrors.subject ? 'border-red-400 focus:border-red-400' : ''
              }`}
              placeholder="What's this about?"
            />
            {formErrors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm flex items-center"
              >
                <AlertCircle className="w-3 h-3 mr-1" />
                {formErrors.subject}
              </motion.p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-white/70 dark:text-white/60 flex items-center"
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400 resize-none ${
                formErrors.message ? 'border-red-400 focus:border-red-400' : ''
              }`}
              placeholder="Tell me about your project or inquiry..."
            />
            {formErrors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm flex items-center"
              >
                <AlertCircle className="w-3 h-3 mr-1" />
                {formErrors.message}
              </motion.p>
            )}
            <div className="text-right">
              <span
                className={`text-xs ${
                  formData.message.length > 2000
                    ? 'text-red-400'
                    : formData.message.length > 1800
                    ? 'text-yellow-400'
                    : 'text-white/50'
                }`}
              >
                {formData.message.length}/2000
              </span>
            </div>
          </div>

          {/* Status Messages */}
          {formState.error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/20"
            >
              <AlertCircle size={16} />
              <span className="text-sm">{formState.error}</span>
            </motion.div>
          )}

          {formState.success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-green-400 bg-green-500/10 p-3 rounded-lg border border-green-500/20"
            >
              <CheckCircle size={16} />
              <span className="text-sm">
                Thank you for your message! I&appos;ll get back to you soon.
              </span>
            </motion.div>
          )}

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              disabled={formState.loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState.loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  )
}
