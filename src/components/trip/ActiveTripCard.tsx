import { useEffect, useMemo, useState } from 'react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import type { Trip } from '../../types/trip'
import { formatTime } from '../../lib/utils'

interface ActiveTripCardProps {
  trip: Trip
  onCheckout?: () => void
}

export function ActiveTripCard({ trip, onCheckout }: ActiveTripCardProps) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const start = new Date(trip.startedAt).getTime()
    const id = setInterval(() => {
      setElapsed(Math.max(0, Math.floor((Date.now() - start) / 1000)))
    }, 1000)
    return () => clearInterval(id)
  }, [trip.startedAt])

  const formatted = useMemo(() => {
    const hours = Math.floor(elapsed / 3600)
    const mins = Math.floor((elapsed % 3600) / 60)
    const secs = elapsed % 60
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(
      secs
    ).padStart(2, '0')}`
  }, [elapsed])

  return (
    <Card className="relative overflow-hidden border border-brand-500/40" glow="blue">
      <div className="absolute inset-0 border border-brand-500/30 animate-border-pulse rounded-card" />
      <div className="relative space-y-4">
        <div className="text-xs uppercase text-brand-400">Currently travelling</div>
        <div className="text-lg font-semibold">
          {trip.from?.name} -> {trip.to?.name ?? 'In Transit'}
        </div>
        <div className="text-sm text-white/60">
          Since {formatTime(trip.startedAt)} - Duration {formatted}
        </div>
        <Button size="lg" className="w-full" onClick={onCheckout}>
          Check Out
        </Button>
      </div>
    </Card>
  )
}
