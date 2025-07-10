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

interface Metrics {
  users: number
  performance: number
  uptime: number
}

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  tech: string[]
  github: string
  live: string
  featured: boolean
  category: string
  status: string
  createdAt?: string
  metrics?: Metrics
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

export interface contact {
  _id : string
  name: string
  email: string
  subject: string
  message: string
}