"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Send, Phone } from "lucide-react"
import Link from "next/link"
import MagneticButton from "./magnetic-button"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Número de WhatsApp (reemplaza con tu número real)
  const whatsappNumber = "573006007960" // Reemplaza con tu número real incluyendo código de país
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Enviar los datos a nuestra API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje")
      }

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
        duration: 5000,
      })

      // Resetear el formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Error al enviar",
        description:
          error instanceof Error ? error.message : "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full h-full bg-background/50 backdrop-blur-sm border border-primary/10 flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl">Envíame un mensaje</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Completa el formulario y me pondré en contacto contigo lo antes posible.
        </CardDescription>
        <div className="mt-4">
          <Link href={whatsappUrl} target="_blank">
            <MagneticButton strength={30} radius={150}>
              <Button
                variant="default"
                className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contactar por WhatsApp
              </Button>
            </MagneticButton>
          </Link>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <CardContent className="space-y-3 flex-grow px-6 pb-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm sm:text-base">
              Nombre
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-sm sm:text-base"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm sm:text-base">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-sm sm:text-base"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="subject" className="text-sm sm:text-base">
              Asunto
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Asunto del mensaje"
              value={formData.subject}
              onChange={handleChange}
              required
              className="text-sm sm:text-base"
            />
          </div>
          <div className="space-y-1.5 flex-grow">
            <Label htmlFor="message" className="text-sm sm:text-base">
              Mensaje
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="resize-none text-sm sm:text-base flex-grow min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter className="pt-4 px-6 pb-6">
          <Button type="submit" className="w-full text-sm sm:text-base" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Enviar mensaje
              </span>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
