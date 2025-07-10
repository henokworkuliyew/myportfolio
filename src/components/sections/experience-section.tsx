"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Code,  Trophy, Briefcase } from "lucide-react"
import { educationTimeline, experiences, skillCategories } from "@/data/experience"

export default function ExperienceSection() {
  

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
            Professional Experience
          </h2>
          <p className="text-xl text-white/70 dark:text-white/60 max-w-3xl mx-auto">
            A journey of continuous learning, growth, and impactful contributions
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-purple-400" />
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border-white/10 dark:border-white/5 hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className={`bg-gradient-to-r ${exp.color} rounded-full p-2 mr-4`}>
                            <Building className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                            <p className="text-purple-400 text-lg font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 dark:text-white/70 mb-6 text-lg leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                        Key Achievements:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start text-white/70 dark:text-white/60"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-white/10 dark:bg-white/5 text-white border-white/20 dark:border-white/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-purple-400" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {educationTimeline.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border-white/10 dark:border-white/5 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`bg-gradient-to-r ${edu.color} rounded-full p-2 mr-3`}>
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <p className="text-purple-400 font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-white/60 text-sm">{edu.duration}</span>
                      <Badge
                        variant="secondary"
                        className={
                          edu.status === "Graduated"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        }
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <p className="text-white/80 dark:text-white/70 mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start text-white/70 dark:text-white/60 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Code className="w-6 h-6 mr-3 text-purple-400" />
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border-white/10 dark:border-white/5 hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`bg-gradient-to-r ${category.color} rounded-lg p-2 mr-3`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-white/10 dark:bg-white/5 text-white border-white/20 dark:border-white/10 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
