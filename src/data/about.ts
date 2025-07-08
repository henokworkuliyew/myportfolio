import { Code, Zap, Users, Award } from 'lucide-react'
import type { AboutFeature } from '@/types/portfolio'

export const aboutFeatures: AboutFeature[] = [
  { icon: Code, label: 'Clean Code', desc: 'Writing maintainable code' },
  { icon: Zap, label: 'Performance', desc: 'Optimized solutions' },
  { icon: Users, label: 'Collaboration', desc: 'Team player' },
  { icon: Award, label: 'Quality', desc: 'Attention to detail' },
]
