"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  // Transformaciones para el efecto parallax
  const y1 = useTransform(scrollY, [0, 3000], [0, -300])
  const y2 = useTransform(scrollY, [0, 3000], [0, -150])
  const y3 = useTransform(scrollY, [0, 3000], [0, -450])

  // Opacidad que disminuye al hacer scroll
  const opacity1 = useTransform(scrollY, [0, 1000], [0.5, 0.1])
  const opacity2 = useTransform(scrollY, [0, 1500], [0.4, 0.1])
  const opacity3 = useTransform(scrollY, [0, 2000], [0.3, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="absolute top-[30%] right-[5%] w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        style={{ y: y3, opacity: opacity3 }}
        className="absolute top-[60%] left-[20%] w-80 h-80 rounded-full bg-primary/15 blur-3xl"
      />
    </div>
  )
}
