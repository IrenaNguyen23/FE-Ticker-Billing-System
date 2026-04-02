import { useQuery } from '@tanstack/react-query'
import { tripApi } from '../api/trip.api'
import { queryKeys } from './useQueryKeys'

export function useStations() {
  return useQuery({
    queryKey: queryKeys.stations,
    queryFn: tripApi.getStations,
    staleTime: 1000 * 60 * 60,
  })
}
