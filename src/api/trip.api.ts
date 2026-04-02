import { api } from '../lib/axios'
import type { CheckinRequest, CheckoutRequest, Station, Trip } from '../types/trip'

export const tripApi = {
  getStations: () => api.get<Station[]>('/stations'),
  getActiveTrip: () => api.get<Trip | null>('/trips/active'),
  getHistory: (page = 1) => api.get<Trip[]>(`/trips/history?page=${page}`),
  getDetail: (id: string) => api.get<Trip>(`/trips/${id}`),
  checkin: (payload: CheckinRequest) => api.post<Trip>('/trips/checkin', payload),
  checkout: (payload: CheckoutRequest) => api.post<Trip>('/trips/checkout', payload),
}
