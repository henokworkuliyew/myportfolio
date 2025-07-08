'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const { scrollYProgress } = useScroll()
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    // Set initial window size
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  // Don't render particles on server or if window size is not available
  if (typeof window === 'undefined' || windowSize.width === 0) {
    return (
      <motion.div
        className="fixed inset-0 opacity-30 dark:opacity-20"
        style={{ y: yBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-400/10 dark:to-pink-400/10 animate-pulse" />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 50 }}
        />
      </motion.div>
    )
  }

  return (
    <>
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 opacity-30 dark:opacity-20"
        style={{ y: yBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-400/10 dark:to-pink-400/10 animate-pulse" />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 50 }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 dark:bg-purple-400/10 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              y: [null, Math.random() * windowSize.height],
              x: [null, Math.random() * windowSize.width],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
    </>
  )
}
