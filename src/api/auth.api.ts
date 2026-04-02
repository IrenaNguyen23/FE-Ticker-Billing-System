import { api } from '../lib/axios'
import type { AuthResponse, LoginRequest, RegisterRequest, User } from '../types/auth'

export const authApi = {
  login: (payload: LoginRequest) => api.post<AuthResponse>('/auth/login', payload),
  register: (payload: RegisterRequest) => api.post<AuthResponse>('/auth/register', payload),
  logout: () => api.post('/auth/logout'),
  me: () => api.get<User>('/auth/me'),
}
