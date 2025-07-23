"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import type { ReactNode } from "react"

interface DramaticEntranceProps {
  children: ReactNode
  className?: string
  effect?: "curtain" | "spotlight" | "shatter" | "fold" | "portal"
  delay?: number
  duration?: number
}

export default function DramaticEntrance({
  children,
  className = "",
  effect = "curtain",
  delay = 0,
  duration = 1.2,
}: DramaticEntranceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const getEffectVariants = () => {
    switch (effect) {
      case "curtain":
        return {
          hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.01 }, // Añadido opacity
          visible: { clipPath: "inset(0 0% 0 0)", opacity: 1 },
        }
      case "spotlight":
        return {
          hidden: { clipPath: "circle(0% at 50% 50%)", opacity: 0.01 }, // Cambiado opacity
          visible: { clipPath: "circle(100% at 50% 50%)", opacity: 1 },
        }
      case "shatter":
        return {
          hidden: {
            opacity: 0.01, // Cambiado opacity
            scale: 0.8,
            filter: "blur(10px)",
            transform: "perspective(1000px) rotateX(-45deg)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transform: "perspective(1000px) rotateX(0deg)",
          },
        }
      case "fold":
        return {
          hidden: {
            opacity: 0.01, // Cambiado opacity
            scaleY: 0,
            transformOrigin: "top",
            rotateX: -90,
          },
          visible: {
            opacity: 1,
            scaleY: 1,
            transformOrigin: "top",
            rotateX: 0,
          },
        }
      case "portal":
        return {
          hidden: {
            opacity: 0.01, // Cambiado opacity
            scale: 0,
            rotate: 180,
            filter: "blur(20px) hue-rotate(180deg)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px) hue-rotate(0deg)",
          },
        }
      default:
        return {
          hidden: { opacity: 0.01 }, // Cambiado opacity
          visible: { opacity: 1 },
        }
    }
  }

  const variants = getEffectVariants()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: effect === "portal" ? [0.68, -0.55, 0.265, 1.55] : [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
