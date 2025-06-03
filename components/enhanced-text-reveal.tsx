"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import type { ReactNode } from "react"

interface EnhancedTextRevealProps {
  children: ReactNode
  className?: string
  animationType?: "typewriter" | "wave" | "slide" | "fade" | "glitch"
  delay?: number
  duration?: number
  staggerDelay?: number
}

export default function EnhancedTextReveal({
  children,
  className = "",
  animationType = "wave",
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.05,
}: EnhancedTextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Convertir children a string para poder animarlo letra por letra
  const text = typeof children === "string" ? children : ""
  const words = text.split(" ")

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const getItemVariants = () => {
    switch (animationType) {
      case "typewriter":
        return {
          hidden: { opacity: 0, width: 0 },
          visible: { opacity: 1, width: "auto" },
        }
      case "wave":
        return {
          hidden: { opacity: 0, y: 20, rotateX: -90 },
          visible: { opacity: 1, y: 0, rotateX: 0 },
        }
      case "slide":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }
      case "glitch":
        return {
          hidden: { opacity: 0, x: -10, skewX: 10 },
          visible: { opacity: 1, x: 0, skewX: 0 },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  const itemVariants = getItemVariants()

  if (animationType === "typewriter") {
    return (
      <motion.div
        ref={ref}
        className={`overflow-hidden ${className}`}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%" },
        }}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div ref={ref} className={className} initial="hidden" animate={controls} variants={containerVariants}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={itemVariants}
          transition={{ duration: duration / 2, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
