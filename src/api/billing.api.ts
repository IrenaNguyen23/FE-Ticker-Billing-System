import { api } from '../lib/axios'
import type { BillingRecord } from '../types/billing'

export const billingApi = {
  getHistory: (page = 1) => api.get<BillingRecord[]>(`/billing/history?page=${page}`),
}
