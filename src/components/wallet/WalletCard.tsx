import CountUp from 'react-countup'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Skeleton } from '../ui/Skeleton'
import { formatVND } from '../../lib/utils'

interface WalletCardProps {
  balance: number
  isLoading?: boolean
  onTopUp?: () => void
}

export function WalletCard({ balance, isLoading, onTopUp }: WalletCardProps) {
  return (
    <Card className="relative overflow-hidden" glow="green">
      <div className="space-y-4">
        <div className="text-xs uppercase text-white/50">Available Balance</div>
        {isLoading ? (
          <Skeleton className="h-10 w-1/2" />
        ) : (
          <div className="text-3xl font-semibold text-white">
            <CountUp end={balance} duration={1.4} formattingFn={formatVND} />
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/50">Last transaction - 10 min ago</div>
          <Button size="sm" onClick={onTopUp}>
            Top Up
          </Button>
        </div>
      </div>
    </Card>
  )
}
