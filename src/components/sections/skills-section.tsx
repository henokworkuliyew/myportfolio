'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import type { Skill } from '@/types/portfolio'

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/70 dark:text-white/60 max-w-3xl mx-auto">
            Expertise across the full development stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm rounded-lg p-6 border border-white/10 dark:border-white/5"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-purple-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-white/10 dark:bg-white/5 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 1,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.label}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-2xl p-8 mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 dark:group-hover:from-purple-500/20 dark:group-hover:to-pink-500/20 transition-all duration-300">
                  <Icon className="w-12 h-12 mx-auto text-purple-400 group-hover:text-pink-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.label}
                </h3>
                <p className="text-white/60 dark:text-white/50">
                  {category.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
