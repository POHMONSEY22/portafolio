"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Lightbulb, Code, TestTube, Rocket } from "lucide-react"
import WorkflowStep from "./workflow-step"

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Investigación y Descubrimiento",
      description: "Entender el problema y las necesidades del usuario",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Diseño y Prototipado",
      description: "Crear soluciones visuales y experiencias de usuario",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Desarrollo",
      description: "Implementación con código limpio y eficiente",
    },
    {
      icon: <TestTube className="h-6 w-6" />,
      title: "Pruebas y Refinamiento",
      description: "Validar la solución y pulir detalles",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Lanzamiento y Mejora Continua",
      description: "Despliegue y optimización constante",
    },
  ]

  // Cambia automáticamente el paso activo cada 3 segundos
  useState(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-2 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold">Mi Proceso de Trabajo</h2>
        <p className="text-muted-foreground">
          Un enfoque estructurado para convertir ideas en productos digitales excepcionales
        </p>
      </motion.div>

      <div className="space-y-6 mt-10 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            index={index}
            isActive={index === activeStep}
          />
        ))}
      </div>
    </div>
  )
}
