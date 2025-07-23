"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface EnhancedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  animationType?: "fade" | "slide" | "scale" | "rotate" | "flip" | "wave"
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  stagger?: boolean
  staggerDelay?: number
  threshold?: number
  once?: boolean
}

const animationVariants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0.01 }, // Cambiado de 0
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0.01, y: 60 }, // Cambiado de 0
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0.01, x: -60 }, // Cambiado de 0
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0.01, x: 60 }, // Cambiado de 0
    visible: { opacity: 1, x: 0 },
  },
  slideDown: {
    hidden: { opacity: 0.01, y: -60 }, // Cambiado de 0
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0.01, scale: 0.8 }, // Cambiado de 0
    visible: { opacity: 1, scale: 1 },
  },
  rotate: {
    hidden: { opacity: 0.01, rotate: -10, scale: 0.9 }, // Cambiado de 0
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0.01, rotateY: -90, scale: 0.8 }, // Cambiado de 0
    visible: { opacity: 1, rotateY: 0, scale: 1 },
  },
  wave: {
    hidden: { opacity: 0.01, y: 30, skewY: 5 }, // Cambiado de 0
    visible: { opacity: 1, y: 0, skewY: 0 },
  },
}

export default function EnhancedSection({
  children,
  id,
  className = "",
  animationType = "slide",
  direction = "up",
  delay = 0,
  duration = 0.8,
  stagger = false,
  staggerDelay = 0.1,
  threshold = 0.1,
  once = true,
}: EnhancedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  // Determinar la variante de animación basada en el tipo y dirección
  const getVariant = () => {
    if (animationType === "slide") {
      switch (direction) {
        case "left":
          return animationVariants.slideLeft
        case "right":
          return animationVariants.slideRight
        case "down":
          return animationVariants.slideDown
        default:
          return animationVariants.slide
      }
    }
    return animationVariants[animationType] || animationVariants.slide
  }

  const variants = getVariant()

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      if (once) {
        setHasAnimated(true)
      }
    } else if (!isInView && !once) {
      controls.start("hidden")
    }
  }, [isInView, controls, hasAnimated, once])

  const containerVariants = stagger
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }
    : variants

  const itemVariants = stagger ? variants : {}

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      transition={{
        duration,
        delay: stagger ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
      }}
    >
      {stagger ? <motion.div variants={itemVariants}>{children}</motion.div> : children}
    </motion.section>
  )
}
