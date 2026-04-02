import { useMemo, useState } from 'react'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { StationSelector } from '../../components/station/StationSelector'
import { ActiveTripCard } from '../../components/trip/ActiveTripCard'
import type { Station, Trip } from '../../types/trip'

const stations: Station[] = [
  { id: 's1', name: 'Central Station', code: 'CEN', line: 'Blue', zone: 'A' },
  { id: 's2', name: 'Parkside', code: 'PRK', line: 'Blue', zone: 'B' },
  { id: 's3', name: 'Riverside', code: 'RIV', line: 'Green', zone: 'B' },
  { id: 's4', name: 'Hilltown', code: 'HLT', line: 'Red', zone: 'C' },
]

export default function CheckinPage() {
  const [activeTrip, setActiveTrip] = useState<Trip | null>(null)
  const [station, setStation] = useState<Station | null>(null)

  const recent = useMemo(() => stations.slice(0, 3), [])

  const handleCheckin = () => {
    if (!station) return
    setActiveTrip({
      id: 'active',
      from: station,
      startedAt: new Date().toISOString(),
      status: 'ACTIVE',
    })
    setStation(null)
  }

  const handleCheckout = () => {
    setActiveTrip(null)
    setStation(null)
  }

  return (
    <PageWrapper>
      <div className="mx-auto max-w-4xl space-y-6">
        {!activeTrip ? (
          <Card>
            <div className="mb-4 text-lg font-semibold">Where are you boarding?</div>
            <StationSelector stations={stations} value={station} onChange={setStation} recent={recent} />
            <Button size="lg" fullWidth className="mt-4" onClick={handleCheckin}>
              Check In
            </Button>
          </Card>
        ) : (
          <div className="space-y-6">
            <ActiveTripCard trip={activeTrip} onCheckout={handleCheckout} />
            <Card>
              <div className="mb-4 text-lg font-semibold">Where are you getting off?</div>
              <StationSelector
                stations={stations.filter((s) => s.id !== activeTrip.from.id)}
                value={station}
                onChange={setStation}
              />
              <Button size="lg" fullWidth className="mt-4" onClick={handleCheckout}>
                Check Out
              </Button>
            </Card>
          </div>
        )}
      </div>
    </PageWrapper>
  )
}
