import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CV - Juan Pablo Gallo Arboleda | Técnico en Programación de Software",
  description:
    "Hoja de vida digital de Juan Pablo Gallo Arboleda, Técnico en Programación de Software graduado en 2023, con experiencia en desarrollo web y proyectos colaborativos.",
  keywords: [
    "CV",
    "hoja de vida",
    "Juan Pablo Gallo",
    "técnico programación",
    "desarrollador",
    "software",
    "Medellín",
    "Colombia",
  ],
}

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
