"use client"

import { motion } from "framer-motion"
import { CalendarDays, Building2, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
  index: number
}

export default function ExperienceItem({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
  index,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center hidden md:flex">
        <div className="w-4 h-4 rounded-full bg-primary z-10"></div>
        <div className="w-0.5 bg-border flex-grow mt-2"></div>
      </div>

      {/* Experience card */}
      <div className="md:ml-10 mb-10">
        <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-primary to-primary/50"></div>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  {company}
                </CardDescription>
              </div>
              <Badge variant="outline" className="flex items-center gap-1 self-start">
                <CalendarDays className="h-3 w-3" />
                {period}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{description}</p>

            {achievements.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium">Logros destacados:</h4>
                <ul className="space-y-1">
                  {achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/10">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
