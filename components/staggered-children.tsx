"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggeredChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
}

export default function StaggeredChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
}: StaggeredChildrenProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={item}>{children}</motion.div>
      )}
    </motion.div>
  )
}
