import { cn } from '../../lib/utils'

interface ProgressBarProps {
  value: number
  className?: string
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div className={cn('h-2 w-full rounded-full bg-dark-700', className)}>
      <div
        className="h-2 rounded-full bg-brand-500 transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
