"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <SchemaOrg />
      <Toaster />

      {/* Controles de partículas */}
      <ParticlesControls onSettingsChange={setParticlesSettings} defaultSettings={particlesSettings} />

      {/* Header */}
      <header className="container mx-auto py-6">
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
            className="text-xl font-bold"
          >
            JUAN<span className="text-primary">PABLO</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 items-center"
          >
            <ThemeToggle />
            <Link href="https://github.com/POHMONSEY22" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Contact</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
        </motion.nav>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-24">
        {/* Hero Section */}
        <EnhancedSection
          animationType="fade"
          duration={1}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10"
        >
          <div className="space-y-6 max-w-2xl">
            <DramaticEntrance effect="curtain" delay={0.5} duration={1.5}>
              <EnhancedTextReveal
                animationType="wave"
                delay={0.8}
                staggerDelay={0.1}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Juan Pablo Gallo Arboleda
              </EnhancedTextReveal>
            </DramaticEntrance>

            <EnhancedSection animationType="slide" direction="up" delay={1.2} duration={0.8}>
              <p className="text-xl text-muted-foreground">
                Grafitero digital, programador con estilo y amante del basket. Fusiono arte, música para que todo quede
                con un toque personal y único.
              </p>
            </EnhancedSection>

            <EnhancedSection animationType="scale" delay={1.5} duration={0.6} stagger staggerDelay={0.1}>
              <div className="flex flex-wrap gap-4">
                <SmoothScrollLink href="#projects">
                  <MagneticButton strength={40} radius={200}>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                      Ver proyectos
                    </Button>
                  </MagneticButton>
                </SmoothScrollLink>
                <SmoothScrollLink href="#workflow">
                  <MagneticButton strength={40} radius={200}>
                    <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/50">
                      Mi proceso
                    </Button>
                  </MagneticButton>
                </SmoothScrollLink>
                <SmoothScrollLink href="#contact">
                  <MagneticButton strength={40} radius={200}>
                    <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/50">
                      Contacto
                    </Button>
                  </MagneticButton>
                </SmoothScrollLink>
              </div>
            </EnhancedSection>
          </div>

          <DramaticEntrance effect="portal" delay={0.3} duration={1.2}>
            <ProfileImage />
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
          className="flex justify-center -mt-10"
        >
          <ArrowDown className="h-8 w-8 text-primary/70" />
        </motion.div>

        {/* Skills Section */}
        <EnhancedSection id="skills" animationType="slide" direction="up" className="space-y-10">
          <DramaticEntrance effect="spotlight" delay={0.2}>
            <div className="text-center space-y-4">
              <EnhancedTextReveal animationType="wave" className="text-3xl font-bold">
                Tecnologías
              </EnhancedTextReveal>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estas son las tecnologías con las que trabajo para crear aplicaciones web modernas y eficientes.
              </p>
            </div>
          </DramaticEntrance>

          <EnhancedCardGrid
            animationType="spiral"
            delay={0.5}
            staggerDelay={0.15}
            columns={2}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Frontend</CardTitle>
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

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Backend</CardTitle>
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

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Herramientas</CardTitle>
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

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Otros</CardTitle>
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
        <EnhancedSection id="projects" animationType="slide" direction="up" className="space-y-10">
          <DramaticEntrance effect="fold" delay={0.2}>
            <div className="text-center space-y-4">
              <EnhancedTextReveal animationType="glitch" className="text-3xl font-bold">
                Proyectos
              </EnhancedTextReveal>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Una selección de mis proyectos más recientes con sus respectivos enlaces.
              </p>
            </div>
          </DramaticEntrance>

          <EnhancedCardGrid
            animationType="cascade"
            delay={0.5}
            staggerDelay={0.2}
            columns={3}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
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

            <ProjectCard
              title="Portfolio Personal"
              description="Sitio web personal que muestra mis proyectos, habilidades y experiencia como desarrollador frontend."
              demoUrl="https://pohmonsey22.github.io/portfolio/"
              repoUrl="https://github.com/POHMONSEY22/portfolio"
              technologies={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
            />
          </EnhancedCardGrid>
        </EnhancedSection>

        {/* Workflow Section */}
        <EnhancedSection id="workflow" animationType="wave" className="space-y-10">
          <DramaticEntrance effect="shatter" delay={0.3}>
            <WorkflowSection />
          </DramaticEntrance>
        </EnhancedSection>

        {/* Contact Section */}
        <EnhancedSection id="contact" animationType="slide" direction="up" className="space-y-10 pb-20">
          <DramaticEntrance effect="curtain" delay={0.2}>
            <div className="text-center space-y-4">
              <EnhancedTextReveal animationType="typewriter" className="text-3xl font-bold">
                Contacto
              </EnhancedTextReveal>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ¿Interesado en trabajar juntos? Contáctame a través de cualquiera de estos medios.
              </p>
            </div>
          </DramaticEntrance>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EnhancedCardGrid animationType="wave" delay={0.5} staggerDelay={0.2} className="space-y-6">
              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">juanarboledag610@gmail.com</p>
                </CardContent>
                <CardFooter>
                  <Link href="mailto:juanarboledag610@gmail.com">
                    <MagneticButton strength={30} radius={150}>
                      <Button variant="outline" size="sm">
                        Enviar email
                      </Button>
                    </MagneticButton>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-primary" />
                    GitHub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">POHMONSEY22</p>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/POHMONSEY22" target="_blank">
                    <MagneticButton strength={30} radius={150}>
                      <Button variant="outline" size="sm">
                        Ver perfil
                      </Button>
                    </MagneticButton>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-primary" />
                    LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Juan Pablo Gallo</p>
                </CardContent>
                <CardFooter>
                  <Link href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/" target="_blank">
                    <MagneticButton strength={30} radius={150}>
                      <Button variant="outline" size="sm">
                        Conectar
                      </Button>
                    </MagneticButton>
                  </Link>
                </CardFooter>
              </Card>
            </EnhancedCardGrid>

            <EnhancedSection animationType="scale" delay={0.8}>
              <ContactForm />
            </EnhancedSection>
          </div>
        </EnhancedSection>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Juan Pablo Gallo Arboleda. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-4">
              <ThemeToggle />
              <Link href="https://github.com/POHMONSEY22" target="_blank">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:juanarboledag610@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Contact</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/" target="_blank">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
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
