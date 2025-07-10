'use client'

import type React from 'react'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { apiRequest } from '@/hooks/use-api'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormState {
  loading: boolean
  success: boolean
  error: string | null
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (formState.error) {
      setFormState((prev) => ({ ...prev, error: null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormState({ loading: true, success: false, error: null })

    const {  error } = await apiRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    if (error) {
      setFormState({ loading: false, success: false, error })
    } else {
      setFormState({ loading: false, success: true, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <Card className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border-white/10 dark:border-white/5">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-white/70 dark:text-white/60"
              >
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-white/70 dark:text-white/60"
              >
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="subject"
              className="text-white/70 dark:text-white/60"
            >
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400"
              placeholder="What's this about?"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-white/70 dark:text-white/60"
            >
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="bg-white/5 dark:bg-white/[0.02] border-white/20 dark:border-white/10 text-white placeholder-white/50 dark:placeholder-white/40 focus:border-purple-400 resize-none"
              placeholder="Tell me about your project..."
            />
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
                Thank you for your message! I will get back to you soon.
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
