import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import type { ContactInfo, SocialLink } from '@/types/portfolio'

export const contactInfo: ContactInfo[] = [
  { icon: Mail, label: 'Email', value: 'henokworku652@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Bahirdar, Ethiopia' },
  { icon: Github, label: 'GitHub', value: '@henokworkuliyew' },
]

export const socialLinks: SocialLink[] = [
  { icon: Github, 
    href: 'https://github.com/henokworkuliyew', 
    label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/henokworku652',
    label: 'LinkedIn',
  },
  { icon: Mail, 
    href: 'mailto:henokworku652@gmail.com', 
    label: 'Email' },
]
