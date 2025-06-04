"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star, Clock, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BrowserPreview from "./browser-preview"
import MagneticButton from "./magnetic-button"

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
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

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
        </div>

        {/* Efecto de brillo para proyectos destacados */}
        {featured && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 pointer-events-none"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
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
