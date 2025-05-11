"use client"

import type React from "react"
import { motion } from "framer-motion"
import useMagnetic from "@/hooks/use-magnetic"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  strength?: number
  radius?: number
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 30,
  radius = 150,
}: MagneticButtonProps) {
  const { ref, x, y, handleMouseEnter, handleMouseLeave, isMobile } = useMagnetic({
    strength,
    radius,
  })

  if (isMobile) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}
