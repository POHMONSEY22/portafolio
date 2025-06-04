"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"

interface TabletOptimizedGridProps {
  children: ReactNode
  mobileColumns?: number
  tabletColumns?: number
  desktopColumns?: number
  className?: string
}

export default function TabletOptimizedGrid({
  children,
  mobileColumns = 1,
  tabletColumns = 2,
  desktopColumns = 3,
  className = "",
}: TabletOptimizedGridProps) {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop")

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      if (width <= 640) {
        setDeviceType("mobile")
      } else if (width <= 1024) {
        setDeviceType("tablet")
      } else {
        setDeviceType("desktop")
      }
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  const getGridClasses = () => {
    const baseClasses = "grid gap-4 sm:gap-6 md:gap-8"

    switch (deviceType) {
      case "mobile":
        return `${baseClasses} grid-cols-${mobileColumns}`
      case "tablet":
        return `${baseClasses} grid-cols-${tabletColumns} md:grid-cols-${tabletColumns}`
      case "desktop":
        return `${baseClasses} grid-cols-1 sm:grid-cols-${tabletColumns} lg:grid-cols-${desktopColumns}`
      default:
        return `${baseClasses} grid-cols-1 sm:grid-cols-${tabletColumns} lg:grid-cols-${desktopColumns}`
    }
  }

  return <div className={`${getGridClasses()} ${className}`}>{children}</div>
}
