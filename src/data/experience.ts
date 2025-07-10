
import {
  
  Code,
  Users,
 
} from 'lucide-react'


 export const experiences = [
    {
      company: 'Alyah Software Company',
      position: 'Junior Full-Stack Web Developer',
      duration: '2024',
      location: 'Ethiopia',
      type: 'Internship',
      description:
        'Leading full-stack development projects with a focus on scalable web applications and cross-functional team collaboration.',
      achievements: [
        'Developed and maintained full-stack web applications using modern technologies',
        'Collaborated with cross-functional teams to design and deploy scalable solutions',
        'Enhanced application performance and user satisfaction through optimization',
        'Contributed to code reviews ensuring high-quality, maintainable codebases',
        'Managed project timelines and deliverables ensuring on-time delivery',
        'Bridged business requirements with technical implementation',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        
        'PostgreSQL',
        
      ],
      color: 'from-blue-500 to-purple-500',
    },
    {
      company: 'Freelance & Open Source',
      position: 'Full-Stack Developer & Contributor',
      duration: '2023 - Present',
      location: 'Remote',
      type: 'Contract',
      description:
        'Building diverse projects and contributing to open-source initiatives while expanding technical expertise.',
      achievements: [
        'Completed multiple client projects with modern web technologies',
        'Contributed to 10+ open-source projects on GitHub',
        'Built responsive web applications with focus on user experience',
        'Learned and mastered 5+ new technologies through practical application',
        'Mentored junior developers in the community',
        'Applied modern design techniques to enhance user interfaces',
      ],
      technologies: [
        
        'Node.js',
        'React',
        ,
        'MongoDB',
        
        'Tailwind CSS',
        'Express.js',
        

      ],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  export const educationTimeline = [
    {
      institution: 'Bahir Dar University',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2023 - 2025',
      status: 'Graduated',
      description:
        'Comprehensive computer science education with focus on algorithms, data structures, and software engineering principles.',
      achievements: [
        'Strong foundation in programming languages (C++, Python, Java)',
        'Mastered algorithms and data structures',
        'Completed advanced coursework in software engineering',
        'Participated in coding competitions and hackathons',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      institution: 'Management Studies',
      degree: "Bachelor's in Management",
      duration: '2023 - Present',
      status: '4th Year Student',
      description:
        'Strategic leadership and business management education complementing technical skills.',
      achievements: [
        'Project management using Agile and Scrum methodologies',
        'Team leadership and cross-functional collaboration',
        'Strategic planning and resource optimization',
        'Business communication and stakeholder management',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ]

  export const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C++', 'Dart'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Frontend Development',
      skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS','JavaScript'],
      icon: Code,
      color: 'from-green-500 to-blue-500',
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL'],
      icon: Code,
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Mobile Development',
      skills: ['Flutter', 'Cross-platform', 'Mobile UI/UX', 'State Management'],
      icon: Code,
      color: 'from-pink-500 to-red-500',
    },
    {
      category: 'Management Skills',
      skills: [
        'Project Management',
        'Team Leadership',
        'Agile/Scrum',
        'Strategic Planning',
      ],
      icon: Users,
      color: 'from-orange-500 to-yellow-500',
    },
  ]