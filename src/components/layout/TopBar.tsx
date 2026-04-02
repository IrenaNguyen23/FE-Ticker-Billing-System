import { Bell, Wallet as WalletIcon } from 'lucide-react'
import { useWalletStore } from '../../store/wallet.store'
import { formatVND } from '../../lib/utils'

export function TopBar() {
  const balance = useWalletStore((s) => s.balance)

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-dark-950/80 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Dashboard</div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-pill border border-dark-600 bg-dark-800 px-4 py-2 text-sm md:flex">
            <WalletIcon size={16} className="text-neon-green" />
            <span className="text-white/80">{formatVND(balance)}</span>
          </div>
          <button className="rounded-full border border-white/10 p-2 text-white/70 hover:text-white">
            <Bell size={18} />
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500 to-neon-blue" />
        </div>
      </div>
    </header>
  )
}
