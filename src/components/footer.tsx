'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/data/contact'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            className="text-white/60 dark:text-white/40 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Henok&apos;s Portfolio. All rights
            reserved.
          </motion.p>
          <motion.div
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-white/60 dark:text-white/40 hover:text-white dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
