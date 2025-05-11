"use client"

import { useRef, useState, useEffect } from "react"
import { useSpring, useTransform } from "framer-motion"

interface UseMagneticOptions {
  strength?: number
  radius?: number
  ease?: number
}

export default function useMagnetic({ strength = 30, radius = 150, ease = 0.2 }: UseMagneticOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [elementCenter, setElementCenter] = useState({ x: 0, y: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Valores de spring para animaciones suaves
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const xSpring = useSpring(0, springConfig)
  const ySpring = useSpring(0, springConfig)

  // Transformar los valores de spring para limitar el movimiento
  const x = useTransform(xSpring, (val) => val)
  const y = useTransform(ySpring, (val) => val)

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
    if (!isMounted || isMobile || !ref.current) return

    const element = ref.current
    const updateElementPosition = () => {
      const rect = element.getBoundingClientRect()
      setElementCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }

    updateElementPosition()
    window.addEventListener("resize", updateElementPosition)
    window.addEventListener("scroll", updateElementPosition)

    return () => {
      window.removeEventListener("resize", updateElementPosition)
      window.removeEventListener("scroll", updateElementPosition)
    }
  }, [isMounted, isMobile])

  useEffect(() => {
    if (!isMounted || isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (!isHovered) return

      const distanceX = e.clientX - elementCenter.x
      const distanceY = e.clientY - elementCenter.y
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      if (distance < radius) {
        // Calcular la fuerza basada en la distancia (más cerca = más fuerte)
        const force = (1 - distance / radius) * strength
        xSpring.set((distanceX * force) / 100)
        ySpring.set((distanceY * force) / 100)
      } else {
        // Fuera del radio, volver a la posición original
        xSpring.set(0)
        ySpring.set(0)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMounted, isMobile, elementCenter, isHovered, radius, strength, xSpring, ySpring])

  const handleMouseEnter = () => {
    if (isMobile) return
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    setIsHovered(false)
    xSpring.set(0)
    ySpring.set(0)
  }

  return {
    ref,
    x,
    y,
    handleMouseEnter,
    handleMouseLeave,
    isMobile,
  }
}
