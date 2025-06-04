"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowDown, FileText, Phone } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import { ThemeToggle } from "@/components/theme-toggle"
import ContactForm from "@/components/contact-form"
import ProfileImage from "@/components/profile-image"
import WorkflowSection from "@/components/workflow-section"
import SmoothScrollLink from "@/components/smooth-scroll-link"
import SchemaOrg from "@/components/seo/schema-org"
import MagneticButton from "@/components/magnetic-button"
import ParticlesControls from "@/components/particles-controls"
import ScrollToTopEnhanced from "@/components/scroll-to-top-enhanced"
import EnhancedSection from "@/components/enhanced-section"
import EnhancedTextReveal from "@/components/enhanced-text-reveal"
import EnhancedCardGrid from "@/components/enhanced-card-grid"
import DramaticEntrance from "@/components/dramatic-entrance"

export default function Home() {
  const [particlesSettings, setParticlesSettings] = useState({
    particleCount: 80,
    connectionDistance: 150,
    interactiveForce: 5,
    enabled: true,
  })

  // Número de WhatsApp (reemplaza con tu número real)
  const whatsappNumber = "573113456789" // Reemplaza con tu número real incluyendo código de país
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  // URL de tu hoja de vida (reemplaza con la URL real)
  const cvUrl = "/cv.pdf" // Asegúrate de añadir tu CV en la carpeta public

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <SchemaOrg />
      <Toaster />

      {/* Controles de partículas */}
      <ParticlesControls onSettingsChange={setParticlesSettings} defaultSettings={particlesSettings} />

      {/* Header */}
      <header className="container mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-bold"
          >
            JUAN<span className="text-primary">PABLO</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-2 sm:gap-3 md:gap-4 items-center"
          >
            <ThemeToggle />
            <Link href="https://github.com/POHMONSEY22" target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                <Github className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={whatsappUrl} target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                <Phone className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
            <Link href={cvUrl} target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                <FileText className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="sr-only">Hoja de Vida</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/" target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                <Linkedin className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
        </motion.nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28">
        {/* Hero Section */}
        <EnhancedSection
          animationType="fade"
          duration={1}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-12"
        >
          <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-2xl text-center md:text-left">
            <DramaticEntrance effect="curtain" delay={0.5} duration={1.5}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Juan Pablo</span> <span className="text-primary">Gallo Arboleda</span>
              </h1>
            </DramaticEntrance>

            <EnhancedSection animationType="slide" direction="up" delay={1.2} duration={0.8}>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Grafitero digital, programador con estilo y amante del basket. Fusiono arte, música para que todo quede
                con un toque personal y único.
              </p>
            </EnhancedSection>

            <EnhancedSection animationType="scale" delay={1.5} duration={0.6} stagger staggerDelay={0.1}>
              <div className="flex flex-col sm:flex-row md:grid md:grid-cols-2 lg:flex lg:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                <SmoothScrollLink href="#projects">
                  <MagneticButton strength={40} radius={200}>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                      Ver proyectos
                    </Button>
                  </MagneticButton>
                </SmoothScrollLink>
                <SmoothScrollLink href="#workflow">
                  <MagneticButton strength={40} radius={200}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary/50 w-full sm:w-auto"
                    >
                      Mi proceso
                    </Button>
                  </MagneticButton>
                </SmoothScrollLink>
                <Link href={whatsappUrl} target="_blank">
                  <MagneticButton strength={40} radius={200}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary/50 w-full sm:w-auto"
                    >
                      Contacto
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href={cvUrl} target="_blank">
                  <MagneticButton strength={40} radius={200}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary/50 w-full sm:w-auto"
                    >
                      Hoja de Vida
                    </Button>
                  </MagneticButton>
                </Link>
              </div>
            </EnhancedSection>
          </div>

          <DramaticEntrance effect="portal" delay={0.3} duration={1.2}>
            <div className="flex-shrink-0">
              <ProfileImage />
            </div>
          </DramaticEntrance>
        </EnhancedSection>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="flex justify-center -mt-6 sm:-mt-8 md:-mt-10"
        >
          <ArrowDown className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary/70" />
        </motion.div>

        {/* Skills Section */}
        <EnhancedSection
          id="skills"
          animationType="slide"
          direction="up"
          className="space-y-8 sm:space-y-10 md:space-y-12"
        >
          <DramaticEntrance effect="spotlight" delay={0.2}>
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <EnhancedTextReveal animationType="wave" className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Tecnologías
              </EnhancedTextReveal>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
                Estas son las tecnologías con las que trabajo para crear aplicaciones web modernas y eficientes.
              </p>
            </div>
          </DramaticEntrance>

          <EnhancedCardGrid
            animationType="spiral"
            delay={0.5}
            staggerDelay={0.15}
            columns={2}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg md:text-xl">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="HTML" />
                  <SkillBadge name="CSS" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="React" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Tailwind" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg md:text-xl">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Django" />
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="Firebase" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg md:text-xl">Herramientas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Git" />
                  <SkillBadge name="GitHub" />
                  <SkillBadge name="VS Code" />
                  <SkillBadge name="Figma" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg md:text-xl">Otros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Responsive" />
                  <SkillBadge name="Arte Digital" />
                  <SkillBadge name="UI/UX" />
                  <SkillBadge name="Música" />
                </div>
              </CardContent>
            </Card>
          </EnhancedCardGrid>
        </EnhancedSection>

        {/* Projects Section */}
        <EnhancedSection
          id="projects"
          animationType="slide"
          direction="up"
          className="space-y-8 sm:space-y-10 md:space-y-12"
        >
          <DramaticEntrance effect="fold" delay={0.2}>
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <EnhancedTextReveal animationType="glitch" className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Proyectos
              </EnhancedTextReveal>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
                Una selección de mis proyectos más recientes con sus respectivos enlaces.
              </p>
            </div>
          </DramaticEntrance>

          <EnhancedCardGrid
            animationType="cascade"
            delay={0.5}
            staggerDelay={0.2}
            columns={3}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            <ProjectCard
              title="717 Streetwear"
              description="E-commerce completo de streetwear con carrito de compras, gestión de inventario, carousel de productos destacados, sistema de categorías, diseño responsive y experiencia de usuario optimizada para conversiones. Incluye navegación intuitiva, filtros de productos y checkout simplificado."
              demoUrl="https://717-streetwear.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/717-streetwear"
              technologies={["React", "Next.js", "Tailwind CSS", "E-commerce", "Responsive Design", "UI/UX"]}
            />

            <ProjectCard
              title="MF DOOM Tribute"
              description="Página tributo al legendario rapero MF DOOM, con su biografía, discografía y legado musical."
              demoUrl="https://mf-doom-theta.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/mf-doom"
              technologies={["React", "Next.js", "CSS", "Responsive Design"]}
            />

            <ProjectCard
              title="Canserbero"
              description="Sitio web dedicado al rapero venezolano Canserbero, mostrando su vida, música e impacto cultural."
              demoUrl="https://canserbero.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/canserbero"
              technologies={["JavaScript", "HTML5", "CSS3", "Web Audio API"]}
            />

            <ProjectCard
              title="Tupac Amaru"
              description="Proyecto dedicado a Tupac Shakur, explorando su música, poesía y legado en la cultura hip-hop."
              demoUrl="https://tupac-amaru.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/tupac-amaru"
              technologies={["React", "Tailwind CSS", "Framer Motion", "Next.js"]}
            />

            <ProjectCard
              title="Clau & Yuli"
              description="Sitio web personal o proyecto colaborativo con diseño moderno y experiencia de usuario intuitiva."
              demoUrl="https://clauyuli.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/clauyuli"
              technologies={["React", "CSS Modules", "Responsive Design", "JavaScript"]}
            />

            <ProjectCard
              title="Kobe Bryant Tribute"
              description="Homenaje a la leyenda del baloncesto Kobe Bryant, con estadísticas, logros y momentos memorables."
              demoUrl="https://kobe-bryant-717.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/kobe-bryant"
              technologies={["Next.js", "Chart.js", "Tailwind CSS", "JavaScript"]}
            />
          </EnhancedCardGrid>
        </EnhancedSection>

        {/* Workflow Section */}
        <EnhancedSection id="workflow" animationType="wave" className="space-y-8 sm:space-y-10 md:space-y-12">
          <DramaticEntrance effect="shatter" delay={0.3}>
            <WorkflowSection />
          </DramaticEntrance>
        </EnhancedSection>

        {/* Contact Section */}
        <EnhancedSection
          id="contact"
          animationType="slide"
          direction="up"
          className="space-y-8 sm:space-y-10 md:space-y-12 pb-16 sm:pb-20 md:pb-24"
        >
          <DramaticEntrance effect="curtain" delay={0.2}>
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <EnhancedTextReveal animationType="typewriter" className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Contacto
              </EnhancedTextReveal>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
                ¿Interesado en trabajar juntos? Contáctame a través de cualquiera de estos medios.
              </p>
            </div>
          </DramaticEntrance>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
            <EnhancedCardGrid
              animationType="wave"
              delay={0.5}
              staggerDelay={0.2}
              className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm sm:text-base">Contáctame directamente por WhatsApp</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={whatsappUrl} target="_blank" className="w-full">
                      <MagneticButton strength={30} radius={150} className="w-full">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white border-none w-full"
                        >
                          Enviar mensaje
                        </Button>
                      </MagneticButton>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                      Hoja de Vida
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm sm:text-base">Descarga mi CV completo</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={cvUrl} target="_blank" className="w-full">
                      <MagneticButton strength={30} radius={150} className="w-full">
                        <Button variant="outline" size="sm" className="w-full">
                          Descargar CV
                        </Button>
                      </MagneticButton>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                      GitHub
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm sm:text-base">POHMONSEY22</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://github.com/POHMONSEY22" target="_blank" className="w-full">
                      <MagneticButton strength={30} radius={150} className="w-full">
                        <Button variant="outline" size="sm" className="w-full">
                          Ver perfil
                        </Button>
                      </MagneticButton>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                      LinkedIn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm sm:text-base">Juan Pablo Gallo</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/"
                      target="_blank"
                      className="w-full"
                    >
                      <MagneticButton strength={30} radius={150} className="w-full">
                        <Button variant="outline" size="sm" className="w-full">
                          Conectar
                        </Button>
                      </MagneticButton>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </EnhancedCardGrid>

            <EnhancedSection animationType="scale" delay={0.8} className="md:col-span-1 lg:col-span-1">
              <ContactForm />
            </EnhancedSection>
          </div>
        </EnhancedSection>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                © {new Date().getFullYear()} Juan Pablo Gallo Arboleda. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              <ThemeToggle />
              <Link href="https://github.com/POHMONSEY22" target="_blank">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                  <Github className="h-3 w-3 sm:h-4 sm:w-4 md:h-4 md:w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:juanarboledag610@gmail.com">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-4 md:w-4" />
                  <span className="sr-only">Contact</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/" target="_blank">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                  <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 md:h-4 md:w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón de scroll to top */}
      <ScrollToTopEnhanced showAfter={400} duration={1000} />
    </div>
  )
}
