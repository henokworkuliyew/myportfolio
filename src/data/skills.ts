import { Globe, Database, Smartphone, Palette } from 'lucide-react'
import type { Skill, SkillCategory } from '@/types/portfolio'

export const skills: Skill[] = [
  { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', level: 95, color: 'from-gray-700 to-black' },
  { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
  { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
  { name: 'PostgreSQL', level: 62, color: 'from-blue-600 to-blue-800' },
  { name: 'MongoDB', level: 90, color: 'from-gray-700 to-black' },
  { name: 'Express.js', level: 75, color: 'from-orange-400 to-orange-600' },
  { name: 'Docker', level: 78, color: 'from-blue-400 to-blue-500' },
]

export const skillCategories: SkillCategory[] = [
  { icon: Globe, label: 'Frontend', desc: 'React, Next.js' },
  { icon: Database, label: 'Backend', desc: 'Node.js, Express, PHP' },
  { icon: Smartphone, label: 'Mobile', desc: 'Flutter' },
  { icon: Palette, label: 'Design', desc: 'UI/UX, Figma' },
  { icon: Globe, label: 'DevOps', desc: 'Docker, AWS' },
  { icon: Database, label: 'Databases', desc: 'PostgreSQL, MongoDB' },
  { icon: Smartphone, label: 'APIs', desc: 'REST, GraphQL' },
  { icon: Globe, label: 'Version Control', desc: 'Git, GitHub' },
  { icon: Database, label: 'Others', desc: 'Agile' },
  { icon: Smartphone, label: 'Soft Skills', desc: 'Communication, Teamwork, Problem Solving, Adaptability, Time Management, Leadership, Creativity' },
  { icon: Globe, label: 'Languages', desc: 'English, Amharic' },
  
]
