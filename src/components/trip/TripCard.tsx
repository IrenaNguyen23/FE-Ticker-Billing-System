import { Card } from '../ui/Card'
import { TripStatusBadge } from './TripStatusBadge'
import type { Trip } from '../../types/trip'
import { formatTime, formatVND } from '../../lib/utils'

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <Card className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm font-semibold">
          {trip.from.name} -> {trip.to?.name ?? 'Unknown'}
        </div>
        <div className="text-xs text-white/50">
          {formatTime(trip.startedAt, 'EEE, dd MMM')} - {formatTime(trip.startedAt)}
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm font-semibold text-neon-green">
          {trip.fare ? formatVND(trip.fare) : 'Pending'}
        </div>
        <TripStatusBadge status={trip.status} />
      </div>
    </Card>
  )
}
