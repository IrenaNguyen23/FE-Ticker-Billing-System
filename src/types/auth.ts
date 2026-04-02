export interface User {
  id: string
  fullName: string
  email: string
  phone?: string
  avatarUrl?: string
}

export interface AuthResponse {
  user: User
  accessToken: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  fullName: string
  email: string
  phone: string
  password: string
}
