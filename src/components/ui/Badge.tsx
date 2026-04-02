import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-badge px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        variant === 'default' && 'bg-dark-700 text-white/80',
        variant === 'success' && 'bg-success/15 text-success',
        variant === 'warning' && 'bg-warning/15 text-warning',
        variant === 'error' && 'bg-error/15 text-error',
        variant === 'info' && 'bg-info/15 text-info',
        className
      )}
    >
      {children}
    </span>
  )
}
