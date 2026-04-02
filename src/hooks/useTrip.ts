import { useMutation, useQuery } from '@tanstack/react-query'
import { tripApi } from '../api/trip.api'
import { queryKeys } from './useQueryKeys'

export function useTrip() {
  const activeTripQuery = useQuery({
    queryKey: queryKeys.activeTrip,
    queryFn: tripApi.getActiveTrip,
    refetchInterval: 5000,
  })

  const checkinMutation = useMutation({
    mutationFn: tripApi.checkin,
  })

  const checkoutMutation = useMutation({
    mutationFn: tripApi.checkout,
  })

  return {
    activeTripQuery,
    checkinMutation,
    checkoutMutation,
  }
}
