'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/data/contact'
import {
  Heart,
  Code,
  Coffee,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Full-Stack Development',
    'Frontend Development',
    'Backend Development',
    'Mobile App Development',
    'UI/UX Design',
    'Project Management',
  ]

  return (
    <footer className="relative bg-gradient-to-t from-slate-900/50 to-transparent border-t border-white/10 dark:border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Henok Worku
              </h3>
              <p className="text-white/60 dark:text-white/50 text-sm mb-4">
                Full-Stack Developer & Management Student
              </p>
              <div className="flex items-center text-green-400 text-sm mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </div>
            </div>

            <p className="text-white/70 dark:text-white/60 text-sm leading-relaxed mb-6">
              Transforming ideas into scalable digital solutions with modern
              technologies and strategic thinking. Passionate about creating
              user-centric applications that make a difference.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-white/60 dark:text-white/50">
                <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                Bahirdar, Ethiopia
              </div>
              <div className="flex items-center text-white/60 dark:text-white/50">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                <a
                  href="mailto:henokworku652@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  henokworku652@gmail.com
                </a>
              </div>
              <div className="flex items-center text-white/60 dark:text-white/50">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                <a
                  href="tel:+251948736453"
                  className="hover:text-white transition-colors"
                >
                  +251 948 736 453
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-white/60 dark:text-white/50 hover:text-white transition-colors text-sm flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-white/60 dark:text-white/50 text-sm flex items-center"
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Let&apos;s Connect
            </h4>
            <p className="text-white/60 dark:text-white/50 text-sm mb-6">
              Ready to start your next project? Let&apos;s discuss how we can
              work together to bring your ideas to life.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm rounded-lg p-3 text-white/60 dark:text-white/50 hover:text-white hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 dark:border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="flex items-center text-white/60 dark:text-white/50 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>© {currentYear} Henok Worku. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 mx-1 text-blue-400" />
              <span>in Ethiopia</span>
              <Coffee className="w-4 h-4 ml-1 text-yellow-600" />
            </motion.div>

            {/* Additional Links */}
            <motion.div
              className="flex items-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="text-white/60 dark:text-white/50 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 dark:text-white/50 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <div className="flex items-center text-white/60 dark:text-white/50">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs">All systems operational</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          className="w-20 h-20 border border-purple-400 rounded-full"
        />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl"
        />
      </div>
    </footer>
  )
}
