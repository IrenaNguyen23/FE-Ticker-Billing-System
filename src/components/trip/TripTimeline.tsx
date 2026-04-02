import type { Trip } from '../../types/trip'
import { formatTime } from '../../lib/utils'

export function TripTimeline({ trip }: { trip: Trip }) {
  return (
    <div className="relative rounded-card border border-white/10 bg-dark-900 p-6">
      <div className="absolute left-6 top-6 h-[calc(100%-48px)] w-px bg-brand-500" />
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-brand-500" />
          <div>
            <div className="text-sm font-semibold">{trip.from.name}</div>
            <div className="text-xs text-white/50">{formatTime(trip.startedAt, 'PPpp')}</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-neon-blue" />
          <div>
            <div className="text-sm font-semibold">{trip.to?.name ?? 'In Transit'}</div>
            <div className="text-xs text-white/50">
              {trip.endedAt ? formatTime(trip.endedAt, 'PPpp') : 'Not checked out'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
