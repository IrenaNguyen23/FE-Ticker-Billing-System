export interface Station {
  id: string
  name: string
  code: string
  line: string
  zone: string
}

export interface Trip {
  id: string
  from: Station
  to?: Station
  startedAt: string
  endedAt?: string
  status: 'ACTIVE' | 'COMPLETED' | 'FAILED'
  fare?: number
  durationMinutes?: number
}

export interface CheckinRequest {
  stationId: string
}

export interface CheckoutRequest {
  stationId: string
}
