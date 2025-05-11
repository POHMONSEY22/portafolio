"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

interface ParticlesBackgroundProps {
  particleCount?: number
  particleSize?: number
  particleColor?: string
  lineColor?: string
  lineWidth?: number
  connectionDistance?: number
  interactiveDistance?: number
  interactiveForce?: number
  velocityFactor?: number
}

export default function ParticlesBackground({
  particleCount = 80,
  particleSize = 3,
  particleColor = "",
  lineColor = "",
  lineWidth = 0.5,
  connectionDistance = 150,
  interactiveDistance = 200,
  interactiveForce = 5,
  velocityFactor = 0.5,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const { theme } = useTheme()

  // Determinar colores basados en el tema
  const getParticleColor = () => {
    if (particleColor) return particleColor
    return theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
  }

  const getLineColor = () => {
    if (lineColor) return lineColor
    return theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
  }

  // Inicializar partículas
  const initParticles = () => {
    const particles: Particle[] = []
    const color = getParticleColor()

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * particleSize + 1,
        speedX: (Math.random() - 0.5) * velocityFactor,
        speedY: (Math.random() - 0.5) * velocityFactor,
        color,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    particlesRef.current = particles
  }

  // Dibujar partículas y conexiones
  const drawParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Actualizar y dibujar partículas
    particlesRef.current.forEach((particle, i) => {
      // Actualizar posición
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Rebotar en los bordes
      if (particle.x > dimensions.width || particle.x < 0) {
        particle.speedX = -particle.speedX
      }
      if (particle.y > dimensions.height || particle.y < 0) {
        particle.speedY = -particle.speedY
      }

      // Mantener partículas dentro del canvas
      particle.x = Math.max(0, Math.min(dimensions.width, particle.x))
      particle.y = Math.max(0, Math.min(dimensions.height, particle.y))

      // Interacción con el cursor
      if (mousePosition) {
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < interactiveDistance) {
          const forceFactor = (interactiveDistance - distance) / interactiveDistance
          particle.speedX -= (dx / distance) * forceFactor * interactiveForce * 0.05
          particle.speedY -= (dy / distance) * forceFactor * interactiveForce * 0.05
        }
      }

      // Aplicar fricción para evitar aceleración infinita
      particle.speedX *= 0.99
      particle.speedY *= 0.99

      // Dibujar partícula
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color.replace(")", `, ${particle.opacity})`)
      ctx.fill()

      // Dibujar conexiones entre partículas cercanas
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const particle2 = particlesRef.current[j]
        const dx = particle.x - particle2.x
        const dy = particle.y - particle2.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particle2.x, particle2.y)
          const opacity = (1 - distance / connectionDistance) * 0.5
          ctx.strokeStyle = getLineColor().replace(")", `, ${opacity})`)
          ctx.lineWidth = lineWidth
          ctx.stroke()
        }
      }
    })

    animationFrameRef.current = requestAnimationFrame(drawParticles)
  }

  // Manejar cambio de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const { width, height } = canvas.getBoundingClientRect()
        setDimensions({
          width: width,
          height: height,
        })
        canvas.width = width
        canvas.height = height
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Inicializar partículas cuando cambian las dimensiones
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles()
    }
  }, [dimensions, particleCount, particleSize, theme])

  // Manejar movimiento del ratón
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => {
      setMousePosition(null)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Iniciar y detener la animación
  useEffect(() => {
    drawParticles()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dimensions, theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}
