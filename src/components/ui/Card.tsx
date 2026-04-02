import type { ReactNode } from 'react'
import Tilt from 'react-parallax-tilt'
import { cn } from '../../lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  glow?: 'blue' | 'green' | 'none'
  hoverable?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  className,
  glow = 'none',
  hoverable,
  padding = 'md',
}: CardProps) {
  const card = (
    <div
      className={cn(
        'glass rounded-card shadow-card',
        padding === 'sm' && 'p-4',
        padding === 'md' && 'p-6',
        padding === 'lg' && 'p-8',
        glow === 'blue' && 'shadow-glow-blue',
        glow === 'green' && 'shadow-glow-green',
        className
      )}
    >
      {children}
    </div>
  )

  if (!hoverable) return card

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="w-full">
      {card}
    </Tilt>
  )
}
