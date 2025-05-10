"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BrowserPreview from "./browser-preview"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  demoUrl: string
  repoUrl: string
  technologies: string[]
}

export default function ProjectCard({ title, description, image, demoUrl, repoUrl, technologies }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full flex flex-col bg-background/50 backdrop-blur-sm border border-primary/10 dark:bg-gray-900/50">
        <div className="relative overflow-hidden">
          <BrowserPreview url={demoUrl} title={title} />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
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
              >
                <Badge variant="secondary" className="bg-primary/10">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
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
