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
