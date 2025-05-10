"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Loader2 } from "lucide-react"
import Link from "next/link"

interface BrowserPreviewProps {
  url: string
  title: string
}

export default function BrowserPreview({ url, title }: BrowserPreviewProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Simulamos la carga de la vista previa
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="rounded-lg overflow-hidden border border-border bg-background shadow-md">
      {/* Barra de navegación del navegador */}
      <div className="bg-muted p-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 bg-background/80 text-xs px-3 py-1 rounded-md truncate flex items-center">
          <span className="text-muted-foreground">{url}</span>
        </div>
      </div>

      {/* Contenido del navegador */}
      <div className="relative aspect-video bg-background">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <p className="text-muted-foreground text-sm">No se pudo cargar la vista previa</p>
          </div>
        ) : (
          <Link href={url} target="_blank" className="block w-full h-full relative group">
            <img
              src={`https://image.thum.io/get/width/800/crop/600/viewportWidth/1200/png/${url}`}
              alt={`Vista previa de ${title}`}
              className="w-full h-full object-cover"
              onError={() => setError(true)}
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-background text-foreground px-4 py-2 rounded-md flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visitar sitio</span>
              </motion.div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
