"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import type { ReactNode } from "react"

interface EnhancedCardGridProps {
  children: ReactNode
  className?: string
  animationType?: "cascade" | "spiral" | "wave" | "random" | "zoom"
  delay?: number
  staggerDelay?: number
  columns?: number
}

export default function EnhancedCardGrid({
  children,
  className = "",
  animationType = "cascade",
  delay = 0,
  staggerDelay = 0.1,
  columns = 3,
}: EnhancedCardGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const getStaggerDelay = (index: number) => {
    switch (animationType) {
      case "cascade":
        return index * staggerDelay
      case "spiral":
        const row = Math.floor(index / columns)
        const col = index % columns
        return (row + col) * staggerDelay
      case "wave":
        return Math.sin(index * 0.5) * staggerDelay + index * (staggerDelay / 2)
      case "random":
        return Math.random() * staggerDelay * 3
      case "zoom":
        return index * staggerDelay
      default:
        return index * staggerDelay
    }
  }

  const getItemVariants = () => {
    switch (animationType) {
      case "cascade":
        return {
          hidden: { opacity: 0, y: 60, scale: 0.8 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }
      case "spiral":
        return {
          hidden: { opacity: 0, rotate: -180, scale: 0.5 },
          visible: { opacity: 1, rotate: 0, scale: 1 },
        }
      case "wave":
        return {
          hidden: { opacity: 0, y: 40, rotateX: -45 },
          visible: { opacity: 1, y: 0, rotateX: 0 },
        }
      case "random":
        return {
          hidden: { opacity: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50, scale: 0.5 },
          visible: { opacity: 1, x: 0, y: 0, scale: 1 },
        }
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  const itemVariants = getItemVariants()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
          },
        },
      }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{
              duration: 0.6,
              delay: getStaggerDelay(index),
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}
