import { Globe, Database, Smartphone, Palette } from 'lucide-react'
import type { Skill, SkillCategory } from '@/types/portfolio'

export const skills: Skill[] = [
  { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', level: 90, color: 'from-gray-700 to-black' },
  { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
  { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
  { name: 'Python', level: 80, color: 'from-yellow-400 to-yellow-600' },
  { name: 'PostgreSQL', level: 82, color: 'from-blue-600 to-blue-800' },
  { name: 'AWS', level: 75, color: 'from-orange-400 to-orange-600' },
  { name: 'Docker', level: 78, color: 'from-blue-400 to-blue-500' },
]

export const skillCategories: SkillCategory[] = [
  { icon: Globe, label: 'Frontend', desc: 'React, Vue, Angular' },
  { icon: Database, label: 'Backend', desc: 'Node.js, Python, PHP' },
  { icon: Smartphone, label: 'Mobile', desc: 'React Native, Flutter' },
  { icon: Palette, label: 'Design', desc: 'UI/UX, Figma, Adobe' },
]
