import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Ticket, Wallet, MapPin } from 'lucide-react'
import { cn } from '../../lib/utils'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/checkin', label: 'Check In', icon: MapPin },
  { to: '/trips', label: 'Trips', icon: Ticket },
  { to: '/wallet', label: 'Wallet', icon: Wallet },
]

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r border-white/5 bg-dark-900 px-4 py-6 md:flex">
      <div className="mb-10 flex items-center gap-2 text-lg font-semibold">
        <span className="h-2 w-2 rounded-full bg-brand-500" />
        MetroTrack
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition hover:text-white',
                  isActive && 'bg-dark-800 text-white'
                )
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
