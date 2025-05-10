"use client"

import { useEffect } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { JSX } from "react"

interface AnimatedTextProps {
  text: string
  el?: keyof JSX.IntrinsicElements
  className?: string
  once?: boolean
  repeatDelay?: number
  animation?: {
    hidden: Variant
    visible: Variant
  }
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export default function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) {
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: once })

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const show = async () => {
      if (inView) {
        await controls.start("visible")
        if (repeatDelay) {
          timeout = setTimeout(async () => {
            await controls.start("hidden")
            controls.start("visible")
          }, repeatDelay)
        }
      } else {
        controls.start("hidden")
      }
    }

    show()

    return () => clearTimeout(timeout)
  }, [inView, controls, repeatDelay])

  const words = text.split(" ")

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
          hidden: {},
        }}
        aria-hidden
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block whitespace-nowrap">
            {word.split("").map((char, j) => (
              <motion.span key={`${char}-${j}`} className="inline-block" variants={animation}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
