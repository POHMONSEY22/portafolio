"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Lightbulb, Code, TestTube, Rocket } from "lucide-react"
import WorkflowStep from "./workflow-step"

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsTablet(width > 640 && width <= 1024)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  const steps = [
    {
      icon: <Search className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />,
      title: "Investigación y Descubrimiento",
      description: "Entender el problema y las necesidades del usuario",
    },
    {
      icon: <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />,
      title: "Diseño y Prototipado",
      description: "Crear soluciones visuales y experiencias de usuario",
    },
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />,
      title: "Desarrollo",
      description: "Implementación con código limpio y eficiente",
    },
    {
      icon: <TestTube className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />,
      title: "Pruebas y Refinamiento",
      description: "Validar la solución y pulir detalles",
    },
    {
      icon: <Rocket className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />,
      title: "Lanzamiento y Mejora Continua",
      description: "Despliegue y optimización constante",
    },
  ]

  // Cambia automáticamente el paso activo cada 3 segundos
  useEffect(() => {
    const interval = setInterval(
      () => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      },
      isTablet ? 4000 : 3000,
    ) // Más tiempo en tablets para mejor lectura

    return () => clearInterval(interval)
  }, [isTablet, steps.length])

  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-2 sm:space-y-3 md:space-y-4 text-center max-w-[95%] mx-auto px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Mi Proceso de Trabajo</h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-[80%] mx-auto">
          Un enfoque estructurado para convertir ideas en productos digitales excepcionales
        </p>
      </motion.div>

      <div
        className={`space-y-4 sm:space-y-6 md:space-y-8 mt-8 sm:mt-10 md:mt-12 max-w-[95%] mx-auto ${
          isTablet ? "md:space-y-6" : ""
        }`}
      >
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
