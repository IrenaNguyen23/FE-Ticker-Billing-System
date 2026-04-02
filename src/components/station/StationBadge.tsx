import { cn } from '../../lib/utils'

interface StationBadgeProps {
  name: string
  lineColor?: string
  className?: string
}

export function StationBadge({ name, lineColor = '#0ea5e9', className }: StationBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-pill border border-white/10 bg-dark-800 px-3 py-1 text-xs text-white/80',
        className
      )}
    >
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: lineColor }} />
      {name}
    </span>
  )
}
