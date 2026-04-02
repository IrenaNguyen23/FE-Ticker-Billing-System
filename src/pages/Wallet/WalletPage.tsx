import { useState } from 'react'
import { PageWrapper } from '../../components/ui/PageWrapper'
import { Card } from '../../components/ui/Card'
import { WalletCard } from '../../components/wallet/WalletCard'
import { TopUpModal } from '../../components/wallet/TopUpModal'
import { TransactionItem } from '../../components/wallet/TransactionItem'
import type { Transaction } from '../../types/payment'

const transactions: Transaction[] = [
  {
    id: 'tx1',
    type: 'DEBIT',
    amount: 25000,
    description: 'Trip - Central Station -> Parkside',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'tx2',
    type: 'CREDIT',
    amount: 100000,
    description: 'Top Up',
    createdAt: new Date().toISOString(),
  },
]

export default function WalletPage() {
  const [open, setOpen] = useState(false)

  return (
    <PageWrapper>
      <div className="mx-auto max-w-4xl space-y-6">
        <WalletCard balance={125000} onTopUp={() => setOpen(true)} />
        <Card>
          <div className="mb-4 text-sm font-semibold">Transaction History</div>
          <div className="space-y-2">
            {transactions.map((tx) => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}
          </div>
        </Card>
      </div>
      <TopUpModal open={open} onOpenChange={setOpen} onConfirm={() => setOpen(false)} />
    </PageWrapper>
  )
}
