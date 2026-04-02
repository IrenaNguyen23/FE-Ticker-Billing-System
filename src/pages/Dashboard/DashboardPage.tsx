import { Link } from 'react-router-dom'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { WalletCard } from '../../components/wallet/WalletCard'
import { ActiveTripCard } from '../../components/trip/ActiveTripCard'
import { TripCard } from '../../components/trip/TripCard'
import { SpendingChart } from '../../components/chart/SpendingChart'
import { useWalletStore } from '../../store/wallet.store'
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
    from: { id: 's1', name: 'Central Station', code: 'CEN', line: 'Blue', zone: 'A' },
    to: { id: 's3', name: 'Riverside', code: 'RIV', line: 'Green', zone: 'B' },
    startedAt: new Date().toISOString(),
    status: 'COMPLETED',
    fare: 18000,
  },
]

export default function DashboardPage() {
  const balance = useWalletStore((s) => s.balance)

  const activeTrip: Trip | null = {
    id: 'active',
    from: { id: 's1', name: 'Central Station', code: 'CEN', line: 'Blue', zone: 'A' },
    startedAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    status: 'ACTIVE',
  }

  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl space-y-6">
        {activeTrip && <ActiveTripCard trip={activeTrip} />}

        <div className="grid gap-6 lg:grid-cols-2">
          <WalletCard balance={balance || 125000} />
          <Card>
            <div className="mb-4 text-sm font-semibold text-white/80">Quick Actions</div>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="secondary" asChild>
                <Link to="/checkin">Check In</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/trips">Trip History</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/wallet">Top Up</Link>
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Recent Trips</div>
              <Link to="/trips" className="text-xs text-brand-400 hover:text-brand-300">
                View all -{'>'}
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {demoTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </Card>
          <Card>
            <div className="mb-4 text-sm font-semibold">Spending (7 days)</div>
            <SpendingChart />
          </Card>
        </div>
      </div>
    </PageWrapper>
  )
}
