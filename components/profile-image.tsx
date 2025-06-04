"use client"

import type React from "react"

import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export default function ProfileImage() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width <= 640)
      setIsTablet(width > 640 && width <= 1024)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return

    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  // Tamaños específicos para cada dispositivo
  const getImageSize = () => {
    if (isMobile) return "h-48 w-48"
    if (isTablet) return "h-60 w-60"
    return "h-64 w-64 lg:h-72 lg:w-72"
  }

  const getSizes = () => {
    return "(max-width: 640px) 192px, (max-width: 1024px) 240px, (max-width: 1280px) 256px, 288px"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      }}
      className="relative perspective-500"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isTablet ? 0.8 : 0.7 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/40 blur-xl"
      ></motion.div>
      <motion.div
        className={`${getImageSize()} rounded-full border-4 border-background relative overflow-hidden shadow-2xl`}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        whileHover={isTablet ? { scale: 1.05 } : {}}
      >
        <div className="relative w-full h-full">
          <Image src="/profile.png" alt="Profile" fill className="object-cover" sizes={getSizes()} priority />
        </div>
      </motion.div>
    </motion.div>
  )
}
