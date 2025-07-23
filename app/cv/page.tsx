"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Download, Phone, Mail, MapPin, Calendar, Award, User, Code, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import EnhancedSection from "@/components/enhanced-section"
import MagneticButton from "@/components/magnetic-button"

export default function CVPage() {
  const cvUrl = "/cv.pdf"

  const skills = [
    "Trabajo en equipo",
    "Puntualidad",
    "Responsabilidad",
    "Facilidad de aprendizaje",
    "Proactividad",
    "Adaptabilidad",
  ]

  const certifications = ["Manejo básico de Excel", "Liderazgo efectivo"]

  const projects = [
    {
      name: "MindGuideIA",
      role: "Desarrollador colaborativo",
      description:
        "Participé en el desarrollo de MindGuideIA, una aplicación web enfocada en inteligencia artificial aplicada a la orientación y guía de usuarios. Colaboré en tareas de programación y diseño, trabajando en equipo para integrar funcionalidades básicas.",
      url: "https://mindguideia.netlify.app",
      technologies: ["JavaScript", "HTML", "CSS", "IA"],
    },
    {
      name: "MF DOOM Tribute Page",
      role: "Desarrollador y diseñador web",
      description:
        "Creé MF DOOM Tribute Page, un proyecto personal para practicar diseño y desarrollo web, destacando estructura HTML, estilos CSS y despliegue en plataformas online.",
      url: "https://mf-doom-717.vercel.app",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/">
            <MagneticButton strength={30} radius={150}>
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al Portfolio
              </Button>
            </MagneticButton>
          </Link>

          <Link href={cvUrl} target="_blank">
            <MagneticButton strength={30} radius={150}>
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar PDF
              </Button>
            </MagneticButton>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        {/* Header del CV */}
        <EnhancedSection animationType="fade" duration={1} className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl font-bold text-primary"
                >
                  Juan Pablo Gallo Arboleda
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl sm:text-2xl text-muted-foreground font-medium"
                >
                  Técnico en Programación de Software
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-6"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>300 600 7960</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>juanarboledag610@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>San Antonio de Prado, Medellín, Colombia</span>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </EnhancedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Perfil Profesional */}
            <EnhancedSection animationType="slide" direction="left" delay={0.2}>
              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <User className="h-5 w-5 text-primary" />
                    Perfil Profesional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Técnico en Programación de Software recién graduado, con formación académica sólida y motivación por
                    iniciar mi trayectoria laboral. Persona responsable, comprometida, con facilidad para aprender y
                    adaptarse a nuevas tareas. Busco desarrollar habilidades y aportar soluciones prácticas en entornos
                    reales de trabajo, contribuyendo con responsabilidad y trabajo en equipo.
                  </p>
                </CardContent>
              </Card>
            </EnhancedSection>

            {/* Formación Académica */}
            <EnhancedSection animationType="slide" direction="left" delay={0.4}>
              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Award className="h-5 w-5 text-primary" />
                    Formación Académica
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h3 className="font-semibold text-lg">
                        Bachiller Académico & Técnico en Programación de Software
                      </h3>
                      <p className="text-primary font-medium">Institución Educativa Diego Echavarría Misas</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>Graduado: 1 de diciembre de 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </EnhancedSection>

            {/* Proyectos */}
            <EnhancedSection animationType="slide" direction="left" delay={0.6}>
              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Code className="h-5 w-5 text-primary" />
                    Proyectos Destacados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-l-2 border-primary/20 pl-4 space-y-2"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                          <Link href={project.url} target="_blank">
                            <Badge variant="outline" className="text-xs hover:bg-primary/10 cursor-pointer">
                              Ver proyecto
                            </Badge>
                          </Link>
                        </div>
                        <p className="text-primary font-medium text-sm">{project.role}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs bg-primary/10">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </EnhancedSection>
          </div>

          {/* Columna Lateral */}
          <div className="space-y-8">
            {/* Habilidades */}
            <EnhancedSection animationType="slide" direction="right" delay={0.3}>
              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Star className="h-5 w-5 text-primary" />
                    Habilidades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </EnhancedSection>

            {/* Certificaciones */}
            <EnhancedSection animationType="slide" direction="right" delay={0.5}>
              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Award className="h-5 w-5 text-primary" />
                    Certificaciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </EnhancedSection>

            {/* Información de Contacto */}
            <EnhancedSection animationType="slide" direction="right" delay={0.7}>
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">300 600 7960</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm break-all">juanarboledag610@gmail.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm">Cra 65C #70A Sur 15, San Antonio de Prado, Medellín, Colombia</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-3">Referencias disponibles a solicitud</p>
                    <Link href="/" className="w-full">
                      <MagneticButton strength={20} radius={100} className="w-full">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Ver Portfolio Completo
                        </Button>
                      </MagneticButton>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </EnhancedSection>
          </div>
        </div>

        {/* Footer del CV */}
        <EnhancedSection animationType="fade" delay={0.8} className="mt-12">
          <Card className="bg-background/30 border border-primary/10">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Este CV fue generado digitalmente. Para más información sobre mis proyectos y habilidades, visita mi{" "}
                <Link href="/" className="text-primary hover:underline font-medium">
                  portfolio completo
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </EnhancedSection>
      </main>
    </div>
  )
}
