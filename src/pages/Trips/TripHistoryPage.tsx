import { useState } from 'react'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { TripCard } from '../../components/trip/TripCard'
import type { Trip } from '../../types/trip'

const demoTrips: Trip[] = [
  {
    id: 't1',
    from: { id: 's1', name: 'Central Station', code: 'CEN', line: 'Blue', zone: 'A' },
    to: { id: 's2', name: 'Parkside', code: 'PRK', line: 'Blue', zone: 'B' },
    startedAt: new Date().toISOString(),
    status: 'COMPLETED',
    fare: 25000,
  },
  {
    id: 't2',
    from: { id: 's3', name: 'Riverside', code: 'RIV', line: 'Green', zone: 'B' },
    to: { id: 's4', name: 'Hilltown', code: 'HLT', line: 'Red', zone: 'C' },
    startedAt: new Date().toISOString(),
    status: 'FAILED',
    fare: 0,
  },
]

export default function TripHistoryPage() {
  const [filter, setFilter] = useState<'ALL' | 'COMPLETED' | 'FAILED'>('ALL')

  const trips =
    filter === 'ALL' ? demoTrips : demoTrips.filter((trip) => trip.status === filter)

  return (
    <PageWrapper>
      <div className="mx-auto max-w-5xl space-y-6">
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-lg font-semibold">Trip History</div>
            <div className="flex gap-2">
              {(['ALL', 'COMPLETED', 'FAILED'] as const).map((item) => (
                <Button
                  key={item}
                  size="sm"
                  variant={filter === item ? 'primary' : 'secondary'}
                  onClick={() => setFilter(item)}
                >
                  {item.toLowerCase()}
                </Button>
              ))}
            </div>
          </div>
        </Card>
        <div className="space-y-4">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
