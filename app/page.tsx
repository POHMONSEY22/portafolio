import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Toaster } from "@/components/ui/toaster"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import { ThemeToggle } from "@/components/theme-toggle"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Toaster />
      {/* Header */}
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">
            POH<span className="text-primary">MONSEY</span>
          </div>
          <div className="flex gap-4 items-center">
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
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Frontend Developer <span className="text-primary">& UI Designer</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Grafitero digital, programador con estilo y amante del basket. Fusiono arte, música para que todo quede
              con un toque personal y único.
            </p>
            <div className="flex gap-4">
              <Link href="#projects">
                <Button size="lg">Ver proyectos</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" size="lg">
                  Contacto
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-xl opacity-70"></div>
            <Avatar className="h-64 w-64 border-4 border-background relative">
              <AvatarImage src="/profile.png" alt="Profile" />
              <AvatarFallback className="text-5xl">PM</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Tecnologías</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estas son las tecnologías con las que trabajo para crear aplicaciones web modernas y eficientes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <SkillBadge name="HTML" />
                <SkillBadge name="CSS" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="Tailwind" />
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Django" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="Firebase" />
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Herramientas</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <SkillBadge name="Git" />
                <SkillBadge name="GitHub" />
                <SkillBadge name="VS Code" />
                <SkillBadge name="Figma" />
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Otros</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <SkillBadge name="Responsive" />
                <SkillBadge name="Arte Digital" />
                <SkillBadge name="UI/UX" />
                <SkillBadge name="Música" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Proyectos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Una selección de mis proyectos más recientes con sus respectivos enlaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="MF DOOM Tribute"
              description="Página tributo al legendario rapero MF DOOM, con su biografía, discografía y legado musical."
              image="/placeholder.svg?height=300&width=500&text=MF+DOOM"
              demoUrl="https://mf-doom-theta.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/mf-doom"
              technologies={["React", "Next.js", "CSS", "Responsive Design"]}
            />

            <ProjectCard
              title="Canserbero"
              description="Sitio web dedicado al rapero venezolano Canserbero, mostrando su vida, música e impacto cultural."
              image="/placeholder.svg?height=300&width=500&text=Canserbero"
              demoUrl="https://canserbero.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/canserbero"
              technologies={["JavaScript", "HTML5", "CSS3", "Web Audio API"]}
            />

            <ProjectCard
              title="Tupac Amaru"
              description="Proyecto dedicado a Tupac Shakur, explorando su música, poesía y legado en la cultura hip-hop."
              image="/placeholder.svg?height=300&width=500&text=Tupac+Amaru"
              demoUrl="https://tupac-amaru.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/tupac-amaru"
              technologies={["React", "Tailwind CSS", "Framer Motion", "Next.js"]}
            />

            <ProjectCard
              title="Clau & Yuli"
              description="Sitio web personal o proyecto colaborativo con diseño moderno y experiencia de usuario intuitiva."
              image="/placeholder.svg?height=300&width=500&text=Clau+%26+Yuli"
              demoUrl="https://clauyuli.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/clauyuli"
              technologies={["React", "CSS Modules", "Responsive Design", "JavaScript"]}
            />

            <ProjectCard
              title="Kobe Bryant Tribute"
              description="Homenaje a la leyenda del baloncesto Kobe Bryant, con estadísticas, logros y momentos memorables."
              image="/placeholder.svg?height=300&width=500&text=Kobe+Bryant"
              demoUrl="https://kobe-bryant-717.vercel.app/"
              repoUrl="https://github.com/POHMONSEY22/kobe-bryant"
              technologies={["Next.js", "Chart.js", "Tailwind CSS", "JavaScript"]}
            />

            <ProjectCard
              title="Portfolio Personal"
              description="Sitio web personal que muestra mis proyectos, habilidades y experiencia como desarrollador frontend."
              image="/placeholder.svg?height=300&width=500&text=Portfolio"
              demoUrl="https://pohmonsey22.github.io/portfolio/"
              repoUrl="https://github.com/POHMONSEY22/portfolio"
              technologies={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-10 pb-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Contacto</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Interesado en trabajar juntos? Contáctame a través de cualquiera de estos medios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
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
                    <Button variant="outline" size="sm">
                      Enviar email
                    </Button>
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
                    <Button variant="outline" size="sm">
                      Ver perfil
                    </Button>
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
                  <p className="text-muted-foreground">POHMONSEY22</p>
                </CardContent>
                <CardFooter>
                  <Link href="https://linkedin.com/in/pohmonsey22" target="_blank">
                    <Button variant="outline" size="sm">
                      Conectar
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} POHMONSEY22. Todos los derechos reservados.
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
              <Link href="https://linkedin.com" target="_blank">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
