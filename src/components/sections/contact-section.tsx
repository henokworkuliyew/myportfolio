'use client'

import { motion } from 'framer-motion'
import { contactInfo, socialLinks } from '@/data/contact'
import ContactForm from '../ui/contact-form'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-white/70 dark:text-white/60 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                const isPhone = contact.label === 'Phone'
                const isEmail = contact.label === 'Email'

                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/60 dark:text-white/50 text-sm">
                        {contact.label}
                      </p>
                      {isPhone ? (
                        <a
                          href={`tel:${contact.value.replace(/\s/g, '')}`}
                          className="text-white font-medium hover:text-purple-400 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : isEmail ? (
                        <a
                          href={`mailto:${contact.value}`}
                          className="text-white font-medium hover:text-purple-400 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm rounded-lg p-3 text-white/60 dark:text-white/50 hover:text-white hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
