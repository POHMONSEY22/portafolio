"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import NameParticles from "./name-particles"

interface InteractiveNameProps {
  className?: string
}

export default function InteractiveName({ className = "" }: InteractiveNameProps) {
  const [isJuanPabloHovered, setIsJuanPabloHovered] = useState(false)
  const [isGalloArboledaHovered, setIsGalloArboledaHovered] = useState(false)

  const juanPabloRef = useRef<HTMLSpanElement>(null)
  const galloArboledaRef = useRef<HTMLSpanElement>(null)

  return (
    <>
      <h1 className={`cursor-pointer select-none ${className}`}>
        <motion.span
          ref={juanPabloRef}
          className="text-foreground inline-block"
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onHoverStart={() => setIsJuanPabloHovered(true)}
          onHoverEnd={() => setIsJuanPabloHovered(false)}
        >
          Juan Pablo
        </motion.span>{" "}
        <motion.span
          ref={galloArboledaRef}
          className="text-primary inline-block"
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
          onHoverStart={() => setIsGalloArboledaHovered(true)}
          onHoverEnd={() => setIsGalloArboledaHovered(false)}
        >
          Gallo Arboleda
        </motion.span>
      </h1>

      {/* Partículas para Juan Pablo */}
      <NameParticles
        isHovered={isJuanPabloHovered}
        elementRef={juanPabloRef}
        particleColor="rgba(255, 255, 255, 0.9)"
        particleCount={12}
      />

      {/* Partículas para Gallo Arboleda */}
      <NameParticles
        isHovered={isGalloArboledaHovered}
        elementRef={galloArboledaRef}
        particleColor="rgba(0, 0, 0, 0.8)"
        particleCount={15}
      />
    </>
  )
}
