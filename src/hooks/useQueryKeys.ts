export const queryKeys = {
  me: ['auth', 'me'] as const,
  stations: ['stations'] as const,
  activeTrip: ['trips', 'active'] as const,
  tripHistory: (page: number) => ['trips', 'history', page] as const,
  tripDetail: (id: string) => ['trips', id] as const,
  balance: ['wallet', 'balance'] as const,
  transactions: (page: number) => ['wallet', 'transactions', page] as const,
}
