import type { ReactNode } from 'react'
import { BottomNav } from './BottomNav'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <TopBar />
          <main className="flex-1 px-4 py-6 pb-24 md:px-8 md:pb-6">{children}</main>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
