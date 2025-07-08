import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  id: string
  label: string
}

export interface Skill {
  name: string
  level: number
  color: string
}

export interface SkillCategory {
  icon: LucideIcon
  label: string
  desc: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
  featured: boolean
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
}

export interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
}

export interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

export interface AboutFeature {
  icon: LucideIcon
  label: string
  desc: string
}
