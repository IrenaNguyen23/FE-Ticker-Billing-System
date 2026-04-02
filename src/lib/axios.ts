import axios from 'axios'
import { API_BASE_URL } from './constants'
import { useAuthStore } from '../store/auth.store'

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res.data?.data ?? res.data,
  async (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().clearAuth()
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(mapApiError(error))
  }
)

function mapApiError(error: any) {
  return {
    message: error?.response?.data?.message || error.message || 'Unexpected error',
    status: error?.response?.status,
  }
}
