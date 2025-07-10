'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { aboutFeatures } from '@/data/about'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-white/70 dark:text-white/60 max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating innovative
            web solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-white/80 dark:text-white/70 leading-relaxed">
                I am a passionate full-stack developer who loves turning complex
                problems into simple, beautiful solutions. With expertise in
                modern web technologies, I create scalable applications that
                deliver exceptional user experiences.
              </p>
              <p className="text-lg text-white/80 dark:text-white/70 leading-relaxed">
                When I am not coding, you will find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {aboutFeatures.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-lg p-4 mb-2">
                        <Icon className="w-8 h-8 mx-auto text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-white">{item.label}</h4>
                      <p className="text-sm text-white/60 dark:text-white/50">
                        {item.desc}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
              <div className="mt-8 text-center">
                <motion.a
                  href="https://drive.google.com/file/d/1RV5fpqJOy9QjzpdmFYGXrUNFGADfrKgB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-2xl blur-xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6 }}
              />
              <Image
                src="/photo/contact.png"
                alt="About me"
                width={400}
                height={400}
                className="relative rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
