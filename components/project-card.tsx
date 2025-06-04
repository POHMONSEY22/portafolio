"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { ExternalLink, Github, Star, Clock, Zap, Eye, TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BrowserPreview from "./browser-preview"
import MagneticButton from "./magnetic-button"

interface ProjectStats {
  views: number
}

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  demoUrl: string
  repoUrl: string
  technologies: string[]
  featured?: boolean
  recent?: boolean
  trending?: boolean
  stats?: ProjectStats
}

export default function ProjectCard({
  title,
  description,
  image,
  demoUrl,
  repoUrl,
  technologies,
  featured = false,
  recent = false,
  trending = false,
  stats = { views: 0 },
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentViews, setCurrentViews] = useState(stats.views)
  const [animatedViews, setAnimatedViews] = useState(0)
  const [isIncrementing, setIsIncrementing] = useState(false)
  const [lastIncrement, setLastIncrement] = useState(Date.now())
  const controls = useAnimation()

  // Animar contador inicial cuando el componente entra en vista
  useEffect(() => {
    const animateInitialCounter = async () => {
      const increment = currentViews / 30
      for (let i = 0; i <= 30; i++) {
        setTimeout(() => {
          setAnimatedViews(Math.floor(increment * i))
        }, i * 50)
      }
    }

    animateInitialCounter()
  }, [currentViews])

  // Sistema de incremento en tiempo real
  useEffect(() => {
    const getIncrementRate = () => {
      // Proyectos más populares incrementan más rápido
      if (currentViews > 15000) return { min: 3000, max: 8000, increment: [1, 2, 3] } // Muy popular
      if (currentViews > 10000) return { min: 4000, max: 10000, increment: [1, 2] } // Popular
      if (currentViews > 5000) return { min: 6000, max: 15000, increment: [1, 1, 2] } // Moderado
      return { min: 10000, max: 25000, increment: [1] } // Menos popular
    }

    const startRealTimeIncrement = () => {
      const { min, max, increment } = getIncrementRate()

      const scheduleNextIncrement = () => {
        const randomDelay = Math.random() * (max - min) + min
        const randomIncrement = increment[Math.floor(Math.random() * increment.length)]

        setTimeout(() => {
          setIsIncrementing(true)
          setCurrentViews((prev) => prev + randomIncrement)
          setLastIncrement(Date.now())

          // Efecto visual de incremento
          setTimeout(() => setIsIncrementing(false), 500)

          // Programar el siguiente incremento
          scheduleNextIncrement()
        }, randomDelay)
      }

      // Delay inicial aleatorio para que no todos empiecen al mismo tiempo
      const initialDelay = Math.random() * 5000 + 2000
      setTimeout(scheduleNextIncrement, initialDelay)
    }

    startRealTimeIncrement()
  }, []) // Solo se ejecuta una vez al montar el componente

  // Actualizar el contador animado cuando cambian las vistas actuales
  useEffect(() => {
    if (currentViews !== stats.views) {
      // Animación suave hacia el nuevo valor
      const startValue = animatedViews
      const endValue = currentViews
      const duration = 800
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Función de easing suave
        const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
        const easedProgress = easeOutQuart(progress)

        const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress)
        setAnimatedViews(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [currentViews])

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "featured":
        return <Star className="h-3 w-3" />
      case "recent":
        return <Clock className="h-3 w-3" />
      case "trending":
        return <Zap className="h-3 w-3" />
      default:
        return null
    }
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "featured":
        return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-none"
      case "recent":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none"
      case "trending":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none"
      default:
        return ""
    }
  }

  const getBadgeText = (type: string) => {
    switch (type) {
      case "featured":
        return "Destacado"
      case "recent":
        return "Reciente"
      case "trending":
        return "Trending"
      default:
        return ""
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  // Determinar si mostrar indicador de actividad reciente
  const isRecentlyActive = Date.now() - lastIncrement < 10000 // Últimos 10 segundos

  return (
    <motion.div
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full flex flex-col bg-background/50 backdrop-blur-sm border border-primary/10 dark:bg-gray-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 relative">
        {/* Badges de estado */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className={`${getBadgeColor("featured")} shadow-lg flex items-center gap-1 text-xs font-semibold`}>
                {getBadgeIcon("featured")}
                {getBadgeText("featured")}
              </Badge>
            </motion.div>
          )}

          {recent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge className={`${getBadgeColor("recent")} shadow-lg flex items-center gap-1 text-xs font-semibold`}>
                {getBadgeIcon("recent")}
                {getBadgeText("recent")}
              </Badge>
            </motion.div>
          )}

          {trending && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Badge
                className={`${getBadgeColor("trending")} shadow-lg flex items-center gap-1 text-xs font-semibold animate-pulse`}
              >
                {getBadgeIcon("trending")}
                {getBadgeText("trending")}
              </Badge>
            </motion.div>
          )}

          {/* Indicador de actividad en tiempo real */}
          {isRecentlyActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-none shadow-lg flex items-center gap-1 text-xs font-semibold animate-pulse">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
                En Vivo
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Contador de vistas con efectos en tiempo real */}
        <div className="absolute top-3 right-3 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`backdrop-blur-sm text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs transition-all duration-300 ${
              isIncrementing ? "bg-green-600/90 shadow-lg shadow-green-500/30" : "bg-black/70"
            }`}
          >
            <motion.div
              animate={
                isIncrementing
                  ? {
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              <Eye className="h-3 w-3" />
            </motion.div>
            <motion.span
              key={animatedViews}
              initial={{ scale: isIncrementing ? 1.3 : 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="font-semibold"
            >
              {formatNumber(animatedViews)}
            </motion.span>

            {/* Indicador de incremento */}
            {isIncrementing && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], y: -15, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2"
              >
                <TrendingUp className="h-3 w-3 text-green-400" />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Efecto de brillo para proyectos destacados */}
        {featured && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 pointer-events-none"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Efecto de pulso para actividad reciente */}
        {isRecentlyActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}

        <div className="relative overflow-hidden">
          <motion.div animate={isHovered ? { scale: 1.05 } : { scale: 1 }} transition={{ duration: 0.5 }}>
            <BrowserPreview url={demoUrl} title={title} />
          </motion.div>
        </div>

        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            {/* Indicador visual adicional para proyectos destacados */}
            {featured && (
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              >
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </motion.div>
            )}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mt-2"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
              >
                <Badge variant="secondary" className="bg-primary/10 transition-all duration-300 hover:bg-primary/20">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-between gap-2">
          <Link href={demoUrl} target="_blank" className="flex-1">
            <MagneticButton strength={20} radius={100} className="w-full">
              <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </MagneticButton>
          </Link>
          <Link href={repoUrl} target="_blank" className="flex-1">
            <MagneticButton strength={20} radius={100} className="w-full">
              <Button variant="outline" className="w-full border-primary/20 hover:border-primary/50">
                <Github className="h-4 w-4 mr-2" />
                Código
              </Button>
            </MagneticButton>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
