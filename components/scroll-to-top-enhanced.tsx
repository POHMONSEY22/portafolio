"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

interface ScrollToTopEnhancedProps {
  showAfter?: number
  duration?: number
}

export default function ScrollToTopEnhanced({ showAfter = 300, duration = 800 }: ScrollToTopEnhancedProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollProgress = useScrollProgress()

  // Detectar scroll para mostrar/ocultar el botón
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [showAfter])

  // Función para hacer scroll al inicio con animación suave
  const scrollToTop = () => {
    setIsScrolling(true)

    const startPosition = window.pageYOffset
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      // Función de easing para una animación más suave
      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      const ease = easeInOutCubic(progress)
      const currentPosition = startPosition * (1 - ease)

      window.scrollTo(0, currentPosition)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        setIsScrolling(false)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const circumference = 2 * Math.PI * 20 // radio de 20px
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - scrollProgress * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="fixed bottom-4 left-4 z-50"
        >
          <div className="relative">
            {/* Círculo de progreso */}
            <svg className="absolute inset-0 w-12 h-12 transform -rotate-90" viewBox="0 0 44 44">
              {/* Círculo de fondo */}
              <circle cx="22" cy="22" r="20" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" fill="none" />
              {/* Círculo de progreso */}
              <motion.circle
                cx="22"
                cy="22"
                r="20"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* Botón */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={scrollToTop}
                disabled={isScrolling}
                size="icon"
                className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  animate={isScrolling ? { rotate: 360 } : { rotate: 0 }}
                  transition={{
                    duration: isScrolling ? 0.8 : 0,
                    repeat: isScrolling ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.div>
                <span className="sr-only">Volver al inicio</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
