export interface Wallet {
  balance: number
  currency: string
}

export interface Transaction {
  id: string
  type: 'DEBIT' | 'CREDIT'
  amount: number
  description: string
  createdAt: string
}

export interface TopUpRequest {
  amount: number
  provider: 'VNPAY' | 'MOMO'
}
