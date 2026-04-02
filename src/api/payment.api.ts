import { api } from '../lib/axios'
import type { TopUpRequest, Transaction, Wallet } from '../types/payment'

export const paymentApi = {
  getBalance: () => api.get<Wallet>('/payments/balance'),
  getTransactions: (page = 1) => api.get<Transaction[]>(`/payments/transactions?page=${page}`),
  topUp: (payload: TopUpRequest) => api.post('/payments/topup', payload),
}
