"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  demoUrl: string
  repoUrl: string
  technologies: string[]
}

export default function ProjectCard({ title, description, image, demoUrl, repoUrl, technologies }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full flex flex-col bg-background/50 backdrop-blur-sm border border-primary/10 dark:bg-gray-900/50">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-primary/10">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <Link href={demoUrl} target="_blank" className="flex-1">
            <Button variant="default" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          </Link>
          <Link href={repoUrl} target="_blank" className="flex-1">
            <Button variant="outline" className="w-full">
              <Github className="h-4 w-4 mr-2" />
              Código
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
