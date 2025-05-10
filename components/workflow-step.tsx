"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface WorkflowStepProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
  isActive?: boolean
}

export default function WorkflowStep({ icon, title, description, index, isActive = false }: WorkflowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Línea conectora (excepto para el último elemento) */}
      <div
        className="absolute left-6 top-10 bottom-0 w-0.5 bg-primary/20 hidden md:block"
        style={{ display: index === 4 ? "none" : "block" }}
      />

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <Card
          className={cn(
            "bg-background/50 backdrop-blur-sm border transition-all duration-300",
            isActive ? "border-primary shadow-lg shadow-primary/10" : "border-primary/10 hover:border-primary/30",
          )}
        >
          <CardHeader className="pb-2 flex md:flex-row items-start gap-4">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className={cn(
                "p-2 rounded-full bg-primary/10 text-primary flex items-center justify-center",
                isActive && "bg-primary text-white",
              )}
            >
              {icon}
            </motion.div>
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-sm mt-1">{description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="pl-0 md:pl-14">
              {index === 0 && (
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Entrevistas con stakeholders</li>
                  <li>• Investigación de usuarios</li>
                  <li>• Análisis de competencia</li>
                  <li>• Definición de objetivos claros</li>
                </ul>
              )}
              {index === 1 && (
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Wireframes de baja fidelidad</li>
                  <li>• Arquitectura de información</li>
                  <li>• Flujos de usuario</li>
                  <li>• Prototipos interactivos</li>
                </ul>
              )}
              {index === 2 && (
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Desarrollo modular</li>
                  <li>• Código limpio y documentado</li>
                  <li>• Optimización de rendimiento</li>
                  <li>• Pruebas continuas</li>
                </ul>
              )}
              {index === 3 && (
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Pruebas de usabilidad</li>
                  <li>• Pruebas de compatibilidad</li>
                  <li>• Optimización de accesibilidad</li>
                  <li>• Validación con usuarios reales</li>
                </ul>
              )}
              {index === 4 && (
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Despliegue en producción</li>
                  <li>• Monitoreo de rendimiento</li>
                  <li>• Análisis de métricas</li>
                  <li>• Iteraciones basadas en feedback</li>
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
