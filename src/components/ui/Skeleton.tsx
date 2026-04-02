import { cn } from '../../lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('h-4 w-full rounded-md bg-white/5 shimmer', className)} />
}
