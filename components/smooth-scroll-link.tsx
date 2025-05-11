"use client"

import type React from "react"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  duration?: number
}

export default function SmoothScrollLink({ href, children, className = "", duration = 800 }: SmoothScrollLinkProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      let startTime: number | null = null

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t) // easeInOutQuad

        window.scrollTo(0, startPosition + distance * ease(progress))

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  // Si estamos en el cliente, renderizamos el enlace con el manejador de eventos
  if (isClient) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    )
  }

  // Si estamos en el servidor, renderizamos un enlace normal
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
