"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CursorTrailProps {
  color?: string
  size?: number
  trailLength?: number
}

export default function CursorTrail({ color = "rgba(0, 0, 0, 0.2)", size = 8, trailLength = 8 }: CursorTrailProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    if (!isMounted || isMobile) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [isMounted, isMobile])

  useEffect(() => {
    if (!isMounted || isMobile) return

    const interval = setInterval(() => {
      setTrail((prevTrail) => {
        // Añadir nueva posición al principio
        const newTrail = [
          { x: mousePosition.x, y: mousePosition.y, id: Date.now() },
          ...prevTrail.slice(0, trailLength - 1),
        ]
        return newTrail
      })
    }, 30) // Actualizar cada 30ms para un movimiento fluido

    return () => clearInterval(interval)
  }, [mousePosition, trailLength, isMounted, isMobile])

  if (!isMounted || isMobile) return null

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-40"
          style={{
            x: point.x - size / 2,
            y: point.y - size / 2,
            width: size,
            height: size,
            backgroundColor: color,
            opacity: 1 - index / trailLength,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1 - index / (trailLength * 2) }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </>
  )
}
