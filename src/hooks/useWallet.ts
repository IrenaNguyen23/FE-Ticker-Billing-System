import { useMutation, useQuery } from '@tanstack/react-query'
import { paymentApi } from '../api/payment.api'
import { queryKeys } from './useQueryKeys'

export function useWallet() {
  const balanceQuery = useQuery({
    queryKey: queryKeys.balance,
    queryFn: paymentApi.getBalance,
    refetchOnMount: 'always',
  })

  const transactionsQuery = useQuery({
    queryKey: queryKeys.transactions(1),
    queryFn: () => paymentApi.getTransactions(1),
  })

  const topUpMutation = useMutation({
    mutationFn: paymentApi.topUp,
  })

  return {
    balanceQuery,
    transactionsQuery,
    topUpMutation,
  }
}
