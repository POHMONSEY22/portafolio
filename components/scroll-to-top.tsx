"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScrollToTopProps {
  showAfter?: number
  duration?: number
}

export default function ScrollToTop({ showAfter = 300, duration = 800 }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={scrollToTop}
              disabled={isScrolling}
              size="icon"
              className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-background/20"
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

          {/* Indicador de progreso circular */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.3) ${
                (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 360
              }deg, transparent ${
                (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 360
              }deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
