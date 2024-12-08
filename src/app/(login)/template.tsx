'use client'
import { PropsWithChildren } from "react"
import * as motion from "motion/react-client"

export default function Template({ children }: PropsWithChildren) {
  return <motion.div initial={{
    y: -10,
    opacity: 0,
  }} animate={{
    y: 0,
    opacity: 1,
  }} transition={{ ease: 'easeInOut', duration: '0.3' }}>{children}</motion.div>
}