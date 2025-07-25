"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowDown, FileText, Phone, Code2, Server, Settings, Palette } from "lucide-react"
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
import AnalyticsWidget from "@/components/analytics-widget"
import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  ReactIcon,
  NextJSIcon,
  TailwindIcon,
  NodeJSIcon,
  DjangoIcon,
  MongoDBIcon,
  FirebaseIcon,
  GitIcon,
  GitHubIcon,
  VSCodeIcon,
  FigmaIcon,
} from "@/components/tech-icons"

export default function Home() {
  const [particlesSettings, setParticlesSettings] = useState({
    particleCount: 80,
    connectionDistance: 150,
    interactiveForce: 5,
    enabled: true,
  })

  // Número de WhatsApp (reemplaza con tu número real)
  const whatsappNumber = "573006007960" // Reemplaza con tu número real incluyendo código de país
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  // URL de tu hoja de vida (reemplaza con la URL real)
  const cvUrl = "/cv.pdf" // Asegúrate de añadir tu CV en la carpeta public

  // Array de tecnologías con iconos SVG personalizados
  const technologies = [
    { name: "HTML", icon: HTMLIcon, color: "text-orange-500" },
    { name: "CSS", icon: CSSIcon, color: "text-blue-500" },
    { name: "JavaScript", icon: JavaScriptIcon, color: "text-yellow-500" },
    { name: "React", icon: ReactIcon, color: "text-cyan-400" },
    { name: "Next.js", icon: NextJSIcon, color: "text-gray-800 dark:text-white" },
    { name: "Tailwind", icon: TailwindIcon, color: "text-teal-400" },
    { name: "Node.js", icon: NodeJSIcon, color: "text-green-600" },
    { name: "Django", icon: DjangoIcon, color: "text-green-700" },
    { name: "MongoDB", icon: MongoDBIcon, color: "text-green-500" },
    { name: "Firebase", icon: FirebaseIcon, color: "text-orange-600" },
    { name: "Git", icon: GitIcon, color: "text-red-500" },
    { name: "GitHub", icon: GitHubIcon, color: "text-gray-800 dark:text-white" },
    { name: "VS Code", icon: VSCodeIcon, color: "text-blue-600" },
    { name: "Figma", icon: FigmaIcon, color: "text-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <SchemaOrg />
      <Toaster />

      {/* Widget de Analytics */}
      <AnalyticsWidget />

      {/* Controles de partículas */}
      <ParticlesControls onSettingsChange={setParticlesSettings} defaultSettings={particlesSettings} />

      {/* Header */}
      <header className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center max-w-6xl mx-auto"
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
            className="flex gap-1 sm:gap-2 items-center"
          >
            <ThemeToggle />
            <Link href="https://github.com/POHMONSEY22" target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={whatsappUrl} target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Phone className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
            <Link href="/cv">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <FileText className="h-4 w-4" />
                <span className="sr-only">Hoja de Vida</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/" target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
        </motion.nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        {/* Hero Section */}
        <EnhancedSection
          animationType="fade"
          duration={1}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-8 max-w-6xl mx-auto"
        >
          <div className="space-y-6 max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <motion.span
                  className="text-foreground inline-block cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Juan Pablo
                </motion.span>{" "}
                <br className="hidden md:block" />
                <motion.span
                  className="text-black inline-block cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, -2, 0],
                    textShadow: "0px 0px 8px rgba(0,0,0,0.8)",
                    transition: {
                      scale: { duration: 0.3 },
                      rotate: { duration: 0.6, ease: "easeInOut" },
                      textShadow: { duration: 0.3 },
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Gallo Arboleda
                </motion.span>
              </h1>
            </motion.div>

            <EnhancedSection animationType="slide" direction="up" delay={1.2} duration={0.8}>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground leading-relaxed">
                Grafitero digital, programador con estilo y amante del basket. Fusiono arte, música para que todo quede
                con un toque personal y único.
              </p>
            </EnhancedSection>

            <EnhancedSection animationType="scale" delay={1.5} duration={0.6} stagger staggerDelay={0.1}>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <SmoothScrollLink href="#projects">
                  <MagneticButton strength={40} radius={200}>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                      Ver proyectos
                    </Button>
                  </MagneticButton>
                </SmoothScrollLink>
                <SmoothScrollLink href="#workflow">
                  <MagneticButton strength={40} radius={200}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary/50 bg-transparent"
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
                      className="border-primary/20 hover:border-primary/50 bg-transparent"
                    >
                      Contacto
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/cv">
                  <MagneticButton strength={40} radius={200}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:border-primary/50 bg-transparent"
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
          className="flex justify-center -mt-16"
        >
          <ArrowDown className="h-5 w-5 text-primary/70" />
        </motion.div>

        {/* Skills Section */}
        <section id="skills" className="space-y-12 max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Tecnologías</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed px-4">
              Estas son las tecnologías con las que trabajo para crear aplicaciones web modernas y eficientes.
            </p>

            {/* Iconos de tecnologías */}
            <div className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-2xl max-w-5xl mx-auto">
              {/* Efecto de brillo de fondo */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl"></div>

              <div className="relative grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7 gap-4 sm:gap-6">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: index % 2 === 0 ? 12 : -12,
                        y: -8,
                        transition: { duration: 0.3, type: "spring", stiffness: 300 },
                      }}
                      className="flex flex-col items-center justify-center group cursor-pointer"
                    >
                      <div className="relative p-2 sm:p-3 rounded-lg bg-background/90 border border-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
                        {/* Efecto de brillo en hover */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <IconComponent
                          className={`relative h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ${tech.color} transition-all duration-300 group-hover:drop-shadow-lg`}
                        />
                      </div>
                      <span className="text-xs mt-2 font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-orange-500" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <SkillBadge name="HTML" />
                  <SkillBadge name="CSS" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="React" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Tailwind" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Server className="h-4 w-4 text-green-600" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Django" />
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="Firebase" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Settings className="h-4 w-4 text-gray-600" />
                  Herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <SkillBadge name="Git" />
                  <SkillBadge name="GitHub" />
                  <SkillBadge name="VS Code" />
                  <SkillBadge name="Figma" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Palette className="h-4 w-4 text-purple-500" />
                  Otros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <SkillBadge name="Responsive" />
                  <SkillBadge name="Arte Digital" />
                  <SkillBadge name="UI/UX" />
                  <SkillBadge name="Música" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <EnhancedSection id="projects" animationType="slide" direction="up" className="space-y-12 max-w-7xl mx-auto">
          <DramaticEntrance effect="fold" delay={0.2}>
            <div className="text-center space-y-6">
              <EnhancedTextReveal animationType="glitch" className="text-2xl sm:text-3xl font-bold">
                Proyectos
              </EnhancedTextReveal>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed px-4">
                Una selección de mis proyectos más recientes con sus respectivos enlaces.
              </p>
            </div>
          </DramaticEntrance>

          <EnhancedCardGrid
            animationType="cascade"
            delay={0.5}
            staggerDelay={0.2}
            columns={3}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            <ProjectCard
              title="717 Streetwear"
              description="E-commerce completo de streetwear con carrito de compras, gestión de inventario, carousel de productos destacados, sistema de categorías, diseño responsive y experiencia de usuario optimizada para conversiones. Incluye navegación intuitiva, filtros de productos y checkout simplificado."
              demoUrl="https://717-streetwear.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/717-streetwear"
              technologies={["React", "Next.js", "Tailwind CSS", "E-commerce", "Responsive Design", "UI/UX"]}
              featured={true}
              recent={true}
              stats={{
                views: 247,
              }}
            />

            <ProjectCard
              title="MF DOOM Tribute"
              description="Sitio web tributo interactivo dedicado al legendario rapero MF DOOM 'El Villano del Hip-Hop'. Incluye navegación inmersiva con secciones de biografía detallada, discografía completa con reproductor de audio, cronología de su legado musical, diseño temático con la icónica máscara, efectos visuales cinematográficos y experiencia de usuario optimizada para fanáticos del hip-hop underground."
              demoUrl="https://elvillanodelamascara.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/mf-doom"
              technologies={["React", "Next.js", "CSS", "Audio API", "Responsive Design", "UI/UX"]}
              featured={true}
              trending={true}
              stats={{
                views: 189,
              }}
            />

            <ProjectCard
              title="Canserbero"
              description="Plataforma web dedicada al rapero venezolano Canserbero, featuring biografía completa, discografía interactiva con reproductor de música integrado, galería de fotos, cronología de su carrera artística, letras de canciones, tributos de fanáticos, diseño responsive con temática urbana y experiencia inmersiva que celebra su legado en el rap latinoamericano."
              demoUrl="https://canserbero.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/canserbero"
              technologies={["JavaScript", "HTML5", "CSS3", "Web Audio API", "Responsive Design", "Music Player"]}
              stats={{
                views: 156,
              }}
            />

            <ProjectCard
              title="Tupac Amaru"
              description="Sitio web tributo a Tupac Shakur con diseño cinematográfico, incluyendo biografía interactiva, discografía completa con reproductor multimedia, galería de imágenes históricas, cronología de vida y carrera, citas inspiracionales, análisis de su impacto cultural, navegación fluida con animaciones suaves y experiencia inmersiva que honra su legado en el hip-hop mundial."
              demoUrl="https://tupac-amaru.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/tupac-amaru"
              technologies={[
                "React",
                "Tailwind CSS",
                "Framer Motion",
                "Next.js",
                "Multimedia Player",
                "Responsive Design",
              ]}
              featured={true}
              recent={true}
              stats={{
                views: 134,
              }}
            />

            <ProjectCard
              title="Clau & Yuli"
              description="Sitio web personal colaborativo con diseño moderno y minimalista, featuring galería de fotos interactiva, secciones personalizadas, navegación intuitiva, diseño responsive optimizado para múltiples dispositivos, efectos visuales sutiles, sistema de contacto integrado y experiencia de usuario cuidadosamente diseñada para mostrar contenido personal de manera elegante y profesional."
              demoUrl="https://clauyuli.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/clauyuli"
              technologies={[
                "React",
                "CSS Modules",
                "Responsive Design",
                "JavaScript",
                "Photo Gallery",
                "Contact System",
              ]}
              stats={{
                views: 98,
              }}
            />

            <ProjectCard
              title="Kobe Bryant Tribute"
              description="Homenaje interactivo a la leyenda del baloncesto Kobe Bryant, incluyendo estadísticas detalladas de carrera, gráficos dinámicos con Chart.js, cronología de logros históricos, galería multimedia, momentos memorables de la 'Mamba Mentality', diseño responsive con temática Lakers, animaciones fluidas y experiencia inmersiva que celebra su legado deportivo y personal."
              demoUrl="https://kobe-bryant-717.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/kobe-bryant"
              technologies={[
                "Next.js",
                "Chart.js",
                "Tailwind CSS",
                "JavaScript",
                "Data Visualization",
                "Sports Analytics",
              ]}
              stats={{
                views: 112,
              }}
            />
          </EnhancedCardGrid>
        </EnhancedSection>

        {/* Workflow Section */}
        <EnhancedSection id="workflow" animationType="wave" className="space-y-12 max-w-6xl mx-auto">
          <DramaticEntrance effect="shatter" delay={0.3}>
            <WorkflowSection />
          </DramaticEntrance>
        </EnhancedSection>

        {/* Contact Section */}
        <EnhancedSection
          id="contact"
          animationType="slide"
          direction="up"
          className="space-y-12 pb-16 max-w-7xl mx-auto"
        >
          <DramaticEntrance effect="curtain" delay={0.2}>
            <div className="text-center space-y-6">
              <EnhancedTextReveal animationType="typewriter" className="text-2xl sm:text-3xl font-bold">
                Contacto
              </EnhancedTextReveal>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed px-4">
                ¿Interesado en trabajar juntos? Contáctame a través de cualquiera de estos medios.
              </p>
            </div>
          </DramaticEntrance>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <EnhancedCardGrid animationType="wave" delay={0.5} staggerDelay={0.2} className="h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 h-full">
                  <CardHeader className="pb-2 px-4 pt-4">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Phone className="h-4 w-4 text-primary" />
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-2">
                    <p className="text-muted-foreground text-sm">Contáctame directamente por WhatsApp</p>
                  </CardContent>
                  <CardFooter className="pt-2 px-4 pb-4">
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

                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 h-full">
                  <CardHeader className="pb-2 px-4 pt-4">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <FileText className="h-4 w-4 text-primary" />
                      Hoja de Vida
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-2">
                    <p className="text-muted-foreground text-sm">Descarga mi CV completo</p>
                  </CardContent>
                  <CardFooter className="pt-2 px-4 pb-4">
                    <Link href="/cv" className="w-full">
                      <MagneticButton strength={30} radius={150} className="w-full">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Ver Hoja de Vida
                        </Button>
                      </MagneticButton>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 h-full">
                  <CardHeader className="pb-2 px-4 pt-4">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Github className="h-4 w-4 text-primary" />
                      GitHub
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-2">
                    <p className="text-muted-foreground text-sm">POHMONSEY22</p>
                  </CardContent>
                  <CardFooter className="pt-2 px-4 pb-4">
                    <Link href="https://github.com/POHMONSEY22" target="_blank" className="w-full">
                      <MagneticButton strength={30} radius={150} className="w-full">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Ver perfil
                        </Button>
                      </MagneticButton>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 h-full">
                  <CardHeader className="pb-2 px-4 pt-4">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Linkedin className="h-4 w-4 text-primary" />
                      LinkedIn
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-2">
                    <p className="text-muted-foreground text-sm">Juan Pablo Gallo</p>
                  </CardContent>
                  <CardFooter className="pt-2 px-4 pb-4">
                    <Link
                      href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/"
                      target="_blank"
                      className="w-full"
                    >
                      <MagneticButton strength={30} radius={150} className="w-full">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Conectar
                        </Button>
                      </MagneticButton>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </EnhancedCardGrid>

            <EnhancedSection animationType="scale" delay={0.8} className="h-full flex">
              <ContactForm />
            </EnhancedSection>
          </div>
        </EnhancedSection>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
            <div className="text-center sm:text-left">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Juan Pablo Gallo Arboleda. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-2">
              <ThemeToggle />
              <Link href="https://github.com/POHMONSEY22" target="_blank">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-3 w-3" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:juanarboledag610@gmail.com">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="h-3 w-3" />
                  <span className="sr-only">Contact</span>
                </Button>
              </Link>
              <Link href="/cv">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <FileText className="h-3 w-3" />
                  <span className="sr-only">Hoja de Vida</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/juan-pablo-gallo-93999328a/" target="_blank">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-3 w-3" />
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
