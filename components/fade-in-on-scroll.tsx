"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface FadeInOnScrollProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  threshold?: [number, number]
}

export default function FadeInOnScroll({
  children,
  className = "",
  direction = "up",
  distance = 50,
  threshold = [0, 1],
}: FadeInOnScrollProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const directionMap = {
    up: { y: useTransform(scrollYProgress, threshold, [distance, 0]) },
    down: { y: useTransform(scrollYProgress, threshold, [-distance, 0]) },
    left: { x: useTransform(scrollYProgress, threshold, [distance, 0]) },
    right: { x: useTransform(scrollYProgress, threshold, [-distance, 0]) },
  }

  const opacity = useTransform(scrollYProgress, threshold, [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        ...directionMap[direction],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
