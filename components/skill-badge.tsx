"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Badge
        variant="outline"
        className="bg-primary/5 hover:bg-primary/10 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors whitespace-nowrap"
      >
        {name}
      </Badge>
    </motion.div>
  )
}
