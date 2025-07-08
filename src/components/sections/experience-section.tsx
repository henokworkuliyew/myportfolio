'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar } from 'lucide-react'
import type { Experience } from '@/types/portfolio'

interface ExperienceSectionProps {
  experience: Experience[]
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-white/70 dark:text-white/60 max-w-3xl mx-auto">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 mr-6">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.position}
                  </h3>
                  <p className="text-purple-400 text-lg">{exp.company}</p>
                  <p className="text-white/60 dark:text-white/50">
                    {exp.duration}
                  </p>
                </div>
              </div>

              <Card className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border-white/10 dark:border-white/5 ml-16">
                <CardContent className="p-6">
                  <p className="text-white/80 dark:text-white/70 mb-4">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-2">
                      Key Achievements:
                    </h4>
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center text-white/70 dark:text-white/60"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                        {achievement}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {index < experience.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-pink-500" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
