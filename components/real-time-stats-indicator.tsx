"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Users, Activity } from "lucide-react"

interface RealTimeStatsIndicatorProps {
  className?: string
}

export default function RealTimeStatsIndicator({ className = "" }: RealTimeStatsIndicatorProps) {
  const [totalViews, setTotalViews] = useState(0)
  const [activeUsers, setActiveUsers] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar el indicador después de un delay
    const showTimer = setTimeout(() => setIsVisible(true), 3000)

    // Simular vistas totales en tiempo real
    const viewsInterval = setInterval(() => {
      setTotalViews((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 2000)

    // Simular usuarios activos
    const usersInterval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 15) + 5)
    }, 5000)

    // Inicializar valores
    setTotalViews(55420)
    setActiveUsers(12)

    return () => {
      clearTimeout(showTimer)
      clearInterval(viewsInterval)
      clearInterval(usersInterval)
    }
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
          className={`fixed bottom-20 right-4 z-40 ${className}`}
        >
          <div className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg p-3 min-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-xs font-semibold text-muted-foreground">ESTADÍSTICAS EN VIVO</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Vistas totales</span>
                </div>
                <motion.span
                  key={totalViews}
                  initial={{ scale: 1.2, color: "#10b981" }}
                  animate={{ scale: 1, color: "inherit" }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-semibold"
                >
                  {formatNumber(totalViews)}
                </motion.span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Usuarios activos</span>
                </div>
                <motion.span
                  key={activeUsers}
                  initial={{ scale: 1.2, color: "#10b981" }}
                  animate={{ scale: 1, color: "inherit" }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-semibold"
                >
                  {activeUsers}
                </motion.span>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-primary/10">
                <Activity className="h-3 w-3 text-orange-500" />
                <span className="text-xs text-muted-foreground">Actualizando en tiempo real</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
