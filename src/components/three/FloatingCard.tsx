import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

export function FloatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="w-64">
        <div className="text-xs uppercase text-white/40">Last trip</div>
        <div className="mt-2 text-sm font-semibold">Central Station -{'>'} Parkside</div>
        <div className="mt-1 text-xs text-white/50">Fare: 25,000 VND</div>
      </Card>
    </motion.div>
  )
}
