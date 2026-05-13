import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -48px 0px' }}
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: reduceMotion
            ? { delay: delayMs / 1000, duration: 0.55, ease: [0.16, 1, 0.3, 1] }
            : { ...spring, delay: delayMs / 1000 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
