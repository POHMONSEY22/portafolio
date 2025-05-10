"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      }}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/40 blur-xl"
      ></motion.div>
      <div className="h-64 w-64 rounded-full border-4 border-background relative overflow-hidden">
        <div className="relative w-full h-full">
          <Image src="/profile.png" alt="Profile" fill className="object-cover" sizes="256px" priority />
        </div>
      </div>
    </motion.div>
  )
}
