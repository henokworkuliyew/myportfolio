'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useActiveSection } from '@/hooks/use-active-section'
import { socialLinks } from '@/data/contact'

export default function HeroSection() {
  const { scrollToSection } = useActiveSection()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-40 h-40 mx-auto mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* LinkedIn-style Open to Work Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, #00a0dc 0deg, #00a0dc 60deg, #16a34a 60deg, #16a34a 180deg, #00a0dc 180deg, #00a0dc 240deg, #16a34a 240deg, #16a34a 360deg)`,
                padding: '4px',
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 dark:bg-slate-950 flex items-center justify-center p-1">
                <Image
                  src="/photo/profile.jpg"
                  alt="Henok Worku - Profile"
                  width={140}
                  height={140}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Open to Work Text on Ring */}
            <motion.div
              className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <svg className="w-full h-full" viewBox="0 0 160 160">
                <defs>
                  <path
                    id="circle-path"
                    d="M 80, 80 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text
                  className="text-xs font-bold fill-white"
                  letterSpacing="2"
                >
                  <textPath href="#circle-path" startOffset="0%">
                    #OPENTOWORK • #OPENTOWORK •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Availability Indicator */}
            <motion.div
              className="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full border-2 border-white dark:border-slate-900 shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.5,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                <span>Available</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Henok Worku
          </motion.h2>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Full Stack
            </span>
            <br />
            Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-purple-300 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Computer Science Graduate • Management Student • Tech Enthusiast
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-white/70 dark:text-white/60 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transforming complex problems into scalable, user-friendly solutions
            with modern technologies and strategic thinking. Ready to make an
            impact!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me Now
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-white/60 dark:text-white/40 hover:text-white dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown className="text-white/50 dark:text-white/30" size={32} />
      </motion.div>
    </section>
  )
}
