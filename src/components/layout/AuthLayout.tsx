import type { ReactNode } from 'react'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-950">
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
        {children}
      </div>
    </div>
  )
}
