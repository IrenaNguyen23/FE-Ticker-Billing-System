import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { User } from '../types/auth'

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  setAuth: (user: User, token: string) => void
  setUser: (user: User) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  immer((set) => ({
    user: null,
    accessToken: null,
    isAuthenticated: false,
    setAuth: (user, token) =>
      set((state) => {
        state.user = user
        state.accessToken = token
        state.isAuthenticated = true
      }),
    setUser: (user) =>
      set((state) => {
        state.user = user
        state.isAuthenticated = true
      }),
    clearAuth: () =>
      set((state) => {
        state.user = null
        state.accessToken = null
        state.isAuthenticated = false
      }),
  }))
)
