import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import type { ContactInfo, SocialLink } from '@/types/portfolio'

export const contactInfo: ContactInfo[] = [
  { icon: Mail, label: 'Email', value: 'hello@developer.com' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  { icon: Github, label: 'GitHub', value: '@developer' },
]

export const socialLinks: SocialLink[] = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
]
