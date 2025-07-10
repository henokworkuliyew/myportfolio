"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { aboutFeatures } from "@/data/about"
import { GraduationCap, Briefcase, Code, Users, Award, Target } from "lucide-react"

export default function AboutSection() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Computer Science Graduate",
      desc: "Bahir Dar University",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      title: "Management Student",
      desc: "4th Year Strategic Leadership",
      color: "from-green-500 to-emerald-500",
    },
    { icon: Code, title: "Full-Stack Developer", desc: "2+ Years Experience", color: "from-purple-500 to-pink-500" },
    {
      icon: Users,
      title: "Team Leadership",
      desc: "Cross-functional Collaboration",
      color: "from-orange-500 to-red-500",
    },
  ]

  const techJourney = [
    {
      year: "2023",
      title: "Programming Foundations",
      techs: ["C++", "Python", "Java"],
      color: "from-red-500 to-orange-500",
    },
    {
      year: "2023",
      title: "Web Development",
      techs: ["HTML", "CSS", "JavaScript"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2024",
      title: "Frontend Mastery",
      techs: ["React", "Next.js", "UI/UX"],
      color: "from-green-500 to-blue-500",
    },
    {
      year: "2024",
      title: "Backend Development",
      techs: ["Node.js", "Express", "MongoDB"],
      color: "from-blue-500 to-purple-500",
    },
    {
      year: "2025",
      title: "Full-Stack Web  Development and Intermediate Mobile Development",
      techs: ["Flutter", "MERN stack and Next.js", "Cross-platform"],
      color: "from-purple-500 to-pink-500",
    },
  ]

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
            A unique blend of technical expertise and strategic leadership, transforming ideas into reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-2xl p-6 border border-purple-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-purple-400" />
                  My Mission
                </h3>
                <p className="text-lg text-white/80 dark:text-white/70 leading-relaxed">
                  As a Computer Science graduate from{" "}
                  <span className="text-purple-400 font-semibold">Bahir Dar University</span> and 4th-year Management
                  student, I bring a unique perspective to software development. My journey began in 2023 with
                  foundational programming and evolved into full-stack mastery by 2025.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5 rounded-2xl p-6 border border-green-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-green-400" />
                  What Drives Me
                </h3>
                <p className="text-lg text-white/80 dark:text-white/70 leading-relaxed">
                  I thrive on transforming complex problems into simple, scalable, and user-friendly solutions. My
                  management studies enhance my ability to deliver end-to-end solutions and lead cross-functional teams
                  effectively.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {aboutFeatures.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      className="text-center bg-white/5 dark:bg-white/[0.02] rounded-xl p-4 border border-white/10"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-lg p-3 mb-3 mx-auto w-fit">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-white text-sm">{item.label}</h4>
                      <p className="text-xs text-white/60 dark:text-white/50">{item.desc}</p>
                    </motion.div>
                  )
                })}
              </div>

              <div className="text-center">
                <motion.a
                  href="https://drive.google.com/file/d/1RV5fpqJOy9QjzpdmFYGXrUNFGADfrKgB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download My Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white/5 dark:bg-white/[0.02] rounded-xl p-4 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className={`bg-gradient-to-r ${achievement.color} rounded-lg p-3 mb-3 w-fit`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{achievement.title}</h4>
                    <p className="text-xs text-white/60">{achievement.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Profile Image */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-2xl blur-xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6 }}
              />
              <Image
                src="/photo/contact.png"
                alt="Henok Worku - About"
                width={400}
                height={400}
                className="relative rounded-2xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Tech Journey
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {techJourney.map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 dark:bg-white/[0.02] border-white/10 hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div
                      className={`bg-gradient-to-r ${phase.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}
                    >
                      <span className="text-white font-bold text-sm">{phase.year}</span>
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-2">{phase.title}</h4>
                    <div className="space-y-1">
                      {phase.techs.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-white/10 text-white border-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {index < techJourney.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Beyond Coding</h3>
          <p className="text-lg text-white/80 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
            When I am not coding, I actively explore emerging technologies, contribute to open-source projects, and
            engage with the developer community through knowledge sharing and mentorship. These activities fuel my
            growth and inspire me to create innovative, user-centric solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
