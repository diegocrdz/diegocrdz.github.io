/**
 * Simple page transition using motion
 */

import { motion } from 'framer-motion'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition