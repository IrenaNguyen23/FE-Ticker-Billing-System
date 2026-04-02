import type { Transaction } from '../../types/payment'
import { formatTime, formatVND } from '../../lib/utils'
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'

export function TransactionItem({ transaction }: { transaction: Transaction }) {
  const isCredit = transaction.type === 'CREDIT'
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-3">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-dark-800 p-2">
          {isCredit ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
        </div>
        <div>
          <div className="text-sm font-medium">{transaction.description}</div>
          <div className="text-xs text-white/50">{formatTime(transaction.createdAt, 'PP')}</div>
        </div>
      </div>
      <div className={isCredit ? 'text-success' : 'text-error'}>
        {isCredit ? '+' : '-'}
        {formatVND(transaction.amount)}
      </div>
    </div>
  )
}
