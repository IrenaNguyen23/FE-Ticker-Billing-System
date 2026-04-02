import { cn } from '../../lib/utils'

export function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <span
      className={cn(
        'inline-block animate-spin rounded-full border-2 border-white/30 border-t-white',
        size === 'sm' && 'h-4 w-4',
        size === 'md' && 'h-5 w-5',
        size === 'lg' && 'h-6 w-6'
      )}
    />
  )
}
