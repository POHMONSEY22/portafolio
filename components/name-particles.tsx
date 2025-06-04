"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  velocity: { x: number; y: number }
  life: number
  maxLife: number
}

interface NameParticlesProps {
  isHovered: boolean
  elementRef: React.RefObject<HTMLElement>
  particleColor?: string
  particleCount?: number
}

export default function NameParticles({
  isHovered,
  elementRef,
  particleColor = "rgba(255, 255, 255, 0.8)",
  particleCount = 15,
}: NameParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [elementBounds, setElementBounds] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const animationFrameRef = useRef<number>()
  const particleIdRef = useRef(0)

  // Actualizar las dimensiones del elemento
  useEffect(() => {
    const updateBounds = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        setElementBounds({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        })
      }
    }

    updateBounds()
    window.addEventListener("resize", updateBounds)
    window.addEventListener("scroll", updateBounds)

    return () => {
      window.removeEventListener("resize", updateBounds)
      window.removeEventListener("scroll", updateBounds)
    }
  }, [elementRef])

  // Crear nuevas partículas cuando se hace hover
  useEffect(() => {
    if (isHovered && elementBounds.width > 0) {
      const interval = setInterval(() => {
        const newParticles: Particle[] = []

        for (let i = 0; i < particleCount; i++) {
          const particle: Particle = {
            id: particleIdRef.current++,
            x: elementBounds.x + Math.random() * elementBounds.width,
            y: elementBounds.y + elementBounds.height * 0.5 + (Math.random() - 0.5) * elementBounds.height * 0.8,
            size: Math.random() * 4 + 2,
            color: particleColor,
            velocity: {
              x: (Math.random() - 0.5) * 4,
              y: -Math.random() * 3 - 1,
            },
            life: 1,
            maxLife: Math.random() * 60 + 40,
          }
          newParticles.push(particle)
        }

        setParticles((prev) => [...prev, ...newParticles])
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isHovered, elementBounds, particleColor, particleCount])

  // Animar partículas
  useEffect(() => {
    const animate = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            velocity: {
              x: particle.velocity.x * 0.99,
              y: particle.velocity.y + 0.1, // gravedad
            },
            life: particle.life - 1,
          }))
          .filter((particle) => particle.life > 0),
      )

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Limpiar partículas cuando no hay hover
  useEffect(() => {
    if (!isHovered) {
      const timeout = setTimeout(() => {
        setParticles([])
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [isHovered])

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{
              opacity: particle.life / particle.maxLife,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
