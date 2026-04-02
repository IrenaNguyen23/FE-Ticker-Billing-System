import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface WalletState {
  balance: number
  currency: string
  optimisticDeduct: (amount: number) => void
  setBalance: (balance: number) => void
}

export const useWalletStore = create<WalletState>()(
  immer((set) => ({
    balance: 0,
    currency: 'VND',
    optimisticDeduct: (amount) =>
      set((state) => {
        state.balance = Math.max(0, state.balance - amount)
      }),
    setBalance: (balance) =>
      set((state) => {
        state.balance = balance
      }),
  }))
)
