import { Link } from 'react-router-dom'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { TripTimeline } from '../../components/trip/TripTimeline'
import { formatVND } from '../../lib/utils'
import type { Trip } from '../../types/trip'

const demoTrip: Trip = {
  id: 't1',
  from: { id: 's1', name: 'Central Station', code: 'CEN', line: 'Blue', zone: 'A' },
  to: { id: 's2', name: 'Parkside', code: 'PRK', line: 'Blue', zone: 'B' },
  startedAt: new Date().toISOString(),
  endedAt: new Date().toISOString(),
  status: 'COMPLETED',
  fare: 25000,
  durationMinutes: 30,
}

export default function TripDetailPage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/trips" className="text-sm text-white/60 hover:text-white">
            <- Trip History
          </Link>
          <Badge variant="success">Completed</Badge>
        </div>

        <TripTimeline trip={demoTrip} />

        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase text-white/40">Fare</div>
              <div className="text-2xl font-semibold text-neon-green">
                {formatVND(demoTrip.fare || 0)}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-white/40">Duration</div>
              <div className="text-lg font-semibold">{demoTrip.durationMinutes} minutes</div>
            </div>
            <div>
              <div className="text-xs uppercase text-white/40">From</div>
              <div className="text-sm">{demoTrip.from.name}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-white/40">To</div>
              <div className="text-sm">{demoTrip.to?.name}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-white/40">Trip ID</div>
              <div className="font-mono text-xs">{demoTrip.id}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-white/40">Payment</div>
              <Badge variant="success">Completed</Badge>
            </div>
          </div>
        </Card>

        <ButtonGhost label="Report Issue" />
      </div>
    </PageWrapper>
  )
}

function ButtonGhost({ label }: { label: string }) {
  return (
    <button className="w-full rounded-pill border border-white/10 bg-transparent py-3 text-sm text-white/60 hover:border-brand-500 hover:text-white">
      {label}
    </button>
  )
}
