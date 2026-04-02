import { useEffect } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { authApi } from '../api/auth.api'
import { useAuthStore } from '../store/auth.store'
import type { LoginRequest, RegisterRequest } from '../types/auth'
import { queryKeys } from './useQueryKeys'

export function useAuth() {
  const navigate = useNavigate()
  const setAuth = useAuthStore((s) => s.setAuth)
  const setUser = useAuthStore((s) => s.setUser)
  const clearAuth = useAuthStore((s) => s.clearAuth)

  const meQuery = useQuery({
    queryKey: queryKeys.me,
    queryFn: authApi.me,
    retry: false,
  })

  useEffect(() => {
    if (meQuery.data) {
      setUser(meQuery.data)
    }
  }, [meQuery.data, setUser])

  const loginMutation = useMutation({
    mutationFn: (payload: LoginRequest) => authApi.login(payload),
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken)
      navigate('/dashboard')
    },
  })

  const registerMutation = useMutation({
    mutationFn: (payload: RegisterRequest) => authApi.register(payload),
  })

  const logout = async () => {
    await authApi.logout()
    clearAuth()
    navigate('/login')
  }

  return {
    meQuery,
    loginMutation,
    registerMutation,
    logout,
  }
}
