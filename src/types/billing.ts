export interface Fare {
  amount: number
  currency: string
  distanceKm?: number
}

export interface BillingRecord {
  id: string
  tripId: string
  fare: Fare
  status: 'PAID' | 'FAILED'
  createdAt: string
}
