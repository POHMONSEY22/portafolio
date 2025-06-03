"use client"

import { useState, useEffect } from "react"

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx

      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", updateScrollProgress)
    updateScrollProgress() // Calcular progreso inicial

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return scrollProgress
}
