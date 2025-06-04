"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import AnalyticsDashboard from "./analytics-dashboard"

export default function AnalyticsWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botón flotante para abrir analytics */}
      <motion.div
        className="fixed bottom-20 right-20 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="rounded-full h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <BarChart3 className="h-5 w-5" />
          <span className="sr-only">Ver Analytics</span>
        </Button>
      </motion.div>

      {/* Modal de analytics */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-6xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="bg-background/95 backdrop-blur-sm border border-primary/20 shadow-2xl">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
                        <p className="text-muted-foreground">Estadísticas en tiempo real del portfolio</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <AnalyticsDashboard />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
