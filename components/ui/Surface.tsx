"use client"

import { motion } from "framer-motion"

type SurfaceProps = {
  children: React.ReactNode
  className?: string
  interactive?: boolean
}

const baseClass = `
  rounded-2xl
  border border-[var(--border)]
  bg-[var(--surface)]
  backdrop-blur-md
  shadow-[0_1px_4px_rgba(0,0,0,0.05),0_6px_24px_rgba(0,0,0,0.04)]
  dark:shadow-[0_1px_4px_rgba(0,0,0,0.35),0_6px_24px_rgba(0,0,0,0.28)]
`

export default function Surface({ children, className = "", interactive = false }: SurfaceProps) {
  if (interactive) {
    return (
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow:
            "0 4px 12px rgba(10,17,28,0.08), 0 24px 60px rgba(10,17,28,0.18)",
          borderColor: "var(--accent)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className={`group/card relative overflow-hidden ${baseClass} ${className}`}
        style={{ willChange: "transform" }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-[var(--accent)]/20 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        />
        <div className="relative">{children}</div>
      </motion.div>
    )
  }

  return (
    <div
      className={`${baseClass} transition duration-300 hover:border-[var(--border-strong)] ${className}`}
    >
      {children}
    </div>
  )
}
